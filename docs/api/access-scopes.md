---
title: Access scopes
description: Access scopes for the LiveSession API
---

# LiveSession API access scopes
:::subtitle
Learn about the access scopes required to use the LiveSession API.
:::

All API requests needs access to specific scopes during the authorization process.
This guide provides a list of available access scopes for LiveSession APIs.

## How it works
[Authorization](https://en.wikipedia.org/wiki/Authorization) is the process of giving permissions for tokens.
When you request an access token, you can specify the scopes that you want to grant to the token.
The token will have access to the resources and actions allowed by the scopes.

## Access scopes
The following table lists the available access scopes for the LiveSession API:

:::table
```ts
[
    ["Scope", "Description"],
    ["`users.sessions:read`", "Read user sessions list."],
    ["`websites:write`, `websites:read`", "Read and write websites data."],
    ["`alerts:write`, `alerts:read`", "Read and write alerts data."],
    ["`webhooks:write`, `webhooks:read`", "Read and write webhooks data."],
    ["`funnels:write,` `funnels:read`", "Read and write funnels data."],
    ["`metrics:write`, `metrics:read`", "Read and write metrics data."],
    ["`dashboard:write`, `dashboard:read`", "Read and write dashboard data."]
]
```
:::
