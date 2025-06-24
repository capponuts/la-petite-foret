import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-xl font-bold text-green-800">
          <Link href="/">La Petite Forêt</Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-600 hover:text-green-800">À Propos</Link>
          <Link href="#gallery" className="text-gray-600 hover:text-green-800">Galerie</Link>
          <Link href="#amenities" className="text-gray-600 hover:text-green-800">Équipements</Link>
          <Link href="#tourism" className="text-gray-600 hover:text-green-800">Tourisme</Link>
          <Link href="#leisure" className="text-gray-600 hover:text-green-800">Loisirs</Link>
          <Link href="#reviews" className="text-gray-600 hover:text-green-800">Avis</Link>
          <Link href="#contact" className="text-gray-600 hover:text-green-800">Contact</Link>
        </nav>
        <div className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
