---
title: Delete webhook
---
## !!references Delete a webhook

### !description


Delete a webhook&#x20;


### !canonical DeleteAWebhook

### !category rest

### !type rest_delete

### !context

#### !method delete

#### !path https%3A%2F%2Fapi.livesession.io%2Fv1%2Fwebhooks%2F%7Bid%7D

### !examples

#### !!groups

##### !description Response

##### !!examples

###### !codeblock

####### !title 200

####### !!tabs

```json !code json
{
  "webhook_id": "string",
  "deleted": true
}
```

##### !!examples

###### !codeblock

####### !title 400

####### !!tabs

```json !code json
{
  "error": {
    "type": "string",
    "code": "string",
    "param": "string",
    "message": "string",
    "http_status_code": 0,
    "request_id": "string"
  }
}
```

##### !!examples

###### !codeblock

####### !title 500

####### !!tabs

```json !code json
{
  "error": {
    "type": "string",
    "code": "string",
    "param": "string",
    "message": "string",
    "http_status_code": 0,
    "request_id": "string"
  }
}
```

### !!definitions

#### !title Path parameters

#### !!properties id

!name id

!type string

ID of the webhook to delete

### !!definitions

#### !title Response

#### !!properties webhook_id

!name webhook\_id

!type string

Webhook ID

#### !!properties deleted

!name deleted

!type boolean

Indicates if the webhook was deleted
