---
title: Kocek Quota History
---

# Kocek Quota History

**Method:** `GET`  
**URL:** `{{baseUrl}}/kocek/quota/history`

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
    "data": [],
    "message": "Berhasil mendapatkan pencatatan penggunaan layanan Kocek hari ini",
    "meta": {
        "limit": 10,
        "page": 1,
        "total": 0
    },
    "status": "success"
}
```

### 401 - Unauthenticated

**Status:** `401`

```json
{
    "code": 401,
    "message": "Unauthenticated",
    "status": false
}
```

