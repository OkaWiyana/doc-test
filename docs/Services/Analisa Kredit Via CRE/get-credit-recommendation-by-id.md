---
title: Get Credit Recommendation By ID
---

# Get Credit Recommendation By ID

**Method:** `GET`  
**URL:** `{{baseUrl}}/kocek/cde/credit-recommendation/:ID`

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
    "data": {
        "id": "51bb0f1e-b39d-4e3e-b322-5e6fd064ebe9",
        "date": "Senin 21 Oktober 2024 00:15",
        "datetime": "2024-10-21T00:15:00Z",
        "payload": {
            "income": {
                "penghasilan_1": "100000-200000",
                "penghasilan_2": "200000-300000"
            },
            "loan_id": "21bef131-7ef0-405f-bb80-bcc2a53b34ef",
            "outcome": {
                "pengeluaran_1": "100000-200000",
                "pengeluaran_2": "200000-300000"
            },
            "character": {
                "age": 40,
                "nik": "12121212121212",
                "name": "fulan",
                "birth": "Denpasar, 10 April 1984",
                "gender": "p",
                "kyc_status": false,
                "occupation": "Pedagang",
                "member_date": "2020-08-01"
            },
            "application": {
                "plafon": 100000000,
                "tenure": 60,
                "purpose": "konsumtif",
                "interest": 24
            },
            "collaterals": [
                {
                    "name": "Avanza",
                    "type": "Mobil",
                    "value": 10000000,
                    "information": "Mobil bekas pakai 3 tahun",
                    "is_verified": false
                },
                {
                    "name": "Sertifikat Tanah",
                    "type": "Sertifikat Tanah",
                    "value": 10000000000,
                    "information": "Tanah warisan",
                    "is_verified": true
                }
            ],
            "customer_id": "ac06b74c-6864-407a-802e-f12ee1d8ce40"
        },
        "result": {
            "analytic": "### Analisis Kredit Berdasarkan Prinsip 5C\n\n#### 1. Character\n- **Identitas**: Nasabah adalah laki-laki berusia 30 tahun, seorang Pegawai Negeri Sipil, dan telah menjadi nasabah selama 1 tahun 3 bulan.\n- **Pekerjaan**: Memiliki pekerjaan yang stabil sebagai PNS, yang umumnya menawarkan keamanan kerja yang lebih tinggi.\n\n#### 2. Capacity\n- **Penghasilan Bulanan**: Penghasilan pokok nasabah berkisar antara IDR 10.000.000 - IDR 15.000.000, ditambah penghasilan istri antara IDR 7.500.000 - IDR 8.250.000.\n- **Total Penghasilan**: Total penghasilan bulanan dapat mencapai IDR 23.250.000.\n- **Pengeluaran Bulanan**: Total pengeluaran bulanan (pengeluaran pokok dan cicilan) adalah antara IDR 3.000.000 - IDR 4.500.000.\n- **Pengeluaran vs. Penghasilan**: Dengan penghasilan maksimal, rasio pengeluaran terhadap penghasilan adalah sekitar 12.9% - 19.4%, yang mendukung kemampuan bayar.\n\n#### 3. Capital\n- **Agunan**:\n  - Mobil (nilai IDR 200.000.000) sudah terverifikasi.\n  - Sertifikat Tanah (nilai IDR 2.000.000.000) belum terverifikasi.\n- **LTV (Loan-to-Value)**: Menghitung LTV untuk pinjaman:\n  - Pinjaman: IDR 100.000.000\n  - Total Agunan (hanya mobil yang terverifikasi): IDR 200.000.000\n  - LTV = (Pinjaman / Nilai Agunan) * 100 = (100.000.000 / 200.000.000) * 100 = 50%\n\n  LTV 50% termasuk dalam kategori yang aman karena biasanya di bawah 80% dianggap aman.\n\n#### 4. Collateral\n- **Keberadaan Agunan**: Agunan telah ada, dengan satu agunan terverifikasi (mobil) dan satu belum terverifikasi (sertifikat tanah).\n- **Nilai Agunan**: Penggunaan nilai mobil dalam risiko lebih rendah, sedangkan nilai tanah memberikan potensi yang lebih tinggi tetapi perlu verifikasi lebih lanjut.\n\n#### 5. Conditions\n- **Tujuan Pinjaman**: Tujuan pinjaman adalah konsumtif, yang dapat menambah risiko jika tidak ada pengelolaan anggaran yang baik.\n- **Suku Bunga**: Suku bunga 20% p.a. cukup tinggi, yang akan mempengaruhi jumlah angsuran bulanan.\n",
            "recommendation": "### Rekomendasi\n\n1. **Plafon Pinjaman**: Pertimbangkan untuk menurunkan plafon pinjaman menjadi IDR 80.000.000 untuk mengoptimalkan rasio beban cicilan terhadap penghasilan.\n\n2. **Tenor Pinjaman**: Sebaiknya menggunakan tenor lebih panjang, misalnya 48 bulan, untuk mengurangi tekanan angsuran bulanan agar tidak lebih dari 20-30% dari total penghasilan bulanan yang aman secara finansial.\n\n3. **Verifikasi Agunan**: Pastikan untuk melakukan verifikasi sertifikat tanah untuk meningkatkan nilai agunan dan menurunkan risiko bagi pihak pemberi pinjaman.\n\n4. **Rencana Pengelolaan Anggaran**: Nasabah disarankan untuk memiliki rencana pengelolaan anggaran yang lebih baik terkait pengeluaran bulanan agar tidak terjebak dalam masalah keuangan di masa mendatang, mengingat tujuan pinjamannya bersifat konsumtif.\n\n5. **Pertimbangan Kelayakan**: Mengingat tujuan dan suku bunga, layak dipertimbangkan risiko jika pinjaman ini tidak memiliki pengelolaan keuangan yang baik, sebaiknya menggunakan pinjaman secara bijak dan tidak melebihi kapasitas pembayaran yang ada.\n"
        }
    },
    "message": "Berhasil menampilkan detail rekomendasi kredit.",
    "status": "success"
}
```

### Case Fail data

**Status:** `200`

```json
{
    "data": {
        "id": "51bb0f1e-b39d-4e3e-b322-5e6fd064ebe9",
        "date": "Senin 21 Oktober 2024 00:15",
        "datetime": "2024-10-21T00:15:00Z",
        "payload": {
            "income": {
                "penghasilan_1": "100000-200000",
                "penghasilan_2": "200000-300000"
            },
            "loan_id": "21bef131-7ef0-405f-bb80-bcc2a53b34ef",
            "outcome": {
                "pengeluaran_1": "100000-200000",
                "pengeluaran_2": "200000-300000"
            },
            "character": {
                "age": 40,
                "nik": "12121212121212",
                "name": "fulan",
                "birth": "Denpasar, 10 April 1984",
                "gender": "p",
                "kyc_status": false,
                "occupation": "Pedagang",
                "member_date": "2020-08-01"
            },
            "application": {
                "plafon": 100000000,
                "tenure": 60,
                "purpose": "konsumtif",
                "interest": 24
            },
            "collaterals": [
                {
                    "name": "Avanza",
                    "type": "Mobil",
                    "value": 10000000,
                    "information": "Mobil bekas pakai 3 tahun",
                    "is_verified": false
                },
                {
                    "name": "Sertifikat Tanah",
                    "type": "Sertifikat Tanah",
                    "value": 10000000000,
                    "information": "Tanah warisan",
                    "is_verified": true
                }
            ],
            "customer_id": "ac06b74c-6864-407a-802e-f12ee1d8ce40"
        },
        "result": null
    },
    "message": "Berhasil menampilkan detail rekomendasi kredit.",
    "status": "success"
}
```

### Data Not Found

**Status:** `404`

```json
{
    "message": "Data not found.",
    "status": "fail"
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

