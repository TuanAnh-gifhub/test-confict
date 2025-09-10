'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import Tutorial from '@/components/Tutorial'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'
import LiquidGlassDemo from '@/components/LiquidGlassDemo'
// import ThreeScene from '@/components/ThreeScene'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Three.js Background Scene - Removed */}
      {/* <div className="fixed inset-0 -z-10">
        <ThreeScene />
      </div> */}
      
      {/* Content */}
      <div className="relative z-10">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero />
        <About />
        <Benefits />
        <Tutorial />
        <Feedback />
        
        {/* Liquid Glass Demo Section */}
        <section id="liquid-glass-demo" className="py-20">
          <LiquidGlassDemo />
        </section>
        
        <Footer />
      </div>
    </main>
  )
} 