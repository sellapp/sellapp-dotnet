# support_reasons

[All resources](../methods.md)

## ListAsync

List support reasons

[API reference](https://sell.app/docs/api/support-reasons/list-support-reasons) · Effect: **read**

```csharp
public virtual async Task<SellAppList<ListSupportReasonsResponseValue200ApplicationJsonPropertyDataItem>> ListAsync(SupportReasonsListOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportReasonsListOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SellAppList<ListSupportReasonsResponseValue200ApplicationJsonPropertyDataItem>>`.

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

var result = await client.SupportReasons.ListAsync(new SupportReasonsListOptions
    {
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## CreateAsync

Create a support reason

[API reference](https://sell.app/docs/api/support-reasons/create-a-support-reason) · Effect: **consequential**

```csharp
public virtual async Task<SdkCreateSupportReasonResponseValue201ApplicationJson> CreateAsync(SupportReasonsCreateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportReasonsCreateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkCreateSupportReasonResponseValue201ApplicationJson>`.

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

var result = await client.SupportReasons.CreateAsync(new SupportReasonsCreateOptions
    {
        Label = "Download link expired",
        Description = JsonConvert.DeserializeObject<string?>("\"The download link in the order email no longer works.\"")!,
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

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetAsync

Retrieve a support reason

[API reference](https://sell.app/docs/api/support-reasons/retrieve-a-support-reason) · Effect: **read**

```csharp
public virtual async Task<SdkGetSupportReasonResponseValue200ApplicationJson> GetAsync(string supportReason, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetSupportReasonResponseValue200ApplicationJson>`.

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

var result = await client.SupportReasons.GetAsync("14");
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

Update a support reason

[API reference](https://sell.app/docs/api/support-reasons/update-a-support-reason) · Effect: **consequential**

```csharp
public virtual async Task<SdkReplaceSupportReasonResponseValue200ApplicationJson> ReplaceAsync(string supportReason, SupportReasonsReplaceOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `string` | Yes |
| options | `SupportReasonsReplaceOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplaceSupportReasonResponseValue200ApplicationJson>`.

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

var result = await client.SupportReasons.ReplaceAsync(
    "14",
    new SupportReasonsReplaceOptions
    {
        Description = JsonConvert.DeserializeObject<string?>("\"The download link in the order email no longer opens.\"")!,
        ExpectedUpdatedAt = JsonConvert.DeserializeObject<DateTimeOffset>("\"2026-07-03T09:10:00.000000Z\"")!,
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

Update a support reason

[API reference](https://sell.app/docs/api/support-reasons/update-a-support-reason) · Effect: **consequential**

```csharp
public virtual async Task<SdkUpdateSupportReasonResponseValue200ApplicationJson> UpdateAsync(string supportReason, SupportReasonsUpdateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `string` | Yes |
| options | `SupportReasonsUpdateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateSupportReasonResponseValue200ApplicationJson>`.

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

var result = await client.SupportReasons.UpdateAsync(
    "14",
    new SupportReasonsUpdateOptions
    {
        Description = JsonConvert.DeserializeObject<string?>("\"The download link in the order email no longer opens.\"")!,
        ExpectedUpdatedAt = JsonConvert.DeserializeObject<DateTimeOffset>("\"2026-07-03T09:10:00.000000Z\"")!,
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

## DeleteAsync

Delete a support reason

[API reference](https://sell.app/docs/api/support-reasons/delete-a-support-reason) · Effect: **consequential**

```csharp
public virtual async Task DeleteAsync(string supportReason, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `string` | Yes |
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

await client.SupportReasons.DeleteAsync("15");
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

## GetOptionsAsync

Retrieve support reason options

[API reference](https://sell.app/docs/api/support-reasons/support-reason-options) · Effect: **read**

```csharp
public virtual async Task<SdkGetSupportReasonOptionsResponseValue200ApplicationJson> GetOptionsAsync(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetSupportReasonOptionsResponseValue200ApplicationJson>`.

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

var result = await client.SupportReasons.GetOptionsAsync();
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

