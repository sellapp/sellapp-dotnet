# affiliates_products

[All resources](../methods.md)

## GetAsync

Retrieve affiliate products

[API reference](https://sell.app/docs/api/affiliates/affiliate-products) · Effect: **read**

```csharp
public virtual async Task<SdkGetAffiliateProductsResponseValue200ApplicationJson> GetAsync(string affiliate, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetAffiliateProductsResponseValue200ApplicationJson>`.

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

var result = await client.AffiliatesProducts.GetAsync("88");
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

Update affiliate products

[API reference](https://sell.app/docs/api/affiliates/affiliate-products) · Effect: **consequential**

```csharp
public virtual async Task<SdkUpdateAffiliateProductsResponseValue200ApplicationJson> UpdateAsync(string affiliate, AffiliatesProductsUpdateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `string` | Yes |
| options | `AffiliatesProductsUpdateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateAffiliateProductsResponseValue200ApplicationJson>`.

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

var result = await client.AffiliatesProducts.UpdateAsync(
    "88",
    new AffiliatesProductsUpdateOptions
    {
        EnableSpecificProducts = true,
        Products = JsonConvert.DeserializeObject<List<UpdateAffiliateProductsRequestApplicationJsonPropertyProductsItem>>("[{\"id\":42,\"enabled\":true,\"commission\":{\"type\":\"percentage\",\"percentage\":\"25\"}},{\"id\":43,\"enabled\":true,\"commission\":{\"type\":\"fixed\",\"amount_usd_cents\":550}}]")!,
        ReplaceProducts = true,
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

