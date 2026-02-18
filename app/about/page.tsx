'use client'

import React from 'react'
import Container from '@/components/Container'
import { Heart, Users, Award, Globe, ArrowRight, CheckCircle, Star, TrendingUp, Sparkles, Zap, Target, Lightbulb, Rocket, Gem } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
      {/* Animated Background Elements */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
        <div className='absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000'></div>
        <div className='absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000'></div>
      </div>

      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center mb-6'>
              <Sparkles className='w-8 h-8 text-yellow-400 mr-3 animate-spin-slow' />
              <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient'>
                Our Journey
              </h1>
              <Sparkles className='w-8 h-8 text-yellow-400 ml-3 animate-spin-slow' />
            </div>
            <p className='text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed'>
              Transforming e-commerce experiences through innovation, passion, and unwavering commitment to excellence since 2020
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <button className='group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-110 hover:rotate-1 overflow-hidden'>
                <span className='relative z-10 flex items-center'>
                  <Zap className='w-5 h-5 mr-2' />
                  Our Vision
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </button>
              <button className='group relative border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 backdrop-blur-sm'>
                <span className='relative z-10'>Our Story</span>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className='absolute top-20 left-10 text-6xl animate-float-slow'>🚀</div>
        <div className='absolute top-40 right-20 text-5xl animate-float-delay'>⭐</div>
        <div className='absolute bottom-20 left-1/3 text-6xl animate-float-slow'>💎</div>
      </section>

      {/* Stats Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative'>
        <Container>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { number: '2.5M+', label: 'Happy Customers', icon: Users, color: 'from-blue-400 to-cyan-400' },
              { number: '75K+', label: 'Premium Products', icon: Gem, color: 'from-purple-400 to-pink-400' },
              { number: '99.8%', label: 'Satisfaction', icon: Heart, color: 'from-red-400 to-pink-400' },
              { number: '24/7', label: 'Global Support', icon: Award, color: 'from-green-400 to-emerald-400' }
            ].map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden'>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <stat.icon className='relative z-10 w-14 h-14 mx-auto mb-4 text-white group-hover:scale-125 transition-transform duration-500' />
                  <div className='relative z-10 text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent'>
                    {stat.number}
                  </div>
                  <div className='relative z-10 text-gray-300 font-medium'>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg'>
        <Container>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center justify-center mb-6'>
                <Target className='w-8 h-8 text-yellow-400 mr-3' />
                <h2 className='text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent'>
                  Our Mission
                </h2>
                <Target className='w-8 h-8 text-yellow-400 ml-3' />
              </div>
              <p className='text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                To revolutionize digital commerce through cutting-edge technology, 
                unparalleled customer experiences, and sustainable innovation that shapes the future of shopping
              </p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-10'>
              {[
                {
                  icon: Heart,
                  title: 'Customer Obsession',
                  description: 'Every decision, every feature, every innovation starts and ends with our customers at the center of our universe.',
                  gradient: 'from-red-500 to-pink-500',
                  emoji: '❤️'
                },
                {
                  icon: Rocket,
                  title: 'Innovation First',
                  description: 'Pushing boundaries and redefining what\'s possible in e-commerce through groundbreaking technology.',
                  gradient: 'from-blue-500 to-purple-500',
                  emoji: '🚀'
                },
                {
                  icon: Globe,
                  title: 'Global Impact',
                  description: 'Connecting millions of customers worldwide with quality products and exceptional experiences.',
                  gradient: 'from-green-500 to-emerald-500',
                  emoji: '🌍'
                }
              ].map((item, index) => (
                <div key={index} className='text-center group relative'>
                  <div className='relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 overflow-hidden'>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
                    <div className='text-6xl mb-6 relative z-10'>{item.emoji}</div>
                    <item.icon className='relative z-10 w-20 h-20 mx-auto mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-700' />
                    <h3 className='relative z-10 text-2xl font-bold text-white mb-6 group-hover:text-3xl transition-all duration-700'>
                      {item.title}
                    </h3>
                    <p className='relative z-10 text-gray-300 leading-relaxed text-lg'>
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
      <section className='py-24 px-4 sm:px-6 lg:px-8'>
        <Container>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center justify-center mb-6'>
                <Lightbulb className='w-8 h-8 text-yellow-400 mr-3 animate-pulse' />
                <h2 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Our Core Values
                </h2>
                <Lightbulb className='w-8 h-8 text-yellow-400 ml-3 animate-pulse' />
              </div>
            </div>
            
            <div className='grid md:grid-cols-2 gap-10'>
              {[
                {
                  title: 'Excellence in Every Detail',
                  description: 'From product selection to customer service, we pursue perfection in every aspect of your shopping journey.',
                  features: ['Premium Quality Standards', 'Meticulous Curation', 'Uncompromising Quality'],
                  gradient: 'from-purple-600 to-pink-600',
                  icon: '👑'
                },
                {
                  title: 'Radical Transparency',
                  description: 'Complete openness about our processes, pricing, and policies because trust is everything.',
                  features: ['Clear Communication', 'Honest Pricing', 'Open Policies'],
                  gradient: 'from-blue-600 to-cyan-600',
                  icon: '🔮'
                },
                {
                  title: 'Sustainable Innovation',
                  description: 'Building a better future through environmentally conscious practices and cutting-edge technology.',
                  features: ['Green Operations', 'Eco-Friendly Packaging', 'Carbon Neutral Goals'],
                  gradient: 'from-green-600 to-emerald-600',
                  icon: '🌱'
                },
                {
                  title: 'Community First',
                  description: 'Creating meaningful connections and supporting the communities we serve around the world.',
                  features: ['Local Partnerships', 'Community Support', 'Global Impact'],
                  gradient: 'from-orange-600 to-red-600',
                  icon: '🤝'
                }
              ].map((value, index) => (
                <div key={index} className='relative group'>
                  <div className={`relative bg-gradient-to-br ${value.gradient} p-1 rounded-3xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-2`}>
                    <div className='bg-gray-900 p-8 rounded-3xl h-full'>
                      <div className='text-5xl mb-6 text-center'>{value.icon}</div>
                      <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                        <CheckCircle className='w-6 h-6 mr-3 text-green-400' />
                        {value.title}
                      </h3>
                      <p className='text-gray-300 mb-6 leading-relaxed text-lg'>
                        {value.description}
                      </p>
                      <ul className='space-y-3'>
                        {value.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center text-gray-200'>
                            <Star className='w-5 h-5 mr-3 text-yellow-400 fill-current' />
                            <span className='font-medium'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg'>
        <Container>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center justify-center mb-6'>
              <Users className='w-8 h-8 text-yellow-400 mr-3' />
              <h2 className='text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent'>
                The Dream Team
              </h2>
              <Users className='w-8 h-8 text-yellow-400 ml-3' />
            </div>
            <p className='text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              The brilliant minds and passionate hearts building the future of commerce
            </p>
          </div>
          
          <div className='grid md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Visionary',
                image: '/api/placeholder/300/300',
                bio: 'Pioneering the future of e-commerce with 15+ years of innovation and customer-centric leadership.',
                gradient: 'from-purple-600 to-pink-600'
              },
              {
                name: 'Michael Chen',
                role: 'Operations Wizard',
                image: '/api/placeholder/300/300',
                bio: 'Master orchestrator of seamless experiences and operational excellence.',
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Customer Experience Guru',
                image: '/api/placeholder/300/300',
                bio: 'Dedicated to creating magical moments and unforgettable customer journeys.',
                gradient: 'from-green-600 to-emerald-600'
              }
            ].map((member, index) => (
              <div key={index} className='text-center group relative'>
                <div className={`relative bg-gradient-to-br ${member.gradient} p-1 rounded-3xl transform transition-all duration-700 hover:scale-110 hover:-translate-y-3`}>
                  <div className='bg-gray-900 p-6 rounded-3xl'>
                    <div className='relative mb-6 overflow-hidden rounded-2xl'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-full h-80 object-cover group-hover:scale-125 transition-transform duration-700'
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-700`}></div>
                    </div>
                    <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-3xl transition-all duration-700'>
                      {member.name}
                    </h3>
                    <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold mb-4 bg-gradient-to-r ${member.gradient}`}>
                      {member.role}
                    </div>
                    <p className='text-gray-300 leading-relaxed text-lg'>
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90'></div>
        <Container>
          <div className='relative z-10 text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center justify-center mb-8'>
              <Rocket className='w-10 h-10 text-yellow-400 mr-4 animate-bounce' />
              <h2 className='text-5xl font-bold text-white'>
                Join the Revolution
              </h2>
              <Rocket className='w-10 h-10 text-yellow-400 ml-4 animate-bounce' />
            </div>
            <p className='text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto'>
              Be part of something extraordinary. Enjoy exclusive benefits, 
              early access to innovation, and a community that celebrates your shopping journey.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <button className='group relative bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:rotate-1 overflow-hidden'>
                <span className='relative z-10 flex items-center'>
                  Start Your Journey
                  <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </button>
              <button className='group relative border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 backdrop-blur-sm'>
                <span className='relative z-10'>Explore More</span>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutPage
