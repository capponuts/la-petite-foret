import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Un havre de paix en campagne
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              Cette maison d'hôtes est située en campagne sur une propriété close de 1 hectare, à 4 km du bourg de Grosbreuil.
            </p>
            <p>
              Deux chambres d'hôtes sont aménagées dans une dépendance neuve (2019), à côté du logement du propriétaire. L'entrée est indépendante pour garantir votre tranquillité.
            </p>
            <p>
              Vous serez accueillis par <strong>Nicole</strong>, votre hôte, qui parle Français, Anglais et Espagnol. Le gîte est agréé Gîtes de France® depuis 2021.
            </p>
            <p>
              Profitez d'un cadre exceptionnel, idéal pour vous ressourcer à proximité des Sables d'Olonne.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
