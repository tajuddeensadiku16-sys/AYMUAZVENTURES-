import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ArrowRight, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WholesaleForm from './components/WholesaleForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-lime-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <section id="philosophy" className="py-32 px-6 md:px-12 bg-charcoal-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6">
                  <span className="uppercase-tracking-widest text-brand-emerald text-[11px] mb-4 block">Our Philosophy</span>
                  <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.85] tracking-tighter uppercase mb-8">
                    ENGINEERED FOR <br />
                    <span className="text-zinc-700 italic">PERFORMANCE</span>
                  </h2>
                </div>
                <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-xl font-light">
                  At AY-MUAZVENTURES, we don't just bottle drinks—we capture motion. Every ingredient is scrutinized for its performance-enhancing properties and flavor profile.
                </p>
                <div className="space-y-8">
                  {[
                    { title: "Zero Artificials", desc: "No synthetic colors or laboratory-made sweeteners. Pure extraction." },
                    { title: "Electrolyte Balance", desc: "Mineral-rich recovery formulas optimized for elite athletes." },
                    { title: "Freshness Guaranteed", desc: "Bottled within 24 hours of extraction at our global hubs." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-lime transition-colors">
                        <span className="text-zinc-600 group-hover:text-brand-lime font-bold text-xs uppercase">0{i+1}</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-white mb-1 uppercase text-sm tracking-wider">{item.title}</h4>
                        <p className="text-sm text-zinc-500 max-w-sm font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/5 to-transparent rounded-[40px]" />
                <img 
                  src="https://images.unsplash.com/photo-1613336026275-d6d473084e85?auto=format&fit=crop&q=80" 
                  alt="Production process" 
                  className="w-full h-full object-cover rounded-[40px] grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none border border-white/5"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <Products />
        <WholesaleForm />
      </main>
      <Footer />
    </div>
  );
}
