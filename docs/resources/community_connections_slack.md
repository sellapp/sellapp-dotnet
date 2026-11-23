# community_connections_slack

[All resources](../methods.md)

## ListChannelsAsync

List Slack available channels

[API reference](https://sell.app/docs/api/community-connections/slack-channels) · Effect: **read**

```csharp
public virtual async Task<SdkListSlackAvailableChannelsResponseValue200ApplicationJson> ListChannelsAsync(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkListSlackAvailableChannelsResponseValue200ApplicationJson>`.

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

var result = await client.CommunityConnectionsSlack.ListChannelsAsync();
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

## AddChannelAsync

Add a Slack channel

[API reference](https://sell.app/docs/api/community-connections/slack-channels) · Effect: **consequential**

```csharp
public virtual async Task<SdkAddSlackChannelResponseValue201ApplicationJson> AddChannelAsync(CommunityConnectionsSlackAddChannelOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CommunityConnectionsSlackAddChannelOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkAddSlackChannelResponseValue201ApplicationJson>`.

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

var result = await client.CommunityConnectionsSlack.AddChannelAsync(new CommunityConnectionsSlackAddChannelOptions
    {
        ChannelId = "C07LAUNCHVIP",
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

## ReplaceInviteLinkAsync

Update Slack workspace invite link

[API reference](https://sell.app/docs/api/community-connections/slack-invite-link) · Effect: **consequential**

```csharp
public virtual async Task<SdkReplaceSlackWorkspaceInviteLinkResponseValue200ApplicationJson> ReplaceInviteLinkAsync(CommunityConnectionsSlackReplaceInviteLinkOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CommunityConnectionsSlackReplaceInviteLinkOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplaceSlackWorkspaceInviteLinkResponseValue200ApplicationJson>`.

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

var result = await client.CommunityConnectionsSlack.ReplaceInviteLinkAsync(new CommunityConnectionsSlackReplaceInviteLinkOptions
    {
        InviteLink = JsonConvert.DeserializeObject<string?>("\"https://join.slack.com/t/launch-lab/shared_invite/zt-2abc123\"")!,
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

