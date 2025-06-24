import { motion } from 'framer-motion';
import { MapPin, Castle, Waves, Trees, Sailboat, Palmtree } from 'lucide-react';

const activities = [
  { 
    name: 'Les Sables d\'Olonne & le Vendée Globe', 
    description: 'Vibrez au rythme de la capitale de la course au large. Découvrez son célèbre remblai, son port de pêche et l\'ambiance unique du départ du Vendée Globe.',
    distance: '15 min',
    icon: <Sailboat className="h-10 w-10 text-blue-800" />
  },
  { 
    name: 'La Plage du Veillon', 
    description: "L'une des plus belles plages de Vendée, avec sa dune majestueuse, son lagon et ses surprenantes empreintes de dinosaures.",
    distance: '15 min',
    icon: <Palmtree className="h-10 w-10 text-emerald-500" />
  },
  { 
    name: "O'Gliss Park & O'Fun Park", 
    description: 'Le plus grand parc aquatique de France et un immense parc de loisirs (accrobranche, paintball...).',
    distance: '25 min',
    icon: <Waves className="h-10 w-10 text-cyan-500" />
  },
  { 
    name: 'Puy du Fou', 
    description: 'Élu plusieurs fois "Meilleur Parc du Monde", un voyage inoubliable dans le temps.',
    distance: '1h15',
    icon: <Castle className="h-10 w-10 text-amber-600" />
  },
];

const Tourism = () => {
  return (
    <section id="tourism" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
          Explorez les trésors de la Vendée
        </h2>
        <p className="text-center text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
          Idéalement situé, le gîte est le point de départ parfait pour découvrir une région riche en émotions, des parcs de renommée mondiale aux paysages côtiers préservés.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">{activity.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{activity.name}</h3>
                <p className="text-gray-600 mt-1 mb-2">{activity.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>À environ {activity.distance}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tourism;
