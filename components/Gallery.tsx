import { motion } from 'framer-motion';
// utilisation d'<img> natif pour éviter tout 422 lié à l’optimiseur d’images
import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const defaultImages: { src: string; alt: string }[] = [
  { src: '/gallery/2-chambre-papillon.webp', alt: '2 chambre papillon' },
  { src: '/gallery/batiment-chambre-d-hote.webp', alt: 'batiment chambre d hote' },
  { src: '/gallery/chambre-libellule.webp', alt: 'chambre libellule' },
  { src: '/gallery/entree-ch-d-hote.webp', alt: 'entree ch d hote' },
  { src: '/gallery/lit-ch-papillon.webp', alt: 'lit ch papillon' },
  { src: '/gallery/piscine.webp', alt: 'piscine' },
  { src: '/gallery/salle-de-bain.webp', alt: 'salle de bain' },
  { src: '/gallery/sauna.webp', alt: 'sauna' },
  { src: '/gallery/vue-sur-le-parc.webp', alt: 'vue sur le parc' },
  { src: '/gallery/wc-ch-papillon.webp', alt: 'wc ch papillon' },
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

  const images = dynamicImages.length ? dynamicImages : defaultImages;

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
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-110"
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
