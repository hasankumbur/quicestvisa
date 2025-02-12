'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  RocketLaunchIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'

interface ServicesSectionProps {
  id?: string;
}

const serviceIcons = [
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ServicesSection({ id }: ServicesSectionProps) {
  const { t } = useLanguage()

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-primary-900 to-primary-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-16"
        >
          {t.services.title}
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/10"
              >
                <div className="bg-gradient-to-br from-secondary-500 to-primary-500 p-3 rounded-lg inline-block mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
} 