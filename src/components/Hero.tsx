import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col bg-charcoal-black overflow-hidden border-b border-white/5 pt-32">
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-lime opacity-5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-emerald opacity-5 blur-[150px] rounded-full" />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 px-6 md:px-12 relative z-10">
        <div className="md:col-span-12 lg:col-span-8 flex flex-col justify-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="uppercase-tracking-widest text-brand-lime text-[11px]">Premium High-Performance</span>
            </div>
            <h1 className="text-7xl md:text-9xl lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em] uppercase mb-8">
              Redefine<br/>
              <span className="text-transparent text-stroke-white">Your</span><br/>
              <span className="editorial-gradient">Refresh</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg text-gray-400 max-w-md leading-relaxed font-light mb-10"
            >
              Discover the bold essence of AY-MUAZVENTURES. We craft high-performance beverages designed for those who demand more from every sip.
            </motion.p>
            
            <a href="#products" className="group mt-2 flex gap-6 items-center w-fit">
              <div className="w-14 h-14 rounded-full border border-brand-lime flex items-center justify-center group-hover:bg-brand-lime group-hover:border-transparent transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-lime group-hover:text-black transition-colors rotate-45 group-hover:rotate-0 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-[11px] uppercase tracking-widest font-bold group-hover:text-brand-lime transition-colors">Explore the Collection</span>
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block lg:col-span-4 relative pl-12 h-full">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 0.4, x: 0 }}
             transition={{ duration: 1.5, delay: 0.6 }}
             className="absolute inset-0 top-12"
           >
             <img 
               src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80" 
               alt="Premium Drink" 
               className="w-full h-[120%] object-cover rounded-t-[40px] border-x border-t border-white/10"
               referrerPolicy="no-referrer"
             />
           </motion.div>
        </div>
      </main>

      <footer className="px-6 md:px-12 py-12 flex justify-between items-end border-t border-white/5 relative z-10 bg-charcoal-black mt-12">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
          &copy; 2024 AY-MUAZVENTURES LTD. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-gray-600">
          <a href="#" className="hover:text-brand-lime transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-lime transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-lime transition-colors">LinkedIn</a>
        </div>
      </footer>
    </section>
  );
}
