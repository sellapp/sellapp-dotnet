# support_reply_templates

[All resources](../methods.md)

## ListAsync

List support reply templates

[API reference](https://sell.app/docs/api/support-reply-templates/list-support-reply-templates) · Effect: **read**

```csharp
public virtual async Task<SellAppList<ListSupportReplyTemplatesResponseValue200ApplicationJsonPropertyDataItem>> ListAsync(SupportReplyTemplatesListOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportReplyTemplatesListOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SellAppList<ListSupportReplyTemplatesResponseValue200ApplicationJsonPropertyDataItem>>`.

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

var result = await client.SupportReplyTemplates.ListAsync(new SupportReplyTemplatesListOptions
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

Create a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/create-a-support-reply-template) · Effect: **consequential**

```csharp
public virtual async Task<SdkCreateSupportReplyTemplateResponseValue201ApplicationJson> CreateAsync(SupportReplyTemplatesCreateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportReplyTemplatesCreateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkCreateSupportReplyTemplateResponseValue201ApplicationJson>`.

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

var result = await client.SupportReplyTemplates.CreateAsync(new SupportReplyTemplatesCreateOptions
    {
        Label = "Refund credited",
        Body = "Hi {customer_email}, we credited {refund_amount} to your {store_name} wallet for {product_title}. Your wallet balance is now {wallet_balance}.",
        SupportsAutoRespond = true,
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

Retrieve a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/retrieve-a-support-reply-template) · Effect: **read**

```csharp
public virtual async Task<SdkGetSupportReplyTemplateResponseValue200ApplicationJson> GetAsync(string supportReplyTemplate, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetSupportReplyTemplateResponseValue200ApplicationJson>`.

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

var result = await client.SupportReplyTemplates.GetAsync("32");
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

Update a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/update-a-support-reply-template) · Effect: **consequential**

```csharp
public virtual async Task<SdkReplaceSupportReplyTemplateResponseValue200ApplicationJson> ReplaceAsync(string supportReplyTemplate, SupportReplyTemplatesReplaceOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `string` | Yes |
| options | `SupportReplyTemplatesReplaceOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplaceSupportReplyTemplateResponseValue200ApplicationJson>`.

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

var result = await client.SupportReplyTemplates.ReplaceAsync(
    "31",
    new SupportReplyTemplatesReplaceOptions
    {
        IsActive = false,
        ExpectedUpdatedAt = JsonConvert.DeserializeObject<DateTimeOffset>("\"2026-07-03T09:12:00.000000Z\"")!,
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

Update a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/update-a-support-reply-template) · Effect: **consequential**

```csharp
public virtual async Task<SdkUpdateSupportReplyTemplateResponseValue200ApplicationJson> UpdateAsync(string supportReplyTemplate, SupportReplyTemplatesUpdateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `string` | Yes |
| options | `SupportReplyTemplatesUpdateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateSupportReplyTemplateResponseValue200ApplicationJson>`.

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

var result = await client.SupportReplyTemplates.UpdateAsync(
    "31",
    new SupportReplyTemplatesUpdateOptions
    {
        IsActive = false,
        ExpectedUpdatedAt = JsonConvert.DeserializeObject<DateTimeOffset>("\"2026-07-03T09:12:00.000000Z\"")!,
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

Delete a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/delete-a-support-reply-template) · Effect: **consequential**

```csharp
public virtual async Task DeleteAsync(string supportReplyTemplate, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `string` | Yes |
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

await client.SupportReplyTemplates.DeleteAsync("33");
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

## RenderAsync

Render a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/render-a-support-reply-template) · Effect: **consequential**

```csharp
public virtual async Task<SdkRenderSupportReplyTemplateResponseValue200ApplicationJson> RenderAsync(string supportReplyTemplate, SupportReplyTemplatesRenderOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `string` | Yes |
| options | `SupportReplyTemplatesRenderOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkRenderSupportReplyTemplateResponseValue200ApplicationJson>`.

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

var result = await client.SupportReplyTemplates.RenderAsync(
    "1",
    new SupportReplyTemplatesRenderOptions
    {
        TicketId = 4821,
        InvoiceId = JsonConvert.DeserializeObject<long?>("7001")!,
        RefundAmountCents = JsonConvert.DeserializeObject<long?>("999")!,
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

## ReorderAsync

Reorder support reply templates

[API reference](https://sell.app/docs/api/support-reply-templates/reorder-support-reply-templates) · Effect: **consequential**

```csharp
public virtual async Task<SdkReorderSupportReplyTemplatesResponseValue200ApplicationJson> ReorderAsync(SupportReplyTemplatesReorderOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportReplyTemplatesReorderOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReorderSupportReplyTemplatesResponseValue200ApplicationJson>`.

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

var result = await client.SupportReplyTemplates.ReorderAsync(new SupportReplyTemplatesReorderOptions
    {
        OrderedTemplateIds = JsonConvert.DeserializeObject<List<long>>("[32,31]")!,
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

## GetOptionsAsync

Retrieve support reply template options

[API reference](https://sell.app/docs/api/support-reply-templates/support-reply-template-options) · Effect: **read**

```csharp
public virtual async Task<SdkGetSupportReplyTemplateOptionsResponseValue200ApplicationJson> GetOptionsAsync(SupportReplyTemplatesGetOptionsOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportReplyTemplatesGetOptionsOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetSupportReplyTemplateOptionsResponseValue200ApplicationJson>`.

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

var result = await client.SupportReplyTemplates.GetOptionsAsync(new SupportReplyTemplatesGetOptionsOptions
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

