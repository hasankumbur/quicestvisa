'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PricingSection() {
  const { t } = useLanguage()

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-primary-800 to-primary-900 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.05, 0.1] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary-500/10 rounded-full filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full filter blur-[100px]"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-16"
        >
          {t.pricing.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.free.title}</h3>
              <p className="text-white/80 mb-6">{t.pricing.free.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{t.pricing.free.price}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.free.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-white/80">
                    <CheckIcon className="w-5 h-5 text-secondary-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <motion.a
              href="https://t.me/quickestvisa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-primary-900 hover:bg-white/90 font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl inline-block text-center mt-auto"
            >
              {t.pricing.free.cta}
            </motion.a>
          </motion.div>

          {/* Individual Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.individual.title}</h3>
              <p className="text-white/80 mb-6">{t.pricing.individual.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{t.pricing.individual.price}</span>
                <span className="text-white/60 ml-2">{t.pricing.individual.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.individual.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-white/80">
                    <CheckIcon className="w-5 h-5 text-secondary-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-primary-900 hover:bg-white/90 font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl mt-auto"
            >
              {t.pricing.individual.cta}
            </motion.button>
          </motion.div>

          {/* Business Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-secondary-500/20 to-primary-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-grow">
              <div className="absolute top-6 right-6">
                <span className="bg-white/20 text-white text-sm py-1 px-3 rounded-full">
                  {t.pricing.business.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.business.title}</h3>
              <p className="text-white/80 mb-6">{t.pricing.business.description}</p>
              <div className="mb-8">
                <span className="text-2xl font-bold text-white">{t.pricing.business.price}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.business.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-white/80">
                    <CheckIcon className="w-5 h-5 text-secondary-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              onClick={scrollToContactForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-secondary-500 to-primary-500 text-white hover:opacity-90 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
            >
              {t.pricing.business.cta}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 