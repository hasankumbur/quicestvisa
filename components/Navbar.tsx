'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  const toggleLanguage = (lang: 'tr' | 'en') => {
    setLanguage(lang)
    setShowLangMenu(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-900/95 backdrop-blur-lg shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl font-display font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QuickestVisa
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-white/80 transition-colors duration-200"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white hover:text-white/80 transition-colors duration-200"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-white/80 transition-colors duration-200"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-white/80 transition-colors duration-200"
            >
              {t.nav.testimonials}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-white/80 transition-colors duration-200"
            >
              {t.nav.pricing}
            </button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {t.nav.contact}
            </motion.button>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setShowLangMenu(!showLangMenu)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors duration-200"
              >
                <Image
                  src={`/flags/${language}.svg`}
                  alt={language === 'tr' ? 'Türkçe' : 'English'}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                <span className="uppercase">{language === 'tr' ? 'TR' : 'EN'}</span>
              </motion.button>

              {/* Language Dropdown Menu */}
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-xl"
                >
                  <button
                    onClick={() => toggleLanguage('tr')}
                    className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Image
                      src="/flags/tr.svg"
                      alt="Türkçe"
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                    <span>Türkçe</span>
                  </button>
                  <button
                    onClick={() => toggleLanguage('en')}
                    className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Image
                      src="/flags/en.svg"
                      alt="English"
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                    <span>English</span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary-900/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-white hover:text-white/80 py-2 transition-colors duration-200"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-white hover:text-white/80 py-2 transition-colors duration-200"
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-white hover:text-white/80 py-2 transition-colors duration-200"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-white hover:text-white/80 py-2 transition-colors duration-200"
              >
                {t.nav.testimonials}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-white hover:text-white/80 py-2 transition-colors duration-200"
              >
                {t.nav.pricing}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                {t.nav.contact}
              </button>

              {/* Mobile Language Selector */}
              <div className="flex justify-center space-x-4 pt-2">
                <motion.button
                  onClick={() => toggleLanguage('tr')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  <Image
                    src="/flags/tr.svg"
                    alt="Türkçe"
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span>TR</span>
                </motion.button>
                <motion.button
                  onClick={() => toggleLanguage('en')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  <Image
                    src="/flags/en.svg"
                    alt="English"
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span>EN</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
} 