---
title: Login
---

# Login

**Method:** `POST`  
**URL:** `{{baseUrl}}/auth/client/login`

## Description
_No description provided_

## Request Headers
```json
[
  {
    "key": "signature",
    "value": "{{signature}}",
    "type": "text"
  },
  {
    "key": "timestamp",
    "value": "{{timestamp}}",
    "type": "text"
  },
  {
    "key": "company",
    "value": "{{company}}",
    "type": "text"
  }
]
```

## Authentication
```json
{}
```

## Request Body
```json
{}
```

## Responses
### 200 - OK

**Status:** `200`

```json
{
    "status": true,
    "message": "Berhasil melakukan login",
    "data": {
        "access_token": "13568|BlWOYNT6Ctb7Vw8e1QIUzKyvZqu2J5xDjHhcgs3S"
    }
}
```

### 400 - Signature not valid

**Status:** `400`

```json
{
    "status": false,
    "message": "signature not valid",
    "data": null
}
```

