# product_variants_community_access

[All resources](../methods.md)

## ReplaceAsync

Replace variant community access

[API reference](https://sell.app/docs/api/product-variants/replace-variant-community-access) · Effect: **write**

```csharp
public virtual async Task<SdkReplaceVariantCommunityAccessResponseValue200ApplicationJson> ReplaceAsync(string product, string variant, ProductVariantsCommunityAccessReplaceOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `string` | Yes |
| options | `ProductVariantsCommunityAccessReplaceOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplaceVariantCommunityAccessResponseValue200ApplicationJson>`.

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

var result = await client.ProductVariantsCommunityAccess.ReplaceAsync(
    "1",
    "2",
    new ProductVariantsCommunityAccessReplaceOptions
    {
        Community = JsonConvert.DeserializeObject<ReplaceVariantCommunityAccessRequestApplicationJsonPropertyCommunity>("{\"platform\":\"discord\",\"server_id\":\"1187040134912155648\",\"role_ids\":[\"1187040299781210112\"],\"required\":true,\"remove_on_expire\":true}")!,
        ExpectedUpdatedAt = JsonConvert.DeserializeObject<DateTimeOffset?>("\"2024-01-10T18:47:22.000000Z\"")!,
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

