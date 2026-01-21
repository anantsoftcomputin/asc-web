'use client'

import { useState } from 'react'

export default function CareerApplyFormAPI({ jobOptions = [] }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    job_posting: '',
    years_of_experience: '',
    resume: null
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.email.trim()) e.email = 'Email is required'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.job_posting) e.job_posting = 'Please select a job posting'
    return e
  }

  const handleChange = (key) => (e) => {
    const value = e?.target?.files ? e.target.files[0] : e.target.value
    setForm(prev => ({ ...prev, [key]: value }))
  }

  async function submitToApi(formData) {
    const API_URL = 'https://anantsoftcomputing.com/asc/api/career/jobapplication/'

    const res = await fetch(API_URL, {
      method: 'POST',
      body: formData
    })

    if (!res.ok) {
      const text = await res.text()
      throw new Error(`API error: ${res.status} ${text}`)
    }

    return res.json().catch(() => ({}))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSuccessMessage('')
    const eobj = validate()
    setErrors(eobj)
    if (Object.keys(eobj).length) return

    setSubmitting(true)

    try {
      const fd = new FormData()
      fd.append('name', form.name)
      fd.append('phone', form.phone)
      fd.append('email', form.email)
      fd.append('address', form.address)
      fd.append('job_posting', form.job_posting)
      fd.append('years_of_experience', form.years_of_experience)
      if (form.resume) fd.append('resume', form.resume)

      await submitToApi(fd)

      setSuccessMessage('Application submitted successfully. We will contact you soon.')
      setForm({ name: '', phone: '', email: '', address: '', job_posting: '', years_of_experience: '', resume: null })
      setErrors({})
    } catch (err) {
      console.error(err)
      setErrors({ submit: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Career Journey with Us</h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6" noValidate onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Full Name<span className="text-red-500">*</span></label>
                      <div className="relative">
                        <input
                          type="text"
                          className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                          name="name"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange('name')}
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Phone Number<span className="text-red-500">*</span></label>
                      <div className="relative">
                        <input
                          type="text"
                          className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                          name="phone"
                          placeholder="9876543210"
                          value={form.phone}
                          onChange={handleChange('phone')}
                        />
                        {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Email Address<span className="text-red-500">*</span></label>
                      <div className="relative">
                        <input
                          type="email"
                          className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                          name="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange('email')}
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                          name="address"
                          placeholder="Your Address"
                          value={form.address}
                          onChange={handleChange('address')}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Job Posting</label>
                    <select
                      name="job_posting"
                      className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-primary focus:ring-primary"
                      required
                      value={form.job_posting}
                      onChange={handleChange('job_posting')}
                    >
                      <option value="">Choose your job posting</option>
                      {jobOptions.map((j) => (
                        <option key={j.value ?? j.id} value={j.value ?? j.id}>{j.label ?? j.title}</option>
                      ))}
                    </select>
                    {errors.job_posting && <p className="text-sm text-red-500 mt-1">{errors.job_posting}</p>}
                  </div>

                  <div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="block w-full rounded-lg pl-4 pr-4 py-3 border-2 border-gray-200 focus:border-primary focus:ring-primary focus:ring-2 focus:ring-opacity-20 transition-all duration-200 placeholder-gray-400 bg-gray-50"
                          name="years_of_experience"
                          placeholder="e.g., 5 years"
                          value={form.years_of_experience}
                          onChange={handleChange('years_of_experience')}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                      onChange={handleChange('resume')}
                    />
                    {/* {form.resume && <p className="text-sm text-gray-600 mt-2">Selected file: {form.resume.name}</p>} */}
                  </div>
                </div>

                {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}
                {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}

                <button
                  className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white shadow-lg shadow-primary-200/30 focus:ring-primary-400 px-6 py-3 text-base w-full"
                  type="submit"
                  disabled={submitting}
                >
                  <span className="flex items-center">{submitting ? 'Submitting...' : 'Submit Application'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
