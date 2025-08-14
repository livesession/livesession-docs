---
title: session.event
---

# session.event

Triggers when an event from session is handled. Currently supported events are:
`JSError`, `NetError`, `ErrorClick`, `RageClick` and `Custom`

## `JSError`
Triggers when a JS error is handled.

```json Example JSError payload
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "JSError",
    "value": "ProductCatalog: product is not valid",
    "count": 1,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}
```

&nbsp;

## `NetError`
Triggers when a network request error is handled.

```json Example NetError payload
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "NetError",
    "method": "GET",
    "url": "https://api.livesession.io/products/1",
    "status": 500,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}
```

&nbsp;

## `ErrorClick`
Triggers when an error click is handled.

```json Example ErrorClick payload
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "ErrorClick",
    "messsage": "product is not defined",
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}
```

&nbsp;

## `RageClick`
Triggers when a rage click is handled.

```json exmple RageClick payload
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "RageClick",
    "clicks": 5,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}
```

&nbsp;

## `Custom`
Triggers when a [custom event](https://help.livesession.io/en/articles/8496404-custom-events) is handled.
These events are made during recording through the `ls.track('EVENT')` using Browser API function.
The payload includes event specifics and potential validation errors for added properties.

The properties field is a map with varying value types.
Value type depends on the property key. For instance, `_str` suffixed keys hold `*string*` values and `_bool` suffixed keys contain `*boolean*` values.
Additional details are available in the knowledge base.

```json Example Custom paylod
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "Custom",
    "name": "Product added",
    "properties": {
      "product_id_int": 1,
      "product_name_str": "Product 1"
    },
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}
```