import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('public');
const outputDir = path.resolve('public', 'gallery');

function slugify(filename) {
  const base = filename.replace(/\.[^.]+$/, '');
  return base
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const filename = path.basename(filePath);
  const isHeif = ext === '.heic' || ext === '.heif';
  if (!isHeif) return;

  const slug = slugify(filename);
  const outWebp = path.join(outputDir, `${slug}.webp`);

  try {
    await sharp(filePath).webp({ quality: 82 }).toFile(outWebp);
    console.log(`✓ Converted -> ${path.relative(process.cwd(), outWebp)}`);
  } catch (err) {
    console.error(`✗ Failed to convert ${filename}:`, err.message);
  }
}

async function removeZoneIdentifierFiles(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await removeZoneIdentifierFiles(full);
    } else if (entry.name.endsWith(':Zone.Identifier')) {
      try {
        await fs.promises.unlink(full);
        console.log(`✂ Removed ${path.relative(process.cwd(), full)}`);
      } catch {
        // ignore
      }
    }
  }
}

async function main() {
  await ensureDir(outputDir);
  await removeZoneIdentifierFiles(inputDir);

  const entries = await fs.promises.readdir(inputDir, { withFileTypes: true });
  const candidates = entries
    .filter(
      (e) =>
        e.isFile() &&
        /\.(heic|heif)$/i.test(e.name) &&
        !e.name.endsWith(':Zone.Identifier')
    )
    .map((e) => path.join(inputDir, e.name));

  for (const file of candidates) {
    // Skip if already converted
    const slug = slugify(path.basename(file));
    const outWebp = path.join(outputDir, `${slug}.webp`);
    const exists = fs.existsSync(outWebp);
    if (!exists) {
      await convertFile(file);
    } else {
      console.log(`• Skipped (exists) ${path.relative(process.cwd(), outWebp)}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


