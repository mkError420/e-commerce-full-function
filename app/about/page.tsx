'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/Container'
import { Heart, Users, Award, Globe, ArrowRight, CheckCircle, Star, TrendingUp, Zap, Shield, Target, ShoppingBag, Truck, Headphones, Gift, Sparkles, Clock, MapPin, Mail, Phone } from 'lucide-react'

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission')
  const [stats, setStats] = useState([
    { value: '5M+', label: 'Happy Customers', icon: Users },
    { value: '100K+', label: 'Products', icon: ShoppingBag },
    { value: '99.9%', label: 'Satisfaction', icon: Award },
    { value: '24/7', label: 'Support', icon: Headphones }
  ])
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats([1, 1, 1, 1])
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-shop_light_bg via-white to-shop_light_pink relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-20 w-72 h-72 bg-shop_dark_green/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-shop_orange/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-shop_light_green/10 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Hero Section */}
      <section className='relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-shop_dark_green via-shop_light_green to-shop_dark_green text-white'>
        <div className='absolute inset-0 bg-black/10'></div>
        <Container>
          <div className='max-w-6xl mx-auto text-center relative z-10'>
            <div className='inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 animate-bounce delay-300'>
              <Target className='w-12 h-12 text-white' />
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-shop_light_pink'>
                Our Story
              </span>
            </h1>
            <p className='text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed'>
              Revolutionizing e-commerce in Bangladesh since 2020 with innovation, trust, and exceptional customer experiences
            </p>
            
            {/* Animated Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
              {stats.map((stat, index) => (
                <div key={index} className={`text-center transform transition-all duration-1000 ${animatedStats[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300'>
                    <stat.icon className='w-8 h-8 mx-auto mb-3 text-shop_light_pink' />
                    <div className='text-3xl md:text-4xl font-bold mb-2'>{stat.value}</div>
                    <div className='text-sm opacity-80'>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
        
        {/* Floating Elements */}
        <div className='absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-700'></div>
        <div className='absolute bottom-10 left-10 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-1000'></div>
      </section>

      {/* Interactive Mission Section */}
      <section id='mission' className='py-24 px-4 sm:px-6 lg:px-8 bg-white relative'>
        <Container>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-shop_dark_green to-shop_light_green rounded-3xl mb-8 shadow-2xl animate-pulse'>
                <Sparkles className='w-10 h-10 text-white' />
              </div>
              <h2 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Our <span className='text-shop_dark_green'>Mission</span> & Vision
              </h2>
              <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                To revolutionize online shopping in Bangladesh by combining cutting-edge technology with 
                exceptional customer service, creating seamless experiences that delight and inspire.
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div className='flex justify-center mb-12'>
              <div className='bg-gray-100 rounded-2xl p-1 inline-flex'>
                {['mission', 'vision', 'values'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-white text-shop_dark_green shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className='bg-gradient-to-r from-shop_light_bg to-shop_light_pink rounded-3xl p-12 shadow-2xl'>
              {activeTab === 'mission' && (
                <div className='text-center'>
                  <Heart className='w-16 h-16 mx-auto mb-6 text-shop_dark_green' />
                  <h3 className='text-3xl font-bold text-gray-900 mb-6'>Customer-Centric Excellence</h3>
                  <p className='text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
                    Every decision we make is centered around providing the best possible shopping experience 
                    for our valued customers across Bangladesh.
                  </p>
                </div>
              )}
              {activeTab === 'vision' && (
                <div className='text-center'>
                  <TrendingUp className='w-16 h-16 mx-auto mb-6 text-shop_dark_green' />
                  <h3 className='text-3xl font-bold text-gray-900 mb-6'>Digital Innovation Leader</h3>
                  <p className='text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
                    To become Bangladesh's most trusted e-commerce platform through continuous innovation, 
                    quality products, and exceptional service.
                  </p>
                </div>
              )}
              {activeTab === 'values' && (
                <div className='text-center'>
                  <Shield className='w-16 h-16 mx-auto mb-6 text-shop_dark_green' />
                  <h3 className='text-3xl font-bold text-gray-900 mb-6'>Trust & Integrity</h3>
                  <p className='text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
                    Building lasting relationships through transparency, quality, and unwavering commitment 
                    to customer satisfaction.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section id='values' className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-cyan-50'>
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
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-shop_dark_pink text-shop_dark_green relative overflow-hidden'>
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
              <a 
                href="/shop" 
                className='bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center'
              >
                Start Shopping Now
                <ArrowRight className='w-6 h-6 ml-3' />
              </a>
              <button className='border-3 border-white text-shop_dark_green px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center'>
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
