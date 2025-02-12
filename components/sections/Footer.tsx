'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { validateEmail, validatePhone, formatPhoneNumber } from '@/utils/validators'
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
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Reset form errors when language changes
  useEffect(() => {
    setFormErrors({ email: '', phone: '' })
  }, [language])

  const validateForm = (): boolean => {
    let isValid = true
    const errors = {
      email: '',
      phone: ''
    }

    // Validate email
    const emailValidation = validateEmail(formData.email, t)
    if (!emailValidation.isValid) {
      errors.email = emailValidation.error || ''
      isValid = false
    }

    // Validate phone (only if provided)
    if (formData.phone) {
      const phoneValidation = validatePhone(formData.phone, t)
      if (!phoneValidation.isValid) {
        errors.phone = phoneValidation.error || ''
        isValid = false
      }
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language,
          phone: formData.phone ? formatPhoneNumber(formData.phone) : ''
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setFormErrors({ email: '', phone: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Validate email as user types
    if (name === 'email') {
      const emailValidation = validateEmail(value, t)
      setFormErrors(prev => ({ ...prev, email: emailValidation.error || '' }))
    } else if (name === 'phone') {
      setFormErrors(prev => ({ ...prev, phone: '' }))
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white overflow-hidden pt-20">
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

      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/80 mb-6">
              {t.footer.description}
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
            id="contact"
          >
            <h4 className="text-lg font-bold mb-4">{t.footer.contactTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.footer.namePlaceholder}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-secondary-500 border border-white/10"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.footer.emailPlaceholder}
                  className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-secondary-500 border ${formErrors.email ? 'border-red-500' : 'border-white/10'}`}
                  required
                  onInvalid={(e) => {
                    e.preventDefault()
                    const input = e.target as HTMLInputElement
                    if (!input.value.includes('@')) {
                      setFormErrors(prev => ({ ...prev, email: t.footer.validation.emailMissingAt }))
                    }
                  }}
                />
                {formErrors.email && (
                  <p className="mt-1 text-red-400 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.footer.phonePlaceholder}
                  className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-secondary-500 border ${formErrors.phone ? 'border-red-500' : 'border-white/10'}`}
                />
                {formErrors.phone && (
                  <p className="mt-1 text-red-400 text-sm">{formErrors.phone}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.footer.messagePlaceholder}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-secondary-500 border border-white/10 resize-none"
                  required
                ></textarea>
              </div>
              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm">
                  {t.footer.messages.success}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm">
                  {t.footer.messages.error}
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary-900 hover:bg-white/90 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.footer.sendingButton : t.footer.sendButton}
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
            {t.footer.copyright}
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