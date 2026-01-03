import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MenuSection } from './components/MenuSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { CartSidebar } from './components/CartSidebar';

function App() {
  return (
    <CartProvider>
      <div className="antialiased text-gray-100 bg-brand-black min-h-screen flex flex-col scroll-smooth overflow-x-hidden">
        <Navbar />
        <CartSidebar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <MenuSection />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;