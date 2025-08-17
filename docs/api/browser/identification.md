---
title: Identification
description: Identification
---

# Identification
:::subtitle
Learn how to identify users in your application.
:::

To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.


:::code-group{title="User params"}
```js sdk
import ls from "@livesession/browser";

ls.identify({name: "John Doe", email: "john.doe@example.com"})
:::

Learn more about user browser methods [here](/docs/api/browser/methods).