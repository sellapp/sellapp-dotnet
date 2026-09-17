# wallet_topups

[All resources](../methods.md)

## CreateAsync

Create a wallet top-up payment link

[API reference](https://sell.app/docs/api/wallet/create-wallet-top-up) · Effect: **consequential**

```csharp
public virtual async Task<SdkCreateWalletTopUpResponseValue201ApplicationJson> CreateAsync(string customer, WalletTopupsCreateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `string` | Yes |
| options | `WalletTopupsCreateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkCreateWalletTopUpResponseValue201ApplicationJson>`.

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

var result = await client.WalletTopups.CreateAsync(
    "42",
    new WalletTopupsCreateOptions
    {
        AmountCents = 2500,
        PaymentMethod = JsonConvert.DeserializeObject<SdkCreateWalletTopUpRequestApplicationJsonPaymentMethod>("\"STRIPE\"")!,
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
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

