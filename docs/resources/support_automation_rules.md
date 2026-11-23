# support_automation_rules

[All resources](../methods.md)

## ListAsync

List support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/list-support-automation-rules) · Effect: **read**

```csharp
public virtual async Task<SellAppList<ListSupportAutomationRulesResponseValue200ApplicationJsonPropertyDataItem>> ListAsync(SupportAutomationRulesListOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportAutomationRulesListOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SellAppList<ListSupportAutomationRulesResponseValue200ApplicationJsonPropertyDataItem>>`.

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

var result = await client.SupportAutomationRules.ListAsync(new SupportAutomationRulesListOptions
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

Create a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/create-a-support-automation-rule) · Effect: **consequential**

```csharp
public virtual async Task<SdkCreateSupportAutomationRuleResponseValue201ApplicationJson> CreateAsync(SupportAutomationRulesCreateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportAutomationRulesCreateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkCreateSupportAutomationRuleResponseValue201ApplicationJson>`.

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

var result = await client.SupportAutomationRules.CreateAsync(new SupportAutomationRulesCreateOptions
    {
        Name = "Expired download links",
        MatchReasonSource = JsonConvert.DeserializeObject<MatchReasonSource?>("\"store\"")!,
        MatchReasonCode = JsonConvert.DeserializeObject<string?>("\"download-link-expired\"")!,
        MatchProductIds = JsonConvert.DeserializeObject<List<long>>("[120]")!,
        MatchMaxOrderTotalCents = JsonConvert.DeserializeObject<long?>("5000")!,
        MaxPriorSupportRefundCount = JsonConvert.DeserializeObject<long?>("0")!,
        ResponseTemplateId = JsonConvert.DeserializeObject<long?>("32")!,
        ActionRefundKind = JsonConvert.DeserializeObject<ActionRefundKind?>("\"partial\"")!,
        ActionRefundPercentBasis = JsonConvert.DeserializeObject<long?>("5000")!,
        ActionRefundCapCents = JsonConvert.DeserializeObject<long?>("1000")!,
        ActionCloseOutcome = JsonConvert.DeserializeObject<ActionCloseOutcome?>("\"refunded_partial\"")!,
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

Retrieve a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/retrieve-a-support-automation-rule) · Effect: **read**

```csharp
public virtual async Task<SdkGetSupportAutomationRuleResponseValue200ApplicationJson> GetAsync(string supportAutomationRule, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetSupportAutomationRuleResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationRules.GetAsync("7");
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

Update a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/update-a-support-automation-rule) · Effect: **consequential**

```csharp
public virtual async Task<SdkReplaceSupportAutomationRuleResponseValue200ApplicationJson> ReplaceAsync(string supportAutomationRule, SupportAutomationRulesReplaceOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `string` | Yes |
| options | `SupportAutomationRulesReplaceOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplaceSupportAutomationRuleResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationRules.ReplaceAsync(
    "7",
    new SupportAutomationRulesReplaceOptions
    {
        Name = "Expired download links, first refund only",
        Clear = JsonConvert.DeserializeObject<List<SdkReplaceSupportAutomationRuleRequestApplicationJsonClear>>("[\"match_max_order_total_cents\"]")!,
        ExpectedUpdatedAt = JsonConvert.DeserializeObject<DateTimeOffset>("\"2026-07-03T09:20:00.000000Z\"")!,
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

Update a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/update-a-support-automation-rule) · Effect: **consequential**

```csharp
public virtual async Task<SdkUpdateSupportAutomationRuleResponseValue200ApplicationJson> UpdateAsync(string supportAutomationRule, SupportAutomationRulesUpdateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `string` | Yes |
| options | `SupportAutomationRulesUpdateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateSupportAutomationRuleResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationRules.UpdateAsync(
    "7",
    new SupportAutomationRulesUpdateOptions
    {
        Name = "Expired download links, first refund only",
        Clear = JsonConvert.DeserializeObject<List<SdkUpdateSupportAutomationRuleRequestApplicationJsonClear>>("[\"match_max_order_total_cents\"]")!,
        ExpectedUpdatedAt = JsonConvert.DeserializeObject<DateTimeOffset>("\"2026-07-03T09:20:00.000000Z\"")!,
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

## UpdateStateAsync

Update a support automation rule state

[API reference](https://sell.app/docs/api/support-automation-rules/change-a-support-automation-rule-state) · Effect: **consequential**

```csharp
public virtual async Task<SdkUpdateSupportAutomationRuleStateResponseValue200ApplicationJson> UpdateStateAsync(string supportAutomationRule, SupportAutomationRulesUpdateStateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `string` | Yes |
| options | `SupportAutomationRulesUpdateStateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateSupportAutomationRuleStateResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationRules.UpdateStateAsync(
    "1",
    new SupportAutomationRulesUpdateStateOptions
    {
        State = JsonConvert.DeserializeObject<SdkUpdateSupportAutomationRuleStateRequestApplicationJsonState>("\"active\"")!,
        ExpectedUpdatedAt = JsonConvert.DeserializeObject<DateTimeOffset>("\"2026-07-03T09:20:00.000000Z\"")!,
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

Reorder support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/reorder-support-automation-rules) · Effect: **consequential**

```csharp
public virtual async Task<SdkReorderSupportAutomationRulesResponseValue200ApplicationJson> ReorderAsync(SupportAutomationRulesReorderOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportAutomationRulesReorderOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReorderSupportAutomationRulesResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationRules.ReorderAsync(new SupportAutomationRulesReorderOptions
    {
        OrderedRuleIds = JsonConvert.DeserializeObject<List<long>>("[7]")!,
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

## DryRunAsync

Dry run support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/dry-run-support-automation-rules) · Effect: **read**

```csharp
public virtual async Task<SdkDryRunSupportAutomationRulesResponseValue200ApplicationJson> DryRunAsync(SupportAutomationRulesDryRunOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportAutomationRulesDryRunOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkDryRunSupportAutomationRulesResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationRules.DryRunAsync(new SupportAutomationRulesDryRunOptions
    {
        TicketId = 4821,
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

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

