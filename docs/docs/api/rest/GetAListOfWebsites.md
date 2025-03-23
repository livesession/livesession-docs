---
title: List websites
---
## !!references Get a list of websites

### !description


List of all websites


### !canonical GetAListOfWebsites

### !category rest

### !type rest_get

### !context

#### !method get

#### !path https%3A%2F%2Fapi.livesession.io%2Fv1%2Fwebsites

### !examples

#### !!groups

##### !description Response

##### !!examples

###### !codeblock

####### !title 200

####### !!tabs

```json !code json
[
  {
    "website_id": "string",
    "host": "string"
  }
]
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

#### !title Response

#### !!properties website_id

!name website\_id

!type string

Unique identifier for the website

#### !!properties host

!name host

!type string

Domain name or hostname of the website (e.g., example.com)
