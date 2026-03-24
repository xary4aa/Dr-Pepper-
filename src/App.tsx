/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Star, ArrowRight, Zap, ShieldCheck, Gift, ChevronRight } from "lucide-react";

export default function App() {
  const [activeFlavor, setActiveFlavor] = useState<number | null>(null);

  const flavors = [
    { id: 1, name: "Original", desc: "The legendary blend of 23 flavors.", color: "bg-drpepper-maroon" },
    { id: 2, name: "Cherry", desc: "A smooth, tart twist on the classic.", color: "bg-red-900" },
    { id: 3, name: "Cream Soda", desc: "Velvety smooth vanilla notes.", color: "bg-orange-900" },
    { id: 4, name: "Zero Sugar", desc: "All the flavor, none of the sugar.", color: "bg-black" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-drpepper-silver selection:text-drpepper-maroon">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-drpepper-maroon/80 backdrop-blur-md p-6 flex justify-between items-center border-b border-white/10">
        <div className="text-2xl font-black tracking-tighter uppercase italic">
          Dr Pepper
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#flavors" className="hover:text-drpepper-silver transition-colors">Flavors</a>
          <a href="#rewards" className="hover:text-drpepper-silver transition-colors">Rewards</a>
          <a href="#heritage" className="hover:text-drpepper-silver transition-colors">Heritage</a>
        </div>
        <button className="bg-white text-drpepper-maroon px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-drpepper-silver transition-all shadow-lg shadow-black/20">
          Find a Pepper
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.4em] mb-8 bg-white/5 backdrop-blur-sm">
            Est. 1885 • The Original Craft Soda
          </span>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase italic leading-[0.8] tracking-tighter mb-10">
            23 Flavors. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-drpepper-silver to-white/50">
              One Legend.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Experience the unique, carbonated blend that has defined refreshment for over a century. 
            A secret recipe that defies imitation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-drpepper-maroon px-12 py-6 rounded-full font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-3 hover:scale-105 transition-transform group shadow-2xl shadow-black/40">
              Explore Flavors
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 px-12 py-6 rounded-full font-black text-xl uppercase tracking-tighter transition-all backdrop-blur-sm">
              Join Pepper Pack
            </button>
          </div>
        </motion.div>
      </header>

      {/* Flavor Discovery Tool (Interactive Pillar) */}
      <section id="flavors" className="py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">Discover the Blend</h2>
              <p className="text-white/50 text-lg">Hover over a variety to reveal its unique profile. Every can is a masterpiece of 23 distinct notes.</p>
            </div>
            <button className="text-drpepper-silver uppercase tracking-widest text-xs font-bold flex items-center gap-2 group">
              View All Products <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {flavors.map((flavor) => (
              <motion.div
                key={flavor.id}
                onMouseEnter={() => setActiveFlavor(flavor.id)}
                onMouseLeave={() => setActiveFlavor(null)}
                className={`relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer group border border-white/10 transition-all duration-500 ${flavor.color}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-8 w-full">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">{flavor.name}</h3>
                  <AnimatePresence>
                    {activeFlavor === flavor.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-white/70 text-sm leading-relaxed"
                      >
                        {flavor.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Zap className="w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Engineering: Rewards Section */}
      <section id="rewards" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-drpepper-silver uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Loyalty Program</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              The Pepper <br /> Pack.
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Join the inner circle. Scan receipts, engage with the brand, and unlock exclusive merchandise, 
              limited-edition flavors, and VIP experiences.
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4 text-lg font-medium">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-drpepper-silver">
                  <Star className="w-5 h-5" />
                </div>
                Earn points on every purchase
              </li>
              <li className="flex items-center gap-4 text-lg font-medium">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-drpepper-silver">
                  <Gift className="w-5 h-5" />
                </div>
                Redeem for limited drops
              </li>
              <li className="flex items-center gap-4 text-lg font-medium">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-drpepper-silver">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                Early access to new flavors
              </li>
            </ul>
            <button className="bg-white text-drpepper-maroon px-10 py-5 rounded-full font-black text-lg uppercase tracking-tighter hover:bg-drpepper-silver transition-all">
              Sign Up Now
            </button>
          </motion.div>

          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden">
               <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2/3 h-2/3 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center"
               >
                  <div className="w-1/2 h-1/2 bg-drpepper-maroon rounded-full blur-2xl opacity-50" />
               </motion.div>
               <div className="absolute text-center">
                  <span className="text-8xl font-black italic tracking-tighter">23</span>
                  <p className="uppercase tracking-widest text-xs font-bold opacity-50">Points per scan</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locator CTA */}
      <section className="py-20 px-6 bg-white text-drpepper-maroon">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">Thirsty Yet?</h2>
            <p className="text-lg opacity-70 font-medium">Find Dr Pepper at a store or restaurant near you.</p>
          </div>
          <button className="bg-drpepper-maroon text-white px-12 py-6 rounded-full font-black text-xl uppercase tracking-tighter flex items-center gap-4 hover:scale-105 transition-transform">
            <MapPin className="w-6 h-6" />
            Open Store Locator
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-20 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black tracking-tighter uppercase italic mb-8">Dr Pepper</div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              The oldest major soft drink in the United States. A unique blend of 23 flavors since 1885.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-drpepper-silver">Explore</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">All Flavors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pepper Pack</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Merchandise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-drpepper-silver">Support</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white/20 text-[10px] uppercase tracking-[0.5em]">
          &copy; 2026 Dr Pepper/Seven Up, Inc. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
