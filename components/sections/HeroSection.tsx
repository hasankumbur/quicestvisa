'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c4a6e] via-[#075985] to-[#701a75] overflow-hidden">
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
            opacity: [0.3, 0.2, 0.3] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d946ef]/20 rounded-full filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/20 rounded-full filter blur-[100px]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg"
        >
          Vize Randevu Sürecinizi Otomatikleştirin
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow"
        >
          Gelişmiş bot sistemimiz ile vize ofisleriniz için randevu takip ve alma süreçlerini otomatikleştirin. Manuel randevu takibi derdine son!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToContactForm}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-[#0c4a6e] hover:bg-white/90 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Hemen İletişime Geçin
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c4a6e] to-transparent z-10"></div>
    </section>
  )
} 