'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { StarIcon } from '@heroicons/react/24/solid'

interface Testimonial {
  name: string
  role: string
  content: string
}

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scroll = () => {
      const scrollAmount = 300 // Her seferinde kaydırılacak miktar
      const maxScroll = container.scrollWidth - container.clientWidth
      
      if (container.scrollLeft >= maxScroll) {
        // Sona ulaşıldığında başa dön
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollTo({
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth'
        })
      }
    }

    const interval = setInterval(scroll, 3000) // Her 3 saniyede bir kaydır

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary-800 to-primary-900 overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{t.testimonials.title}</h2>
          <p className="text-xl text-white/80">{t.testimonials.description}</p>
        </motion.div>

        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-hidden"
        >
          {t.testimonials.users.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex-none w-[400px] bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3 flex-grow">
                  <h3 className="text-base font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {testimonial.role}
                  </p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-secondary-500" />
                  ))}
                </div>
              </div>
              <p className="text-white/80 text-sm italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 