import '@testing-library/jest-dom'

// Test validation functions by creating helper functions that mimic the validation logic
describe('Validation Functions', () => {
  
  // Email validation function (extracted from the component logic)
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Phone validation function (extracted from the component logic)
  const validatePhone = (phone: string): boolean => {
    return /^[\+]?[\d\s\-\(\)]{10,}$/.test(phone.replace(/\s/g, ''))
  }

  // Name validation function (extracted from the component logic)
  const validateName = (name: string): { isValid: boolean; error?: string } => {
    if (!name.trim()) {
      return { isValid: false, error: 'Name is required' }
    }
    if (name.trim().length < 2) {
      return { isValid: false, error: 'Name must be at least 2 characters' }
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return { isValid: false, error: 'Name can only contain letters and spaces' }
    }
    return { isValid: true }
  }

  // URL validation function
  const validateURL = (url: string): boolean => {
    return /^https?:\/\/.+\..+/.test(url)
  }

  describe('Email Validation', () => {
    test('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.uk')).toBe(true)
      expect(validateEmail('test+tag@example.org')).toBe(true)
    })

    test('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@example.com')).toBe(false)
      expect(validateEmail('test@example')).toBe(false)
      expect(validateEmail('')).toBe(false)
    })
  })

  describe('Phone Validation', () => {
    test('validates correct phone numbers', () => {
      expect(validatePhone('1234567890')).toBe(true)
      expect(validatePhone('+1234567890')).toBe(true)
      expect(validatePhone('123-456-7890')).toBe(true)
      expect(validatePhone('(123) 456-7890')).toBe(true)
      expect(validatePhone('123 456 7890')).toBe(true)
      expect(validatePhone('+1 (123) 456-7890')).toBe(true)
    })

    test('rejects invalid phone numbers', () => {
      expect(validatePhone('123')).toBe(false)
      expect(validatePhone('12345')).toBe(false)
      expect(validatePhone('abc1234567')).toBe(false)
      expect(validatePhone('')).toBe(false)
    })
  })

  describe('Name Validation', () => {
    test('validates correct names', () => {
      expect(validateName('John Doe').isValid).toBe(true)
      expect(validateName('Jane Smith').isValid).toBe(true)
      expect(validateName('Mary Jane Watson').isValid).toBe(true)
      expect(validateName('O Connor').isValid).toBe(true)
    })

    test('rejects empty or whitespace names', () => {
      const result = validateName('')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Name is required')

      const result2 = validateName('   ')
      expect(result2.isValid).toBe(false)
      expect(result2.error).toBe('Name is required')
    })

    test('rejects names that are too short', () => {
      const result = validateName('A')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Name must be at least 2 characters')
    })

    test('rejects names with invalid characters', () => {
      const result = validateName('John123')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Name can only contain letters and spaces')

      const result2 = validateName('John@Doe')
      expect(result2.isValid).toBe(false)
      expect(result2.error).toBe('Name can only contain letters and spaces')
    })
  })

  describe('URL Validation', () => {
    test('validates correct URLs', () => {
      expect(validateURL('https://www.example.com')).toBe(true)
      expect(validateURL('http://example.com')).toBe(true)
      expect(validateURL('https://subdomain.example.com/path')).toBe(true)
      expect(validateURL('https://linkedin.com/in/username')).toBe(true)
    })

    test('rejects invalid URLs', () => {
      expect(validateURL('example.com')).toBe(false)
      expect(validateURL('www.example.com')).toBe(false)
      expect(validateURL('ftp://example.com')).toBe(false)
      expect(validateURL('https://')).toBe(false)
      expect(validateURL('')).toBe(false)
    })
  })

  describe('Date Validation', () => {
    // Test month/year validation logic
    const validateDateFields = (month: string, year: string): boolean => {
      return month.trim() !== '' && year.trim() !== ''
    }

    test('validates when both month and year are provided', () => {
      expect(validateDateFields('Jan', '2023')).toBe(true)
      expect(validateDateFields('Dec', '2024')).toBe(true)
      expect(validateDateFields('Jun', 'Present')).toBe(true)
    })

    test('rejects when month or year is missing', () => {
      expect(validateDateFields('', '2023')).toBe(false)
      expect(validateDateFields('Jan', '')).toBe(false)
      expect(validateDateFields('', '')).toBe(false)
    })
  })

  describe('Professional Title Validation', () => {
    const validateTitle = (title: string): { isValid: boolean; error?: string } => {
      if (title && title.length > 200) {
        return { isValid: false, error: 'Professional title should not exceed 200 characters' }
      }
      return { isValid: true }
    }

    test('allows empty title', () => {
      expect(validateTitle('').isValid).toBe(true)
    })

    test('allows reasonable length titles', () => {
      expect(validateTitle('Senior Software Engineer').isValid).toBe(true)
      expect(validateTitle('Full Stack Developer with expertise in React and Node.js').isValid).toBe(true)
    })

    test('rejects overly long titles', () => {
      const longTitle = 'A'.repeat(201)
      const result = validateTitle(longTitle)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Professional title should not exceed 200 characters')
    })
  })

  describe('Address Validation', () => {
    const validateAddress = (address: string): { isValid: boolean; error?: string } => {
      if (!address.trim()) {
        return { isValid: false, error: 'Address is required' }
      }
      if (address.trim().length < 5) {
        return { isValid: false, error: 'Please enter a complete address' }
      }
      return { isValid: true }
    }

    test('validates complete addresses', () => {
      expect(validateAddress('123 Main St, City, State').isValid).toBe(true)
      expect(validateAddress('456 Oak Avenue').isValid).toBe(true)
      expect(validateAddress('789 Pine Street, Apt 2B').isValid).toBe(true)
    })

    test('rejects empty addresses', () => {
      const result = validateAddress('')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Address is required')
    })

    test('rejects incomplete addresses', () => {
      const result = validateAddress('123')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Please enter a complete address')
    })
  })
}) 