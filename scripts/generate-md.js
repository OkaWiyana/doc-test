import fs from "fs/promises";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const API_URL = `${process.env.DIRECTUS_URL}/items/api_collection`;

async function main() {
  console.log("📥 Fetching API docs from Directus...");

  const res = await fetch(`${API_URL}?limit=-1`, {
    headers: {
      Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();
  console.log("🔍 Directus raw response count:", json.data?.length ?? 0);

  if (!json.data || !Array.isArray(json.data)) {
    throw new Error("Directus response does not contain an array in data");
  }

  const items = json.data;
  const baseDir = path.join(process.cwd(), "docs");
  await fs.mkdir(baseDir, { recursive: true });

  let skipped = 0;
  let updated = 0;
  let created = 0;

  for (const item of items) {
    const responses = Array.isArray(item.responses)
      ? item.responses
      : JSON.parse(item.responses || "[]");

    const headers = Array.isArray(item.headers)
      ? item.headers
      : JSON.parse(item.headers || "[]");

    const auth =
      typeof item.auth === "string"
        ? JSON.parse(item.auth || "{}")
        : item.auth || {};

    const md = `---\ntitle: ${item.name}\n---\n
# ${item.name}

**Method:** \`${item.method}\`  
**URL:** \`${item.url}\`

## Description
${item.description || "_No description provided_"}

## Request Headers
\`\`\`json
${JSON.stringify(headers, null, 2)}
\`\`\`

## Authentication
\`\`\`json
${JSON.stringify(auth, null, 2)}
\`\`\`

## Request Body
\`\`\`json
${item.body || "{}"}
\`\`\`

## Responses
${responses
  .map(
    (r) => `### ${r.name || r.status_code}

**Status:** \`${r.status_code}\`

\`\`\`json
${r.body || "{}"}
\`\`\`
`
  )
  .join("\n")}
`;

    // 📁 Buat folder sesuai path collection_path (nested)
    const parts = item.collection_path?.split("/") || ["Uncategorized"];
    const nestedDir = path.join(baseDir, ...parts);
    await fs.mkdir(nestedDir, { recursive: true });

    const slug = item.name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    const filePath = path.join(nestedDir, `${slug}.md`);

    let fileAlreadyExists = false;
    let shouldWrite = true;

    try {
      const existingContent = await fs.readFile(filePath, "utf-8");
      fileAlreadyExists = true;
      if (existingContent.trim() === md.trim()) {
        shouldWrite = false; // Tidak ada perubahan
      }
    } catch {
      fileAlreadyExists = false; // File belum ada
    }

    if (shouldWrite) {
      await fs.writeFile(filePath, md);
      if (fileAlreadyExists) {
        updated++;
        console.log(`♻️ Updated: ${filePath}`);
      } else {
        created++;
        console.log(`🆕 Created: ${filePath}`);
      }
    } else {
      skipped++;
      console.log(`⏭️ Skipped (no change): ${filePath}`);
    }
  }

  console.log(
    `📚 All API docs generated! (${created} created, ${updated} updated, ${skipped} skipped)`
  );
}

main().catch((err) => console.error(err));
