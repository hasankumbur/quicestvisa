'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { ClockIcon, CalendarIcon, BellIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function HowItWorksSection() {
  const { t } = useLanguage()

  const steps = [
    { icon: ClockIcon, ...t.howItWorks.steps.tracking },
    { icon: CalendarIcon, ...t.howItWorks.steps.dateSelection },
    { icon: BellIcon, ...t.howItWorks.steps.notification },
    { icon: CheckCircleIcon, ...t.howItWorks.steps.autoBooking },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t.howItWorks.title}</h2>
          <p className="text-xl text-white/80">{t.howItWorks.description}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10" />

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full p-2 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className={`pt-10 ${index % 2 === 0 ? 'md:pt-10' : 'md:pt-24'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-white/80 text-lg">
            {t.howItWorks.footer}
          </p>
        </motion.div>
      </div>
    </section>
  )
} 