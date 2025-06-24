import { motion } from 'framer-motion';
import { Tv2, AirVent, Sunbed, Armchair, Puzzle, Car, Fence, Waves, Wifi, Baby, Heater } from 'lucide-react';

const amenities = [
  { icon: <Tv2 className="h-10 w-10 text-gray-700" />, title: 'Télévision' },
  { icon: <AirVent className="h-10 w-10 text-blue-400" />, title: 'Air conditionné' },
  { icon: <Waves className="h-10 w-10 text-blue-500" />, title: 'Piscine couverte' },
  { icon: <Heater className="h-10 w-10 text-red-500" />, title: 'Sauna' },
  { icon: <Sunbed className="h-10 w-10 text-yellow-500" />, title: 'Terrasse & Salon de jardin' },
  { icon: <Puzzle className="h-10 w-10 text-indigo-500" />, title: 'Jeux pour enfants' },
  { icon: <Fence className="h-10 w-10 text-green-700" />, title: 'Jardin clos' },
  { icon: <Car className="h-10 w-10 text-gray-800" />, title: 'Parking privé' },
  { icon: <Wifi className="h-10 w-10 text-sky-500" />, title: 'Wifi-Internet' },
  { icon: <Baby className="h-10 w-10 text-pink-400" />, title: 'Équipement bébé' },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-16">
          Des prestations pour votre confort
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center items-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
