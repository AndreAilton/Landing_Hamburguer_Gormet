import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { Button } from './Button';
import { useCart } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, items } = useCart();

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Sobre', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Localização', href: '#location' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-brand-yellow p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-brand-black" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">
              PRIME<span className="text-brand-yellow">BURGER</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-brand-yellow font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Cart */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-brand-yellow">
              <Phone size={18} />
              <span className="font-bold">(16) 99335-6039</span>
            </div>
            
            <button 
              onClick={openCart} 
              className="relative p-2 text-white hover:text-brand-yellow transition-colors"
            >
              <ShoppingBag size={24} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <Button variant="primary" size="sm" onClick={openCart}>
              Peça Agora
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={openCart} 
              className="relative p-2 text-white hover:text-brand-yellow transition-colors"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-gray-800 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white hover:text-brand-yellow text-lg font-medium border-b border-gray-700 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                 <div className="flex items-center justify-center gap-2 text-brand-yellow">
                  <Phone size={18} />
                  <span className="font-bold">(16) 99335-6039</span>
                </div>
                <Button fullWidth onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}>
                  Peça Agora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};