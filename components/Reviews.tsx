import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: 'Suzette',
    date: 'Séjour du 07/06/2025 au 09/06/2025',
    rating: 5,
    title: 'Superbe chambre avec vue',
    comment: 'Hôte très accueillante et petit déjeuner copieux.',
    ownerResponse: 'Merci d\'avoir déposé un avis, et au grand plaisir de vous recevoir à nouveau.',
  },
  {
    author: 'Morgane',
    date: 'Séjour du 30/05/2025 au 31/05/2025',
    rating: 5,
    title: 'Une nuit reposante et agréable',
    comment: 'Malgré un matelas un peu raide, nous avons passé une très bonne nuit. Petit passage à la piscine très agréable, chambre bien située et petit déjeuner complet et délicieux. Nous espérons revenir !',
    ownerResponse: 'Merci d\'avoir déposé votre avis et au plaisir de vous retrouver prochainement.',
  },
  {
    author: 'Babeth',
    date: 'Séjour du 13/05/2025 au 15/05/2025',
    rating: 5,
    title: 'Belle chambre d\'hôte dans un écrin de verdure',
    comment: 'Chambre et pièces d\'eau spacieuses, joli parc avec piscine et sauna. Accueil chaleureux, à recommander.',
    ownerResponse: 'Merci d\'avoir déposé un avis et heureuse que votre séjour chez nous vous ai plu.',
  },
  {
    author: 'Eloïse',
    date: 'Séjour du 16/08/2024 au 18/08/2024',
    rating: 5,
    title: 'Séjour relaxant à La Petite forêt',
    comment: 'Très belles prestations, hôtes très prévenants et bienveillants. Ma soeur en fauteuil a pu accéder à tous les espaces. Le petit déjeuner était copieux et délicieux. Nous reviendrons !',
    ownerResponse: 'Merci Eloise pour votre appréciation, nous serions ravis de vous retrouver toutes les trois.',
  }
];

const renderStars = (rating: number) => {
  return Array(rating).fill(0).map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />);
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-16">
          Ce que nos voyageurs en disent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{review.title}</h3>
                  <p className="text-sm text-gray-500">{review.author} - {review.date}</p>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-700 italic">"{review.comment}"</p>
              {review.ownerResponse && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-green-700">Réponse de Nicole :</p>
                  <p className="text-sm text-gray-600 italic">"{review.ownerResponse}"</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
