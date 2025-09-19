---
title: Verify Land
---

# Verify Land

**Method:** `POST`  
**URL:** `{{baseUrl}}/kocek/land-verification`

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
    "search": "nomorhak",
    "subdistrict_id": "61386E3A0CBB9580E040A8C010011B70",
    "regency_id" : "61384E13FA4F4D94E040A8C0100119F1",
    "nib": "",
    "right_type": "1",
    "right_number": "00385",
    "transaction_code" : "transaction_code_12",
    "collateral_id" : "collateral_12"
}
```

## Responses
### Verify Land

**Status:** `200`

```json
{
    "data": {
        "id": "94b0d726-164e-4563-aeec-6263df46f0b3",
        "regency_id": "61384E13FA4F4D94E040A8C0100119F1",
        "subdistrict_id": "61386E3A0CBB9580E040A8C010011B70",
        "nib": "00633",
        "field_accuracy": 0,
        "measuring_tool": "",
        "area": "235",
        "persil_persif_id": "",
        "year": "0",
        "right_type": "Hak Milik",
        "office_id": "61384E13FA504D94E040A8C0100119F1",
        "value_class": "4",
        "office_name": "Kab. Buleleng",
        "zone_number": "68",
        "value_range": "500.000 - 1.000.000",
        "min_value": "500000",
        "max_value": "1000000",
        "year_created": "2025",
        "land_value_zone_id": "2AB6083B294F1E60E063B416140ADC28",
        "metadata": {
            "bbox": "114.929508803111,-8.19800957189927,114.929725972771,-8.1978095661412",
            "width": 1206,
            "height": 927,
            "x_axis": 603,
            "y_axis": 464,
            "img_url": "https://storage.googleapis.com/openpublic-documents/maps/b00c405f-62f8-4dc7-87b4-2b4392c5f7c6.jpg",
            "max_lat": -8.1978095661412,
            "max_lon": 114.929725972771,
            "min_lat": -8.19800957189927,
            "min_lon": 114.929508803111,
            "gmaps_url": "https://maps.google.com/?q=-8.197929569596042,114.929595670975",
            "atrbpn_url": "https://bhumi.atrbpn.go.id/peta?bbox=114.929508803111%2C-8.19800957189927%2C114.929725972771%2C-8.1978095661412&height=927&width=1206&x=603&y=464&latitude=-8.197929569596042&longitude=114.929595670975&recenter=1",
            "center_lat": -8.197929569596042,
            "center_lon": 114.929595670975
        },
        "land_obj_name": "",
        "land_usage": "",
        "collateral_id": "206fn",
        "search_type": "nomorhak",
        "search_no": "00385",
        "created_at": "2025-04-17T08:27:19.618205Z",
        "updated_at": "2025-04-17T08:27:19.618209Z",
        "deleted_at": null
    },
    "message": "Berhasil memproses permintaan",
    "status": "success"
}
```

### 403 - Layanan tidak aktif

**Status:** `403`

```json
{
    "error": "Layanan verifikasi tanah sedang tidak tersedia",
    "message": "Layanan verifikasi tanah sedang tidak tersedia",
    "status": "fail"
}
```

