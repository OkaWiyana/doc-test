---
title: BPJS TK Verification
---

# BPJS TK Verification

**Method:** `POST`  
**URL:** `{{baseUrl}}/kocek/bpjs-tk-verification`

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
    "id": "xxxx",
    "transaction_code": "123456789"
}
```

## Responses
### Success Response

**Status:** `200`

```json
{
    "data": {
        "id": "378edffb-1870-46af-9401-884a34b63b60",
        "national_identity_number": "3174011111111111",
        "income_range_result": "10.5-13JT",
        "company_name": "PT. ABCD",
        "created_at": "2024-08-16T15:47:47.444307+08:00",
        "updated_at": "2024-08-16T15:47:47.444307+08:00",
        "deleted_at": null
    },
    "message": "success verifying bpjs tk",
    "status": "success"
}
```

### Empty Response

**Status:** `200`

```json
{
    "data": {
        "id": "34052a7e-d726-4f52-83f9-3d1b568b2709",
        "national_identity_number": "xxxx",
        "income_range_result": "-",
        "company_name": "-",
        "created_at": "2024-08-16T16:35:30.8326343+08:00",
        "updated_at": "2024-08-16T16:35:30.8326343+08:00",
        "deleted_at": null
    },
    "message": "success verifying bpjs tk",
    "status": "success"
}
```

### 403 - Layanan tidak aktif

**Status:** `403`

```json
{
    "message": "Layanan verifikasi BPJS TK sedang tidak tersedia",
    "status": "fail"
}
```

