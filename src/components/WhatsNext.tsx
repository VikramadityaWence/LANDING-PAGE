'use client'

import { motion } from 'framer-motion'
import { Globe, Languages, Users } from 'lucide-react'

export default function WhatsNext() {
  return (
    <section id="whats-next" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            What's Next?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're expanding our platform to serve more users globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Current Languages</h3>
            <p className="text-gray-400 mb-4">
              Currently supporting 8 major languages including English, Spanish, French, German, and more.
            </p>
            <div className="text-purple-400 font-semibold">8 Languages Active</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Indian Languages</h3>
            <p className="text-gray-400 mb-4">
              Expanding to support major Indian languages including Hindi, Tamil, Bengali, and others to serve the Indian market.
            </p>
            <div className="text-blue-400 font-semibold">Coming Soon</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Global Reach</h3>
            <p className="text-gray-400 mb-4">
              Our goal is to make legal document analysis accessible to everyone, regardless of language or location.
            </p>
            <div className="text-cyan-400 font-semibold">Vision 2025</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}