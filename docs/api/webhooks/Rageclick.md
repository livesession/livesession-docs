---
title: RageClick
---
## !description



## !!references RageClick

### !canonical Rageclick

### !category rest

### !type rest_post

### !context

#### !method post

#### !path /session.event.RageClick

### !examples

#### !!groups

##### !description Example request

##### !!examples

###### !codeblock

####### !title undefined

####### !!tabs

```bash !code curl
curl --request POST \
     --url https://example.com/session.event.RageClick \
     --header 'content-type: application/json' \
     --data '
{
  "message_id": "string",
  "webhook_id": "string",
  "webhook_type": "string",
  "api_version": "string",
  "account_id": "string",
  "website_id": "string",
  "created_at": 0,
  "payload": {
    "visitor": {
      "id": "string",
      "name": "string",
      "email": "string",
      "params": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "geolocation": {
        "country_code": "string",
        "city": "string",
        "region": "string"
      }
    },
    "event_name": "string",
    "time": 0,
    "name": "string",
    "clicks": 0
  }
}
'
```

#### !!groups

##### !description Response

### !!definitions

#### !title Request body

#### !!properties message_id

!name message\_id

!type string



#### !!properties webhook_id

!name webhook\_id

!type string



#### !!properties webhook_type

!name webhook\_type

!type string



#### !!properties api_version

!name api\_version

!type string



#### !!properties account_id

!name account\_id

!type string



#### !!properties website_id

!name website\_id

!type string



#### !!properties created_at

!name created\_at

!type integer



#### !!properties payload

!name payload

!type&#x20;



##### !!properties visitor

!name visitor

!type object



###### !!properties id

!name id

!type string

The unique ID of the visitor

###### !!properties name

!name name

!type string

The name of the visitor

###### !!properties email

!name email

!type string

The email of the visitor

###### !!properties params

!name params

!type array



###### !!properties geolocation

!name geolocation

!type object



####### !!properties country_code

!name country\_code

!type string



####### !!properties city

!name city

!type string



####### !!properties region

!name region

!type string



##### !!properties event_name

!name event\_name

!type string



##### !!properties time

!name time

!type integer



##### !!properties name

!name name

!type string



##### !!properties clicks

!name clicks

!type integer



### !!definitions

#### !title Response
