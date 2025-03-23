---
title: Create website
---
## !!references Create a website

### !description


Create a website


### !canonical CreateAWebsite

### !category rest

### !type rest_post

### !context

#### !method post

#### !path https%3A%2F%2Fapi.livesession.io%2Fv1%2Fwebsites

### !examples

#### !!groups

##### !description Example request

##### !!examples

###### !codeblock

####### !title undefined

####### !!tabs

```curl !code curl
curl --request POST \
     --url https://api.livesession.io/v1/websites \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "host": "string",
  "description": "string"
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
  "website_id": "string",
  "host": "string"
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

#### !!properties host

!name host

!type string

Domain name or hostname of the website to track

#### !!properties description

!name description

!type string

Optional description of the website for organization purposes

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
