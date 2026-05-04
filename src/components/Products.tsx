import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const COLLECTION = [
  {
    id: 1,
    name: 'Lime Surge',
    tag: 'High Performance',
    image: 'https://images.unsplash.com/photo-1543253334-080556754388?auto=format&fit=crop&q=80',
    color: 'from-lime-400/20'
  },
  {
    id: 2,
    name: 'Emerald Mist',
    tag: 'Recovery Blend',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80',
    color: 'from-emerald-400/20'
  },
  {
    id: 3,
    name: 'Arctic Clear',
    tag: 'Pure Hydration',
    image: 'https://images.unsplash.com/photo-1616031037011-08709ca66380?auto=format&fit=crop&q=80',
    color: 'from-blue-400/20'
  },
  {
    id: 4,
    name: 'Midnight Brew',
    tag: 'Coffee Infused',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ec82389e?auto=format&fit=crop&q=80',
    color: 'from-zinc-400/20'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-charcoal-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
          <div className="max-w-xl">
            <span className="uppercase-tracking-widest text-brand-emerald text-[11px] mb-4 block">Engineered flavors</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-4 uppercase leading-[0.85]">
              The<br/>Series<span className="text-brand-lime">.</span>
            </h2>
          </div>
          <button className="nav-link border-b border-white/20 pb-2 hover:border-brand-lime flex items-center gap-2 group">
            View All Series <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTION.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${product.color} to-transparent z-10`} />
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-lime-500 mb-2 block">{product.tag}</span>
                <h3 className="text-3xl font-display font-black uppercase text-white leading-none">{product.name}</h3>
                <div className="h-0 group-hover:h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 mt-4 overflow-hidden">
                  <button className="w-full py-3 bg-white text-black font-display font-black text-xs uppercase tracking-widest rounded-lg">
                    Discover Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
