---
title: Verify NIK
---

# Verify NIK

**Method:** `GET`  
**URL:** `{{baseUrl}}/kocek/nik-verification/:nik`

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
### 403 - Layanan tidak aktif

**Status:** `403`

```json
{
    "message": "Layanan KYC sedang tidak tersedia",
    "status": "fail"
}
```

