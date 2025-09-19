---
title: Get Client Info
---

# Get Client Info

**Method:** `GET`  
**URL:** `{{baseUrl}}/auth/client`

## Description
_No description provided_

## Request Headers
```json
[]
```

## Authentication
```json
{
  "type": "bearer",
  "bearer": [
    {
      "key": "token",
      "value": "{{access_token}}",
      "type": "string"
    }
  ]
}
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
    "message": "Get client successfully",
    "data": {
        "code": "SANBOX",
        "name": "KOCEK SANDBOX",
        "desc": null,
        "company_code": "KOCEKSANBOX"
    }
}
```

### 401 - Unauthorized

**Status:** `401`

```json
{
    "status": false,
    "message": "Unauthorized",
    "data": null
}
```

