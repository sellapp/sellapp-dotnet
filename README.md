# SellApp .NET SDK

Read your catalog, connect store data to another service, or build your next checkout flow in C#. The SellApp SDK turns async method calls into API requests and responses into objects you can work with.

Let's start with one product's name in your terminal. A small request, a useful answer, and no changes to your store.

Already know your way around? Jump to [configuration](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/usage.md#client-configuration), [usage details](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/usage.md), or the [method index](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/methods.md).

## Install

The SDK requires .NET 8 or later. Install [`SellApp` from NuGet](https://www.nuget.org/packages/SellApp). From an existing project directory:

```sh
dotnet add package SellApp --version 0.1.1
```

For a new console application, create the project first:

```sh
dotnet new console --name SellAppExample --framework net8.0
cd SellAppExample
dotnet add package SellApp --version 0.1.1
```

## Your first request

Your request needs an API key to identify you and a store slug to select your store. Give the key the `listing` ability, which grants access to the catalog. For `example-store.sell.app`, the slug is `example-store`. The [authentication guide](https://sell.app/docs/api/authentication) helps you get both ready.

Set `SELLAPP_API_KEY` and `SELLAPP_STORE` as environment variables: settings passed to your program rather than saved in its source. Keep the key out of Git history. Replace your application's `Program.cs` with the program below. Then replace the fictitious values and run these commands in a Bash-compatible shell:

```sh
export SELLAPP_API_KEY=sk_example_replace_me
export SELLAPP_STORE=example-store
export SELLAPP_API_BASE_URL=https://sell.app/api
dotnet run
```

You should see a product's ID and title. If the store is empty, the program says so; that still means the request worked. The URL points at your real store, so the example asks you to choose it explicitly. `SELLAPP_API_BASE_URL` is an example setting, not an SDK environment setting, and an unconfigured run stops before making a request.

Here's the [onboarding program](https://github.com/sellapp/sellapp-dotnet/blob/main/examples/Onboarding/Program.cs). Start with `FirstRequestAsync`: it waits for the response and reads products from `page.Data`. The remaining methods handle additional pages and failures, ready for when you need them.

```csharp
using SellApp;
using Newtonsoft.Json.Linq;

namespace SellAppExamples;

public static class Onboarding
{
    public static async Task FirstRequestAsync(SellAppClient client, TextWriter output, CancellationToken ct)
    {
        var page = await client.Products.ListAsync(new ProductsListOptions { Limit = 1 }, cancellationToken: ct);
        foreach (var product in page.Data)
            await output.WriteLineAsync($"{product.Id}: {product.Title}");
        if (page.Data.Count == 0)
            await output.WriteLineAsync("No products yet. Your connection is ready.");
    }

    public static async Task PaginateAsync(SellAppClient client, TextWriter output, CancellationToken ct)
    {
        // Bound this example to three pages; ask for each page explicitly.
        for (var number = 1; number <= 3; number++)
        {
            var page = await client.Products.ListAsync(
                new ProductsListOptions { Limit = 15, Page = number }, cancellationToken: ct);
            foreach (var product in page.Data)
                await output.WriteLineAsync($"{product.Id}: {product.Title}");
            if (page.Meta?["current_page"]?.Value<int>() >= page.Meta?["last_page"]?.Value<int>())
                break;
        }
    }

    public static async Task<long> CatalogWorkflowAsync(SellAppClient client, CancellationToken ct)
    {
        // Creates and updates real catalog data when used outside the fixture tests.
        var created = await client.Products.CreateAsync(new ProductsCreateOptions {
            Title = "Design kit", Description = "Templates for your next project.", Visibility = new CatalogVisibility("HIDDEN")
        }, cancellationToken: ct);
        var product = await client.Products.GetAsync(created.Data.Id.ToString(), cancellationToken: ct);
        var updated = await client.Products.UpdateAsync(product.Data.Id.ToString(), new ProductsUpdateOptions {
            Title = "Design kit revised"
        }, cancellationToken: ct);
        return updated.Data.Id;
    }

    public static async Task<long> CheckoutAsync(SellAppClient client, string orderId, CancellationToken ct)
    {
        // Starts a real payment-provider checkout. Inspect current order state before retrying.
        var order = await client.Orders.GetAsync(orderId, cancellationToken: ct);
        var checkout = await client.Orders.CreateCheckoutAsync(order.Data.Id.ToString(), new OrdersCreateCheckoutOptions {}, cancellationToken: ct);
        return checkout.Data.Id;
    }

    public static async Task<long> UploadAsync(SellAppClient client, string productId, string variantId, byte[] file, CancellationToken ct)
    {
        var uploaded = await client.VariantDeliverableFiles.UploadAsync(productId, variantId, new VariantDeliverableFilesUploadOptions { File = file }, cancellationToken: ct);
        var saved = await client.VariantDeliverableFiles.GetAsync(productId, variantId, uploaded.Data.Id.ToString(), cancellationToken: ct);
        return saved.Data.Id;
    }

    public static string DescribeError(Exception error) => error switch
    {
        AuthenticationException e => $"Check your API key and store: {e.Message}",
        ApiException e => $"API status {e.Status}: {e.Message} (request {e.RequestId ?? "unavailable"})",
        SellAppTimeoutException e => $"Request timed out: {e.Message}",
        OperationCanceledException => "Request canceled.",
        _ => $"Request failed: {error.Message}",
    };

    public static async Task<int> Main(string[] args)
    {
        try
        {
            string Required(string name) => Environment.GetEnvironmentVariable(name) is { Length: > 0 } value
                ? value : throw new InvalidOperationException($"Set {name} before running this example.");
            using var client = new SellAppClient(new SellAppOptions
            {
                ApiKey = Required("SELLAPP_API_KEY"),
                Store = Required("SELLAPP_STORE"),
                BaseUrl = Required("SELLAPP_API_BASE_URL"),
                MaxRetries = 0,
            });
            using var cancellation = new CancellationTokenSource(TimeSpan.FromSeconds(30));
            if (args.Contains("pagination"))
                await PaginateAsync(client, Console.Out, cancellation.Token);
            else
                await FirstRequestAsync(client, Console.Out, cancellation.Token);
            return 0;
        }
        catch (Exception exception)
        {
            Console.Error.WriteLine(DescribeError(exception));
            return 1;
        }
    }
}
```

## Account access and first-store setup

Create a user-owned key in [API keys](https://sell.app/user/api-tokens), even
before you have a store. Enable `account:read` for identity, store discovery and
permission inspection, and `stores:create` separately for store creation.
Identity, discovery, store detail by ID and creation omit `X-STORE`; permission
inspection and business requests select a store explicitly.

An unrestricted key covers current and future accessible stores. A selected-store
key covers only its fixed list; an empty list covers none. Membership and role
changes still apply. Selected-store keys cannot create stores. Existing keys do
not gain abilities automatically; `*` satisfies the new abilities while retaining
membership, role and restriction checks.

The [account guide](https://sell.app/docs/api/authentication#discover-your-account-before-selecting-a-store)
shows first-store creation, required idempotency keys, and bounded reads across
several stores with partial failures. Creation returns an ID and slug; use the
slug for subsequent product requests. Find your language's methods in the
[resource reference](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/methods.md). CLI and MCP connections retain browser OAuth.

## If the request fails

| Result | Next step |
| --- | --- |
| Empty product list | The read succeeded. Create a product when you are ready. |
| 401 | Check the selected credential and whether it has expired or been revoked. |
| 403 | Check the key's listing ability, selected-store restrictions and the account's current store permissions. Official CLI OAuth also requires its active grant. |
| 400 with a missing-store message | Set SELLAPP_STORE to an authorized store slug. |
| 429 | Follow Retry-After and the SDK's documented retry behavior. |

Keep the request ID when reporting an API failure. Never include credentials.

## Three useful next actions

1. [Create and edit a product](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/resources/products.md): exact signatures and complete examples.
2. [Read orders or create a checkout](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/resources/orders.md): inspect permissions and effects before changing a purchase.
3. [Read more than one page](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/usage.md): pagination, request controls, errors, and retry behavior.

## Reference and examples

- [Resource reference](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/methods.md)
- [Runnable examples](https://github.com/sellapp/sellapp-dotnet/blob/main/examples/README.md)
- [API documentation](https://sell.app/docs/api)

## Support and releases

Find available packages and installation instructions in the [SDK guide](https://sell.app/docs/api/sdks).
[Report an SDK issue](https://github.com/sellapp/sellapp-dotnet/issues).
Include the SDK version, runtime version, and a redacted reproduction.
Licensed under [MIT](https://github.com/sellapp/sellapp-dotnet/blob/main/LICENSE.txt); see [third-party notices](https://github.com/sellapp/sellapp-dotnet/blob/main/NOTICE.txt).
