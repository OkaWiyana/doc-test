---
title: Get List History Credit Recommendation
---

# Get List History Credit Recommendation

**Method:** `GET`  
**URL:** `{{baseUrl}}/kocek/cde/credit-recommendation?loan_id=loan_id&customer_id=customer_id&status=fail`

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
### Success

**Status:** `200`

```json
{
    "data": [
        {
            "id": "51bb0f1e-b39d-4e3e-b322-5e6fd064ebe9",
            "date": "Senin 21 October 2024 15:36",
            "datetime": "2024-10-21T00:15:00Z"
        }
    ],
    "message": "Generate list credit recommendation successfully",
    "meta": {
        "limit": 10,
        "page": 1,
        "total": 1
    },
    "status": "success"
}
```

### Empty

**Status:** `200`

```json
{
    "data": [],
    "message": "Generate list credit recommendation successfully",
    "meta": {
        "limit": 10,
        "page": 1,
        "total": 0
    },
    "status": "success"
}
```

### 403 - Layanan tidak aktif

**Status:** `403`

```json
{
    "error": "Layanan pengecekan rekomendasi pinjaman sedang tidak tersedia",
    "message": "Layanan pengecekan rekomendasi pinjaman sedang tidak tersedia",
    "status": "fail"
}
```

