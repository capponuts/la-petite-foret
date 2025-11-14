import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'node:fs';
import path from 'node:path';

type ImageItem = { src: string; alt: string };

function humanize(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, '');
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    if (!fs.existsSync(galleryDir)) {
      return res.status(200).json({ images: [] as ImageItem[] });
    }
    const files = fs
      .readdirSync(galleryDir, { withFileTypes: true })
      .filter(
        (e) =>
          e.isFile() &&
          /\.(webp|jpg|jpeg|png)$/i.test(e.name) &&
          !e.name.endsWith(':Zone.Identifier')
      )
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, 'fr'));

    const images: ImageItem[] = files.map((name) => ({
      src: `/gallery/${name}`,
      alt: humanize(name),
    }));

    res.status(200).json({ images });
  } catch (err) {
    res.status(200).json({ images: [] as ImageItem[] });
  }
}


