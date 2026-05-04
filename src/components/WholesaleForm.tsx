import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function WholesaleForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section id="wholesale" className="py-32 px-6 bg-charcoal-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="uppercase-tracking-widest text-brand-lime text-[11px] mb-6 block">Partnership</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-[0.85] uppercase">
              JOIN THE <br />
              NETWORK<span className="text-brand-lime">.</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed font-light max-w-lg">
              We're looking for high-end fitness centers, luxury hotels, and premium retailers to carry the AY-MUAZ line.
            </p>
            
            <div className="space-y-12 mb-12">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-lime transition-colors">
                  <span className="text-xs font-bold text-zinc-500 group-hover:text-brand-lime">01</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-2 uppercase text-sm tracking-wider">Bulk Pricing</h4>
                  <p className="text-sm text-zinc-500 max-w-sm">Tiered pricing structures designed for enterprise level accounts with scalable margins.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-lime transition-colors">
                  <span className="text-xs font-bold text-zinc-500 group-hover:text-brand-lime">02</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-2 uppercase text-sm tracking-wider">Custom Logistics</h4>
                  <p className="text-sm text-zinc-500 max-w-sm">Dedicated shipping lanes for guaranteed fresh arrival and white-glove delivery service.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="relative group">
             {/* Editorial Glow */}
             <div className="absolute -inset-1 bg-gradient-to-r from-brand-lime to-brand-emerald opacity-10 blur group-hover:opacity-20 transition-opacity rounded-[40px]" />
             
             <div className="relative bg-gradient-to-b from-zinc-900 to-charcoal-black rounded-[40px] border border-white/10 p-8 md:p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-lime/10 flex items-center justify-center mb-6 border border-brand-lime/20">
                      <CheckCircle2 size={40} className="text-brand-lime" />
                    </div>
                    <h3 className="text-3xl font-display font-black uppercase mb-4 leading-none">Inquiry Received</h3>
                    <p className="text-zinc-400 font-light max-w-xs">Our enterprise team will reach out to you within 24 hours.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-lime border-b border-brand-lime/30 hover:border-brand-lime transition-all pb-1"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-10"
                  >
                    <div className="mb-4">
                      <h3 className="text-3xl font-light mb-2">Get in Touch</h3>
                      <p className="text-zinc-500 text-sm italic">Partner with the future of hydration.</p>
                    </div>

                    <div className="border-b border-white/20 pb-4 group/input focus-within:border-brand-lime transition-colors">
                      <label className="block text-[10px] uppercase tracking-widest text-brand-lime mb-2 font-bold">Full Name</label>
                      <input 
                        required
                        className="bg-transparent w-full outline-none text-white placeholder-zinc-700 text-sm py-1"
                        placeholder="Alex Rivera"
                      />
                    </div>
                    
                    <div className="border-b border-white/20 pb-4 group/input focus-within:border-brand-lime transition-colors">
                      <label className="block text-[10px] uppercase tracking-widest text-brand-lime mb-2 font-bold">Email Address</label>
                      <input 
                        required
                        type="email"
                        className="bg-transparent w-full outline-none text-white placeholder-zinc-700 text-sm py-1"
                        placeholder="alex@agency.com"
                      />
                    </div>

                    <div className="border-b border-white/20 pb-4 group/input focus-within:border-brand-lime transition-colors">
                      <label className="block text-[10px] uppercase tracking-widest text-brand-lime mb-2 font-bold">Inquiry Type</label>
                      <select className="bg-transparent w-full outline-none text-white text-sm appearance-none py-1 cursor-pointer">
                        <option className="bg-charcoal-black">Wholesale Partnership</option>
                        <option className="bg-charcoal-black">Custom Branding</option>
                        <option className="bg-charcoal-black">Press Inquiry</option>
                      </select>
                    </div>

                    <div className="pt-6">
                      <button 
                        disabled={formState === 'submitting'}
                        type="submit"
                        className="w-full py-5 bg-brand-lime hover:bg-white text-black font-bold uppercase text-[11px] tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-[0.99]"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />
                            Sending...
                          </>
                        ) : (
                          <>Send Message <Send size={16} /></>
                        )}
                      </button>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex justify-between items-center">
                      <div>
                        <div className="text-[10px] uppercase text-zinc-500 tracking-tighter">Office Enquiries</div>
                        <div className="text-sm font-mono text-white/80">+1 (800) AY-MUAZ</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase text-zinc-500 tracking-tighter">Location</div>
                        <div className="text-sm italic text-white/80">Lagos / London</div>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
