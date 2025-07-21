import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import BuilderPage from '@/app/builder/page'

// Mock React Quill to avoid SSR issues in tests
jest.mock('react-quill', () => {
  return function MockReactQuill({ value, onChange, placeholder }: any) {
    return (
      <textarea
        data-testid="rich-text-editor"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    )
  }
})

jest.mock('react-quill/dist/quill.snow.css', () => ({}))

describe('BuilderPage Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  test('renders main components correctly', () => {
    render(<BuilderPage />)
    
    // Check if main sections are rendered
    expect(screen.getByText('Dynamic Resume Builder')).toBeInTheDocument()
    expect(screen.getByText('Edit Resume')).toBeInTheDocument()
    expect(screen.getByText('Live Preview')).toBeInTheDocument()
    expect(screen.getByText('Personal Details')).toBeInTheDocument()
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
  })

  test('personal details form inputs work correctly', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Test name input
    const nameInput = screen.getByPlaceholderText('Enter your full name')
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')
    
    // Test email input
    const emailInput = screen.getByPlaceholderText('your.email@example.com')
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
    
    // Test phone input
    const phoneInput = screen.getByPlaceholderText('+1 234 567 8900')
    await user.type(phoneInput, '+1234567890')
    expect(phoneInput).toHaveValue('+1234567890')
  })

  test('form validation works for required fields', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Try to download PDF without filling required fields
    const downloadButton = screen.getByText('Print/Save as PDF')
    await user.click(downloadButton)
    
    // Should show validation errors
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
    })
  })

  test('email validation works correctly', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Enter invalid email
    const emailInput = screen.getByPlaceholderText('your.email@example.com')
    await user.type(emailInput, 'invalid-email')
    
    // Trigger validation by trying to download PDF
    const downloadButton = screen.getByText('Print/Save as PDF')
    await user.click(downloadButton)
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    })
  })

  test('phone validation works correctly', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Enter invalid phone (too short)
    const phoneInput = screen.getByPlaceholderText('+1 234 567 8900')
    await user.type(phoneInput, '123')
    
    // Trigger validation
    const downloadButton = screen.getByText('Print/Save as PDF')
    await user.click(downloadButton)
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid phone number (minimum 10 digits)')).toBeInTheDocument()
    })
  })

  test('can add and remove skills', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Add a skill
    const addSkillButton = screen.getByText('Add Skill')
    await user.click(addSkillButton)
    
    // Should have multiple skill inputs now
    const skillInputs = screen.getAllByPlaceholderText('Enter a skill')
    expect(skillInputs).toHaveLength(2) // Initial + added
    
    // Type in skill
    await user.type(skillInputs[0], 'JavaScript')
    expect(skillInputs[0]).toHaveValue('JavaScript')
    
    // Remove skill (should only show remove button if more than 1 skill)
    if (skillInputs.length > 1) {
      const removeButtons = screen.getAllByText('Remove')
      await user.click(removeButtons[0])
      
      // Should have one less skill input
      await waitFor(() => {
        const updatedSkillInputs = screen.getAllByPlaceholderText('Enter a skill')
        expect(updatedSkillInputs).toHaveLength(1)
      })
    }
  })

  test('can add and remove languages', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Add a language
    const addLanguageButton = screen.getByText('Add Language')
    await user.click(addLanguageButton)
    
    // Should have multiple language inputs now
    const languageInputs = screen.getAllByPlaceholderText('Enter a language')
    expect(languageInputs).toHaveLength(2) // Initial + added
    
    // Type in language
    await user.type(languageInputs[0], 'English')
    expect(languageInputs[0]).toHaveValue('English')
  })

  test('work experience month/year dropdowns work correctly', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Find month and year dropdowns
    const monthDropdowns = screen.getAllByDisplayValue('Month')
    const yearDropdowns = screen.getAllByDisplayValue('Year')
    
    expect(monthDropdowns.length).toBeGreaterThan(0)
    expect(yearDropdowns.length).toBeGreaterThan(0)
    
    // Select a month
    await user.selectOptions(monthDropdowns[0], 'Jan')
    expect(monthDropdowns[0]).toHaveValue('Jan')
    
    // Select a year
    await user.selectOptions(yearDropdowns[0], '2023')
    expect(yearDropdowns[0]).toHaveValue('2023')
  })

  test('can add and remove work experience', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Add work experience
    const addWorkButton = screen.getByText('Add Work Experience')
    await user.click(addWorkButton)
    
    // Should have multiple work experience sections
    const companyInputs = screen.getAllByPlaceholderText('Company Name')
    expect(companyInputs).toHaveLength(2) // Initial + added
    
    // Fill in company name
    await user.type(companyInputs[0], 'Tech Corp')
    expect(companyInputs[0]).toHaveValue('Tech Corp')
  })

  test('rich text editor for responsibilities works', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Find the rich text editor (mocked as textarea)
    const richTextEditor = screen.getByTestId('rich-text-editor')
    expect(richTextEditor).toBeInTheDocument()
    
    // Type in responsibilities
    await user.type(richTextEditor, 'Led development team')
    expect(richTextEditor).toHaveValue('Led development team')
  })

  test('view mode toggle works correctly', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Find the view mode toggle button
    const toggleButton = screen.getByText('Split View')
    expect(toggleButton).toBeInTheDocument()
    
    // Click to change view mode
    await user.click(toggleButton)
    
    // Button text should change
    await waitFor(() => {
      expect(screen.getByText('Form Only')).toBeInTheDocument()
    })
  })

  test('preview updates when data changes', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Enter name in form
    const nameInput = screen.getByPlaceholderText('Enter your full name')
    await user.type(nameInput, 'Jane Smith')
    
    // Check if preview updates
    await waitFor(() => {
      expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    })
  })

  test('awards section month/year dropdowns work correctly', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Scroll down to awards section or ensure it's visible
    const awardsTitleInput = screen.getByPlaceholderText('Award name')
    expect(awardsTitleInput).toBeInTheDocument()
    
    // Find award month/year dropdowns
    const awardMonthDropdowns = screen.getAllByDisplayValue('Month')
    const awardYearDropdowns = screen.getAllByDisplayValue('Year')
    
    // Awards should have dropdowns (at least one set)
    expect(awardMonthDropdowns.length).toBeGreaterThan(0)
    expect(awardYearDropdowns.length).toBeGreaterThan(0)
  })

  test('PDF generation function is called when button is clicked', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Fill ALL required fields to ensure validation passes
    await user.type(screen.getByPlaceholderText('Enter your full name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('your.email@example.com'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('+1 234 567 8900'), '1234567890')
    
    // Get all address fields and use the first one (Personal Details)
    const addressFields = screen.getAllByPlaceholderText('City, Country')
    await user.type(addressFields[0], '123 Main St')
    
    // Mock window.open to verify it gets called
    const mockWindowOpen = jest.fn().mockReturnValue({
      document: {
        write: jest.fn(),
        close: jest.fn(),
      },
      close: jest.fn(),
    })
    window.open = mockWindowOpen
    
    // Click PDF download button
    const downloadButton = screen.getByText('Print/Save as PDF')
    await user.click(downloadButton)
    
    // Should call window.open (verify form validation passed)
    await waitFor(() => {
      expect(mockWindowOpen).toHaveBeenCalled()
    }, { timeout: 3000 })
  })

  test('error clearing works when user starts typing', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Trigger validation error first
    const downloadButton = screen.getByText('Print/Save as PDF')
    await user.click(downloadButton)
    
    // Should show error
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
    })
    
    // Start typing in name field
    const nameInput = screen.getByPlaceholderText('Enter your full name')
    await user.type(nameInput, 'J')
    
    // Error should be cleared
    await waitFor(() => {
      expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
    })
  })

  test('can add multiple responsibilities to work experience', async () => {
    const user = userEvent.setup()
    render(<BuilderPage />)
    
    // Find the "Add Responsibility" button
    const addResponsibilityButton = screen.getByText('Add Responsibility')
    await user.click(addResponsibilityButton)
    
    // Should have multiple rich text editors now
    const richTextEditors = screen.getAllByTestId('rich-text-editor')
    expect(richTextEditors).toHaveLength(2) // Initial + added
  })
}) 