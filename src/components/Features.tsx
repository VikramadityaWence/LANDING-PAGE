'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Clock, Brain } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Contract Protection",
      description: "Identify unfair clauses, hidden fees, and potential legal traps before you sign."
    },
    {
      icon: Eye,
      title: "Smart Analysis",
      description: "Our AI reads through complex legal documents and highlights what matters most."
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Get instant analysis instead of spending hours reading through dense legal text."
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced machine learning trained on thousands of legal documents."
    }
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Why Choose Contracker AI?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't get caught by surprise. Our AI helps you understand what you're agreeing to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}