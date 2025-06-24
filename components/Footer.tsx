const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-semibold text-lg">
          Gîte La Petite Forêt
        </p>
        <p className="text-gray-300">
          Grosbreuil - Près des Sables d'Olonne
        </p>
        <p className="text-sm text-gray-400 mt-4">
          &copy; {currentYear} La Petite Forêt. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
