import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">
          Contactez-nous & Réservez
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12">
          Pour toute question ou demande d'information, n'hésitez pas à nous contacter par téléphone. Nous serons ravis de vous répondre dans les plus brefs délais.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 mb-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <Phone className="h-7 w-7 text-green-600" />
            <a href="tel:0251378787" className="text-lg text-gray-800 hover:text-green-700">
              02 51 37 87 87
            </a>
          </motion.div>
        </div>

        <motion.a
          href="https://www.gites-de-france.com/fr/pays-de-la-loire/vendee/la-petite-foret-h85h019914"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Réserver sur Gîtes de France
          <ExternalLink className="ml-3 h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
