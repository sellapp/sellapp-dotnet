# oauth

[All resources](../methods.md)

## GetAuthorizationServerMetadataAsync

Read OAuth server metadata

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```csharp
public virtual async Task<SdkGetOAuthAuthorizationServerMetadataResponseValue200ApplicationJson> GetAuthorizationServerMetadataAsync(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetOAuthAuthorizationServerMetadataResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    ApiKey = "",
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.OAuth.GetAuthorizationServerMetadataAsync();
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[]
```

Documented HTTP responses: 200, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetAuthorizationRequestAsync

Review CLI authorization

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```csharp
public virtual async Task<string> GetAuthorizationRequestAsync(OAuthGetAuthorizationRequestOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `OAuthGetAuthorizationRequestOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<string>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    ApiKey = "",
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

await client.OAuth.GetAuthorizationRequestAsync(new OAuthGetAuthorizationRequestOptions
    {
        ResponseType = JsonConvert.DeserializeObject<string>("\"code\"")!,
        ClientId = "01992a65-e064-71ba-b38f-902b7966a6be",
        RedirectUri = "http://127.0.0.1:49152/callback",
        State = "RANDOM_STATE",
        CodeChallenge = "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
        CodeChallengeMethod = JsonConvert.DeserializeObject<string>("\"S256\"")!,
    });
Console.WriteLine("Request completed.");
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[]
```

Documented HTTP responses: 200, 302, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ApproveAuthorizationAsync

Approve CLI access

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```csharp
public virtual async Task ApproveAuthorizationAsync(OAuthApproveAuthorizationOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `OAuthApproveAuthorizationOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    BrowserSession = Environment.GetEnvironmentVariable("SELLAPP_BROWSER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

await client.OAuth.ApproveAuthorizationAsync(new OAuthApproveAuthorizationOptions
    {
        AuthToken = "CONSENT_AUTH_TOKEN",
        ClientId = "01992a65-e064-71ba-b38f-902b7966a6be",
        State = "RANDOM_STATE",
        Token = "CSRF_TOKEN",
    });
Console.WriteLine("Request completed.");
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthBrowserSession": []
  }
]
```

Documented HTTP responses: 302, 400, 401, 403, 419, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## DenyAuthorizationAsync

Deny CLI access

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```csharp
public virtual async Task DenyAuthorizationAsync(OAuthDenyAuthorizationOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `OAuthDenyAuthorizationOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    BrowserSession = Environment.GetEnvironmentVariable("SELLAPP_BROWSER_SESSION"),
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

await client.OAuth.DenyAuthorizationAsync(new OAuthDenyAuthorizationOptions
    {
        AuthToken = "CONSENT_AUTH_TOKEN",
        Token = "CSRF_TOKEN",
    });
Console.WriteLine("Request completed.");
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthBrowserSession": []
  }
]
```

Documented HTTP responses: 302, 400, 401, 419, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ExchangeTokenAsync

Exchange or refresh OAuth tokens

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```csharp
public virtual async Task<SdkExchangeOAuthTokenResponseValue200ApplicationJson> ExchangeTokenAsync(OAuthExchangeTokenOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `OAuthExchangeTokenOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkExchangeOAuthTokenResponseValue200ApplicationJson>`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    ApiKey = "",
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

var result = await client.OAuth.ExchangeTokenAsync(new OAuthExchangeTokenOptions { Body = JsonConvert.DeserializeObject<ExchangeOAuthTokenRequestApplicationXWwwFormUrlencodedOneOfValue1>("{\"client_id\":\"01992a65-e064-71ba-b38f-902b7966a6be\",\"grant_type\":\"authorization_code\",\"code\":\"AUTHORIZATION_CODE\",\"redirect_uri\":\"http://127.0.0.1:49152/callback\",\"code_verifier\":\"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk\"}")! });
Console.WriteLine(JsonConvert.SerializeObject(result, Formatting.Indented));
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {},
  {
    "oauthClientBasic": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## RevokeTokenAsync

Revoke an OAuth token

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```csharp
public virtual async Task RevokeTokenAsync(OAuthRevokeTokenOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `OAuthRevokeTokenOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task`.

```cs
using SellApp;
using Newtonsoft.Json;
using System.Collections.Generic;

var client = new SellAppClient(new SellAppOptions
{
    ApiKey = "",
    BaseUrl = Environment.GetEnvironmentVariable("SELLAPP_API_BASE_URL"),
    Store = "",
});

await client.OAuth.RevokeTokenAsync(new OAuthRevokeTokenOptions
    {
        ClientId = "01992a65-e064-71ba-b38f-902b7966a6be",
        Token = "REFRESH_TOKEN",
        TokenTypeHint = JsonConvert.DeserializeObject<SdkRevokeOAuthTokenRequestApplicationXWwwFormUrlencodedTokenTypeHint>("\"refresh_token\"")!,
    });
Console.WriteLine("Request completed.");
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {},
  {
    "oauthClientBasic": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

