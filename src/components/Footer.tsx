'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">❄️</span>
            </div>
            <span className="text-2xl font-bold text-white">Contracker AI</span>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Empowering users to understand legal documents with AI-powered analysis. 
            Don't let hidden clauses catch you off guard.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#analysis-modes" className="text-gray-400 hover:text-white transition-colors">Analysis Modes</a>
            <a href="#whats-next" className="text-gray-400 hover:text-white transition-colors">What's Next</a>
          </div>
          
          <div className="border-t border-gray-800/50 pt-8">
            <p className="text-gray-500">
              © 2025 Contracker AI. All rights reserved. | Not legal advice - for informational purposes only.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}