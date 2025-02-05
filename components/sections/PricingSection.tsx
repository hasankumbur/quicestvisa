'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const features = {
  individual: [
    'Günlük randevu kontrolü',
    'Otomatik randevu yakalama',
    'E-posta bildirimleri',
    'Temel destek',
  ],
  business: [
    'Sınırsız randevu kontrolü',
    'Öncelikli randevu yakalama',
    '7/24 teknik destek',
    'Özel API entegrasyonu',
    'Çoklu kullanıcı desteği',
    'Özelleştirilebilir raporlama',
  ],
}

export default function PricingSection() {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#075985] to-[#0c4a6e] overflow-hidden">
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
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d946ef]/10 rounded-full filter blur-[100px]"
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
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/10 rounded-full filter blur-[100px]"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-16"
        >
          Fiyatlandırma
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bireysel Paket */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Bireysel</h3>
            <p className="text-white/80 mb-6">Bireysel kullanıcılar için ideal çözüm</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₺1,499</span>
              <span className="text-white/60 ml-2">/aylık</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.individual.map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <CheckIcon className="w-5 h-5 text-[#d946ef] mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-[#0c4a6e] hover:bg-white/90 font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Hemen Başla
            </motion.button>
          </motion.div>

          {/* Kurumsal Paket */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#d946ef]/20 to-[#0ea5e9]/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300"
          >
            <div className="absolute top-6 right-6">
              <span className="bg-white/20 text-white text-sm py-1 px-3 rounded-full">
                Önerilen
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Kurumsal</h3>
            <p className="text-white/80 mb-6">Vize ofisleri için özel çözüm</p>
            <div className="mb-8">
              <span className="text-2xl font-bold text-white">Özel Fiyatlandırma</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.business.map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <CheckIcon className="w-5 h-5 text-[#d946ef] mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              onClick={scrollToContactForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#d946ef] to-[#0ea5e9] text-white hover:opacity-90 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Bizimle İletişime Geçin
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 