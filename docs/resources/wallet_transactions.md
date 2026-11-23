# wallet_transactions

[All resources](../methods.md)

## ReverseAsync

Reverse a wallet transaction

[API reference](https://sell.app/docs/api/wallet/reverse-wallet-transaction) · Effect: **consequential**

```csharp
public virtual async Task<SdkReverseWalletTransactionResponseValue201ApplicationJson> ReverseAsync(string customer, string transaction, WalletTransactionsReverseOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `string` | Yes |
| transaction | `string` | Yes |
| options | `WalletTransactionsReverseOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReverseWalletTransactionResponseValue201ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    ApiKey = Environment.GetEnvironmentVariable("SELLAPP_API_KEY"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = Environment.GetEnvironmentVariable("SELLAPP_STORE"),
});

var result = await client.WalletTransactions.ReverseAsync(
    "42",
    "501",
    new WalletTransactionsReverseOptions
    {
        Note = "Credit went to the wrong customer",
        ExpectedBalanceCents = 2500,
    }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ListAsync

List wallet transactions

[API reference](https://sell.app/docs/api/wallet/retrieve-customer-wallet) · Effect: **read**

```csharp
public virtual async Task<SellAppList<ListWalletTransactionsResponseValue200ApplicationJsonPropertyDataItem>> ListAsync(string customer, WalletTransactionsListOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `string` | Yes |
| options | `WalletTransactionsListOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SellAppList<ListWalletTransactionsResponseValue200ApplicationJsonPropertyDataItem>>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    ApiKey = Environment.GetEnvironmentVariable("SELLAPP_API_KEY"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = Environment.GetEnvironmentVariable("SELLAPP_STORE"),
});

var result = await client.WalletTransactions.ListAsync(
    "42",
    new WalletTransactionsListOptions
    {
    }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

