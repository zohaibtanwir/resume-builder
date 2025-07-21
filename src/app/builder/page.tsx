'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import "./style.css";

// Import React Quill dynamically to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

// TypeScript interfaces for resume data structure
interface PersonalDetails {
  name: string;
  title: string;
  address: string;
  phone: string;
  email: string;
}

interface Link {
  name: string;
  url: string;
}

interface WorkExperience {
  company: string;
  position: string;
  location: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  responsibilities: string[];
}

interface Education {
  institution: string;
  degree: string;
  location: string;
  year: string;
  details?: string[];
}

interface Award {
  title: string;
  month: string;
  year: string;
  company: string;
}

interface PastOrganization {
  company: string;
  position: string;
  duration: string;
}

interface ResumeData {
  personalDetails: PersonalDetails;
  links: Link[];
  skills: string[];
  languages: string[];
  workExperience: WorkExperience[];
  education: Education[];
  awards: Award[];
  pastOrganizations: PastOrganization[];
}

// Initial empty data structure
const initialData: ResumeData = {
  personalDetails: {
    name: '',
    title: '',
    address: '',
    phone: '',
    email: ''
  },
  links: [
    { name: 'LinkedIn', url: '' },
    { name: 'Stack Overflow', url: '' }
  ],
  skills: [''],
  languages: [''],
  workExperience: [{
    company: '',
    position: '',
    location: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    responsibilities: ['']
  }],
  education: [{
    institution: '',
    degree: '',
    location: '',
    year: '',
    details: ['']
  }],
  awards: [{
    title: '',
    month: '',
    year: '',
    company: ''
  }],
  pastOrganizations: [{
    company: '',
    position: '',
    duration: ''
  }]
};

