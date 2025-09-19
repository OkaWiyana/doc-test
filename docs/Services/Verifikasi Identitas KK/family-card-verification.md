---
title: Family Card Verification
---

# Family Card Verification

**Method:** `POST`  
**URL:** `{{baseUrl}}/kocek/family-card-verification`

## Description
_No description provided_

## Request Headers
```json
[
  {
    "key": "User-ID",
    "value": "123",
    "type": "text"
  },
  {
    "key": "User-Name",
    "value": "Samehada",
    "type": "text"
  },
  {
    "key": "User-Role",
    "value": "Eksekutif",
    "type": "text"
  },
  {
    "key": "IP",
    "value": "127.0.0.1",
    "type": "text"
  }
]
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
{
    "identifier": "xxxxxxxxxxxxx",
    "transaction_code": "12345678"
}
```

## Responses
### 403 - Layanan tidak aktif

**Status:** `403`

```json
{
    "message": "Layanan verifikasi KK sedang tidak tersedia",
    "status": "fail"
}
```

