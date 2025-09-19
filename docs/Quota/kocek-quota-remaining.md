---
title: Kocek Quota Remaining
---

# Kocek Quota Remaining

**Method:** `GET`  
**URL:** `{{baseUrl}}/kocek/quota`

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
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "kyc_feature",
            "name": "Verifikasi Identitas KTP",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Verifikasi%20Identitas%20KTP.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "nae_feature",
            "name": "Pengecekan Kredit CLIK",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Pengecekan%20Kredit%20CLIK.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "me_feature",
            "name": "Pengecekan Pembaruan Kredit CLIK",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Pengecekan%20Kredit%20CLIK.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "vehicle_tax_feature",
            "name": "Pengecekan Pajak Kendaraan",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Pengecekan%20Pajak%20Kendaraan.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "family_card_feature",
            "name": "Verifikasi Identitas KK",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Verifikasi%20Identitas%20KK.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "bpjs_tk_feature",
            "name": "Pengecekan Pendapatan Melalui BPJS-TK",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Pengecekan%20pendapatan%20BPJS-TK.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "land_feature",
            "name": "Validasi Sertifikat Tanah",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Validasi%20Sertifikat%20Tanah%20.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "estimated_land_value_feature",
            "name": "Kisaran Harga Tanah",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Kisaran%20Harga%20Tanah.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "cde_feature",
            "name": "Analisa Kredit Via CDE",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Analisa%20Kredit%20Via%20CDE.png"
        },
        {
            "total_quota": null,
            "used_quota": 0,
            "quota": null,
            "type": "vehicle_estimated_price_feature",
            "name": "Kisaran Harga Kendaraan",
            "icon": "https://storage.googleapis.com/openpublic-documents/kocek/services-icon/Kisaran%20Harga%20Kendaraan.png"
        }
    ],
    "message": "Berhasil mendapatkan sisa kuota layanan kocek",
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

