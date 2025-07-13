'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Globe } from 'lucide-react'

export default function AnalysisModes() {
  const modes = [
    {
      icon: Zap,
      title: "Quick Scan",
      description: "Fast analysis focusing on common red flags and important clauses",
      features: ["Hidden fees detection", "Cancellation policies", "Auto-renewal clauses"]
    },
    {
      icon: Target,
      title: "Deep Analysis",
      description: "Comprehensive review of all terms and conditions",
      features: ["Full document analysis", "Legal risk assessment", "Clause-by-clause breakdown"]
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Support for contracts in multiple languages",
      features: ["8 languages supported", "Cultural context awareness", "Regional law considerations"]
    }
  ]

  return (
    <section id="analysis-modes" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Analysis Modes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the level of analysis that suits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glassmorphism p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <mode.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{mode.title}</h3>
              <p className="text-gray-400 mb-6">{mode.description}</p>
              <ul className="space-y-2">
                {mode.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}