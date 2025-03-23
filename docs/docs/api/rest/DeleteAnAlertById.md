---
title: Delete alert
---
## !!references Delete an alert by ID

### !description


Delete alert by ID


### !canonical DeleteAnAlertById

### !category rest

### !type rest_delete

### !context

#### !method delete

#### !path https%3A%2F%2Fapi.livesession.io%2Fv1%2Falerts%2F%7Bid%7D

### !examples

#### !!groups

##### !description Response

##### !!examples

###### !codeblock

####### !title 200

####### !!tabs

```json !code json
{
  "alert_id": "string",
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

Unique identifier of the alert to delete

### !!definitions

#### !title Response

#### !!properties alert_id

!name alert\_id

!type string

ID of the alert that was deleted

#### !!properties deleted

!name deleted

!type boolean

Indicates whether the alert was successfully deleted
