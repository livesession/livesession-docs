---
title: Configuration
---

# Configuration
:::subtitle
Learn how to set up and configure webhooks in LiveSession.
:::

**Webhooks** enable real-time communication between applications. When specific events happen, one app automatically sends data to another.
This integration streamlines workflows, syncs systems without constant polling, and integrates third-party services.

LiveSession triggers [webhooks](https://en.wikipedia.org/wiki/Webhook) via preset events, with ongoing expansion.
When a configured event occurs, our systems promptly notify your servers, delivering detailed event data.

## Quickstart
You can customize your setup within LiveSession's Settings menu. In the `API > Webhooks` section, oversee the URLs that facilitate LiveSession's interaction with your servers.

:::callout
Note that you must have an Admin or Owner role to manage webhook settings.
:::

Endpoints have the following attributes:

:::steps
1. **URL:** Each endpoint is uniquely identified by its URL, utilizing either the HTTP or HTTPS scheme. This URL signifies the server address that LiveSession establishes communication with.
2. **Website:** The 'Website' field refers to an identifier for your chosen LiveSession-enabled website.
:::

Once you've configured your endpoints, you can begin assigning them to specific events using [Alerts](/docs/capabilities/alerting).