---
title: Vehicle Get Estimated Price
---

# Vehicle Get Estimated Price

**Method:** `POST`  
**URL:** `{{baseUrl}}/kocek/vehicle/estimated/price`

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
	"platform": "olx",
	"location_id": "2000002",
	"vehicle_type": "200",
	"brand": "motor-bekas-honda",
	"type": "motor-bekas-honda-vario",
	"year": 2010,
	"transmission": "automatic",
	"color": "putih"
}
```

## Responses
### Vehicle Get Estimated Price Empty Result

**Status:** `200`

```json
{
    "data": {
        "id": "",
        "vehicles": [],
        "range_price": "",
        "range_price_formatted": ""
    },
    "message": "Berhasil memproses permintaan",
    "status": "success"
}
```

### Vehicle Get Estimated Price

**Status:** `200`

```json
{
    "data": {
        "id": "c554d8fa-8ed7-46a9-8a2d-724f64b74652",
        "vehicles": [
            {
                "id": "925176331",
                "title": "Vario cw th 2010 Deva motor",
                "price": 5350000,
                "price_formatted": "Rp 5.350.000",
                "url": "https://www.olx.co.id/item/vario-cw-th-2010-deva-motor-iid-925176331",
                "year": "2010",
                "mileage": "25.000-30.000 km",
                "location": "Denpasar Timur, Bali"
            },
            {
                "id": "925790889",
                "title": "Vario cw 2010 hitam silver",
                "price": 7400000,
                "price_formatted": "Rp 7.400.000",
                "url": "https://www.olx.co.id/item/vario-cw-2010-hitam-silver-iid-925790889",
                "year": "2010",
                "location": "Denpasar Barat, Bali"
            },
            {
                "id": "925241673",
                "title": "Vario cw th 2010 Deva motor",
                "price": 5350000,
                "price_formatted": "Rp 5.350.000",
                "url": "https://www.olx.co.id/item/vario-cw-th-2010-deva-motor-iid-925241673",
                "year": "2010",
                "mileage": "20.000-25.000 km",
                "location": "Nusa Dua, Bali"
            },
            {
                "id": "925068239",
                "title": "HONDA VARIO 2010",
                "price": 5950000,
                "price_formatted": "Rp 5.950.000",
                "url": "https://www.olx.co.id/item/honda-vario-2010-iid-925068239",
                "year": "2010",
                "mileage": "20.000-25.000 km",
                "location": "Denpasar Selatan, Bali"
            },
            {
                "id": "925091940",
                "title": "Honda Vario cw 2010 cash Bali dharma motor",
                "price": 6200000,
                "price_formatted": "Rp 6.200.000",
                "url": "https://www.olx.co.id/item/honda-vario-cw-2010-cash-bali-dharma-motor-iid-925091940",
                "year": "2010",
                "mileage": "50.000-55.000 km",
                "location": "Denpasar Selatan, Bali"
            }
        ],
        "range_price": "5350000-7400000",
        "range_price_formatted": "Rp. 5.350.000 - 7.400.000"
    },
    "message": "Berhasil memproses permintaan",
    "status": "success"
}
```

### Vehicle Get Estimated Price Cars

**Status:** `200`

```json
{
    "data": {
        "id": "ec4976fe-924c-4658-b147-1a714f9f2b9b",
        "vehicles": [
            {
                "id": "925187066",
                "title": "Civic Turbo Idaman anda!!",
                "price": 365000000,
                "price_formatted": "Rp 365.000.000",
                "url": "https://www.olx.co.id/item/civic-turbo-idaman-anda-iid-925187066",
                "year": "2020",
                "mileage": "20.000-25.000 km",
                "location": "Kuta Selatan, Bali"
            }
        ],
        "range_price": "365000000-365000000",
        "range_price_formatted": "Rp. 365.000.000 - 365.000.000"
    },
    "message": "Berhasil memproses permintaan",
    "status": "success"
}
```

### 403 - Layanan tidak aktif

**Status:** `403`

```json
{
    "error": "Layanan pengecekan perkiraan harga kendaraan sedang tidak tersedia",
    "message": "Layanan pengecekan perkiraan harga kendaraan sedang tidak tersedia",
    "status": "fail"
}
```

