---
title: Update alert
---
## !!references Update an alert by ID

### !description


Update alert by ID


### !canonical UpdateAnAlertById

### !category rest

### !type rest_put

### !context

#### !method put

#### !path https%3A%2F%2Fapi.livesession.io%2Fv1%2Falerts%2F%7Bid%7D

### !examples

#### !!groups

##### !description Example request

##### !!examples

###### !codeblock

####### !title undefined

####### !!tabs

```curl !code curl
curl --request PUT \
     --url https://api.livesession.io/v1/alerts/id \
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

####### !title 200

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

#### !title Path parameters

#### !!properties id

!name id

!type string

Unique identifier of the alert to update

### !!definitions

#### !title Request body

#### !!properties name

!name name

!type string

New name for the alert

#### !!properties events

!name events

!type array

Updated list of events that will trigger the alert

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

Updated notification provider for the alert

#### !!properties slack_channel_id

!name slack\_channel\_id

!type string

Updated Slack channel ID for notifications

#### !!properties webhook_id

!name webhook\_id

!type string

Updated webhook ID for notifications

### !!definitions

#### !title Response

#### !!properties alert_id

!name alert\_id

!type string

Unique identifier for the alert

#### !!properties name

!name name

!type string

Name of the alert

#### !!properties events

!name events

!type array

List of events that trigger the alert

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

Notification provider for the alert

#### !!properties slack_channel_id

!name slack\_channel\_id

!type string

Slack channel ID for notifications

#### !!properties webhook_id

!name webhook\_id

!type string

Webhook ID for notifications

#### !!properties enabled

!name enabled

!type boolean

Whether the alert is currently active

#### !!properties creation_date

!name creation\_date

!type string

[ISO 8601](https://wikipedia.org/wiki/ISO_8601) timestamp when the alert was created
