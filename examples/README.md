# .NET examples

The catalog, checkout, and upload workflow helpers change real data when given a live client. Their native documentation tests use fixture transports and dummy credentials. Catalog steps pass the created product ID into retrieval and update; checkout retrieves the order before starting its provider checkout; upload retrieves the file using the returned file ID. Do not retry a lost checkout response without first checking the order. Use a separate client for each store's credentials.


[Onboarding/Program.cs](Onboarding/Program.cs) is the complete README program: start with one product, then try a few pages. It uses the local SDK project, so you can run it straight from this checkout.

Set `SELLAPP_API_KEY`, `SELLAPP_STORE`, and `SELLAPP_API_BASE_URL` before running it. Choose `https://sell.app/api` for your real store data or your own local mock. Every request is read-only. From the SDK root:

```sh
dotnet run --project examples/Onboarding
dotnet run --project examples/Onboarding -- pagination
dotnet test test/SellAppTests --filter DocumentationExamples
```

The first command reads one product, the second reads up to three pages, and both explain failures through the same error handler. The third command tests those methods against a local server with dummy credentials, without contacting your store. A separate application can use the project reference shown in the [README](../README.md).
