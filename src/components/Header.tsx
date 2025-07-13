'use client'

import { motion } from 'framer-motion'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img 
                src="/images/contracker-logo.png" 
                alt="Contracker AI Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white font-poppins">Contracker AI</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('analysis-modes')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Analysis Modes
            </button>
            <button 
              onClick={() => scrollToSection('whats-next')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              What's Next
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => window.open('https://app.contrackerai.skillverta.com', '_blank')}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Try now
          </button>
        </div>
      </div>
    </motion.header>
  )
}