// Rich Text Editor Component using React Quill
const RichTextEditor = ({ value, onChange, placeholder, error }: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
}) => {
  // Configure toolbar with limited options suitable for resume
  const modules = {
    toolbar: [
      ['bold', 'italic'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML
      matchVisual: false,
    }
  };

  const formats = [
    'bold', 'italic', 'list', 'bullet'
  ];

  return (
    <div className="w-full">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        className={`quill-editor ${error ? 'border-red-500' : 'border-gray-300'} rounded-md`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default function BuilderPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [viewMode, setViewMode] = useState<'both' | 'form' | 'preview'>('both');

  // Month and year options for dropdowns
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
  ];

  const currentYear = new Date().getFullYear();
  const years = [
    { value: '', label: 'Year' },
    { value: 'Present', label: 'Present' },
    ...Array.from({ length: 50 }, (_, i) => {
      const year = currentYear - i;
      return { value: year.toString(), label: year.toString() };
    })
  ];

  // Enhanced validation function
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    // Personal Details Validation
    if (!resumeData.personalDetails.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (resumeData.personalDetails.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(resumeData.personalDetails.name)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }
    
    if (!resumeData.personalDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resumeData.personalDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!resumeData.personalDetails.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(resumeData.personalDetails.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (minimum 10 digits)';
    }
    
    if (!resumeData.personalDetails.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (resumeData.personalDetails.address.trim().length < 5) {
      newErrors.address = 'Please enter a complete address';
    }
    
    if (resumeData.personalDetails.title && resumeData.personalDetails.title.length > 200) {
      newErrors.title = 'Professional title should not exceed 200 characters';
    }
    
    // Links Validation
    resumeData.links.forEach((link, index) => {
      if (link.url && !/^https?:\/\/.+\..+/.test(link.url)) {
        newErrors[`link_${index}`] = `Please enter a valid URL for ${link.name}`;
      }
    });
    
    // Skills Validation
    const emptySkills = resumeData.skills.filter(skill => !skill.trim()).length;
    if (resumeData.skills.length > 0 && emptySkills === resumeData.skills.length) {
      newErrors.skills = 'Please add at least one skill or remove empty skill fields';
    }
    
    // Languages Validation
    const emptyLanguages = resumeData.languages.filter(lang => !lang.trim()).length;
    if (resumeData.languages.length > 0 && emptyLanguages === resumeData.languages.length) {
      newErrors.languages = 'Please add at least one language or remove empty language fields';
    }
    
    // Work Experience Validation
    resumeData.workExperience.forEach((exp, index) => {
      if (exp.company || exp.position || exp.location || exp.startMonth || exp.startYear || exp.endMonth || exp.endYear || exp.responsibilities.some(r => r.trim())) {
        if (!exp.company.trim()) {
          newErrors[`work_company_${index}`] = 'Company name is required for this work experience';
        }
        if (!exp.position.trim()) {
          newErrors[`work_position_${index}`] = 'Position is required for this work experience';
        }
        if (!exp.location.trim()) {
          newErrors[`work_location_${index}`] = 'Location is required for this work experience';
        }
        if (!exp.startMonth.trim() || !exp.startYear.trim()) {
          newErrors[`work_startDate_${index}`] = 'Start date is required for this work experience';
        }
        if (!exp.endMonth.trim() || !exp.endYear.trim()) {
          newErrors[`work_endDate_${index}`] = 'End date is required for this work experience';
        }
        if (!exp.responsibilities.some(r => r.trim())) {
          newErrors[`work_responsibilities_${index}`] = 'At least one responsibility is required for this work experience';
        }
      }
    });
    
    // Awards Validation
    resumeData.awards.forEach((award, index) => {
      if (award.title || award.month || award.year || award.company) {
        if (!award.title.trim()) {
          newErrors[`award_title_${index}`] = 'Award title is required';
        }
        if (!award.month.trim() || !award.year.trim()) {
          newErrors[`award_date_${index}`] = 'Award date is required';
        }
        if (!award.company.trim()) {
          newErrors[`award_company_${index}`] = 'Company/Organization name is required';
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // PDF download function using window.print()
  const downloadPDF = async () => {
    if (!validateForm()) {
      alert('Please fill in all required fields before downloading PDF');
      return;
    }
    
    // Get the resume content
    const resumeContent = document.getElementById('resume-preview');
    if (!resumeContent) {
      alert('Resume preview not found. Please try again.');
      return;
    }
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download the PDF');
      return;
    }
    
    // Get the HTML content
    const resumeHTML = resumeContent.outerHTML;
    
    // Write the print document
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${resumeData.personalDetails.name || 'Resume'}</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            
            * {
              box-sizing: border-box;
            }
            
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              font-size: 12px;
              color: #2a2a2e;
              background: white;
            }
            
            #resume-preview {
              max-height: none !important;
              overflow: visible !important;
              border: none !important;
              margin: 0;
              padding: 0;
            }
            
            /* List styling for PDF */
            ul {
              list-style-type: disc !important;
              margin: 0.5em 0 !important;
              padding-left: 1.5em !important;
            }
            
            ol {
              list-style-type: decimal !important;
              margin: 0.5em 0 !important;
              padding-left: 1.5em !important;
            }
            
            li {
              margin: 0.25em 0 !important;
              display: list-item !important;
              line-height: 1.4 !important;
              color: #2a2a2e !important;
            }
            
            /* Ensure all text is visible */
            * {
              color: #2a2a2e !important;
            }
            
            .text-\\[\\#5d5d5d\\] {
              color: #5d5d5d !important;
            }
            
            @media print {
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          ${resumeHTML}
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `);
    
    printWindow.document.close();
  };

  // Helper function to clear errors
  const clearError = (errorKey: string) => {
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: '' }));
    }
  };

  // Update functions for different sections
  const updatePersonalDetails = (field: keyof PersonalDetails, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, [field]: value }
    }));
    clearError(field);
  };

  const updateLink = (index: number, field: keyof Link, value: string) => {
    setResumeData(prev => ({
      ...prev,
      links: prev.links.map((link, i) => 
        i === index ? { ...link, [field]: value } : link
      )
    }));
    clearError(`link_${index}`);
  };

  const updateSkill = (index: number, value: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const updateLanguage = (index: number, value: string) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => i === index ? value : lang)
    }));
  };

  const addLanguage = () => {
    setResumeData(prev => ({
      ...prev,
      languages: [...prev.languages, '']
    }));
  };

  const removeLanguage = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const updateWorkExperience = (index: number, field: keyof WorkExperience, value: string | string[]) => {
    setResumeData(prev => ({
      ...prev,
      workExperience: prev.workExperience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
    // Clear related errors
    clearError(`work_${field}_${index}`);
    if (field === 'responsibilities') {
      clearError(`work_responsibilities_${index}`);
    }
  };

  const addWorkExperience = () => {
    setResumeData(prev => ({
      ...prev,
      workExperience: [...prev.workExperience, {
        company: '',
        position: '',
        location: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        responsibilities: ['']
      }]
    }));
  };

  const removeWorkExperience = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index)
    }));
  };

  const toggleViewMode = () => {
    const modes: ('both' | 'form' | 'preview')[] = ['both', 'form', 'preview'];
    const currentIndex = modes.indexOf(viewMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setViewMode(modes[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Dynamic Resume Builder</h1>
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleViewMode}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <svg 
                className={`w-4 h-4 transition-transform ${
                  viewMode === 'both' ? 'rotate-0' : 
                  viewMode === 'form' ? 'rotate-90' : 'rotate-180'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {viewMode === 'both' ? 'Split View' : viewMode === 'form' ? 'Form Only' : 'Preview Only'}
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex gap-6">
          {/* Form Section */}
          {(viewMode === 'both' || viewMode === 'form') && (
            <div className={viewMode === 'both' ? 'w-1/2' : 'w-full'}>
              <div className="bg-white rounded-lg shadow-lg p-6 max-h-screen overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Resume</h2>
                
                {/* Personal Details Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={resumeData.personalDetails.name}
                        onChange={(e) => updatePersonalDetails('name', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
                      <textarea
                        value={resumeData.personalDetails.title}
                        onChange={(e) => updatePersonalDetails('title', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white resize-none ${
                          errors.title ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="e.g., Senior Software Engineer with expertise in full-stack development"
                        rows={3}
                      />
                      {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        value={resumeData.personalDetails.email}
                        onChange={(e) => updatePersonalDetails('email', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        value={resumeData.personalDetails.phone}
                        onChange={(e) => updatePersonalDetails('phone', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+1 234 567 8900"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                      <input
                        type="text"
                        value={resumeData.personalDetails.address}
                        onChange={(e) => updatePersonalDetails('address', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                          errors.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="City, Country"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                  </div>
                </div>

                {/* Links Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Professional Links</h3>
                  {resumeData.links.map((link, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{link.name}</label>
                        <input
                          type="url"
                          value={link.url}
                          onChange={(e) => updateLink(index, 'url', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                            errors[`link_${index}`] ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder={`Your ${link.name} URL`}
                        />
                        {errors[`link_${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`link_${index}`]}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Skills</h3>
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => updateSkill(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white"
                        placeholder="Enter a skill"
                      />
                      {resumeData.skills.length > 1 && (
                        <button
                          onClick={() => removeSkill(index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  {errors.skills && <p className="text-red-500 text-sm mb-2">{errors.skills}</p>}
                  <button
                    onClick={addSkill}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Add Skill
                  </button>
                </div>

                {/* Languages Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Languages</h3>
                  {resumeData.languages.map((language, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={language}
                        onChange={(e) => updateLanguage(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white"
                        placeholder="Enter a language"
                      />
                      {resumeData.languages.length > 1 && (
                        <button
                          onClick={() => removeLanguage(index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  {errors.languages && <p className="text-red-500 text-sm mb-2">{errors.languages}</p>}
                  <button
                    onClick={addLanguage}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Add Language
                  </button>
                </div>

                {/* Work Experience Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Work Experience</h3>
                  {resumeData.workExperience.map((experience, expIndex) => (
                    <div key={expIndex} className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
                          <input
                            type="text"
                            value={experience.position}
                            onChange={(e) => updateWorkExperience(expIndex, 'position', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                              errors[`work_position_${expIndex}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="e.g., Senior Software Engineer"
                          />
                          {errors[`work_position_${expIndex}`] && <p className="text-red-500 text-sm mt-1">{errors[`work_position_${expIndex}`]}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                          <input
                            type="text"
                            value={experience.company}
                            onChange={(e) => updateWorkExperience(expIndex, 'company', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                              errors[`work_company_${expIndex}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Company Name"
                          />
                          {errors[`work_company_${expIndex}`] && <p className="text-red-500 text-sm mt-1">{errors[`work_company_${expIndex}`]}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                          <input
                            type="text"
                            value={experience.location}
                            onChange={(e) => updateWorkExperience(expIndex, 'location', e.target.value)}
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                              errors[`work_location_${expIndex}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="City, Country"
                          />
                          {errors[`work_location_${expIndex}`] && <p className="text-red-500 text-sm mt-1">{errors[`work_location_${expIndex}`]}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
                          <div className="space-y-2">
                            <div className="flex gap-2 items-center">
                              <span className="text-sm text-gray-600 min-w-[40px]">From:</span>
                              <select
                                value={experience.startMonth}
                                onChange={(e) => updateWorkExperience(expIndex, 'startMonth', e.target.value)}
                                className={`flex-1 px-3 py-2 border rounded-md text-gray-900 bg-white ${
                                  errors[`work_startDate_${expIndex}`] ? 'border-red-500' : 'border-gray-300'
                                }`}
                              >
                                {months.map(month => (
                                  <option key={month.value} value={month.value}>{month.label}</option>
                                ))}
                              </select>
                              <select
                                value={experience.startYear}
                                onChange={(e) => updateWorkExperience(expIndex, 'startYear', e.target.value)}
                                className={`flex-1 px-3 py-2 border rounded-md text-gray-900 bg-white ${
                                  errors[`work_startDate_${expIndex}`] ? 'border-red-500' : 'border-gray-300'
                                }`}
                              >
                                {years.map(year => (
                                  <option key={year.value} value={year.value}>{year.label}</option>
                                ))}
                              </select>
                            </div>
                            <div className="flex gap-2 items-center">
                              <span className="text-sm text-gray-600 min-w-[40px]">To:</span>
                              <select
                                value={experience.endMonth}
                                onChange={(e) => updateWorkExperience(expIndex, 'endMonth', e.target.value)}
                                className={`flex-1 px-3 py-2 border rounded-md text-gray-900 bg-white ${
                                  errors[`work_endDate_${expIndex}`] ? 'border-red-500' : 'border-gray-300'
                                }`}
                                disabled={experience.endYear === 'Present'}
                              >
                                {months.map(month => (
                                  <option key={month.value} value={month.value}>{month.label}</option>
                                ))}
                              </select>
                              <select
                                value={experience.endYear}
                                onChange={(e) => {
                                  updateWorkExperience(expIndex, 'endYear', e.target.value);
                                  if (e.target.value === 'Present') {
                                    updateWorkExperience(expIndex, 'endMonth', '');
                                  }
                                }}
                                className={`flex-1 px-3 py-2 border rounded-md text-gray-900 bg-white ${
                                  errors[`work_endDate_${expIndex}`] ? 'border-red-500' : 'border-gray-300'
                                }`}
                              >
                                {years.map(year => (
                                  <option key={year.value} value={year.value}>{year.label}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          {(errors[`work_startDate_${expIndex}`] || errors[`work_endDate_${expIndex}`]) && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors[`work_startDate_${expIndex}`] || errors[`work_endDate_${expIndex}`]}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities *</label>
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <div key={respIndex} className="mb-3">
                            <div className="flex items-start gap-2">
                              <div className="flex-1">
                                <RichTextEditor
                                  value={responsibility}
                                  onChange={(value) => {
                                    const newResponsibilities = [...experience.responsibilities];
                                    newResponsibilities[respIndex] = value;
                                    updateWorkExperience(expIndex, 'responsibilities', newResponsibilities);
                                  }}
                                  placeholder="Describe your responsibility or achievement. Use formatting tools above for bullets, bold, italic, etc."
                                />
                              </div>
                              {experience.responsibilities.length > 1 && (
                                <button
                                  onClick={() => {
                                    const newResponsibilities = experience.responsibilities.filter((_, i) => i !== respIndex);
                                    updateWorkExperience(expIndex, 'responsibilities', newResponsibilities);
                                  }}
                                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mt-1"
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                        {errors[`work_responsibilities_${expIndex}`] && (
                          <p className="text-red-500 text-sm mb-2">{errors[`work_responsibilities_${expIndex}`]}</p>
                        )}
                        <button
                          onClick={() => {
                            const newResponsibilities = [...experience.responsibilities, ''];
                            updateWorkExperience(expIndex, 'responsibilities', newResponsibilities);
                          }}
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                          Add Responsibility
                        </button>
                      </div>
                      
                      {resumeData.workExperience.length > 1 && (
                        <button
                          onClick={() => removeWorkExperience(expIndex)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove Experience
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addWorkExperience}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Add Work Experience
                  </button>
                </div>

                {/* Awards Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Awards</h3>
                  {resumeData.awards.map((award, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Award Title *</label>
                          <input
                            type="text"
                            value={award.title}
                            onChange={(e) => {
                              const newAwards = [...resumeData.awards];
                              newAwards[index] = { ...award, title: e.target.value };
                              setResumeData(prev => ({ ...prev, awards: newAwards }));
                              clearError(`award_title_${index}`);
                            }}
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                              errors[`award_title_${index}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Award name"
                          />
                          {errors[`award_title_${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`award_title_${index}`]}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                          <div className="flex gap-2">
                            <select
                              value={award.month}
                              onChange={(e) => {
                                const newAwards = [...resumeData.awards];
                                newAwards[index] = { ...award, month: e.target.value };
                                setResumeData(prev => ({ ...prev, awards: newAwards }));
                                clearError(`award_date_${index}`);
                              }}
                              className={`flex-1 px-3 py-2 border rounded-md text-gray-900 bg-white ${
                                errors[`award_date_${index}`] ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              {months.map(month => (
                                <option key={month.value} value={month.value}>{month.label}</option>
                              ))}
                            </select>
                            <select
                              value={award.year}
                              onChange={(e) => {
                                const newAwards = [...resumeData.awards];
                                newAwards[index] = { ...award, year: e.target.value };
                                setResumeData(prev => ({ ...prev, awards: newAwards }));
                                clearError(`award_date_${index}`);
                              }}
                              className={`flex-1 px-3 py-2 border rounded-md text-gray-900 bg-white ${
                                errors[`award_date_${index}`] ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              {years.filter(year => year.value !== 'Present').map(year => (
                                <option key={year.value} value={year.value}>{year.label}</option>
                              ))}
                            </select>
                          </div>
                          {errors[`award_date_${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`award_date_${index}`]}</p>}
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization *</label>
                          <input
                            type="text"
                            value={award.company}
                            onChange={(e) => {
                              const newAwards = [...resumeData.awards];
                              newAwards[index] = { ...award, company: e.target.value };
                              setResumeData(prev => ({ ...prev, awards: newAwards }));
                              clearError(`award_company_${index}`);
                            }}
                            className={`w-full px-3 py-2 border rounded-md text-gray-900 bg-white ${
                              errors[`award_company_${index}`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Company name"
                          />
                          {errors[`award_company_${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`award_company_${index}`]}</p>}
                        </div>
                      </div>
                      {resumeData.awards.length > 1 && (
                        <button
                          onClick={() => {
                            const newAwards = resumeData.awards.filter((_, i) => i !== index);
                            setResumeData(prev => ({ ...prev, awards: newAwards }));
                          }}
                          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Remove Award
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newAwards = [...resumeData.awards, { title: '', month: '', year: '', company: '' }];
                      setResumeData(prev => ({ ...prev, awards: newAwards }));
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Add Award
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Preview Section */}
          {(viewMode === 'both' || viewMode === 'preview') && (
            <div className={viewMode === 'both' ? 'w-1/2' : 'w-full'}>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Live Preview</h2>
                  <button
                    onClick={downloadPDF}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Print/Save as PDF
                  </button>
                </div>
                
                {/* Resume Preview Container */}
                <div id="resume-preview" className="border border-gray-300 bg-white overflow-hidden">
                  {/* This will contain the exact replica of the original resume format */}
                  <div className="bg-white relative w-full px-[40px] py-[30px] text-[#2a2a2e]" style={{ minHeight: '100%', fontSize: '12px' }}>
                    {/* Name and Title Section */}
                    <section id="name-and-title" className="mb-6">
                      <div className="w-full">
                        <div className="w-full font-medium text-2xl font-sans tracking-wide leading-tight">
                          {resumeData.personalDetails.name || 'Your Name Here'}
                        </div>
                        <div className="text-[#5d5d5d] mt-3 font-light text-sm leading-relaxed">
                          {resumeData.personalDetails.title || 'Your Professional Title'}
                        </div>
                      </div>
                    </section>

                    {/* Two Column Layout */}
                    <div className="flex gap-6 relative">
                      <div className="absolute w-full border-b-[1px] border-[#d6d6d6] left-0 top-0"></div>
                      
                      {/* Left Column - Sidebar */}
                      <div className="w-1/3 border-r-[1px] border-[#d6d6d6] pr-6">
                        {/* Details Section */}
                        <section id="details">
                          <div className="pt-4">
                            <h1 className="text-lg font-semibold tracking-wide after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                              DETAILS
                            </h1>
                          </div>
                          <div className="mt-4">
                            <h2 className="text-xs font-semibold tracking-wide">ADDRESS</h2>
                            <p className="text-[#5d5d5d] font-light text-xs mt-1 leading-relaxed">
                              {resumeData.personalDetails.address || 'Your Address'}
                            </p>
                          </div>
                          <div className="mt-3">
                            <h2 className="text-xs font-semibold tracking-wide">PHONE</h2>
                            <p className="text-[#5d5d5d] font-light text-xs mt-1">
                              {resumeData.personalDetails.phone || 'Your Phone'}
                            </p>
                          </div>
                          <div className="mt-3">
                            <h2 className="text-xs font-semibold tracking-wide">EMAIL</h2>
                            <p className="text-[#5d5d5d] font-light text-xs mt-1">
                              {resumeData.personalDetails.email || 'your.email@example.com'}
                            </p>
                          </div>
                        </section>

                        {/* Links Section */}
                        {resumeData.links.some(link => link.url) && (
                          <section id="links">
                            <div className="mt-6">
                              <h1 className="text-lg font-semibold tracking-wide after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                                LINKS
                              </h1>
                            </div>
                            <ul className="mt-3 space-y-1">
                              {resumeData.links.map((link, index) => (
                                link.url && (
                                  <li key={index}>
                                    <a
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[#5d5d5d] font-light text-xs underline hover:text-gray-800"
                                    >
                                      {link.name}
                                    </a>
                                  </li>
                                )
                              ))}
                            </ul>
                          </section>
                        )}

                        {/* Skills Section */}
                        {resumeData.skills.some(skill => skill) && (
                          <section id="skills">
                            <div className="mt-6">
                              <h1 className="text-lg font-semibold tracking-wide after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                                SKILLS
                              </h1>
                            </div>
                            <ul className="mt-3 text-[#2a2a2e] space-y-1">
                              {resumeData.skills.map((skill, index) => (
                                skill && (
                                  <li key={index}>
                                    <p className="font-light text-xs">{skill}</p>
                                  </li>
                                )
                              ))}
                            </ul>
                          </section>
                        )}

                        {/* Languages Section */}
                        {resumeData.languages.some(lang => lang) && (
                          <section id="languages">
                            <div className="mt-6">
                              <h1 className="text-lg font-semibold tracking-wide after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                                LANGUAGES
                              </h1>
                            </div>
                            <ul className="mt-3 text-[#2a2a2e] space-y-1">
                              {resumeData.languages.map((language, index) => (
                                language && (
                                  <li key={index}>
                                    <p className="font-light text-xs">{language}</p>
                                  </li>
                                )
                              ))}
                            </ul>
                          </section>
                        )}
                      </div>

                                            {/* Right Column - Main Content */}
                      <div className="flex-1 pl-6">
                        {/* Work Experience Section */}
                        {resumeData.workExperience.some(exp => exp.company || exp.position) && (
                          <section id="work-experience" className="border-b-[1px] border-[#d6d6d6] pb-6">
                            <div className="pt-4">
                              <h1 className="text-lg font-semibold tracking-wide after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                                WORK EXPERIENCE
                              </h1>
                            </div>
                            <div className="mt-4">
                              <div className="space-y-4">
                                {resumeData.workExperience.map((experience, index) => (
                                  (experience.company || experience.position) && (
                                    <div key={index} className="text-[#2a2a2e] text-xs">
                                      <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                          <h2 className="font-semibold text-sm leading-tight">
                                            {experience.position || 'Position'}, {experience.company || 'Company'}
                                          </h2>
                                        </div>
                                        <div className="text-right ml-4">
                                          <p className="text-xs">{experience.location || 'Location'}</p>
                                        </div>
                                      </div>
                                      <div className="mt-1">
                                        <p className="text-xs">
                                          {experience.startMonth && experience.startYear ? `${experience.startMonth} ${experience.startYear}` : 'Start'} - {' '}
                                          {experience.endYear === 'Present' ? 'Present' : 
                                           experience.endMonth && experience.endYear ? `${experience.endMonth} ${experience.endYear}` : 'End'}
                                        </p>
                                      </div>
                                      {experience.responsibilities.some(resp => resp.replace(/<[^>]*>/g, '').trim()) && (
                                        <div className="mt-3 text-[#5d5d5d]">
                                          <div className="text-xs leading-relaxed">
                                            {experience.responsibilities.map((responsibility, respIndex) => {
                                              const textContent = responsibility.replace(/<[^>]*>/g, '').trim();
                                              return textContent && (
                                                <div 
                                                  key={respIndex} 
                                                  className="mt-1"
                                                  dangerouslySetInnerHTML={{ __html: responsibility }}
                                                />
                                              );
                                            })}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )
                                ))}
                              </div>
                            </div>
                          </section>
                        )}

                        {/* Awards Section */}
                        {resumeData.awards.some(award => award.title) && (
                          <section id="awards">
                            <div className="mt-6">
                              <h1 className="text-lg font-semibold tracking-wide after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                                AWARDS
                              </h1>
                            </div>
                            <div className="mt-4">
                              <div className="space-y-3">
                                {resumeData.awards.map((award, index) => (
                                  award.title && (
                                    <div key={index} className="text-[#2a2a2e]">
                                      <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                          <h2 className="font-semibold text-xs leading-tight">
                                            {award.title}
                                          </h2>
                                        </div>
                                        <div className="text-right ml-4">
                                          <p className="text-xs">
                                            {award.month && award.year ? `${award.month} ${award.year}` : 'Date'}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-1">
                                        <p className="text-xs font-light text-[#5d5d5d]">{award.company || 'Company'}</p>
                                      </div>
                                    </div>
                                  )
                                ))}
                              </div>
                            </div>
                          </section>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 