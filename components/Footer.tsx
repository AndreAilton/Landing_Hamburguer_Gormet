import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-brand-black border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 md:px-6 py-12 border-b border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Ganhe 10% de desconto</h3>
            <p className="text-gray-400">Assine nossa newsletter e ganhe desconto no primeiro pedido.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex w-full md:w-auto gap-2"
          >
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="bg-brand-dark text-white border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-brand-yellow w-full md:w-80"
            />
            <Button>Inscrever</Button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-black text-white tracking-tighter mb-6">
              PRIME<span className="text-brand-yellow">BURGER</span>
            </h2>
            <p className="text-gray-400 mb-6">
              A melhor experiência em hambúrgueres artesanais da cidade. Ingredientes frescos, ambiente agradável e sabor inesquecível.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors text-white">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-brand-yellow transition-colors">Início</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-brand-yellow transition-colors">Nosso Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-brand-yellow transition-colors">Avaliações</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="shrink-0 text-brand-yellow" size={20} />
                <span>Rua Teste, 123<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="shrink-0 text-brand-yellow" size={20} />
                <span>(16) 99335-6039</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="shrink-0 text-brand-yellow" size={20} />
                <span>andre.ailtonc.10@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Horário de Funcionamento</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="shrink-0 text-brand-yellow" size={20} />
                <div>
                  <p className="font-bold text-white">Seg - Qui</p>
                  <p>18:00 - 23:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="shrink-0 text-brand-yellow" size={20} />
                <div>
                  <p className="font-bold text-white">Sex - Sáb</p>
                  <p>18:00 - 01:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="shrink-0 text-brand-yellow" size={20} />
                <div>
                  <p className="font-bold text-white">Domingo</p>
                  <p>17:00 - 23:00</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2024 Prime Burger. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};