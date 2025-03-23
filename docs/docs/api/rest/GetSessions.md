---
title: List sessions
---
## !!references Get Sessions

### !description


List of all sessions


### !canonical GetSessions

### !category rest

### !type rest_get

### !context

#### !method get

#### !path https%3A%2F%2Fapi.livesession.io%2Fv1%2Fsessions

### !examples

#### !!groups

##### !description Response

##### !!examples

###### !codeblock

####### !title 200

####### !!tabs

```json !code json
{
  "total": 0,
  "page": {
    "num": 0,
    "size": 0
  },
  "sessions": [
    {
      "id": "string",
      "website_id": "string",
      "session_url": "string",
      "creation_timestamp": 0,
      "duration": 0,
      "end_timestamp": 0,
      "active_time": 0,
      "end_url": "string",
      "expiration_timestamp": 0,
      "last_event_timestamp": 0,
      "product": "string",
      "device": "string",
      "tags": [
        "string"
      ],
      "last_seen_page_view_id": "string",
      "seen": true,
      "referrer": "string",
      "start_url": "string",
      "visitor_first_session": true,
      "engagment_score": 0,
      "visitor": {
        "id": "string",
        "ip": "string",
        "geolocation": {
          "country_code": "string",
          "city": "string",
          "region": "string"
        },
        "name": "string",
        "email": "string",
        "email_hash": "string",
        "params": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "last_session_timestamp": 0,
        "first_session_timestamp": 0
      },
      "resolution": {
        "height": 0,
        "width": 0,
        "resolution": "string"
      },
      "os": {
        "name": "string",
        "version": "string"
      },
      "browser": {
        "description": "string",
        "name": "string",
        "version": "string"
      },
      "utm": {
        "source": "string",
        "medium": "string",
        "campaign": "string",
        "term": "string",
        "content": "string"
      },
      "page_views_statistics": {
        "count": 0
      },
      "events_statistics": {
        "clicks": 0,
        "error_clicks": 0,
        "rage_clicks": 0,
        "error_logs": 0,
        "net_errors": 0
      }
    }
  ]
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

#### !title Query

#### !!properties page

!name page

!type integer

The number of page to start with (default 0, max 10000).

#### !!properties size

!name size

!type integer

The number of page's size (default 25, max 100).

#### !!properties email

!name email

!type string

The email address that you have associated with a session via [identify](/docs/api/browser/methods#identify).

#### !!properties visitor_id

!name visitor\_id

!type string

The visitor ID.

#### !!properties tz

!name tz

!type string

IANA timezone. Default Europe/London if RelativeDateString is applied.

#### !!properties date_from

!name date\_from

!type&#x20;

[ISO 8601](https://wikipedia.org/wiki/ISO_8601) string or [RelativeDateString](/docs/api/rest/RelativeDateString).

#### !!properties date_to

!name date\_to

!type&#x20;

[ISO 8601](https://wikipedia.org/wiki/ISO_8601) string or [RelativeDateString](/docs/api/rest/RelativeDateString).

### !!definitions

#### !title Response

#### !!properties total

!name total

!type integer

Total number of sessions matching the query

#### !!properties page

!name page

!type object



##### !!properties num

!name num

!type integer

Current page number

##### !!properties size

!name size

!type integer

Number of items per page

#### !!properties sessions

!name sessions

!type array

List of session objects

##### !!properties id

!name id

!type string

Unique identifier for the session

##### !!properties website_id

!name website\_id

!type string

ID of the website where the session was recorded

##### !!properties session_url

!name session\_url

!type string

URL to view the session in LiveSession dashboard

##### !!properties creation_timestamp

!name creation\_timestamp

!type integer

Unix timestamp when the session was created

##### !!properties duration

!name duration

!type integer

Total duration of the session in seconds

##### !!properties end_timestamp

!name end\_timestamp

!type integer

Unix timestamp when the session ended

##### !!properties active_time

!name active\_time

!type integer

Total time the user was actively interacting with the page in seconds

##### !!properties end_url

!name end\_url

!type string

The last URL visited during the session

##### !!properties expiration_timestamp

!name expiration\_timestamp

!type integer

Unix timestamp when the session recording will expire

##### !!properties last_event_timestamp

!name last\_event\_timestamp

!type integer

Unix timestamp of the last event recorded in the session

##### !!properties product

!name product

!type string

Product identifier associated with the session

##### !!properties device

!name device

!type string

Device type (e.g., desktop, mobile, tablet)

##### !!properties tags

!name tags

!type array

Custom tags associated with the session

##### !!properties last_seen_page_view_id

!name last\_seen\_page\_view\_id

!type string

ID of the last page view in the session

##### !!properties seen

!name seen

!type boolean

Whether the session has been viewed in the dashboard

##### !!properties referrer

!name referrer

!type string

URL where the user came from before starting the session

##### !!properties start_url

!name start\_url

!type string

First URL visited during the session

##### !!properties visitor_first_session

!name visitor\_first\_session

!type boolean

Whether this is the visitor's first session

##### !!properties engagment_score

!name engagment\_score

!type number

Calculated engagement score for the session (0-100)

##### !!properties visitor

!name visitor

!type object



###### !!properties id

!name id

!type string

Unique identifier for the visitor

###### !!properties ip

!name ip

!type string

IP address of the visitor

###### !!properties geolocation

!name geolocation

!type object



####### !!properties country_code

!name country\_code

!type string

Two-letter country code (ISO 3166-1 alpha-2)

####### !!properties city

!name city

!type string

City name

####### !!properties region

!name region

!type string

Region or state name

###### !!properties name

!name name

!type string

Name of the visitor if identified

###### !!properties email

!name email

!type string

Email address of the visitor if identified

###### !!properties email_hash

!name email\_hash

!type string

Hashed version of the visitor's email for privacy

###### !!properties params

!name params

!type array

Custom parameters associated with the visitor

####### !!properties name

!name name

!type string

Parameter name

####### !!properties value

!name value

!type string

Parameter value

###### !!properties last_session_timestamp

!name last\_session\_timestamp

!type integer

Unix timestamp of the visitor's last session

###### !!properties first_session_timestamp

!name first\_session\_timestamp

!type integer

Unix timestamp of the visitor's first session

##### !!properties resolution

!name resolution

!type object



###### !!properties height

!name height

!type integer

Screen height in pixels

###### !!properties width

!name width

!type integer

Screen width in pixels

###### !!properties resolution

!name resolution

!type string

Screen resolution (e.g., "1920x1080")

##### !!properties os

!name os

!type object



###### !!properties name

!name name

!type string

Operating system name (e.g., Windows, macOS, iOS)

###### !!properties version

!name version

!type string

Operating system version

##### !!properties browser

!name browser

!type object



###### !!properties description

!name description

!type string

Full browser description string

###### !!properties name

!name name

!type string

Browser name (e.g., Chrome, Firefox, Safari)

###### !!properties version

!name version

!type string

Browser version

##### !!properties utm

!name utm

!type object



###### !!properties source

!name source

!type string

UTM source parameter (e.g., google, facebook)

###### !!properties medium

!name medium

!type string

UTM medium parameter (e.g., cpc, social)

###### !!properties campaign

!name campaign

!type string

UTM campaign parameter

###### !!properties term

!name term

!type string

UTM term parameter (search keywords)

###### !!properties content

!name content

!type string

UTM content parameter

##### !!properties page_views_statistics

!name page\_views\_statistics

!type object



###### !!properties count

!name count

!type integer

Total number of page views in the session

##### !!properties events_statistics

!name events\_statistics

!type object



###### !!properties clicks

!name clicks

!type integer

Total number of clicks during the session

###### !!properties error_clicks

!name error\_clicks

!type integer

Number of clicks on error elements

###### !!properties rage_clicks

!name rage\_clicks

!type integer

Number of rapid clicks indicating user frustration

###### !!properties error_logs

!name error\_logs

!type integer

Number of JavaScript errors logged

###### !!properties net_errors

!name net\_errors

!type integer

Number of network errors encountered
