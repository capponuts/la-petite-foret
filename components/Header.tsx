import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", text: "À Propos" },
    { href: "#gallery", text: "Galerie" },
    { href: "#amenities", text: "Équipements" },
    { href: "#tourism", text: "Tourisme" },
    { href: "#leisure", text: "Loisirs" },
    { href: "#reviews", text: "Avis" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-xl font-bold text-green-800">
            <Link href="/">La Petite Forêt</Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-green-800">{link.text}</Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6">
            <X className="h-8 w-8 text-gray-600" />
          </button>
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-2xl text-gray-800 hover:text-green-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
