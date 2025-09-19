import fs from 'fs/promises';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = `${process.env.DIRECTUS_URL}/items/footer?limit=-1`;

const res = await fetch(API_URL, {
  headers: {
    Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
  },
});
const json = await res.json();
const rows = json.data; // array of { label, order, section, url }

// kelompokkan per section
const grouped = {};
for (const row of rows) {
  const sec = row.section || 'Other';
  if (!grouped[sec]) grouped[sec] = [];
  grouped[sec].push({
    label: row.label,
    to: row.url,   // atau href kalau eksternal
  });
}

// ubah ke format links
const links = Object.entries(grouped).map(([section, items]) => ({
  title: section,
  items: items.sort((a,b) => a.order - b.order),
}));

const footerConfig = {
  style: 'dark',
  links,
  copyright: `Copyright © ${new Date().getFullYear()} KOCEK`,
};

await fs.writeFile(
  './footer.generated.json',
  JSON.stringify(footerConfig, null, 2)
);
console.log('✅ footer.generated.json created!');
