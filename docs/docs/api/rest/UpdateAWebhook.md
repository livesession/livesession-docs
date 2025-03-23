---
title: Update webhook
---
## !!references Update a webhook

### !description


Update a webhook


### !canonical UpdateAWebhook

### !category rest

### !type rest_put

### !context

#### !method put

#### !path https%3A%2F%2Fapi.livesession.io%2Fv1%2Fwebhooks%2F%7Bid%7D

### !examples

#### !!groups

##### !description Example request

##### !!examples

###### !codeblock

####### !title undefined

####### !!tabs

```curl !code curl
curl --request PUT \
     --url https://api.livesession.io/v1/webhooks/id \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "url": "string",
  "website_id": "string",
  "version": "string"
}
'
```

#### !!groups

##### !description Response

##### !!examples

###### !codeblock

####### !title 200

####### !!tabs

```json !code json
{
  "webhook_id": "string",
  "url": "string",
  "website": "string",
  "website_id": "string",
  "version": "string",
  "enabled": true,
  "created_date": 0,
  "created_by": "string"
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

ID of the webhook to update

### !!definitions

#### !title Query

#### !!properties version

!name version

!type string

API version

### !!definitions

#### !title Request body

#### !!properties url

!name url

!type string

URL for the webhook

#### !!properties website_id

!name website\_id

!type string

Website ID

#### !!properties version

!name version

!type string

API version (e.g., v1.0)

### !!definitions

#### !title Response

#### !!properties webhook_id

!name webhook\_id

!type string

Webhook ID

#### !!properties url

!name url

!type string

URL for the webhook

#### !!properties website

!name website

!type string

Website name

#### !!properties website_id

!name website\_id

!type string

Website ID

#### !!properties version

!name version

!type string

API version

#### !!properties enabled

!name enabled

!type boolean

Webhook enabled status

#### !!properties created_date

!name created\_date

!type integer

Unix timestamp for creation date

#### !!properties created_by

!name created\_by

!type string

Creator of the webhook
