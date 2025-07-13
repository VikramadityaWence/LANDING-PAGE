'use client'

import { motion } from 'framer-motion'
import { User, MessageSquare } from 'lucide-react'

const modes = [
  {
    icon: User,
    title: "Professional Mode",
    description: "Get detailed legal analysis with clause-by-clause breakdown, risk assessment, and professional recommendations.",
    example: "Section 4.2 contains an unusually broad liability waiver that may expose you to significant financial risk in case of service interruption. Consider negotiating specific limitations or seeking legal counsel.",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: MessageSquare,
    title: "Casual Mode", 
    description: "Plain-English summaries that highlight the most important stuff without the legal jargon. Perfect for everyday contracts.",
    example: "🚩 Red flag: They can basically cancel anytime but you're stuck for a year. Also, if their service breaks, you can't get money back even if it costs you.",
    color: "from-blue-500 to-cyan-500"
  }
]

export default function AnalysisModes() {
  return (
    <section id="analysis-modes" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-poppins">
            Choose Your Analysis Style
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get contract insights the way you want them - detailed professional analysis or quick plain-English summaries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism p-8 rounded-2xl hover:glassmorphism-dark transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${mode.color} rounded-2xl flex items-center justify-center mb-6`}>
                <mode.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">{mode.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{mode.description}</p>
              
              <div className="glassmorphism-dark rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Example output:</p>
                <p className="text-gray-300 italic leading-relaxed">&ldquo;{mode.example}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}