import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <Image
        src="/cover-la-petiteforet.png"
        alt="Vue extérieure du gîte La Petite Forêt"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white p-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          La Petite Forêt
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Votre gîte de charme près des Sables d'Olonne
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
