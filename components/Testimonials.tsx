import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Crítico Gastronômico",
    content: "Sem dúvida o melhor hambúrguer que já comi na cidade. O ponto da carne é sempre perfeito e o pão super macio.",
    rating: 5,
    avatar: "https://picsum.photos/100/100"
  },
  {
    id: 2,
    name: "Mariana Silva",
    role: "Cliente Fiel",
    content: "O atendimento é impecável e o ambiente muito aconchegante. Recomendo o Trufado Real de olhos fechados!",
    rating: 5,
    avatar: "https://picsum.photos/101/101"
  },
  {
    id: 3,
    name: "Pedro Santos",
    role: "Chef de Cozinha",
    content: "Dá para sentir que os ingredientes são de alta qualidade. A combinação de sabores é surpreendente.",
    rating: 4,
    avatar: "https://picsum.photos/102/102"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white">O Que Dizem Nossos Clientes</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-black p-8 rounded-2xl border border-gray-800 relative hover:border-gray-700 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-gray-700 w-8 h-8 opacity-50" />
              
              <div className="flex gap-1 mb-6 text-brand-yellow">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">{i < t.rating ? '★' : '☆'}</span>
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-8 italic">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-yellow object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};