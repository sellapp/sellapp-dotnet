# customer_portal

[All resources](../methods.md)

## GetProfileAsync

Retrieve the signed-in customer

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```csharp
public virtual async Task<SdkGetCustomerPortalProfileResponseValue200ApplicationJson> GetProfileAsync(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetCustomerPortalProfileResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.GetProfileAsync();
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## UpdateProfileAsync

Update the signed-in customer

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkUpdateCustomerPortalProfileResponseValue200ApplicationJson> UpdateProfileAsync(CustomerPortalUpdateProfileOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CustomerPortalUpdateProfileOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateCustomerPortalProfileResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.UpdateProfileAsync(new CustomerPortalUpdateProfileOptions
    {
        Locale = JsonConvert.DeserializeObject<string?>("\"en-US\"")!,
    });
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ListOrdersAsync

List customer orders

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```csharp
public virtual async Task<SellAppList<CustomerPortalOrder>> ListOrdersAsync(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SellAppList<CustomerPortalOrder>>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.ListOrdersAsync();
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetOrderAsync

Retrieve a customer order

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```csharp
public virtual async Task<SdkGetCustomerPortalOrderResponseValue200ApplicationJson> GetOrderAsync(string order, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetCustomerPortalOrderResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.GetOrderAsync("9001");
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ListSubscriptionsAsync

List customer subscriptions

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```csharp
public virtual async Task<SdkListCustomerPortalSubscriptionsResponseValue200ApplicationJson> ListSubscriptionsAsync(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkListCustomerPortalSubscriptionsResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.ListSubscriptionsAsync();
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetSubscriptionAsync

Retrieve a customer subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```csharp
public virtual async Task<SdkGetCustomerPortalSubscriptionResponseValue200ApplicationJson> GetSubscriptionAsync(string subscription, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| subscription | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetCustomerPortalSubscriptionResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.GetSubscriptionAsync("991");
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetSubscriptionCapabilitiesAsync

Retrieve subscription capabilities

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```csharp
public virtual async Task<SdkGetCustomerPortalSubscriptionCapabilitiesResponseValue200ApplicationJson> GetSubscriptionCapabilitiesAsync(string subscription, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| subscription | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetCustomerPortalSubscriptionCapabilitiesResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.GetSubscriptionCapabilitiesAsync("42");
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ListEntitlementsAsync

List customer entitlements

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```csharp
public virtual async Task<SdkListCustomerPortalEntitlementsResponseValue200ApplicationJson> ListEntitlementsAsync(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkListCustomerPortalEntitlementsResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.ListEntitlementsAsync();
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## CancelSubscriptionAtPeriodEndAsync

Cancel at period end

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkCancelCustomerSubscriptionAtPeriodEndResponseValue200ApplicationJson> CancelSubscriptionAtPeriodEndAsync(string productSubscription, CustomerPortalCancelSubscriptionAtPeriodEndOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalCancelSubscriptionAtPeriodEndOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkCancelCustomerSubscriptionAtPeriodEndResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.CancelSubscriptionAtPeriodEndAsync(
    "42",
    new CustomerPortalCancelSubscriptionAtPeriodEndOptions
    {
        Reason = "Customer requested this change",
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## CancelSubscriptionImmediatelyAsync

Cancel immediately

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkCancelCustomerSubscriptionImmediatelyResponseValue200ApplicationJson> CancelSubscriptionImmediatelyAsync(string productSubscription, CustomerPortalCancelSubscriptionImmediatelyOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalCancelSubscriptionImmediatelyOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkCancelCustomerSubscriptionImmediatelyResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.CancelSubscriptionImmediatelyAsync(
    "42",
    new CustomerPortalCancelSubscriptionImmediatelyOptions
    {
        Reason = "Customer requested this change",
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## PauseSubscriptionAsync

Pause a subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkPauseCustomerSubscriptionResponseValue200ApplicationJson> PauseSubscriptionAsync(string productSubscription, CustomerPortalPauseSubscriptionOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalPauseSubscriptionOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkPauseCustomerSubscriptionResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.PauseSubscriptionAsync(
    "42",
    new CustomerPortalPauseSubscriptionOptions
    {
        Reason = "Customer requested this change",
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ResumeSubscriptionAsync

Resume a subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkResumeCustomerSubscriptionResponseValue200ApplicationJson> ResumeSubscriptionAsync(string productSubscription, CustomerPortalResumeSubscriptionOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalResumeSubscriptionOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkResumeCustomerSubscriptionResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.ResumeSubscriptionAsync(
    "42",
    new CustomerPortalResumeSubscriptionOptions
    {
        Reason = "Customer requested this change",
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## UpdateSubscriptionPaymentMethodAsync

Update payment method

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkUpdateCustomerSubscriptionPaymentMethodResponseValue200ApplicationJson> UpdateSubscriptionPaymentMethodAsync(string productSubscription, CustomerPortalUpdateSubscriptionPaymentMethodOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalUpdateSubscriptionPaymentMethodOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateCustomerSubscriptionPaymentMethodResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.UpdateSubscriptionPaymentMethodAsync(
    "42",
    new CustomerPortalUpdateSubscriptionPaymentMethodOptions
    {
        Reason = "Customer requested this change",
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## PreviewSubscriptionPlanChangeAsync

Preview a plan change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkPreviewCustomerSubscriptionPlanChangeResponseValue200ApplicationJson> PreviewSubscriptionPlanChangeAsync(string productSubscription, CustomerPortalPreviewSubscriptionPlanChangeOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalPreviewSubscriptionPlanChangeOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkPreviewCustomerSubscriptionPlanChangeResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.PreviewSubscriptionPlanChangeAsync(
    "42",
    new CustomerPortalPreviewSubscriptionPlanChangeOptions
    {
        ProductVariantId = 84,
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ConfirmSubscriptionPlanChangeAsync

Confirm a plan change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkConfirmCustomerSubscriptionPlanChangeResponseValue200ApplicationJson> ConfirmSubscriptionPlanChangeAsync(string productSubscription, CustomerPortalConfirmSubscriptionPlanChangeOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalConfirmSubscriptionPlanChangeOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkConfirmCustomerSubscriptionPlanChangeResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.ConfirmSubscriptionPlanChangeAsync(
    "42",
    new CustomerPortalConfirmSubscriptionPlanChangeOptions
    {
        PreviewId = "preview_01K4",
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## PreviewSubscriptionRenewalDateChangeAsync

Preview a renewal-date change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkPreviewCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson> PreviewSubscriptionRenewalDateChangeAsync(string productSubscription, CustomerPortalPreviewSubscriptionRenewalDateChangeOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalPreviewSubscriptionRenewalDateChangeOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkPreviewCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.PreviewSubscriptionRenewalDateChangeAsync(
    "42",
    new CustomerPortalPreviewSubscriptionRenewalDateChangeOptions
    {
        RenewalDate = "2026-10-15",
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ConfirmSubscriptionRenewalDateChangeAsync

Confirm a renewal-date change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```csharp
public virtual async Task<SdkConfirmCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson> ConfirmSubscriptionRenewalDateChangeAsync(string productSubscription, CustomerPortalConfirmSubscriptionRenewalDateChangeOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `string` | Yes |
| options | `CustomerPortalConfirmSubscriptionRenewalDateChangeOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkConfirmCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    CustomerSession = Environment.GetEnvironmentVariable("SELLAPP_CUSTOMER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.CustomerPortal.ConfirmSubscriptionRenewalDateChangeAsync(
    "42",
    new CustomerPortalConfirmSubscriptionRenewalDateChangeOptions
    {
        PreviewId = "preview_01K4",
    },
    requestOptions: new RequestOptions { IdempotencyKey = "example-mutation-001" }
);
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

