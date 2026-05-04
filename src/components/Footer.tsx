import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-charcoal-black px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/5 gap-8">
      <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 text-center md:text-left">
        &copy; 2024 AY-MUAZVENTURES LTD. ALL RIGHTS RESERVED.
      </div>
      
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
        <a href="#" className="hover:text-brand-lime transition-colors">Instagram</a>
        <a href="#" className="hover:text-brand-lime transition-colors">Twitter</a>
        <a href="#" className="hover:text-brand-lime transition-colors">LinkedIn</a>
        <button 
          onClick={scrollToTop}
          className="hover:text-white transition-all flex items-center gap-1 font-bold"
        >
          Top <ArrowUp size={10} />
        </button>
      </div>
    </footer>
  );
}
