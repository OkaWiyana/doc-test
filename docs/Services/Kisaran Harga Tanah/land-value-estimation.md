---
title: Land Value Estimation
---

# Land Value Estimation

**Method:** `POST`  
**URL:** `{{baseUrl}}/kocek/land-value-estimation`

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
    "collateral_id": "6135451E32CEA82BE040A8C010012645",
	"transaction_code": "6135451E32CEA82BE040A8C01001262",
    "location": "Pedungan, Denpasar"
}
```

## Responses
### Land Value Estimation

**Status:** `200`

```json
{
    "data": [
        {
            "platform_name": "OLX",
            "platform_site": "olx.co.id",
            "range": "Tidak ada data yang relevan",
            "image_url": "https://storage.googleapis.com/openpublic-documents/kocek/olx.png"
        },
        {
            "platform_name": "Rumah123",
            "platform_site": "rumah123.com",
            "range": "Rp 3.500.000 - Rp 3.500.000",
            "image_url": "https://storage.googleapis.com/openpublic-documents/kocek/rumah123.png"
        },
        {
            "platform_name": "Properti123",
            "platform_site": "properti123.com",
            "range": "Tidak ada data yang relevan",
            "image_url": "https://storage.googleapis.com/openpublic-documents/kocek/properti-123.png"
        },
        {
            "platform_name": "Pinhome",
            "platform_site": "pinhome.id",
            "range": "Tidak ada data yang relevan",
            "image_url": "https://storage.googleapis.com/openpublic-documents/kocek/pinhome.png"
        },
        {
            "platform_name": "Lamudi",
            "platform_site": "lamudi.co.id",
            "range": "Rp 7.000.000 - Rp 9.500.000",
            "image_url": "https://storage.googleapis.com/openpublic-documents/kocek/lamudi.png"
        }
    ],
    "message": "Berhasil memproses permintaan",
    "status": "success"
}
```

### 403 - Layanan tidak aktif

**Status:** `403`

```json
{
    "error": "Layanan estimasi harga tanah sedang tidak tersedia",
    "message": "Layanan estimasi harga tanah sedang tidak tersedia",
    "status": "fail"
}
```

