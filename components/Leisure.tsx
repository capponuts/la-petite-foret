import { motion } from 'framer-motion';
import { ShoppingCart, Stethoscope, Pill, Utensils, Store, Sailboat, Hospital, Train, Waves, ParkingCircle, Drama, Tent, Sun, Dice5 } from 'lucide-react';

const leisureItems = [
  { icon: <ParkingCircle className="h-8 w-8 text-green-600" />, name: 'Equitation', distance: '3 km' },
  { icon: <ShoppingCart className="h-8 w-8 text-green-600" />, name: 'Commerce', distance: '4 km' },
  { icon: <Stethoscope className="h-8 w-8 text-green-600" />, name: 'Médecin', distance: '4 km' },
  { icon: <Pill className="h-8 w-8 text-green-600" />, name: 'Pharmacie', distance: '4 km' },
  { icon: <Utensils className="h-8 w-8 text-green-600" />, name: 'Restaurant', distance: '4 km' },
  { icon: <Store className="h-8 w-8 text-green-600" />, name: 'Marché', distance: '4 km' },
  { icon: <Drama className="h-8 w-8 text-green-600" />, name: 'Tennis', distance: '4 km' },
  { icon: <Sailboat className="h-8 w-8 text-green-600" />, name: 'Sports nautiques', distance: '12 km' },
  { icon: <Waves className="h-8 w-8 text-green-600" />, name: 'Lac', distance: '13 km' },
  { icon: <Sailboat className="h-8 w-8 text-green-600" />, name: 'Base de voile', distance: '13 km' },
  { icon: <Hospital className="h-8 w-8 text-green-600" />, name: 'Hôpitaux', distance: '16 km' },
  { icon: <Dice5 className="h-8 w-8 text-green-600" />, name: 'Casino des Pins', distance: '17 km' },
  { icon: <Tent className="h-8 w-8 text-green-600" />, name: "Zoo des Sables", distance: '18 km' },
  { icon: <Train className="h-8 w-8 text-green-600" />, name: 'Gare ferroviaire', distance: '18 km' },
  { icon: <Sun className="h-8 w-8 text-green-600" />, name: 'Plage', distance: '20 km' },
];

const Leisure = () => {
  return (
    <section id="leisure" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-16">
          Loisirs & Commodités
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10">
          {leisureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center space-x-4"
            >
              {item.icon}
              <div>
                <h3 className="text-md font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.distance}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leisure;
