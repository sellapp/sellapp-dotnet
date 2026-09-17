# credits

[All resources](../methods.md)

## RecordAsync

Record a credit transaction

[API reference](https://sell.app/docs/api/credits/record-a-credit-transaction) · Effect: **consequential**

```csharp
public virtual async Task<SdkRecordCreditTransactionResponseValue200ApplicationJson> RecordAsync(CreditsRecordOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CreditsRecordOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkRecordCreditTransactionResponseValue200ApplicationJson>`.

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

var result = await client.Credits.RecordAsync(new CreditsRecordOptions
    {
        CustomerId = 125,
        ProductId = 120,
        Kind = JsonConvert.DeserializeObject<SdkRecordCreditTransactionRequestApplicationJsonKind>("\"grant\"")!,
        AmountUnits = 1000,
        IdempotencyKey = "credits-grant-01992a65",
        Reason = JsonConvert.DeserializeObject<string?>("\"Launch cohort allocation\"")!,
    });
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

Documented HTTP responses: 200, 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

