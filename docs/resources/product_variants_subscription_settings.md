# product_variants_subscription_settings

[All resources](../methods.md)

## GetAsync

Retrieve variant subscription settings

[API reference](https://sell.app/docs/api/product-variants/variant-subscription-settings) · Effect: **read**

```csharp
public virtual async Task<SdkGetVariantSubscriptionSettingsResponseValue200ApplicationJson> GetAsync(string product, string variant, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetVariantSubscriptionSettingsResponseValue200ApplicationJson>`.

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

var result = await client.ProductVariantsSubscriptionSettings.GetAsync(
    "1",
    "4"
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

## UpdateAsync

Update variant subscription settings

[API reference](https://sell.app/docs/api/product-variants/variant-subscription-settings) · Effect: **write**

```csharp
public virtual async Task<SdkUpdateVariantSubscriptionSettingsResponseValue200ApplicationJson> UpdateAsync(string product, string variant, ProductVariantsSubscriptionSettingsUpdateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `string` | Yes |
| options | `ProductVariantsSubscriptionSettingsUpdateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateVariantSubscriptionSettingsResponseValue200ApplicationJson>`.

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

var result = await client.ProductVariantsSubscriptionSettings.UpdateAsync(
    "1",
    "4",
    new ProductVariantsSubscriptionSettingsUpdateOptions
    {
        PausePolicy = JsonConvert.DeserializeObject<UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyPausePolicy>("{\"max_pause_days\":30}")!,
        RenewalPolicy = JsonConvert.DeserializeObject<UpdateVariantSubscriptionSettingsRequestApplicationJsonPropertyRenewalPolicy>("{\"redeliver_on_renewal\":false}")!,
        ExpectedState = JsonConvert.DeserializeObject<string?>("\"3f9a1c0e7b2d4a6f8e1c5b9d0a7f3e2c4b6d8a0f1e3c5a7b9d2f4e6a8c0b1d3e\"")!,
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

