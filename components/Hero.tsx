import React from 'react';
import { Button } from './Button';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

export const Hero: React.FC = () => {
  const { openCart } = useCart();

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-dark/50 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-dark/50 border border-gray-700 rounded-full px-4 py-1.5 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              <span className="text-gray-300 text-sm font-medium">Eleita a melhor hamburgueria da cidade</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              A Arte do <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">
                Hambúrguer
              </span> <br />
              Artesanal
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Experimente a perfeição em cada mordida. Blends selecionados, ingredientes frescos e aquele sabor defumado que você ama.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" onClick={scrollToMenu}>
                Ver Cardápio <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="lg" onClick={openCart}>
                Fazer Pedido
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8 border-t border-gray-800">
              <div>
                <p className="text-3xl font-bold text-white">15k+</p>
                <p className="text-gray-500 text-sm">Clientes Felizes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">4.9</p>
                <div className="flex text-brand-yellow text-sm">
                   ★★★★★
                </div>
                <p className="text-gray-500 text-sm">Avaliações</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-yellow/20 border border-gray-800/50">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop" 
                alt="Delicious Gourmet Burger" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl"
              >
                 <p className="text-white font-bold">Oferta do Dia</p>
                 <p className="text-brand-yellow font-black text-xl">R$ 39,90</p>
                 <p className="text-xs text-gray-300">Combo Cheddar Supreme</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};