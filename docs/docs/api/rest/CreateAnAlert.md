---
title: Create alert
---
## !!references Create an alert

### !description


Create alert


### !canonical CreateAnAlert

### !category rest

### !type rest_post

### !context

#### !method post

#### !path https%3A%2F%2Fapi.livesession.io%2Fv1%2Falerts

### !examples

#### !!groups

##### !description Example request

##### !!examples

###### !codeblock

####### !title undefined

####### !!tabs

```curl !code curl
curl --request POST \
     --url https://api.livesession.io/v1/alerts \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "name": "string",
  "events": [
    {
      "kind": 0,
      "value": "string"
    }
  ],
  "provider": "slack",
  "slack_channel_id": "string",
  "webhook_id": "string"
}
'
```

#### !!groups

##### !description Response

##### !!examples

###### !codeblock

####### !title 201

####### !!tabs

```json !code json
{
  "alert_id": "string",
  "name": "string",
  "events": [
    {
      "kind": 0,
      "value": "string"
    }
  ],
  "provider": "slack",
  "slack_channel_id": "string",
  "webhook_id": "string",
  "enabled": true,
  "creation_date": "string"
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

#### !title Request body

#### !!properties name

!name name

!type string

Name of the alert for easy identification

#### !!properties events

!name events

!type array

List of events that will trigger the alert

##### !!properties kind

!name kind

!type integer

Kind of event, more info [here](/docs/api/rest/EventKind)

##### !!properties value

!name value

!type string

Value or threshold that triggers the alert

#### !!properties provider

!name provider

!type string

Notification provider for the alert, `slack` or `webhooks`

#### !!properties slack_channel_id

!name slack\_channel\_id

!type string

Slack channel ID where notifications will be sent (required if provider is `slack`)

#### !!properties webhook_id

!name webhook\_id

!type string

Webhook ID where notifications will be sent (required if provider is `webhooks`)

### !!definitions

#### !title Response
