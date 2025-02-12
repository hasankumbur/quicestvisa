interface ValidationResult {
  isValid: boolean;
  error?: string;
}

interface Translations {
  footer: {
    validation: {
      invalidEmail: string;
      emailMissingAt: string;
      invalidPhone: string;
    };
  };
}

export const validateEmail = (email: string, translations: Translations): ValidationResult => {
  // Check for @ symbol
  if (!email.includes('@')) {
    return {
      isValid: false,
      error: translations.footer.validation.emailMissingAt
    }
  }

  // Check for valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return {
    isValid: emailRegex.test(email),
    error: emailRegex.test(email) ? undefined : translations.footer.validation.invalidEmail
  }
}

export const validatePhone = (phone: string, translations: Translations): ValidationResult => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '')
  
  // Check if the cleaned phone number has 10-15 digits
  // This allows for international numbers with or without country code
  const isValid = cleanPhone.length >= 10 && cleanPhone.length <= 15
  
  return {
    isValid,
    error: isValid ? undefined : translations.footer.validation.invalidPhone
  }
}

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '')
  
  // Format for Turkish numbers (example: 0(5XX) XXX XX XX)
  if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '0($1) $2 $3 $4')
  }
  
  // For international numbers, keep as is but add spaces for readability
  return cleanPhone.replace(/(\d{3})(?=\d)/g, '$1 ').trim()
} 