# courses

[All resources](../methods.md)

## ListAsync

List courses

[API reference](https://sell.app/docs/api/courses/list-courses) · Effect: **read**

```csharp
public virtual async Task<SellAppList<SdkListCoursesResponseValue200ApplicationJson>> ListAsync(CoursesListOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CoursesListOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SellAppList<SdkListCoursesResponseValue200ApplicationJson>>`.

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

var result = await client.Courses.ListAsync(new CoursesListOptions
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

Create a course

[API reference](https://sell.app/docs/api/courses/create-a-course) · Effect: **write**

```csharp
public virtual async Task<SdkCreateCourseResponseValue201ApplicationJson> CreateAsync(CoursesCreateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CoursesCreateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkCreateCourseResponseValue201ApplicationJson>`.

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

var result = await client.Courses.CreateAsync(new CoursesCreateOptions
    {
        Category = JsonConvert.DeserializeObject<Category?>("\"design\"")!,
        Level = JsonConvert.DeserializeObject<SdkCreateCourseRequestApplicationJsonLevel>("\"beginner\"")!,
        Language = "English",
        WhatYouLearn = JsonConvert.DeserializeObject<List<string>>("[\"Sketch a logo concept.\",\"Choose a color palette.\"]")!,
        CertificateEnabled = true,
        DeliveryText = JsonConvert.DeserializeObject<string?>("\"Open your course from the link in your receipt.\"")!,
        Title = "Brand identity basics",
        Description = JsonConvert.DeserializeObject<string?>("\"<p>Design a logo, color palette, and type system for your next project.</p>\"")!,
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

## SearchAsync

Search courses

[API reference](https://sell.app/docs/api/courses/search-courses) · Effect: **read**

```csharp
public virtual async Task<SellAppList<SdkSearchCoursesResponseValue200ApplicationJson>> SearchAsync(CoursesSearchOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CoursesSearchOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SellAppList<SdkSearchCoursesResponseValue200ApplicationJson>>`.

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

var result = await client.Courses.SearchAsync(new CoursesSearchOptions
    {
        Filters = JsonConvert.DeserializeObject<List<SearchRewardRulesRequestApplicationJsonPropertyFiltersItem>>("[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}]")!,
        Sort = JsonConvert.DeserializeObject<List<SearchRewardRulesRequestApplicationJsonPropertySortItem>>("[{\"field\":\"created_at\",\"direction\":\"desc\"}]")!,
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

## GetAsync

Retrieve a course

[API reference](https://sell.app/docs/api/courses/retrieve-course) · Effect: **read**

```csharp
public virtual async Task<SdkGetCourseResponseValue200ApplicationJson> GetAsync(string course, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetCourseResponseValue200ApplicationJson>`.

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

var result = await client.Courses.GetAsync("string_example");
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

Update a course

[API reference](https://sell.app/docs/api/courses/update-course) · Effect: **write**

```csharp
public virtual async Task<SdkReplaceCourseResponseValue200ApplicationJson> ReplaceAsync(string course, CoursesReplaceOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| options | `CoursesReplaceOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkReplaceCourseResponseValue200ApplicationJson>`.

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

var result = await client.Courses.ReplaceAsync(
    "string_example",
    new CoursesReplaceOptions
    {
        Level = JsonConvert.DeserializeObject<SdkReplaceCourseRequestApplicationJsonLevel>("\"beginner\"")!,
        Visibility = JsonConvert.DeserializeObject<CatalogVisibility>("\"HIDDEN\"")!,
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

Update a course

[API reference](https://sell.app/docs/api/courses/update-course) · Effect: **write**

```csharp
public virtual async Task<SdkUpdateCourseResponseValue200ApplicationJson> UpdateAsync(string course, CoursesUpdateOptions options, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| options | `CoursesUpdateOptions` | Yes |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkUpdateCourseResponseValue200ApplicationJson>`.

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

var result = await client.Courses.UpdateAsync(
    "string_example",
    new CoursesUpdateOptions
    {
        Level = JsonConvert.DeserializeObject<SdkUpdateCourseRequestApplicationJsonLevel>("\"beginner\"")!,
        Visibility = JsonConvert.DeserializeObject<CatalogVisibility>("\"HIDDEN\"")!,
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

## GetStudentSummaryAsync

Retrieve a course student summary

[API reference](https://sell.app/docs/api/courses/retrieve-course-student-summary) · Effect: **read**

```csharp
public virtual async Task<SdkGetCourseStudentSummaryResponseValue200ApplicationJson> GetStudentSummaryAsync(CoursesGetStudentSummaryOptions? options = null, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)
```

| Argument | Native type | Required |
| --- | --- | --- |
| options | `CoursesGetStudentSummaryOptions?` | No |
| requestOptions | `RequestOptions?` | No |
| cancellationToken | `CancellationToken` | No |

Returns: `Task<SdkGetCourseStudentSummaryResponseValue200ApplicationJson>`.

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

var result = await client.Courses.GetStudentSummaryAsync(new CoursesGetStudentSummaryOptions
    {
        StartDate = "2026-08-01",
        EndDate = "2026-08-31",
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

