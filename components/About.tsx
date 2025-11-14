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
              Située à la campagne, à 4&nbsp;km du bourg de Grosbreuil, La Petite Forêt vous accueille dans une dépendance neuve de la propriété, comprenant deux chambres d’hôtes avec entrée indépendante et Wi‑Fi.
            </p>
            <p>
              Au rez‑de‑jardin, une suite familiale, accessible aux personnes à mobilité réduite, se compose de deux chambres communicantes&nbsp;: l’une avec un lit de 140&nbsp;cm, l’autre avec deux lits jumelables de 90&nbsp;cm&nbsp;; un salon avec TV&nbsp;; une salle d’eau&nbsp;; et des WC séparés.
            </p>
            <p>
              À l’étage, vous trouverez une grande chambre avec lit double électrique 2&nbsp;×&nbsp;70&nbsp;cm, TV, salle d’eau, WC séparés, un réfrigérateur à votre disposition et une terrasse avec vue sur le parc.
            </p>
            <p>
              Vous pourrez profiter de la piscine (5&nbsp;×&nbsp;10&nbsp;m) avec abri et toboggan aquatique, non chauffée et partagée avec le propriétaire.
            </p>
            <p>
              Un espace bien‑être est à votre disposition&nbsp;: sauna (15&nbsp;€ la séance), table de massage, fauteuil massant, vélo elliptique. Dans le parc, vous trouverez un boulodrome et différents jeux.
            </p>
            <p>
              En basse saison, le rez‑de‑jardin de la maison d’hôtes peut être loué (3&nbsp;jours minimum). Une petite cuisine équipée est alors ouverte avec la chambre familiale <em>Papillon</em>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
