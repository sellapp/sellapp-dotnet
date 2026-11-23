# payment_methods_modifier

[All resources](../methods.md)

## GetAsync

Retrieve a payment method modifier

[API reference](https://sell.app/docs/api/payment-methods/payment-method-modifier) · Effect: **read**

```csharp
public virtual async Task<SdkGetPaymentMethodModifierResponseValue200ApplicationJson> GetAsync(string paymentMethod, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| paymentMethod | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetPaymentMethodModifierResponseValue200ApplicationJson>`.

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

var result = await client.PaymentMethodsModifier.GetAsync("STRIPE");
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

## ReplaceAsync

Update a payment method modifier

[API reference](https://sell.app/docs/api/payment-methods/payment-method-modifier) · Effect: **consequential**

```csharp
public virtual async Task<SdkReplacePaymentMethodModifierResponseValue200ApplicationJson> ReplaceAsync(string paymentMethod, PaymentMethodsModifierReplaceOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| paymentMethod | `string` | Yes |
| options | `PaymentMethodsModifierReplaceOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplacePaymentMethodModifierResponseValue200ApplicationJson>`.

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

var result = await client.PaymentMethodsModifier.ReplaceAsync(
    "STRIPE",
    new PaymentMethodsModifierReplaceOptions
    {
        Kind = JsonConvert.DeserializeObject<SdkReplacePaymentMethodModifierRequestApplicationJsonKind>("\"fee\"")!,
        Percentage = JsonConvert.DeserializeObject<string?>("\"3.00\"")!,
        FixedAmount = JsonConvert.DeserializeObject<string?>("\"0.30\"")!,
        Condition = JsonConvert.DeserializeObject<Condition?>("\"below\"")!,
        Threshold = JsonConvert.DeserializeObject<OneOf.OneOf<double, string>?>("\"20.00\"")!,
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

