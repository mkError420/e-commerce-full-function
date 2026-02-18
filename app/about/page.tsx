'use client'

import React from 'react'
import Container from '@/components/Container'
import { Heart, Users, Award, Globe, ArrowRight, CheckCircle, Star, TrendingUp, Zap, Shield, Target } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-indigo-600 to-cyan-600 text-white'>
        <div className='absolute inset-0 bg-black opacity-5'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm'>
              <Target className='w-10 h-10 text-white' />
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 animate-fade-in'>
              Redefining E-Commerce
            </h1>
            <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed'>
              Your trusted partner for premium products and exceptional shopping experiences since 2020
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                Our Story
              </button>
              <button className='border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300'>
                Our Values
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-32 h-32 border-4 border-white/20 rounded-full animate-pulse'></div>
          <div className='absolute bottom-20 right-20 w-48 h-48 border-4 border-white/10 rounded-full animate-pulse delay-1000'></div>
          <div className='absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white/15 rounded-full animate-pulse delay-500'></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 relative'>
        <Container>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { number: '5M+', label: 'Global Customers', icon: Users, color: 'from-indigo-500 to-cyan-500' },
              { number: '100K+', label: 'Premium Products', icon: Globe, color: 'from-purple-500 to-pink-500' },
              { number: '99.9%', label: 'Satisfaction Rate', icon: Heart, color: 'from-red-500 to-orange-500' },
              { number: '24/7', label: 'Expert Support', icon: Award, color: 'from-green-500 to-teal-500' }
            ].map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100'>
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}>
                    <stat.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-gray-600 font-semibold text-lg'>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
        <Container>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl mb-6'>
                <Zap className='w-8 h-8 text-white' />
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                Our Mission & Vision
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                To revolutionize online shopping by combining cutting-edge technology with 
                exceptional customer service, creating seamless experiences that delight and inspire.
              </p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  icon: Heart,
                  title: 'Customer-Centric',
                  description: 'Every decision we make is centered around providing the best possible experience for our valued customers.',
                  gradient: 'from-pink-500 to-rose-500'
                },
                {
                  icon: TrendingUp,
                  title: 'Continuous Innovation',
                  description: 'Constantly evolving our platform with the latest technology and user-centric features.',
                  gradient: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: Globe,
                  title: 'Global Impact',
                  description: 'Connecting customers worldwide with quality products and sustainable business practices.',
                  gradient: 'from-cyan-500 to-blue-500'
                }
              ].map((item, index) => (
                <div key={index} className='text-center group'>
                  <div className='relative p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5`}></div>
                    <div className={`relative w-20 h-20 mx-auto mb-8 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <item.icon className='w-10 h-10 text-white' />
                    </div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                      {item.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed text-lg'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-cyan-50'>
        <Container>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl mb-6'>
                <Shield className='w-8 h-8 text-white' />
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                Our Core Values
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                The principles that guide everything we do
              </p>
            </div>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  title: 'Excellence',
                  description: 'We pursue excellence in every product, service, and interaction.',
                  icon: '⭐',
                  features: ['Premium Quality', 'Expert Curation', 'Best-in-Class Service']
                },
                {
                  title: 'Integrity',
                  description: 'Transparency and honesty are the foundation of our customer relationships.',
                  icon: '🤝',
                  features: ['Clear Pricing', 'Honest Reviews', 'Open Communication']
                },
                {
                  title: 'Innovation',
                  description: 'We continuously push boundaries to create better shopping experiences.',
                  icon: '🚀',
                  features: ['Cutting-Edge Tech', 'Smart Features', 'Future-Ready']
                },
                {
                  title: 'Community',
                  description: 'Building meaningful connections with customers and partners worldwide.',
                  icon: '🌍',
                  features: ['Global Reach', 'Local Support', 'Social Impact']
                }
              ].map((value, index) => (
                <div key={index} className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'>
                  <div className='text-4xl mb-4 text-center'>{value.icon}</div>
                  <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
                    <CheckCircle className='w-6 h-6 mr-3 text-green-500' />
                    {value.title}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed font-medium'>
                    {value.description}
                  </p>
                  <ul className='space-y-3'>
                    {value.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center text-gray-700 font-medium'>
                        <Star className='w-4 h-4 mr-3 text-yellow-500 fill-current' />
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
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Meet Our Leadership Team
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              The passionate innovators and experts behind your trusted shopping platform
            </p>
          </div>
          
          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {[
              {
                name: 'Alexandra Chen',
                role: 'CEO & Founder',
                image: '/api/placeholder/300/300',
                bio: 'Visionary leader with 15+ years transforming e-commerce through innovation and customer-centric approach.',
                expertise: ['Strategic Vision', 'Business Development', 'Customer Experience']
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Chief Technology Officer',
                image: '/api/placeholder/300/300',
                bio: 'Tech expert driving our platform innovation and ensuring seamless user experiences.',
                expertise: ['Platform Architecture', 'AI Integration', 'Security Systems']
              },
              {
                name: 'Sarah Thompson',
                role: 'Head of Customer Experience',
                image: '/api/placeholder/300/300',
                bio: 'Dedicated to making every customer interaction exceptional and memorable.',
                expertise: ['Customer Success', 'Support Operations', 'User Research']
              }
            ].map((member, index) => (
              <div key={index} className='text-center group'>
                <div className='relative mb-8 overflow-hidden rounded-3xl shadow-xl'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-indigo-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
                    <h4 className='text-xl font-bold mb-2'>{member.name}</h4>
                    <p className='text-sm opacity-90'>{member.role}</p>
                  </div>
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                  {member.name}
                </h3>
                <p className='text-indigo-600 font-semibold text-lg mb-4'>
                  {member.role}
                </p>
                <p className='text-gray-600 leading-relaxed mb-6 text-lg'>
                  {member.bio}
                </p>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className='px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-5'></div>
        <Container>
          <div className='text-center max-w-4xl mx-auto relative z-10'>
            <div className='inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm'>
              <Heart className='w-10 h-10 text-white' />
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Join Our Global Community
            </h2>
            <p className='text-xl md:text-2xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto'>
              Experience the future of online shopping with exclusive benefits, 
              personalized recommendations, and member-only advantages.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
              <button className='bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center'>
                Start Shopping Now
                <ArrowRight className='w-6 h-6 ml-3' />
              </button>
              <button className='border-3 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center'>
                Learn More About Us
                <ArrowRight className='w-6 h-6 ml-3' />
              </button>
            </div>
          </div>
        </Container>
        
        {/* Decorative Elements */}
        <div className='absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse'></div>
        <div className='absolute bottom-10 right-20 w-48 h-48 bg-white/5 rounded-full animate-pulse delay-1000'></div>
      </section>
    </div>
  )
}

export default AboutPage
