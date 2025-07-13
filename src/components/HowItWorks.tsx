'use client'

import { motion } from 'framer-motion'
import { Upload, Brain, FileText } from 'lucide-react'

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Contract",
    description: "Drop your PDF, paste a URL, or copy-paste text directly. Supports most document formats.",
    color: "from-purple-500 to-blue-500"
  },
  {
    number: "02", 
    icon: Brain,
    title: "AI Analysis",
    description: "Our local AI scans every clause, identifies risks, and spots problematic terms in seconds.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "03",
    icon: FileText,
    title: "Get Insights",
    description: "Receive detailed analysis or plain-English summary highlighting key risks and recommendations.",
    color: "from-cyan-500 to-teal-500"
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-poppins">
            How Contracker AI Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Upload → Analyze → Get smart summary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative glassmorphism p-8 rounded-2xl hover:glassmorphism-dark transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-700/30">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div className="w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-b-2 border-t-transparent border-b-transparent ml-7 -mt-1"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}