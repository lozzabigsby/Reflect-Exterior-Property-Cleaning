"use client"

import type React from "react"

import { useRef, useState } from "react"
import PageHeader from "@/components/page-header"
import { Phone, Mail, MapPin, X } from "lucide-react"
import RainAnimation from "@/components/rain-animation"

export default function ContactPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      // Convert FileList to array and add to selected files
      const newFiles = Array.from(files)
      setSelectedFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      // Add each file to the FormData
      selectedFiles.forEach((file, index) => {
        formData.append(`file-${index}`, file)
      })

      // Submit the form data to Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      })

      if (response.ok) {
        setFormSubmitted(true)
        form.reset()
        setSelectedFiles([])
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setFormSubmitting(false)
    }
  }

  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <RainAnimation />

      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for a free quote or to learn more about our services"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <p className="text-gray-700 mb-6">
                    Please include photos of around the property - just sides with windows, guttering or the area you
                    want pressure washed.
                  </p>
                )}

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  encType="multipart/form-data"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Email Address"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div>
                    <p className="text-sm text-gray-700 mb-2">
                      Please include photos of around the property - just sides with windows, guttering or the area you
                      want pressure washed.
                    </p>
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer"
                      onClick={handleUploadClick}
                    >
                      <div className="flex justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-blue-500 font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        multiple
                        accept="image/*"
                      />
                    </div>

                    {/* Display selected files */}
                    {selectedFiles.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Selected Files:</p>
                        <div className="space-y-2">
                          {selectedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                              <span className="text-sm truncate max-w-xs">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-70"
                    >
                      {formSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                <p className="text-gray-700 mb-6">
                  Whether you're interested in our services or have any questions, please reach out to us. We're here to
                  help you maintain and enhance the appearance of your property.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-700">
                        <a href="tel:07775083009" className="text-blue-500 hover:underline">
                          07775 083009
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Available Monday to Friday, 9am - 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-700">
                        <a
                          href="mailto:laurence@reflectexteriorpropertycleaning.com"
                          className="text-blue-500 hover:underline"
                        >
                          laurence@reflectexteriorpropertycleaning.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">We aim to respond to all inquiries within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <MapPin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Service Area</h4>
                      <p className="text-gray-700">Serving Dorset, Hampshire, Wiltshire, and parts of Somerset</p>
                      <p className="text-sm text-gray-500">Contact us to confirm if we cover your specific location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

