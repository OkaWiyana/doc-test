---
title: Show Enquiry
---

# Show Enquiry

**Method:** `GET`  
**URL:** `{{baseUrl}}/kocek/show-enquired-report?customer_id=5d4b8661-0f10-487b-83c5-8881c65169a8`

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
    "data": {
        "stats": null,
        "service_id": "CBG",
        "id": "CB_NAE_Product",
        "version": "CB_NAE_Product.2024-08-27.001",
        "loan_account_id": "e125e279-7747-4154-b043-6e43e4025f19",
        "result_language": "en-US",
        "result_code": "S",
        "result_description": "Success.",
        "cb_nae_product_output": {
            "message_id": {
                "cbs_message_id": "20241101_LOhYG1124.0936"
            },
            "enquired_data": {},
            "credit_report": {
                "matched_subject": {
                    "reference_no": "1",
                    "cb_subject_code": "C02378529",
                    "flag_matched": "1",
                    "individual": {
                        "resident": "S14",
                        "resident_desc": "Yes",
                        "gender": "P",
                        "gender_desc": "Perempuan",
                        "marriage_status": "1",
                        "marriage_status_desc": "MENIKAH",
                        "educational_status_code": "04",
                        "educational_status_code_desc": "S-1",
                        "last_update_date": "2024-11-01",
                        "individual_name": {
                            "name_as_id": "VERA MELATI",
                            "full_name": "VERA MELATI",
                            "mothers_name": "HERLINA SARI"
                        },
                        "birth_data": {
                            "date": "1979-09-12",
                            "place": "TEBING TINGGI"
                        },
                        "address_history": [
                            {
                                "flag_current": "1",
                                "last_update_date": "2024-11-01",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "TEBING TINGGI",
                                    "district": "CIMAHI",
                                    "city": "0100",
                                    "postal_code": "80582",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Provinsi Jawa Barat",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-09-30",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "BABURA",
                                    "district": "MEDAN BARU",
                                    "city": "3396",
                                    "postal_code": "20153",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kota Medan",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-07-11",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "MANTUL",
                                    "district": "CIMAHI",
                                    "city": "0103",
                                    "postal_code": "80561",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Purwakarta",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-06-24",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "BABURA",
                                    "district": "MEDAN BARU",
                                    "city": "7200",
                                    "postal_code": "20153",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Provinsi Bali",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-06-10",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "TEBING TINGGI",
                                    "district": "CIMAHI",
                                    "city": "0102",
                                    "postal_code": "20611",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Bekasi",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-05-19",
                                "address": {
                                    "address": "-",
                                    "sub_district": "ANJAY",
                                    "district": "MANTUL",
                                    "city": "0100",
                                    "postal_code": "80561",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Provinsi Jawa Barat",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-05-02",
                                "address": {
                                    "address": "-",
                                    "sub_district": "ANJAY",
                                    "district": "ANJAY",
                                    "city": "0102",
                                    "postal_code": "80561",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Bekasi",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-05-02",
                                "address": {
                                    "address": "-",
                                    "sub_district": "ANJAY",
                                    "district": "MEDAN BARU",
                                    "city": "0100",
                                    "postal_code": "80561",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Provinsi Jawa Barat",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-04-22",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "TEBING TINGGI",
                                    "district": "CIMAHI",
                                    "city": "0300",
                                    "postal_code": "20611",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Provinsi DKI Jaya",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-04-22",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "TEBING TINGGI",
                                    "district": "CIMAHI",
                                    "city": "0109",
                                    "postal_code": "20611",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Sukabumi",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-04-18",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "TEBING TINGGI",
                                    "district": "CIMAHI",
                                    "city": "0106",
                                    "postal_code": "20611",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Karawang",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-04-17",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "TEBING TINGGI",
                                    "district": "CIMAHI",
                                    "city": "0900",
                                    "postal_code": "20611",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Provinsi Jawa Tengah",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-03-18",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "BABURA",
                                    "district": "MEDAN BARU",
                                    "city": "7291",
                                    "postal_code": "23",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kota Denpasar",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-03-18",
                                "address": {
                                    "address": "JL. SEI BATU GINGGING NO.17",
                                    "sub_district": "BABURA",
                                    "district": "MEDAN BARU",
                                    "city": "9999",
                                    "postal_code": "20153",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Outside Indonesia",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-02-07",
                                "address": {
                                    "address": "BTN BALIASE RT 010 RW 004",
                                    "sub_district": "RAWANG",
                                    "district": "SETIABUDI",
                                    "city": "0102",
                                    "postal_code": "789",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Bekasi",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-02-07",
                                "address": {
                                    "address": "KOMPLEK JONDUL BLOK.C/12 RT 003 RW 009",
                                    "sub_district": "RAWANG",
                                    "district": "PALU TIMUR",
                                    "city": "0109",
                                    "postal_code": "789",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Sukabumi",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-02-07",
                                "address": {
                                    "address": "KOMPLEK JONDUL BLOK.C/12 RT 003 RW 009",
                                    "sub_district": "PASAR SENEN",
                                    "district": "PADANG SELATAN",
                                    "city": "0111",
                                    "postal_code": "3567",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Bandung",
                                    "country_desc": "INDONESIA"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-02-07",
                                "address": {
                                    "address": "JL. OTISTA NO. 57 RT 001 RW 003",
                                    "sub_district": "KUNINGAN",
                                    "district": "SETIABUDI",
                                    "city": "0108",
                                    "postal_code": "19787",
                                    "country": "ID"
                                },
                                "address_desc": {
                                    "city_desc": "Kab. Bogor",
                                    "country_desc": "INDONESIA"
                                }
                            }
                        ],
                        "identification_code": {
                            "last_update_date": "2024-11-01",
                            "identification_code": {
                                "identity_type": "1",
                                "identity_number": "10201300000000"
                            },
                            "identification_code_desc": {
                                "identity_type_desc": "KTP"
                            }
                        },
                        "id": {},
                        "contact_history": [
                            {
                                "flag_current": "1",
                                "last_update_date": "2024-11-01",
                                "contacts": {
                                    "phone_number": "0",
                                    "cellphone_number": "81123233543",
                                    "email_address": "VERAM@EMAIL.COM"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-09-30",
                                "contacts": {
                                    "cellphone_number": "088923458754"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-05-19",
                                "contacts": {
                                    "cellphone_number": "812362666773"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-05-16",
                                "contacts": {
                                    "cellphone_number": "88923458754"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-04-17",
                                "contacts": {
                                    "cellphone_number": "8112323343"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-04-01",
                                "contacts": {
                                    "cellphone_number": "ANJAY"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-03-18",
                                "contacts": {
                                    "cellphone_number": "088923458753"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-02-07",
                                "contacts": {
                                    "cellphone_number": "0811454665"
                                }
                            },
                            {
                                "flag_current": "0",
                                "last_update_date": "2024-02-07",
                                "contacts": {
                                    "cellphone_number": "085255029991"
                                }
                            }
                        ],
                        "employment_data_history": [
                            {
                                "flag_current": "1",
                                "last_update_date": "2023-01-31",
                                "occupation_code": "",
                                "workplace": "",
                                "employer_sector": "",
                                "workplace_address": "",
                                "employment_data_desc": {
                                    "occupation_desc": "Government Employee / State Institution (other than Official / State Officer)",
                                    "employer_sector_desc": "GOVERNMENT ADMINISTRATION, DEFENSE AND SOCIAL SECURITY MANDATORY"
                                }
                            }
                        ]
                    }
                },
                "contracts_history": {
                    "aggregated_data": {
                        "contracts_number": "153",
                        "reporting_providers_number": "5",
                        "total_credit_limit": "5000000",
                        "total_potential_exposure": "3605385577",
                        "total_debit_balance": "5000000",
                        "total_overdue": "0",
                        "currency": "IDR",
                        "currency_desc": "Indonesian Rupiah"
                    },
                    "credit": {
                        "numbers_summary": {
                            "requested": "152",
                            "active": "1",
                            "refused": "0",
                            "renounced": "0",
                            "closed": "0"
                        },
                        "amounts_summary": {
                            "contracts_counter": "1",
                            "credit_limit": "5000000",
                            "debit_balance": "5000000",
                            "overdue": "0"
                        },
                        "not_granted_credits": [
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "004209511",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-11-01",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-11-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04211743",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-11-01",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-11-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "150000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "G04213069",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-11-01",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-11-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "E04211271",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "535",
                                    "provider_code_desc": "PT Bank Seabank Indonesia",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-09-30",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "D04211802",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-16",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04209126",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-08-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-13",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "604211490",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-08-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-13",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "C04209193",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-08-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-13",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "R04211617",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-08-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-12",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04210524",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-08-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-12",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "L04212400",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-08-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-06",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "H04211480",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-08-05",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-05",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "504208393",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-08-02",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "704213685",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "535",
                                    "provider_code_desc": "PT Bank Seabank Indonesia",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-07-17",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "R04211269",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-07-11",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04210181",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-07-11",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-07-11",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "904208202",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "535",
                                    "provider_code_desc": "PT Bank Seabank Indonesia",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-07-08",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "804211409",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-24",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04209935",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-19",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "F04211385",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04209879",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "L04211787",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04208471",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "F04211386",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "204206969",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "O04209207",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "804211285",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "504207842",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "904207921",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "004207569",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "S04208793",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "104207129",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-10",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-10",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "F04211357",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-06",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "J04210355",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-06",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "504207808",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-06-04",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-06-04",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "S04208711",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "304209669",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-19",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-19",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "F04211245",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-16",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-16",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "8000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "C04208338",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-13",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-13",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "604210614",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-08",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-08",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "304209614",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-07",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-07",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "G04210962",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-03",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-06",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "10000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "R04210762",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-06",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "9999999"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "I04209113",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-06",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-06",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "D04210769",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-03",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04208233",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "804211077",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "404210816",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-03",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "C04208255",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "004207311",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-02",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-02",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "K04213266",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-05-02",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-05-02",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "Q04210475",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-30",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-30",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "G04210899",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-29",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-29",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "13000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "104206860",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-29",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-29",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "I04209052",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-29",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "I04209054",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-29",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "604210471",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "704213037",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "S04208450",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-24",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "904207596",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-22",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-22",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "H04210585",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-22",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-22",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "L04211433",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-22",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-22",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "904207561",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-18",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "50000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "C04208108",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-18",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "H04210568",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-18",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "2000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "R04210578",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-17",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-17",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "85000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "304209416",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-17",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-17",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "E04209259",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-17",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-17",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "45000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "D04210635",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-17",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-17",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "3000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "M04206296",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-17",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-17",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "50000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "D04210630",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-16",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-16",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12345678"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "H04210547",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-16",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "604210366",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-16",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-16",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "30040000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "A04209425",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-15",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-15",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "70000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "J04210004",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-15",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-15",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "85000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04208066",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-15",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-15",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "60000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04208048",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-12",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-12",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "499999900"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "S04208352",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-08",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-08",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "204206542",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-08",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-08",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "14000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "H04210498",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-08",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-08",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "11000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04209466",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-08",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "O04208758",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-08",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "O04208738",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-05",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-05",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "H04210488",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-05",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-05",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "K04213053",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-02",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-04",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "40000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "104206707",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-02",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-04",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "50000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "O04208730",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-04",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "704212899",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-04",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "N04208008",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04207984",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "904207492",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "604210282",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "D04210561",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "O04208723",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "904207491",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "304209355",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-04-03",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "12000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "M04206236",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "C04208021",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2023-10-26",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "S04208327",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-03",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "R04210500",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-02",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04209425",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-02",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "S04208308",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-02",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "204206500",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-02",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "M04206207",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "L04211306",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "504207387",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04207951",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "D04210537",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "O04208701",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "C04207993",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "T04211653",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-04-01",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "O04208670",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-27",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "404210540",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-27",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "E04209103",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "N04207958",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04207908",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "404210527",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "R04210446",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "604210194",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "N04207957",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "804210815",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "J04209877",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "804210803",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "204206443",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "L04211267",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "Q04210200",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "304209304",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "M04206166",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "E04209115",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-26",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "R04210441",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-25",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04209363",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-25",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "D04210493",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-25",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "F04210828",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-25",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "Q04210182",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-25",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "404210517",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-22",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "704212828",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-21",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "L04211256",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-21",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "C04207927",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-21",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "504207329",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-21",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "K04212958",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-21",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "104206609",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-20",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "804210770",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "900087",
                                    "provider_code_desc": "KOPERASI JASA MUDA ARTHA SWAHA ",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-20",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "D04210472",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "535",
                                    "provider_code_desc": "PT Bank Seabank Indonesia",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-19",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "004206976",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "535",
                                    "provider_code_desc": "PT Bank Seabank Indonesia",
                                    "contract_request_date": "2024-02-18",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-03-18",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "104206505",
                                    "contract_type": "N99",
                                    "contract_type_desc": "Tanpa Perjanjian Kredit atau Pembiayaan Lainnya",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0909",
                                    "provider_type_code_desc": "Lembaga Non Lembaga Jasa Keuangan",
                                    "provider_code": "9999",
                                    "provider_code_desc": "NORA PROVIDER",
                                    "contract_request_date": "2024-02-28",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-02-28",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "20000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "F04210596",
                                    "contract_type": "N99",
                                    "contract_type_desc": "Tanpa Perjanjian Kredit atau Pembiayaan Lainnya",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "1002",
                                    "provider_type_code_desc": "Institusi Non Finansial - E Commerce",
                                    "provider_code": "100200",
                                    "provider_code_desc": "PT. Raja Sukses Propertindo",
                                    "contract_request_date": "2024-02-07",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-02-07",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "10000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "404210263",
                                    "contract_type": "P99",
                                    "contract_type_desc": "Lainnya",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "1002",
                                    "provider_type_code_desc": "Institusi Non Finansial - E Commerce",
                                    "provider_code": "100200",
                                    "provider_code_desc": "PT. Raja Sukses Propertindo",
                                    "contract_request_date": "2024-02-07",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-02-07",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "10000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "804210507",
                                    "contract_type": "P99",
                                    "contract_type_desc": "Lainnya",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "1002",
                                    "provider_type_code_desc": "Institusi Non Finansial - E Commerce",
                                    "provider_code": "100200",
                                    "provider_code_desc": "PT. Raja Sukses Propertindo",
                                    "contract_request_date": "2024-02-07",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-02-07",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "10000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "104206377",
                                    "contract_type": "P99",
                                    "contract_type_desc": "Lainnya",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "1002",
                                    "provider_type_code_desc": "Institusi Non Finansial - E Commerce",
                                    "provider_code": "100200",
                                    "provider_code_desc": "PT. Raja Sukses Propertindo",
                                    "contract_request_date": "2024-02-07",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-02-07",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "10000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "P04209017",
                                    "contract_type": "P08",
                                    "contract_type_desc": "Gadai",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "535",
                                    "provider_code_desc": "PT Bank Seabank Indonesia",
                                    "contract_request_date": "2024-01-17",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-01-17",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "100000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "L04210901",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "535",
                                    "provider_code_desc": "PT Bank Seabank Indonesia",
                                    "contract_request_date": "2024-01-16",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-01-16",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "1000000"
                                }
                            },
                            {
                                "not_granted_contract": {
                                    "cb_contract_code": "B04207604",
                                    "contract_type": "P05",
                                    "contract_type_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "contract_phase": "RQ",
                                    "contract_phase_desc": "Dimohon",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "535",
                                    "provider_code_desc": "PT Bank Seabank Indonesia",
                                    "contract_request_date": "2024-01-16",
                                    "currency_code": "IDR",
                                    "currency_desc": "Indonesian Rupiah",
                                    "last_update_date": "2024-01-16",
                                    "reference_no": "1"
                                },
                                "not_granted_credit": {
                                    "application_amount": "1000000"
                                }
                            }
                        ],
                        "granted_credit": [
                            {
                                "join_account_number": {},
                                "common_data": {
                                    "reference_no": "1",
                                    "cb_contract_code": "804210423",
                                    "provider_type_code": "0101",
                                    "provider_type_code_desc": "Bank Umum Konvensional",
                                    "provider_code": "117",
                                    "provider_code_desc": "PT BPD Sumatera Utara",
                                    "reference_date": "2023-12-31",
                                    "contract_phase": "AC",
                                    "contract_phase_desc": "Aktif",
                                    "role": "B",
                                    "role_desc": "Borrower",
                                    "contract_type_code": "P05",
                                    "contract_type_code_desc": "Kartu Kredit atau Kartu Pembiayaan Syariah",
                                    "start_date": "2023-01-10",
                                    "due_date": "2024-01-10",
                                    "currency_code": "IDR",
                                    "currency_code_desc": "Indonesian Rupiah",
                                    "past_due_status_code": "1",
                                    "past_due_status_desc": "Current",
                                    "contract_status_code": "00",
                                    "contract_status_desc": "Fasilitas Aktif"
                                },
                                "granted_credit": {
                                    "code_characteristic_credit": "9",
                                    "code_characteristic_credit_desc": "Lainnya",
                                    "code_agreement_credit": "000",
                                    "code_agreement_credit_desc": "Konvensional",
                                    "frequency_of_credit": "0",
                                    "start_date_of_credit": "2023-01-10",
                                    "debtor_category_code": "NU",
                                    "debtor_category_code_desc": "Bukan Debitur Usaha Mikro, Kecil, dan Menengah",
                                    "usage_type_code": "3",
                                    "usage_type_code_desc": "Konsumsi",
                                    "usage_orientation_code": "3",
                                    "usage_orientation_code_desc": "Lainnya",
                                    "economic_sector_code": "O00000",
                                    "economic_sector_code_desc": "ADMINISTRASI PEMERINTAHAN, PERTAHANAN DAN JAMINAN SOSIAL WAJIB",
                                    "city_code": "3396",
                                    "city_code_desc": "Kota Medan",
                                    "project_value": "0",
                                    "interest_rate": "2",
                                    "type_of_interest_rate": "1",
                                    "type_of_interest_rate_desc": "Suku Bunga Fixed",
                                    "financing_program": "10",
                                    "financing_program_desc": "Kredit yang bukan merupakan kredit atau pembiayaan dalam rangka program pemerintah",
                                    "initial_credit_limit": "60000000",
                                    "credit_limit": "5000000",
                                    "current_month_realization": "0",
                                    "penalty": "0",
                                    "debit_balance": "5000000",
                                    "value_in_original_currency": "0",
                                    "principal_overdue_amount": "0",
                                    "interest_overdue_amount": "0",
                                    "days_past_due": "0",
                                    "overdue_payments_number": "0",
                                    "frequency_of_restructuring": "0"
                                },
                                "maximum": {
                                    "max_overdue_payments_amount": "20400000",
                                    "max_overdue_payments_number": "4",
                                    "max_overdue_payments_number_date": "2023-06-30",
                                    "max_days_past_due": "95",
                                    "max_days_past_due_date": "2023-06-30",
                                    "worst_status_code": "3",
                                    "worst_status_desc": "Kurang Lancar",
                                    "worst_status_date": "2023-06-30"
                                },
                                "credit_profiles": [
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "12",
                                        "days_past_due": "0",
                                        "overdue": "0",
                                        "overdue_payments_number": "0",
                                        "quality_code": "1",
                                        "quality_code_desc": "Lancar",
                                        "debit_balance": "5000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "11",
                                        "days_past_due": "0",
                                        "overdue": "0",
                                        "overdue_payments_number": "0",
                                        "quality_code": "1",
                                        "quality_code_desc": "Lancar",
                                        "debit_balance": "10000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "10",
                                        "days_past_due": "15",
                                        "overdue": "5100000",
                                        "overdue_payments_number": "0",
                                        "quality_code": "2",
                                        "quality_code_desc": "Dalam Perhatian Khusus",
                                        "debit_balance": "20000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "9",
                                        "days_past_due": "0",
                                        "overdue": "0",
                                        "overdue_payments_number": "0",
                                        "quality_code": "1",
                                        "quality_code_desc": "Lancar",
                                        "debit_balance": "20000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "8",
                                        "days_past_due": "0",
                                        "overdue": "0",
                                        "overdue_payments_number": "0",
                                        "quality_code": "1",
                                        "quality_code_desc": "Lancar",
                                        "debit_balance": "25000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "7",
                                        "days_past_due": "0",
                                        "overdue": "0",
                                        "overdue_payments_number": "0",
                                        "quality_code": "1",
                                        "quality_code_desc": "Lancar",
                                        "debit_balance": "30000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "6",
                                        "days_past_due": "95",
                                        "overdue": "20400000",
                                        "overdue_payments_number": "4",
                                        "quality_code": "3",
                                        "quality_code_desc": "Kurang Lancar",
                                        "debit_balance": "55000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "5",
                                        "days_past_due": "65",
                                        "overdue": "15300000",
                                        "overdue_payments_number": "3",
                                        "quality_code": "2",
                                        "quality_code_desc": "Dalam Perhatian Khusus",
                                        "debit_balance": "55000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "4",
                                        "days_past_due": "35",
                                        "overdue": "10200000",
                                        "overdue_payments_number": "2",
                                        "quality_code": "2",
                                        "quality_code_desc": "Dalam Perhatian Khusus",
                                        "debit_balance": "55000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "3",
                                        "days_past_due": "5",
                                        "overdue": "5100000",
                                        "overdue_payments_number": "1",
                                        "quality_code": "2",
                                        "quality_code_desc": "Dalam Perhatian Khusus",
                                        "debit_balance": "55000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "2",
                                        "days_past_due": "0",
                                        "overdue": "0",
                                        "overdue_payments_number": "0",
                                        "quality_code": "1",
                                        "quality_code_desc": "Lancar",
                                        "debit_balance": "55000000",
                                        "current_month_realization": "0",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    },
                                    {
                                        "reference_year": "2023",
                                        "reference_month": "1",
                                        "days_past_due": "0",
                                        "overdue": "0",
                                        "overdue_payments_number": "0",
                                        "quality_code": "1",
                                        "quality_code_desc": "Lancar",
                                        "debit_balance": "60000000",
                                        "current_month_realization": "60000000",
                                        "contract_status_code": "00",
                                        "contract_status_desc": "Fasilitas Aktif"
                                    }
                                ],
                                "collaterals": {
                                    "collaterals_summary": {
                                        "collaterals_counter": "1",
                                        "total_collateral_value": "0"
                                    },
                                    "granted_collaterals": [
                                        {
                                            "attribute_data": {
                                                "provider_type_code": "0101",
                                                "provider_type_code_desc": "Bank Umum Konvensional",
                                                "provider_code": "117",
                                                "provider_code_desc": "PT BPD Sumatera Utara",
                                                "reference_date": "2023-01-31"
                                            },
                                            "granted_collateral": {
                                                "collateral_number": "134754623",
                                                "collateral_status_code": "1",
                                                "collateral_status_desc": "Tersedia",
                                                "collateral_type_code": "F10",
                                                "collateral_type_desc": "Tabungan",
                                                "bind_date": "2023-01-12",
                                                "collateral_owner_name": "VERA MELATI",
                                                "proof_of_ownership": "8365193",
                                                "collateral_value_njop": "0",
                                                "collateral_value_reporter": "0",
                                                "collateral_value_independent_assessors": "0",
                                                "common_collateral_status": "Y",
                                                "common_collateral_status_desc": "Yes",
                                                "common_collateral_percentage": "0",
                                                "joint_account_credit_status": "T",
                                                "joint_account_credit_status_desc": "Tidak",
                                                "insured": "T",
                                                "insured_desc": "Tidak"
                                            },
                                            "collateral_address": {
                                                "address": {
                                                    "address": "JL SEI BATU GINGGING NO.17",
                                                    "city": "3396"
                                                },
                                                "address_desc": {
                                                    "city_desc": "Kota Medan"
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "bond": {
                        "numbers_summary": {
                            "requested": "0",
                            "active": "0",
                            "refused": "0",
                            "renounced": "0",
                            "closed": "0"
                        },
                        "amounts_summary": {
                            "contracts_counter": "0",
                            "debit_balance": "0",
                            "overdue": "0"
                        }
                    },
                    "letter_of_credit": {
                        "numbers_summary": {
                            "requested": "0",
                            "active": "0",
                            "refused": "0",
                            "renounced": "0",
                            "closed": "0"
                        },
                        "amounts_summary": {
                            "contracts_counter": "0",
                            "credit_limit": "0",
                            "debit_balance": "0"
                        }
                    },
                    "guarantee": {
                        "numbers_summary": {
                            "requested": "0",
                            "active": "0",
                            "refused": "0",
                            "renounced": "0",
                            "closed": "0"
                        },
                        "amounts_summary": {
                            "contracts_counter": "0",
                            "credit_limit": "0",
                            "debit_balance": "0"
                        }
                    },
                    "other_facilities": {
                        "numbers_summary": {
                            "requested": "0",
                            "active": "0",
                            "refused": "0",
                            "renounced": "0",
                            "closed": "0"
                        },
                        "amounts_summary": {
                            "contracts_counter": "0",
                            "debit_balance": "0",
                            "overdue": "0"
                        }
                    }
                }
            },
            "cbscore": {
                "cbs_glocal": {
                    "score_data": {
                        "score_raw": "535",
                        "score_range": "Ei",
                        "score_message": {
                            "code": "20",
                            "description": "Medium Risk"
                        }
                    },
                    "exclusion_rule": {
                        "code": "",
                        "description": ""
                    }
                }
            },
            "UrnCRIF": "",
            "error": null
        }
    },
    "exportable": false,
    "message": "Berhasil memproses laporan kredit",
    "status": "success"
}
```

