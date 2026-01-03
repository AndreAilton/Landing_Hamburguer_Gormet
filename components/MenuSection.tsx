import React, { useState } from 'react';
import { Button } from './Button';
import { ShoppingCart, UtensilsCrossed, Beer, Sandwich } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

// Categorias de dados
const menuData = {
  burgers: [
    {
      id: 1,
      name: "O Clássico",
      description: "180g de blend angus, queijo cheddar inglês, alface americana, tomate e maionese da casa no pão brioche.",
      price: "R$ 34,90",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop",
      tags: ["Best Seller", "Clássico"]
    },
    {
      id: 2,
      name: "Bacon Paradise",
      description: "Duplo smash burger 90g, muito bacon crocante, cheddar cremoso, cebola caramelizada e molho barbecue.",
      price: "R$ 42,90",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&auto=format&fit=crop",
      tags: ["Bacon Lovers"]
    },
    {
      id: 3,
      name: "Trufado Real",
      description: "180g de angus, queijo brie empanado, rúcula, geleia de pimenta e azeite trufado no pão australiano.",
      price: "R$ 48,90",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop",
      tags: ["Gourmet"]
    },
    {
      id: 4,
      name: "Veggie Supreme",
      description: "Burger de grão de bico e cogumelos, queijo prato, alface, tomate, picles e maionese de ervas.",
      price: "R$ 36,90",
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop",
      tags: ["Vegetariano"]
    },
    {
      id: 5,
      name: "Monster Double",
      description: "Dois burgers de 180g, quádruplo queijo, bacon em dobro, ovo e onion rings dentro do lanche.",
      price: "R$ 54,90",
      image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=500&auto=format&fit=crop",
      tags: ["Para Famintos"]
    },
    {
      id: 6,
      name: "Chicken Crispy",
      description: "Sobrecoxa de frango empanada crocante, coleslaw (salada de repolho cremosa) e picles.",
      price: "R$ 32,90",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop",
      tags: ["Frango"]
    }
  ],
  sides: [
    {
      id: 101,
      name: "Batata Rústica",
      description: "Batatas cortadas rusticamente com alecrim, alho confitado e maionese de páprica.",
      price: "R$ 24,90",
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500&auto=format&fit=crop",
      tags: ["Acompanhamento"]
    },
    {
      id: 102,
      name: "Cheddar & Bacon Fries",
      description: "Porção generosa de batatas fritas cobertas com creme de cheddar e farofa de bacon.",
      price: "R$ 29,90",
      image: "https://images.pexels.com/photos/6697496/pexels-photo-6697496.jpeg",
      tags: ["Favorita"]
    },
    {
      id: 103,
      name: "Onion Rings",
      description: "Anéis de cebola empanados e super crocantes. Acompanha molho barbecue.",
      price: "R$ 22,90",
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&auto=format&fit=crop",
      tags: ["Crocante"]
    },
    {
      id: 104,
      name: "Nuggets Artesanais",
      description: "8 unidades de nuggets feitos na casa com peito de frango real e temperos secretos.",
      price: "R$ 26,90",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop",
      tags: ["Caseiro"]
    }
  ],
  drinks: [
    {
      id: 201,
      name: "Coca-Cola Lata",
      description: "Coca-Cola Original 350ml geladíssima.",
      price: "R$ 6,90",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop",
      tags: ["Gelada"]
    },
    {
      id: 202,
      name: "Milkshake Morango",
      description: "Feito com sorvete de creme, pedaços de morango fresco e chantilly.",
      price: "R$ 24,90",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop",
      tags: ["Sobremesa"]
    },
    {
      id: 203,
      name: "Milkshake Chocolate",
      description: "Chocolate belga 50%, calda de chocolate e raspas.",
      price: "R$ 24,90",
      image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500&auto=format&fit=crop",
      tags: ["Doce"]
    },
    {
      id: 204,
      name: "Heineken Long Neck",
      description: "Cerveja Premium Lager 330ml.",
      price: "R$ 12,90",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop",
      tags: ["+18"]
    }
  ]
};

type Category = 'burgers' | 'sides' | 'drinks';

export const MenuSection: React.FC = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<Category>('burgers');

  const categories = [
    { id: 'burgers', label: 'Hambúrgueres', icon: Sandwich },
    { id: 'sides', label: 'Porções', icon: UtensilsCrossed },
    { id: 'drinks', label: 'Bebidas', icon: Beer },
  ];

  return (
    <section id="menu" className="py-20 bg-brand-black relative min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-brand-yellow font-bold uppercase tracking-wider text-sm">Cardápio Completo</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-8">Escolha Seu Pedido</h2>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                  activeCategory === cat.id
                    ? 'bg-brand-yellow border-brand-yellow text-brand-black scale-105 shadow-lg shadow-brand-yellow/20'
                    : 'bg-transparent border-gray-700 text-gray-400 hover:border-brand-yellow hover:text-white'
                }`}
              >
                <cat.icon size={20} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {menuData[activeCategory].map((item, index) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-brand-dark rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-black/50"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-brand-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-tight">{item.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
                    <span className="text-brand-yellow font-black text-xl">{item.price}</span>
                    <Button 
                      size="sm"
                      className="gap-2 group-hover:bg-brand-yellow group-hover:text-brand-black"
                      onClick={() => addToCart(item)}
                    >
                      <ShoppingCart size={16} /> Add
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};