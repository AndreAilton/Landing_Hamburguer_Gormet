import React from 'react';
import { Feature } from '../types';
import { Flame, Leaf, Truck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features: Feature[] = [
  {
    id: 1,
    title: "Na Brasa Real",
    description: "Nossos hambúrgueres são grelhados no fogo real para aquele sabor defumado autêntico.",
    icon: <Flame className="w-8 h-8 text-orange-500" />
  },
  {
    id: 2,
    title: "Ingredientes Frescos",
    description: "Vegetais colhidos no dia e carne moída fresca toda manhã. Sem conservantes.",
    icon: <Leaf className="w-8 h-8 text-green-500" />
  },
  {
    id: 3,
    title: "Entrega Rápida",
    description: "Seu pedido chega quentinho e rápido na sua casa com nossa frota exclusiva.",
    icon: <Truck className="w-8 h-8 text-blue-500" />
  },
  {
    id: 4,
    title: "Qualidade Premium",
    description: "Carne 100% Angus certificada e pães artesanais de fermentação natural.",
    icon: <Award className="w-8 h-8 text-brand-yellow" />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-yellow font-bold uppercase tracking-wider text-sm">Por que nós?</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3">A Diferença Está nos Detalhes</h2>
            <div className="w-24 h-1.5 bg-brand-yellow mx-auto mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-black p-8 rounded-2xl border border-gray-800 hover:border-brand-yellow/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-gray-800/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};