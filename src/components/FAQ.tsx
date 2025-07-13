'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "How does local AI analysis work?",
    answer: "Contracker AI runs entirely on your device using advanced local language models. Your contracts are never uploaded to any server - all analysis happens offline for complete privacy."
  },
  {
    question: "What file types can I upload?",
    answer: "You can upload PDFs, paste URLs, or copy-paste text directly. Contracker AI supports most common document formats."
  },
  {
    question: "How accurate is the AI analysis?",
    answer: "Our AI is trained on extensive legal datasets and provides highly accurate analysis. However, for critical legal decisions, we recommend consulting with a qualified attorney."
  },
  {
    question: "Does it work offline?",
    answer: "Yes! Once installed, Contracker AI works completely offline. No internet connection required for contract analysis."
  },
  {
    question: "Is my data really private?",
    answer: "Absolutely. Your contracts never leave your device. Unlike cloud-based services, there's no risk of data breaches or unauthorized access to your sensitive documents."
  },
  {
    question: "Can I analyze contracts in different languages?",
    answer: "Currently, Contracker AI works best with English contracts. Support for additional languages is planned for future updates."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-poppins">
          Frequently asked questions
        </h2>
        <p className="text-xl text-gray-400">
          Got questions? We&apos;ve got answers.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between hover:glassmorphism-dark transition-all duration-300"
            >
              <span className="text-white font-semibold text-lg font-poppins">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-400" />
              ) : (
                <Plus className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism-dark"
              >
                <p className="text-gray-300 leading-relaxed px-6 pb-6">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}