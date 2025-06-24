import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/gite-la-petite-foret-1.jpeg', alt: 'Vue extérieure du gîte' },
  { src: '/gite-la-petite-foret-2.jpeg', alt: 'Piscine couverte avec toboggan' },
  { src: '/gite-la-petite-foret-3.jpeg', alt: 'Chambre avec lit double' },
  { src: '/gite-la-petite-foret-4.jpeg', alt: 'Espace salon et détente' },
  { src: '/gite-la-petite-foret-5.jpeg', alt: 'Terrasse en bois' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-16">
          Découvrez le gîte en images
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => {
            const span = index === 0 ? 'md:col-span-2 md:row-span-2' : 'col-span-1';
            return (
              <motion.div
                key={index}
                className={`relative h-80 w-full overflow-hidden rounded-lg shadow-lg ${span}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
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
  );
};

export default Gallery;
