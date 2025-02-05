'use client'

import { motion } from 'framer-motion'
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa'

const footerLinks = {
  legal: [
    { name: 'Gizlilik Politikası', href: '#' },
    { name: 'Kullanım Şartları', href: '#' },
    { name: 'KVKK', href: '#' }
  ],
  social: [
    { name: 'Facebook', href: '#', icon: FaFacebook },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'LinkedIn', href: '#', icon: FaLinkedin }
  ]
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0c4a6e] to-[#075985] text-white overflow-hidden">
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

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">QuickestVisa</h3>
            <p className="text-white/80 mb-6">
              Profesyonel vize ve danışmanlık hizmetleriyle hayallerinize giden yolda yanınızdayız.
            </p>
            <div className="flex items-center space-x-6">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            id="contact-form"
          >
            <h4 className="text-lg font-bold mb-4">Bizimle İletişime Geçin</h4>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-[#d946ef] border border-white/10"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-[#d946ef] border border-white/10"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mesajınız"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-[#d946ef] border border-white/10 resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-white text-[#0c4a6e] hover:bg-white/90 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Mesaj Gönder
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-white/60 text-sm">
            © 2024 QuickestVisa. Tüm hakları saklıdır.
          </div>
          
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 