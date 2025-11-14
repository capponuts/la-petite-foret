import fs from 'node:fs';
import path from 'node:path';

function humanize(filename) {
  const base = filename.replace(/\.[^.]+$/, '');
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\\w/g, (c) => c.toUpperCase());
}

const galleryDir = path.resolve('public', 'gallery');
const manifestPath = path.join(galleryDir, 'manifest.json');

async function main() {
  if (!fs.existsSync(galleryDir)) {
    await fs.promises.mkdir(galleryDir, { recursive: true });
  }
  const files = (await fs.promises.readdir(galleryDir, { withFileTypes: true }))
    .filter((e) => e.isFile() && /\.(webp|jpg|jpeg|png)$/i.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, 'fr'));

  const images = files.map((name) => ({
    src: `/gallery/${name}`,
    alt: humanize(name),
  }));

  await fs.promises.writeFile(manifestPath, JSON.stringify({ images }, null, 2), 'utf8');
  console.log(`✓ Manifest écrit: ${path.relative(process.cwd(), manifestPath)} (${images.length} images)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


