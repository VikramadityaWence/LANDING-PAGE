'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 4000) // Animation lasts 4 seconds
    }, 15000) // Repeat every 15 seconds

    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center px-6 py-3 rounded-full glassmorphism mb-8"
        >
          <span className="text-sm text-gray-300">AI-Powered Legal Analysis</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 30%, #ffffff 60%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Spot the 
          <span 
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Traps
          </span>
          <br />
          in Contracts & ToS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          AI that reads contracts for you — legal insights or plain-English red flags.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center"
        >
          <button 
            onClick={() => window.open('https://app.contrackerai.skillverta.com', '_blank')}
            className="group relative px-12 py-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 glassmorphism"
          >
            <span className="flex items-center gap-3">
              Try now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-sm text-gray-500"
        >
          Run locally, keep control. AI-powered contract analysis without the privacy concerns.
        </motion.div>
      </div>
    </section>
  )
}
