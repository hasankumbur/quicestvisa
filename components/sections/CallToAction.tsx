'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#075985] to-[#0c4a6e] overflow-hidden">
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
            opacity: [0.2, 0.1, 0.2] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d946ef]/10 rounded-full filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0ea5e9]/10 rounded-full filter blur-[100px]"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg"
          >
            Vize Ofislerine Özel Bot Çözümü
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-12 drop-shadow"
          >
            Manuel randevu takibi ve kaçırılan fırsatlar artık geride kalsın. Bot sistemimiz ile randevuları otomatik olarak alın, işinizi büyütün.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              onClick={scrollToContactForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#0c4a6e] hover:bg-white/90 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Detaylı Bilgi Al
            </motion.button>
            <motion.button
              onClick={scrollToContactForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              Demo Talep Et
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 