import fs from 'node:fs';
import path from 'node:path';
import heicConvert from 'heic-convert';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const galleryDir = path.join(publicDir, 'gallery');

function isHeic(name) {
  return /\.(heic|heif)$/i.test(name) && !name.endsWith(':Zone.Identifier');
}

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

async function reconvertOne(fullPath) {
  const name = path.basename(fullPath);
  const slug = slugify(name);
  const outWebp = path.join(galleryDir, `${slug}.webp`);
  try {
    const input = await fs.promises.readFile(fullPath);
    const outputJpeg = await heicConvert({
      buffer: input,
      format: 'JPEG',
      quality: 0.9,
    });
    await sharp(outputJpeg).webp({ quality: 82 }).toFile(outWebp);
    console.log(`✓ ${name} -> ${path.relative(process.cwd(), outWebp)}`);
  } catch (err) {
    console.error(`✗ Echec conversion ${name}: ${err.message}`);
  }
}

async function listHeicCandidates(dir) {
  const result = [];
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // seulement parcourir public/ et public/gallery/
      if (full === galleryDir) {
        const sub = await listHeicCandidates(full);
        result.push(...sub);
      }
    } else if (isHeic(e.name)) {
      result.push(full);
    }
  }
  return result;
}

async function main() {
  await ensureDir(galleryDir);
  const rootHeic = (await listHeicCandidates(publicDir)) || [];
  if (rootHeic.length === 0) {
    console.log('Aucun fichier HEIC/HEIF trouvé sous public/. Rien à faire.');
    return;
  }
  for (const file of rootHeic) {
    await reconvertOne(file);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


