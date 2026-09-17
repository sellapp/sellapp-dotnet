# product_variants_pricing

[All resources](../methods.md)

## ReplaceAsync

Replace product variant pricing

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```csharp
public virtual async Task<SdkReplaceProductVariantPricingResponseValue200ApplicationJson> ReplaceAsync(string product, string variant, ProductVariantsPricingReplaceOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `string` | Yes |
| options | `ProductVariantsPricingReplaceOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplaceProductVariantPricingResponseValue200ApplicationJson>`.

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

var result = await client.ProductVariantsPricing.ReplaceAsync(
    "120",
    "4321",
    new ProductVariantsPricingReplaceOptions
    {
        Pricing = JsonConvert.DeserializeObject<ReplaceProductVariantPricingRequestApplicationJsonPropertyPricing>("{\"type\":\"SUBSCRIPTION\",\"humble\":false,\"price\":{\"price\":1999,\"currency\":\"USD\"},\"frequency\":{\"value\":1,\"interval\":\"MONTH\"}}")!,
        PaymentMethods = JsonConvert.DeserializeObject<List<SdkReplaceProductVariantPricingRequestApplicationJsonPaymentMethods>>("[\"STRIPE\"]")!,
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

## UpdateAsync

Partially update product variant pricing

[API reference](https://sell.app/docs/api/product-variants/update-product-variant-pricing) · Effect: **write**

```csharp
public virtual async Task<SdkUpdateProductVariantPricingResponseValue200ApplicationJson> UpdateAsync(string product, string variant, ProductVariantsPricingUpdateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `string` | Yes |
| options | `ProductVariantsPricingUpdateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateProductVariantPricingResponseValue200ApplicationJson>`.

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

var result = await client.ProductVariantsPricing.UpdateAsync(
    "120",
    "4321",
    new ProductVariantsPricingUpdateOptions
    {
        Pricing = JsonConvert.DeserializeObject<UpdateProductVariantPricingRequestApplicationJsonPropertyPricing>("{\"price\":{\"price\":2499,\"currency\":\"USD\"}}")!,
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

