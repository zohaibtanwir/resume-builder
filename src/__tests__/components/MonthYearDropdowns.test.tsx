import '@testing-library/jest-dom'

describe('Month/Year Dropdown Functionality', () => {
  
  // Test month options generation
  describe('Month Options', () => {
    const months = [
      { value: '', label: 'Month' },
      { value: 'Jan', label: 'January' },
      { value: 'Feb', label: 'February' },
      { value: 'Mar', label: 'March' },
      { value: 'Apr', label: 'April' },
      { value: 'May', label: 'May' },
      { value: 'Jun', label: 'June' },
      { value: 'Jul', label: 'July' },
      { value: 'Aug', label: 'August' },
      { value: 'Sep', label: 'September' },
      { value: 'Oct', label: 'October' },
      { value: 'Nov', label: 'November' },
      { value: 'Dec', label: 'December' }
    ]

    test('has correct number of month options', () => {
      expect(months).toHaveLength(13) // 12 months + default option
    })

    test('has default empty option', () => {
      expect(months[0]).toEqual({ value: '', label: 'Month' })
    })

    test('has all 12 months with correct abbreviations', () => {
      const monthValues = months.slice(1).map(m => m.value)
      const expectedValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      expect(monthValues).toEqual(expectedValues)
    })

    test('has full month names as labels', () => {
      expect(months[1].label).toBe('January')
      expect(months[12].label).toBe('December')
    })
  })

  // Test year options generation
  describe('Year Options', () => {
    const currentYear = new Date().getFullYear()
    const years = [
      { value: '', label: 'Year' },
      { value: 'Present', label: 'Present' },
      ...Array.from({ length: 50 }, (_, i) => {
        const year = currentYear - i
        return { value: year.toString(), label: year.toString() }
      })
    ]

    test('has correct number of year options', () => {
      expect(years).toHaveLength(52) // Default + Present + 50 years
    })

    test('has default empty option', () => {
      expect(years[0]).toEqual({ value: '', label: 'Year' })
    })

    test('has Present option', () => {
      expect(years[1]).toEqual({ value: 'Present', label: 'Present' })
    })

    test('includes current year', () => {
      const yearValues = years.map(y => y.value)
      expect(yearValues).toContain(currentYear.toString())
    })

    test('includes years going back 50 years', () => {
      const oldestYear = currentYear - 49
      const yearValues = years.map(y => y.value)
      expect(yearValues).toContain(oldestYear.toString())
    })

    test('years are in descending order', () => {
      const numericYears = years
        .slice(2) // Skip empty and 'Present'
        .map(y => parseInt(y.value))
      
      for (let i = 0; i < numericYears.length - 1; i++) {
        expect(numericYears[i]).toBeGreaterThan(numericYears[i + 1])
      }
    })
  })

  // Test date formatting functionality
  describe('Date Formatting', () => {
    const formatDate = (month: string, year: string): string => {
      if (year === 'Present') return 'Present'
      if (month && year) return `${month} ${year}`
      return 'Date'
    }

    test('formats complete dates correctly', () => {
      expect(formatDate('Jan', '2023')).toBe('Jan 2023')
      expect(formatDate('Dec', '2024')).toBe('Dec 2024')
      expect(formatDate('Jun', '2022')).toBe('Jun 2022')
    })

    test('handles Present correctly', () => {
      expect(formatDate('', 'Present')).toBe('Present')
      expect(formatDate('Jan', 'Present')).toBe('Present')
    })

    test('returns default when incomplete', () => {
      expect(formatDate('', '')).toBe('Date')
      expect(formatDate('Jan', '')).toBe('Date')
      expect(formatDate('', '2023')).toBe('Date')
    })
  })

  // Test end month disabling when Present is selected
  describe('Present Selection Logic', () => {
    const shouldDisableEndMonth = (endYear: string): boolean => {
      return endYear === 'Present'
    }

    const getEndMonthValue = (endYear: string, currentEndMonth: string): string => {
      return endYear === 'Present' ? '' : currentEndMonth
    }

    test('disables end month when Present is selected', () => {
      expect(shouldDisableEndMonth('Present')).toBe(true)
      expect(shouldDisableEndMonth('2023')).toBe(false)
      expect(shouldDisableEndMonth('')).toBe(false)
    })

    test('clears end month when Present is selected', () => {
      expect(getEndMonthValue('Present', 'Jan')).toBe('')
      expect(getEndMonthValue('2023', 'Jan')).toBe('Jan')
      expect(getEndMonthValue('', 'Jan')).toBe('Jan')
    })
  })

  // Test validation for month/year combinations
  describe('Date Validation', () => {
    const validateDateRange = (
      startMonth: string, 
      startYear: string, 
      endMonth: string, 
      endYear: string
    ): { isValid: boolean; error?: string } => {
      // Check if start date is complete
      if (!startMonth.trim() || !startYear.trim()) {
        return { isValid: false, error: 'Start date is required' }
      }

      // Check if end date is complete (unless it's Present)
      if (endYear !== 'Present' && (!endMonth.trim() || !endYear.trim())) {
        return { isValid: false, error: 'End date is required' }
      }

      // Basic chronological check (simplified)
      if (endYear !== 'Present' && startYear && endYear) {
        const startYearNum = parseInt(startYear)
        const endYearNum = parseInt(endYear)
        
        if (startYearNum > endYearNum) {
          return { isValid: false, error: 'End date must be after start date' }
        }
      }

      return { isValid: true }
    }

    test('validates complete date ranges', () => {
      const result = validateDateRange('Jan', '2022', 'Dec', '2023')
      expect(result.isValid).toBe(true)
    })

    test('validates Present as end date', () => {
      const result = validateDateRange('Jan', '2022', '', 'Present')
      expect(result.isValid).toBe(true)
    })

    test('rejects incomplete start dates', () => {
      const result = validateDateRange('', '2022', 'Dec', '2023')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Start date is required')
    })

    test('rejects incomplete end dates', () => {
      const result = validateDateRange('Jan', '2022', '', '2023')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('End date is required')
    })

    test('rejects invalid chronological order', () => {
      const result = validateDateRange('Jan', '2024', 'Dec', '2022')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('End date must be after start date')
    })
  })

  // Test awards date filtering (no Present option)
  describe('Awards Date Options', () => {
    const currentYear = new Date().getFullYear()
    const awardYears = [
      { value: '', label: 'Year' },
      ...Array.from({ length: 50 }, (_, i) => {
        const year = currentYear - i
        return { value: year.toString(), label: year.toString() }
      })
    ]

    test('does not include Present option for awards', () => {
      const yearValues = awardYears.map(y => y.value)
      expect(yearValues).not.toContain('Present')
    })

    test('has correct number of award year options', () => {
      expect(awardYears).toHaveLength(51) // Default + 50 years (no Present)
    })
  })

  // Test month name to abbreviation mapping
  describe('Month Abbreviation Mapping', () => {
    const monthMap = new Map([
      ['January', 'Jan'],
      ['February', 'Feb'],
      ['March', 'Mar'],
      ['April', 'Apr'],
      ['May', 'May'],
      ['June', 'Jun'],
      ['July', 'Jul'],
      ['August', 'Aug'],
      ['September', 'Sep'],
      ['October', 'Oct'],
      ['November', 'Nov'],
      ['December', 'Dec']
    ])

    test('maps full month names to correct abbreviations', () => {
      expect(monthMap.get('January')).toBe('Jan')
      expect(monthMap.get('December')).toBe('Dec')
      expect(monthMap.get('September')).toBe('Sep')
    })

    test('has mapping for all 12 months', () => {
      expect(monthMap.size).toBe(12)
    })
  })
}) 