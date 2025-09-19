---
title: Kocek Quota Summary
---

# Kocek Quota Summary

**Method:** `GET`  
**URL:** `{{baseUrl}}/kocek/quota/summaries`

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
    "data": [
        {
            "type": "kyc_feature",
            "name": "Verifikasi Identitas KTP",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Verifikasi%20Identitas%20KTP.png",
            "usage": 0
        },
        {
            "type": "nae_feature",
            "name": "Pengecekan Kredit CLIK",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Pengecekan%20Kredit%20CLIK.png",
            "usage": 0
        },
        {
            "type": "me_feature",
            "name": "Pengecekan Pembaruan Kredit CLIK",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Pengecekan%20Kredit%20CLIK.png",
            "usage": 0
        },
        {
            "type": "vehicle_tax_feature",
            "name": "Pengecekan Pajak Kendaraan",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Pengecekan%20Pajak%20Kendaraan.png",
            "usage": 0
        },
        {
            "type": "family_card_feature",
            "name": "Verifikasi Identitas KK",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Verifikasi%20Identitas%20KK.png",
            "usage": 0
        },
        {
            "type": "bpjs_tk_feature",
            "name": "Pengecekan Pendapatan Melalui BPJS-TK",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Pengecekan%20pendapatan%20BPJS-TK.png",
            "usage": 0
        },
        {
            "type": "land_feature",
            "name": "Validasi Sertifikat Tanah",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Validasi%20Sertifikat%20Tanah%20.png",
            "usage": 0
        },
        {
            "type": "estimated_land_value_feature",
            "name": "Kisaran Harga Tanah",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Kisaran%20Harga%20Tanah.png",
            "usage": 0
        },
        {
            "type": "cde_feature",
            "name": "Analisa Kredit Via CDE",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Analisa%20Kredit%20Via%20CDE.png",
            "usage": 0
        },
        {
            "type": "vehicle_estimated_price_feature",
            "name": "Kisaran Harga Kendaraan",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Kisaran%20Harga%20Kendaraan.png",
            "usage": 0
        }
    ],
    "message": "Berhasil mendapatkan ringkasan pencatatan penggunaan layanan Kocek",
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

