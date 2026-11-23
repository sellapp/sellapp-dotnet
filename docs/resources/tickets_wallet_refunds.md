# tickets_wallet_refunds

[All resources](../methods.md)

## ListOptionsAsync

List a ticket's wallet refund options

[API reference](https://sell.app/docs/api/tickets/list-ticket-wallet-refund-options) · Effect: **read**

```csharp
public virtual async Task<SdkV2ListTicketWalletRefundOptionsResponseValue200ApplicationJson> ListOptionsAsync(string ticket, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkV2ListTicketWalletRefundOptionsResponseValue200ApplicationJson>`.

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

var result = await client.TicketsWalletRefunds.ListOptionsAsync("312");
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

## ListAsync

List a ticket's wallet refunds

[API reference](https://sell.app/docs/api/tickets/list-ticket-wallet-refunds) · Effect: **read**

```csharp
public virtual async Task<SdkV2ListTicketWalletRefundsResponseValue200ApplicationJson> ListAsync(string ticket, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkV2ListTicketWalletRefundsResponseValue200ApplicationJson>`.

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

var result = await client.TicketsWalletRefunds.ListAsync("312");
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

## CreateAsync

Refund a ticket to the customer's wallet

[API reference](https://sell.app/docs/api/tickets/refund-ticket-to-wallet) · Effect: **consequential**

```csharp
public virtual async Task<SdkV2RefundTicketToWalletResponseValue201ApplicationJson> CreateAsync(string ticket, TicketsWalletRefundsCreateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `string` | Yes |
| options | `TicketsWalletRefundsCreateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkV2RefundTicketToWalletResponseValue201ApplicationJson>`.

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

var result = await client.TicketsWalletRefunds.CreateAsync(
    "312",
    new TicketsWalletRefundsCreateOptions
    {
        InvoiceId = 5120,
        AmountCents = 500,
        ExpectedRefundableCents = 1999,
        CustomerNote = "We added $5.00 to your store wallet for the trouble with your download link.",
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ReverseAsync

Reverse a ticket's wallet refund

[API reference](https://sell.app/docs/api/tickets/reverse-ticket-wallet-refund) · Effect: **consequential**

```csharp
public virtual async Task<SdkV2ReverseTicketWalletRefundResponseValue200ApplicationJson> ReverseAsync(string ticket, string walletRefund, TicketsWalletRefundsReverseOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `string` | Yes |
| walletRefund | `string` | Yes |
| options | `TicketsWalletRefundsReverseOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkV2ReverseTicketWalletRefundResponseValue200ApplicationJson>`.

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

var result = await client.TicketsWalletRefunds.ReverseAsync(
    "312",
    "7001",
    new TicketsWalletRefundsReverseOptions
    {
        Reason = "Issued on the wrong ticket.",
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

