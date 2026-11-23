# support_automation_settings

[All resources](../methods.md)

## GetAsync

Retrieve support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/retrieve-support-automation-settings) · Effect: **read**

```csharp
public virtual async Task<SdkGetSupportAutomationSettingsResponseValue200ApplicationJson> GetAsync(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetSupportAutomationSettingsResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationSettings.GetAsync();
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

## ReplaceAsync

Update support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/update-support-automation-settings) · Effect: **consequential**

```csharp
public virtual async Task<SdkReplaceSupportAutomationSettingsResponseValue200ApplicationJson> ReplaceAsync(SupportAutomationSettingsReplaceOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportAutomationSettingsReplaceOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplaceSupportAutomationSettingsResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationSettings.ReplaceAsync(new SupportAutomationSettingsReplaceOptions
    {
        AutomationEnabled = true,
        DailyRefundCapCents = JsonConvert.DeserializeObject<long?>("5000")!,
        ExpectedAutomationEnabled = false,
        ExpectedDailyRefundCapCents = JsonConvert.DeserializeObject<long?>("null")!,
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

## UpdateAsync

Update support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/update-support-automation-settings) · Effect: **consequential**

```csharp
public virtual async Task<SdkUpdateSupportAutomationSettingsResponseValue200ApplicationJson> UpdateAsync(SupportAutomationSettingsUpdateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `SupportAutomationSettingsUpdateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateSupportAutomationSettingsResponseValue200ApplicationJson>`.

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

var result = await client.SupportAutomationSettings.UpdateAsync(new SupportAutomationSettingsUpdateOptions
    {
        AutomationEnabled = true,
        DailyRefundCapCents = JsonConvert.DeserializeObject<long?>("5000")!,
        ExpectedAutomationEnabled = false,
        ExpectedDailyRefundCapCents = JsonConvert.DeserializeObject<long?>("null")!,
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

