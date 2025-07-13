'use client'

import { motion } from 'framer-motion'
import { Globe, Languages, Users, ArrowRight } from 'lucide-react'

export default function WhatsNext() {
  return (
    <section id="whats-next" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-poppins">
            What's Next
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glassmorphism p-8 md:p-12 rounded-3xl max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">
            <div className="flex justify-center lg:justify-start">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Globe className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center lg:text-left">
                We're committed to making <span className="text-white font-semibold">Con Tracker</span> accessible to everyone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="glassmorphism-dark p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Languages className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white font-poppins">Current Support</h3>
              </div>
              <p className="text-gray-300">
                Currently available in <span className="text-purple-400 font-semibold">8 different languages</span>, making legal analysis accessible across diverse communities.
              </p>
            </div>

            <div className="glassmorphism-dark p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-white font-poppins">Future Vision</h3>
              </div>
              <p className="text-gray-300">
                Expanding to support <span className="text-blue-400 font-semibold">many more Indian languages</span> so users across India can analyze contracts in their preferred language.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our next big goal is to integrate even more Indian languages into our platform. 
              Stay tuned as we work to <span className="text-white font-semibold">break language barriers</span> and make legal clarity available to all!
            </p>
            
            <div className="flex items-center justify-center text-purple-400 font-medium">
              <span>Stay tuned for updates</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
