import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const baseImages = [
  { src: '/gite-la-petite-foret-1.jpeg', alt: 'Vue extérieure du gîte' },
  { src: '/gite-la-petite-foret-2.jpeg', alt: 'Piscine couverte avec toboggan' },
  { src: '/gite-la-petite-foret-3.jpeg', alt: 'Chambre avec lit double' },
  { src: '/gite-la-petite-foret-4.jpeg', alt: 'Espace salon et détente' },
  { src: '/gite-la-petite-foret-5.jpeg', alt: 'Terrasse en bois' },
  { src: '/cover-la-petiteforet.png', alt: 'Vue aérienne du gîte' },
];

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
        const res = await fetch('/api/gallery');
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data?.images)) {
          setDynamicImages(data.images);
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
                    layout="fill"
                    objectFit="cover"
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
