# .NET usage notes

The first request proves the connection works. These details help you make the next hundred behave sensibly: set a time budget, handle failures, and decide when another attempt is safe.

## Retries and idempotency

The default is 3 retries (up to 4 attempts). Negative retry counts and nonpositive timeouts are rejected. The SDK retries HTTP 408, 409, 429, all 5xx responses, and transport failures only for safe/idempotent methods or operations that declare idempotency support and receive a key. Delays use bounded exponential jitter; valid `Retry-After` durations and HTTP dates are capped at 30 seconds. Per-call `RequestOptions.Timeout` and `MaxRetries` override client defaults; caller cancellation interrupts requests and waits.

An idempotency key identifies one intended change. RequestOptions.IdempotencyKey is accepted only on operations that declare support; unsupported operations reject it. Reuse the same key for retries of one logical change.

## Authentication and errors

The SDK selects credentials per operation. Ordinary integrations use API keys. A missing or blank required credential raises `ConfigurationException` before transport. API-key v2 operations can omit the store where the operation permits it; legacy operations require it. The first-request example explicitly requires a store so you know which catalog it reads.

ApiException carries status, type, code, message, parameter, request ID, and documentation URL. Request IDs prefer the X-Request-ID header, then the body. Every status-specific exception, including AuthenticationException, preserves this metadata.

`TransportException`, `SellAppTimeoutException`, `SerializationException`, and `SchemaValidationException` identify non-API failures. Schema validation checks requests and decoded responses; it is not a complete JSON Schema implementation.

## Pagination

List methods return a page, while generated auto-paging methods iterate cursor metadata or validated numeric `links.next` page links. Auto-paging rejects unsafe origins and path changes, detects cycles, and is bounded by `RequestOptions.MaxPages` and optional `MaxItems`. The [executable example](../examples/Onboarding/Program.cs) also demonstrates an explicit numeric page loop.

[Back to onboarding](../README.md)

## Client configuration

`SellAppOptions` gives you one place to configure `SellAppClient`. Non-null `ApiKey` and `Store` values take precedence over environment values; null values fall back to their corresponding variables. Supply nonempty strings, as the example checks explicitly. The SDK selects credentials for each operation. API-key v2 operations can omit `Store`; legacy operations require it. Use `AccessToken` with `Store` for OAuth store operations; setting it suppresses the API-key environment fallback. Set `CustomerSession` on the client or `RequestOptions` for customer-portal calls. Anonymous operations send no credentials.

OAuth protocol operations use `https://sell.app`; a custom `BaseUrl` also sets their origin. Token and consent requests use URL-encoded forms. The default HTTP client returns redirects without following them. If you inject `HttpClient`, configure its handler with `AllowAutoRedirect = false` and `UseCookies = false`. Inspect response status and `Location` through the response wrapper before downloading without API credentials. Protocol exchanges, one-time customer-session creation, and customer-session calls are never replayed automatically.

| Option | Behavior |
| --- | --- |
| `BaseUrl` | Defaults to `https://sell.app/api` |
| `Timeout` | A `TimeSpan`; default 60 seconds per HTTP attempt |
| `MaxRetries` | Default 3 retries after the initial attempt; 0 disables retries |
| `HttpClient` | Optional caller-owned HTTP client |

Use `using` to dispose the SDK client. It disposes an HTTP client it created; a supplied client remains yours to dispose. Construction sets the supplied HTTP client's base address and timeout. Pass a `CancellationToken` to async methods to bound the complete operation, including retry waits.

## Pagination and failures

The API splits a long catalog into pages. `Products.ListAsync` returns one of them: `Data` contains products, and `Meta` and `Links` describe the listing. Run `dotnet run -- pagination` to read up to three pages by number.

The automatic pager supports cursor metadata and validated numeric page links. It rejects cross-origin, path-changing, malformed, duplicate, and cyclic links, and `RequestOptions.MaxPages` / `MaxItems` bound traversal.

A failed request should leave you with a useful next step. The program handles authentication failures, API exceptions, timeouts, and cancellation, and prints request IDs when exposed so you can identify the request you're investigating. Before adding calls that change data, read the [usage notes](https://github.com/sellapp/sellapp-dotnet/blob/main/docs/usage.md) for the current authentication and retry limitations.
