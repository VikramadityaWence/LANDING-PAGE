'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Eye, Upload, Search, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your contracts never leave your device. AI analysis happens locally, keeping your sensitive documents completely private."
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Get comprehensive contract insights in seconds. No waiting, no uploading to servers, just instant results."
  },
  {
    icon: Eye,
    title: "Hidden Clause Detection",
    description: "Automatically spots problematic clauses, unfair terms, and potential red flags that could cost you later."
  },
  {
    icon: Upload,
    title: "Multiple Formats",
    description: "Supports PDFs, Word docs, plain text, and even URLs. Paste or upload any contract format."
  },
  {
    icon: Search,
    title: "Smart Summarization",
    description: "Get the key points without reading pages of legal jargon. Perfect for busy professionals and regular users."
  },
  {
    icon: CheckCircle,
    title: "Dual Analysis Modes",
    description: "Choose between lawyer-level detailed analysis or plain-English summaries for quick understanding."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-poppins">
            Why local?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Keep your contracts private while getting AI-powered insights. No cloud uploads, no data collection, just pure analysis power on your device.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism p-8 rounded-2xl hover:glassmorphism-dark transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}