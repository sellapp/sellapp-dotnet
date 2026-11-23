# community_connections_servers

[All resources](../methods.md)

## GetAsync

Retrieve a community server

[API reference](https://sell.app/docs/api/community-connections/community-server) · Effect: **read**

```csharp
public virtual async Task<SdkGetCommunityServerResponseValue200ApplicationJson> GetAsync(string platform, string server, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `string` | Yes |
| server | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetCommunityServerResponseValue200ApplicationJson>`.

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

var result = await client.CommunityConnectionsServers.GetAsync(
    "discord",
    "server_ship_room"
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

## RemoveAsync

Remove a community server

[API reference](https://sell.app/docs/api/community-connections/community-server) · Effect: **consequential**

```csharp
public virtual async Task RemoveAsync(string platform, string server, CommunityConnectionsServersRemoveOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `string` | Yes |
| server | `string` | Yes |
| options | `CommunityConnectionsServersRemoveOptions` | Yes |
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

await client.CommunityConnectionsServers.RemoveAsync(
    "discord",
    "server_ship_room",
    new CommunityConnectionsServersRemoveOptions
    {
        AffectedVariantIds = JsonConvert.DeserializeObject<List<long>>("[902]")!,
    }
);
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

