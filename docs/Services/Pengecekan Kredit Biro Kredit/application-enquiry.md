---
title: Application Enquiry
---

# Application Enquiry

**Method:** `POST`  
**URL:** `{{baseUrl}}/kocek/enquiry`

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
  "subject": {
    "subject_ref_date": "2024-04-01",
    "individual": {
      "gender": "P",
      "individual_name": {
        "name_as_id": "VERA MELATI",
        "full_name": "",
        "mothers_name": ""
      },
      "birth_data": {
        "birth_date": "1979-09-12",
        "birth_place": ""
      },
      "address": {
        "address": "Jl. Sei Batu Gingging No.17",
        "sub_district": "Babura",
        "district": "Medan Baru",
        "city": "7200",
        "postal_code": "20153",
        "country": "ID"
      },
      "identification_code": {
        "identity_type": "1",
        "identity_number": "5103035003780001",
        "customer_id": "5103035003780001"
      },
      "id": {
        "npwp": ""
      },
      "contact": {
        "phone_number": "",
        "cellphone_number": "081928292829",
        "email_address": ""
      }
    }
  },
  "application": {
    "loan_account_id": "2d9i3499-2c87-4a6e-a4c5-02c816bf5aa8",
    "loan_account_code": "LOANCODEDUMMY08",
    "contract_request_date": "2024-08-06",
    "currency": "IDR",
    "credit": {
      "application_amount": "20000000.00",
      "due_date": "",
      "original_agreement_number": "",
      "original_agreement_date": ""
    }
  },
  "consents": [
    {
        "file_type": "ktp",
        "path": "001/ktp/yyy.jpg",
        "status": "valid"
    },
    {
        "file_type": "submission-form",
        "path": "001/submission-form/yyy.jpg",
        "status": "invalid"
    }
  ],
  "purpose": {
    "purpose_code": "10"
  }
}
```

## Responses
### 403 - Layanan tidak aktif

**Status:** `500`

```json
{
    "message": "Layanan NAE sedang tidak tersedia",
    "status": "fail"
}
```

