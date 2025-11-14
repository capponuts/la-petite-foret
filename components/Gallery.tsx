import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const baseImages: { src: string; alt: string }[] = [];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [dynamicImages, setDynamicImages] = useState<{ src: string; alt: string }[]>([]);

  const openLightbox = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  useEffect(() => {
    async function load() {
      try {
        // 1) Manifest statique (fiable en prod)
        let res = await fetch('/gallery/manifest.json', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data?.images)) {
            setDynamicImages(data.images);
            return;
          }
        }
        // 2) Fallback API (au cas où)
        res = await fetch('/api/gallery', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data?.images)) {
            setDynamicImages(data.images);
          }
        }
      } catch {
        // silencieux
      }
    }
    load();
  }, []);

  const images = [...baseImages, ...dynamicImages];

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-16">
            Découvrez le gîte en images
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, idx) => {
              return (
                <motion.div
                  key={idx}
                  className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onClick={() => openLightbox(idx)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </>
  );
};

export default Gallery;
