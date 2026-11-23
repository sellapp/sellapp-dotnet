# affiliates_coupon

[All resources](../methods.md)

## GetAsync

Retrieve an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **read**

```csharp
public virtual async Task<SdkGetAffiliateCouponResponseValue200ApplicationJson> GetAsync(string affiliate, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetAffiliateCouponResponseValue200ApplicationJson>`.

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

var result = await client.AffiliatesCoupon.GetAsync("88");
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

## SaveAsync

Save an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **consequential**

```csharp
public virtual async Task<SdkSaveAffiliateCouponResponseValue200ApplicationJson> SaveAsync(string affiliate, AffiliatesCouponSaveOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `string` | Yes |
| options | `AffiliatesCouponSaveOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkSaveAffiliateCouponResponseValue200ApplicationJson>`.

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

var result = await client.AffiliatesCoupon.SaveAsync(
    "88",
    new AffiliatesCouponSaveOptions
    {
        Code = "ALEX15",
        Type = JsonConvert.DeserializeObject<SdkSaveAffiliateCouponRequestApplicationJsonType>("\"PERCENTAGE\"")!,
        Discount = JsonConvert.DeserializeObject<OneOf.OneOf<double, string>>("\"15\"")!,
        StoreWide = true,
        MaximumDiscountAmount = JsonConvert.DeserializeObject<string?>("\"20\"")!,
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

## DisableAsync

Disable an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **consequential**

```csharp
public virtual async Task DisableAsync(string affiliate, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task`.

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

await client.AffiliatesCoupon.DisableAsync("88");
Console.WriteLine("Request completed.");
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

