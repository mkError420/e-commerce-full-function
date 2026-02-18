'use client'

import React, { useState } from 'react'
import Container from '@/components/Container'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  HelpCircle,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Shield
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    orderNumber: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // In a real app, this would send the form data to a backend
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@ecommerce.com',
      description: 'Get response within 24 hours',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      value: '123 Commerce St, Business City, BC 12345',
      description: 'Visit us Monday-Friday',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      description: 'Weekend: 10AM-4PM EST',
      color: 'text-orange-600'
    }
  ]

  const faqs = [
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and viewing your order history, or use the tracking number sent to your email.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer 30-day hassle-free returns on all items. Items must be unused and in original packaging.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 100 countries worldwide. Shipping costs and times vary by location.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach us via email, phone, or live chat. Our support team is available 24/7 for urgent issues.'
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 animate-fade-in'>
              Get in Touch
            </h1>
            <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90'>
              We're here to help and answer any questions you might have
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className='absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse'></div>
        <div className='absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000'></div>
      </section>

      {/* Contact Methods */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <Container>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              How to Reach Us
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Multiple ways to connect with our support team
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {contactMethods.map((method, index) => (
              <div key={index} className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center'>
                <method.icon className={`w-12 h-12 mx-auto mb-4 ${method.color}`} />
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {method.title}
                </h3>
                <p className='text-gray-800 font-medium mb-2'>
                  {method.value}
                </p>
                <p className='text-gray-600 text-sm'>
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form and FAQ */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
        <Container>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Send us a Message
              </h2>
              <p className='text-gray-600 mb-8'>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {isSubmitted ? (
                <div className='bg-green-50 border border-green-200 rounded-2xl p-8 text-center'>
                  <CheckCircle className='w-16 h-16 mx-auto mb-4 text-green-600' />
                  <h3 className='text-2xl font-semibold text-green-800 mb-2'>
                    Message Sent!
                  </h3>
                  <p className='text-green-700'>
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>
                        Full Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                        placeholder='John Doe'
                      />
                    </div>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                        placeholder='john@example.com'
                      />
                    </div>
                  </div>
                  
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>
                        Subject
                      </label>
                      <select
                        name='subject'
                        value={formData.subject}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      >
                        <option value=''>Select a topic</option>
                        <option value='order'>Order Issue</option>
                        <option value='return'>Return Request</option>
                        <option value='product'>Product Question</option>
                        <option value='technical'>Technical Support</option>
                        <option value='general'>General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>
                        Order Number (if applicable)
                      </label>
                      <input
                        type='text'
                        name='orderNumber'
                        value={formData.orderNumber}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                        placeholder='#12345'
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className='block text-gray-700 font-medium mb-2'>
                      Message *
                    </label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
                      placeholder='Tell us how we can help you...'
                    />
                  </div>
                  
                  <button
                    type='submit'
                    className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center'
                  >
                    Send Message
                    <Send className='w-5 h-5 ml-2' />
                  </button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Frequently Asked Questions
              </h2>
              <p className='text-gray-600 mb-8'>
                Quick answers to common questions. Can't find what you're looking for? 
                <span className='text-blue-600 font-medium'> Browse our Help Center</span>
              </p>
              
              <div className='space-y-4'>
                {faqs.map((faq, index) => (
                  <details key={index} className='bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200'>
                    <summary className='flex items-center justify-between font-semibold text-gray-900 list-none'>
                      {faq.question}
                      <HelpCircle className='w-5 h-5 text-gray-400 flex-shrink-0' />
                    </summary>
                    <p className='mt-4 text-gray-600 leading-relaxed'>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
              
              <div className='mt-8 text-center'>
                <button className='text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center justify-center mx-auto'>
                  View All FAQs
                  <ArrowRight className='w-4 h-4 ml-2' />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50'>
        <Container>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Us
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              We're committed to providing exceptional service and support
            </p>
          </div>
          
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: Shield,
                title: 'Secure Shopping',
                description: 'Your data and payments are protected with industry-leading security measures.'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: 'Our knowledgeable team is ready to help with any questions or concerns.'
              },
              {
                icon: Star,
                title: 'Satisfaction Guaranteed',
                description: 'We stand behind our products with comprehensive guarantees and warranties.'
              }
            ].map((benefit, index) => (
              <div key={index} className='text-center'>
                <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'>
                  <benefit.icon className='w-16 h-16 mx-auto mb-6 text-blue-600' />
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    {benefit.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Live Chat CTA */}
      <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <Container>
          <div className='text-center max-w-3xl mx-auto'>
            <div className='flex items-center justify-center mb-6'>
              <MessageCircle className='w-12 h-12 mr-4' />
              <h2 className='text-3xl font-bold'>
                Need Immediate Help?
              </h2>
            </div>
            <p className='text-xl mb-8 opacity-90'>
              Start a live chat with our support team for instant assistance
            </p>
            <button className='bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto'>
              Start Live Chat
              <ArrowRight className='w-5 h-5 ml-2' />
            </button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ContactPage
