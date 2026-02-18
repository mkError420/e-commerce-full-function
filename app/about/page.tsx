'use client'

import React from 'react'
import Container from '@/components/Container'
import { Heart, Users, Award, Globe, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 animate-fade-in'>
              Our Story
            </h1>
            <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90'>
              Creating exceptional shopping experiences since 2020
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'>
                Our Mission
              </button>
              <button className='border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300'>
                Meet the Team
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className='absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse'></div>
        <div className='absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000'></div>
      </section>

      {/* Stats Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <Container>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { number: '2M+', label: 'Happy Customers', icon: Users },
              { number: '50K+', label: 'Products', icon: Globe },
              { number: '99%', label: 'Satisfaction', icon: Heart },
              { number: '24/7', label: 'Support', icon: Award }
            ].map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                  <stat.icon className='w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:text-blue-600 transition-colors' />
                  <div className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-gray-600 font-medium'>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Mission Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
        <Container>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Our Mission
              </h2>
              <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                To revolutionize online shopping by providing exceptional products, 
                unbeatable prices, and unforgettable customer experiences.
              </p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  icon: Heart,
                  title: 'Customer First',
                  description: 'Every decision we make is centered around providing the best possible experience for our customers.'
                },
                {
                  icon: TrendingUp,
                  title: 'Innovation',
                  description: 'Constantly evolving and improving our platform to meet the changing needs of modern shoppers.'
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  description: 'Connecting customers with quality products from around the world, delivered to their doorstep.'
                }
              ].map((item, index) => (
                <div key={index} className='text-center group'>
                  <div className='bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300'>
                    <item.icon className='w-16 h-16 mx-auto mb-6 text-purple-600 group-hover:text-blue-600 transition-colors' />
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      {item.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50'>
        <Container>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl font-bold text-center text-gray-900 mb-12'>
              Our Values
            </h2>
            
            <div className='grid md:grid-cols-2 gap-8'>
              {[
                {
                  title: 'Quality Assurance',
                  description: 'Every product is carefully selected and tested to ensure the highest quality standards.',
                  features: ['Hand-picked Products', 'Quality Testing', 'Customer Reviews']
                },
                {
                  title: 'Transparency',
                  description: 'We believe in complete transparency with our customers about products, pricing, and policies.',
                  features: ['Clear Pricing', 'Honest Reviews', 'Open Communication']
                },
                {
                  title: 'Sustainability',
                  description: 'Committed to environmentally friendly practices and sustainable business operations.',
                  features: ['Eco-friendly Packaging', 'Carbon Neutral Shipping', 'Green Partners']
                },
                {
                  title: 'Community',
                  description: 'Building a community of satisfied customers and supporting local businesses worldwide.',
                  features: ['Local Partners', 'Customer Support', 'Community Events']
                }
              ].map((value, index) => (
                <div key={index} className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'>
                  <h3 className='text-2xl font-semibold text-gray-900 mb-4 flex items-center'>
                    <CheckCircle className='w-6 h-6 mr-3 text-green-500' />
                    {value.title}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    {value.description}
                  </p>
                  <ul className='space-y-2'>
                    {value.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center text-gray-700'>
                        <Star className='w-4 h-4 mr-2 text-yellow-500 fill-current' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
        <Container>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Meet Our Team
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              The passionate people behind your favorite shopping destination
            </p>
          </div>
          
          <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: '/api/placeholder/300/300',
                bio: 'Visionary leader with 15+ years in e-commerce and retail innovation.'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Operations',
                image: '/api/placeholder/300/300',
                bio: 'Operations expert ensuring smooth and efficient customer experiences.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Customer Experience Lead',
                image: '/api/placeholder/300/300',
                bio: 'Dedicated to making every customer interaction exceptional.'
              }
            ].map((member, index) => (
              <div key={index} className='text-center group'>
                <div className='relative mb-6 overflow-hidden rounded-2xl'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {member.name}
                </h3>
                <p className='text-purple-600 font-medium mb-3'>
                  {member.role}
                </p>
                <p className='text-gray-600 leading-relaxed'>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white'>
        <Container>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-4xl font-bold mb-6'>
              Join Our Journey
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Be part of our growing community and enjoy exclusive benefits, 
              early access to new products, and special member-only deals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center'>
                Start Shopping
                <ArrowRight className='w-5 h-5 ml-2' />
              </button>
              <button className='border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300'>
                Learn More
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutPage
