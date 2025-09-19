---
title: Vehicle Tax Check
---

# Vehicle Tax Check

**Method:** `POST`  
**URL:** `{{baseUrl}}/kocek/vehicle-tax/check/:region/:collateral_id`

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
    "police_number": "DK 3510 LO",
    "id_number": "5104010502980006",
    "vin_number": "09194"
}
```

## Responses
### Success

**Status:** `200`

```json
{
    "data": {
        "vehicle_info": {
            "owner_name": "ADE WILLY SANJAYA",
            "nik_number": "5171011812960005",
            "owner_address": "-",
            "license_number": "-",
            "vehicle_brand": "SUZUKI",
            "vehicle_type": "ARK415F GX (4X2) AT",
            "vehicle_model": "MINIBUS",
            "vehicle_year": "2018",
            "vehicle_color": "-",
            "chassis_number": "-",
            "vehicle_plate_color": "-",
            "fuel_capacity": "-",
            "ownership_status": "1"
        },
        "vehicle_tax_information": {
            "pkb_previous_date": "28-06-2024",
            "stnk_date": "-",
            "vehicle_information": "BELUM BAYAR",
            "pkb_pokok_amount": "Rp. 2,866,500",
            "pkb_denda_amount": "Rp. 0",
            "sumbangan_pokok_amount": "Rp. 143,000",
            "sumbangan_denda_amount": "Rp. 0",
            "stnk_amount": "-",
            "tnkb_amount": "-",
            "pnbp_amount": "Rp. 0",
            "total_amount": "Rp. 3,009,500",
            "pkb_upcoming_date": "28-06-2025"
        }
    },
    "message": "success check vehicle tax",
    "status": "success"
}
```

### KENDARAAN BELUM BISA MELAKUKAN TRANSAKSI/PEMBAYARAN

**Status:** `500`

```json
{
    "error": "KENDARAAN BELUM BISA MELAKUKAN TRANSAKSI/PEMBAYARAN",
    "message": "failed check vehicle tax",
    "status": "fail"
}
```

### Telat bayar pajak 2024, harusnya maret

**Status:** `200`

```json
{
    "data": {
        "vehicle_info": {
            "owner_name": "ANGGARDA SANJAYA",
            "nik_number": "5171012608930003",
            "owner_address": "-",
            "license_number": "-",
            "vehicle_brand": "HONDA",
            "vehicle_type": "V1J02Q32L0 A/T",
            "vehicle_model": "SPD MOTOR SOLO",
            "vehicle_year": "2018",
            "vehicle_color": "-",
            "chassis_number": "-",
            "vehicle_plate_color": "-",
            "fuel_capacity": "-",
            "ownership_status": "1"
        },
        "vehicle_tax_information": {
            "pkb_previous_date": "12-03-2024",
            "stnk_date": "-",
            "vehicle_information": "BELUM BAYAR",
            "pkb_pokok_amount": "Rp. 288,000",
            "pkb_denda_amount": "Rp. 72,000",
            "sumbangan_pokok_amount": "Rp. 35,000",
            "sumbangan_denda_amount": "Rp. 8,000",
            "stnk_amount": "-",
            "tnkb_amount": "-",
            "pnbp_amount": "Rp. 0",
            "total_amount": "Rp. 403,000",
            "pkb_upcoming_date": "12-03-2025"
        }
    },
    "message": "success check vehicle tax",
    "status": "success"
}
```

### The vehicle tax is already paid or cannot do any payments right now

**Status:** `200`

```json
{
    "data": {
        "vehicle_info": {
            "owner_name": "I NENGAH SUKAADNYANA",
            "nik_number": "5102081212710007",
            "owner_address": "-",
            "license_number": "-",
            "vehicle_brand": "HONDA",
            "vehicle_type": "F1C02N28L0 A/T",
            "vehicle_model": "SPD MOTOR SOLO",
            "vehicle_year": "2018",
            "vehicle_color": "-",
            "chassis_number": "-",
            "vehicle_plate_color": "-",
            "fuel_capacity": "-",
            "ownership_status": "2"
        },
        "vehicle_tax_information": {
            "pkb_previous_date": "10-07-2024",
            "stnk_date": "-",
            "vehicle_information": "BELUM BAYAR",
            "pkb_pokok_amount": "Rp. 264,000",
            "pkb_denda_amount": "Rp. 0",
            "sumbangan_pokok_amount": "Rp. 35,000",
            "sumbangan_denda_amount": "Rp. 0",
            "stnk_amount": "-",
            "tnkb_amount": "-",
            "pnbp_amount": "Rp. 0",
            "total_amount": "Rp. 299,000",
            "pkb_upcoming_date": "10-07-2025"
        }
    },
    "message": "success check vehicle tax",
    "status": "success"
}
```

### KENDARAAN HARUS MELAKUKAN PERGANTIAN STNK

**Status:** `500`

```json
{
    "error": "KENDARAAN HARUS MELAKUKAN PERGANTIAN STNK",
    "message": "failed check vehicle tax",
    "status": "fail"
}
```

### 403 - Layanan tidak aktif

**Status:** `403`

```json
{
    "error": "Layanan pengecekan pajak kendaraan sedang tidak tersedia",
    "message": "Layanan pengecekan pajak kendaraan sedang tidak tersedia",
    "status": "fail"
}
```

