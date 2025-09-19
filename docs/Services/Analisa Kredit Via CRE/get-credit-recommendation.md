---
title: Get Credit Recommendation
---

# Get Credit Recommendation

**Method:** `POST`  
**URL:** `{{baseUrl}}/kocek/cde/credit-recommendation`

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
  },
  {
    "key": "X-Cde-Custom-System-Instruction-File",
    "value": "cde/cde_system_instructions_testing_only.json",
    "type": "text",
    "disabled": true
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
	"customer_id": "ac06b74c-6864-407a-802e-f12ee1d8ce40",
	"loan_id": "21bef131-7ef0-405f-bb80-bcc2a53b34ef",
	"character": {
		"name": "fulan",
		"nik": "12121212121212",
		"kyc_status": false,
		"age": 40,
		"birth": "Denpasar, 10 April 1984",
		"gender": "l",
		"member_date": "2020-08-01",
		"occupation": "Pedagang"
	},
	"income": [
		{
			"key": "penghasilan_1",
			"value": "100000-200000"
		},
		{
			"key": "penghasilan_2",
			"value": "200000-300000"
		}
	],
	"expenses": [
		{
			"key": "pengeluaran_1",
			"value": "100000-200000"
		},
		{
			"key": "pengeluaran_2",
			"value": "200000-300000"
		}
	],
	"collaterals": [
		{
			"name": "Avanza",
			"type": "Mobil",
			"code": "MBL",
			"value": 10000000,
			"estimated_price": "10000000-20000000",
			"recognition": 50.00,
			"recognition_value": 500000,
			"is_verified": false,
			"information": "Mobil bekas pakai 3 tahun"
		},
		{
			"name": "Sertifikat Tanah",
			"type": "Sertifikat Tanah",
			"code": "LAND",
			"value": 10000000000,
			"estimated_price": "10000000000-20000000000",
			"recognition": 50.00,
			"recognition_value": 5000000000,
			"is_tax_paid": true,
			"information": "Tanah warisan"
		}
	],
	"application": {
        "plafon": 10000000.00,
        "tenure": 12,
        "purpose": "Konsumtif",
        "interest": 12,

        "loan_interest_method":  3,
        "loan_interest_method_label": "Bunga Anuitas"
	},

    "internal_data": {
        "total_loan": "31",
        "total_loan_active": "18",
        "loan_remaining": "138402100.00",
        "collectability": "Diragukan",
        "behaviour_pattern_deposit_per_month": "8,3",
        "behaviour_pattern_withdrawal_per_month": "17,8",
        "behaviour_pattern_withdrawal_ratio": "174,48%",
        "behaviour_pattern_avg_balance": "21243239.67",
        "behaviour_pattern_avg_growth_balance": null,
        "total_saving": "7",
        "total_saving_active": "6",
        "total_balance_active": "4150000.00",
        "total_deposit": "2",
        "total_deposit_balance": "20000000.00",
        "total_deposit_active": "2",
        "total_deposit_active_balance": "20000000.00"
    }
}
```

## Responses
### Get Credit Recommendation

**Status:** `200`

```json
{
    "data": {
        "5c": {
            "capacity": "",
            "capital": "",
            "character": "",
            "collateral": "",
            "condition": ""
        },
        "recommendation": {
            "plafon": "",
            "tenure": ""
        }
    },
    "message": "Generate credit recommendation successfully",
    "status": "success"
}
```

### Get Credit Recommendation

**Status:** `200`

```json
{
    "data": {
        "id": "14ba5fa6-bca3-450a-b149-47d460ad5ce6"
    },
    "message": "Generate credit recommendation successfully",
    "status": "success"
}
```

### Get Credit Recommendation

**Status:** `200`

```json
{
    "data": {
        "id": "e13aa598-9d1b-47f5-9d3f-241261c7c5cb"
    },
    "message": "Berhasil mendapatkan rekomendasi kredit",
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

