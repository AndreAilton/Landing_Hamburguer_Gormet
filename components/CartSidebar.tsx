import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

export const CartSidebar: React.FC = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, total } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    // Create WhatsApp message
    const header = `*Novo Pedido - Prime Burger*\n\n`;
    const itemsList = items.map(item => 
      `${item.quantity}x ${item.name} - ${item.price}`
    ).join('\n');
    const totalStr = `\n\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
    const footer = `\n\n------------------\nGostaria de confirmar o pedido.`;
    
    const message = encodeURIComponent(header + itemsList + totalStr + footer);
    // Updated WhatsApp number to 5516993356039
    window.open(`https://wa.me/5516993356039?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Sidebar */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-dark border-l border-gray-800 z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-brand-black/50">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-yellow" />
                <h2 className="text-xl font-bold text-white">Seu Pedido</h2>
                <span className="bg-brand-yellow text-brand-black text-xs font-bold px-2 py-1 rounded-full">
                  {items.length} itens
                </span>
              </div>
              <button 
                onClick={closeCart}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
                  <ShoppingBag size={64} className="opacity-20" />
                  <p className="text-lg">Seu carrinho está vazio.</p>
                  <Button variant="outline" onClick={closeCart}>
                    Voltar ao Menu
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="bg-brand-black p-4 rounded-xl border border-gray-800 flex gap-4"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-white line-clamp-1">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-brand-yellow font-bold text-sm">{item.price}</p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 text-white transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-white font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center hover:bg-yellow-400 text-brand-black transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 bg-brand-black border-t border-gray-800 space-y-4">
                <div className="flex justify-between items-center text-lg font-medium text-gray-400">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between items-center text-2xl font-black text-white">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <Button fullWidth size="lg" onClick={handleCheckout} className="flex justify-between items-center group">
                  <span>Finalizar Pedido</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};