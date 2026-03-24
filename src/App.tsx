/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MapPin, Star, ArrowRight, Zap } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="text-2xl font-black tracking-tighter uppercase italic">
          Dr Pepper
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-drpepper-silver transition-colors">Flavors</a>
          <a href="#" className="hover:text-drpepper-silver transition-colors">Heritage</a>
          <a href="#" className="hover:text-drpepper-silver transition-colors">Rewards</a>
        </div>
        <button className="bg-white text-drpepper-maroon px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-drpepper-silver transition-all">
          Find a Pepper
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] mb-8 bg-white/5">
            Est. 1885 • Waco, Texas
          </span>
          <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.85] tracking-tighter mb-8">
            23 Flavors. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-drpepper-silver">
              One Legend.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Experience the unique, carbonated blend that has defined refreshment for over a century. 
            Crafted with a secret recipe that defies imitation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-drpepper-maroon px-10 py-5 rounded-full font-black text-lg uppercase tracking-tighter flex items-center justify-center gap-3 hover:scale-105 transition-transform group">
              Find Your Flavor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 px-10 py-5 rounded-full font-black text-lg uppercase tracking-tighter transition-all">
              Join the Pepper Pack
            </button>
          </div>
        </motion.div>

        {/* Feature Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full max-w-6xl">
          <FeatureCard 
            icon={<Zap className="w-6 h-6" />}
            title="Unique Blend"
            description="The perfect harmony of 23 distinct flavors in every sip."
          />
          <FeatureCard 
            icon={<Star className="w-6 h-6" />}
            title="Pepper Pack"
            description="Earn exclusive rewards and early access to limited drops."
          />
          <FeatureCard 
            icon={<MapPin className="w-6 h-6" />}
            title="Near You"
            description="Find Dr Pepper at retailers and restaurants nationwide."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-12 border-t border-white/10 text-center text-white/40 text-xs uppercase tracking-widest">
        &copy; 2026 Dr Pepper/Seven Up, Inc. All Rights Reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left hover:bg-white/10 transition-all"
    >
      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-drpepper-silver">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 uppercase italic tracking-tight">{title}</h3>
      <p className="text-white/60 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}
