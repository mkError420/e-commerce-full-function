'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/Container';
import DealCard from '@/components/DealCard';
import { Calendar, Home, TrendingUp } from 'lucide-react'

// Weekend special data - in a real app, this would come from an API
const weekendSpecialProducts = [
  {
    id: 1,
    title: 'Professional Camera Lens',
    originalPrice: 899.99,
    dealPrice: 449.99,
    discount: 50,
    image: '/api/placeholder/400/300',
    category: 'Electronics',
    dealType: 'weekend',
    endTime: '2024-01-21T23:59:59',
    stock: 3,
    sold: 17,
    rating: 4.8,
    reviews: 94,
    description: 'Professional 50mm camera lens for photography enthusiasts',
    features: ['50mm Focal Length', 'Wide Aperture', 'Sharp Images'],
    freeShipping: false
  },
  {
    id: 2,
    title: 'Designer Handbag Collection',
    originalPrice: 399.99,
    dealPrice: 199.99,
    discount: 50,
    image: '/api/placeholder/400/300',
    category: 'Fashion',
    dealType: 'weekend',
    endTime: '2024-01-21T23:59:59',
    stock: 8,
    sold: 12,
    rating: 4.7,
    reviews: 78,
    description: 'Premium designer handbags with authentic materials',
    features: ['Genuine Leather', 'Designer Brand', 'Limited Edition'],
    freeShipping: true
  },
  {
    id: 3,
    title: 'Fitness Equipment Bundle',
    originalPrice: 299.99,
    dealPrice: 149.99,
    discount: 50,
    image: '/api/placeholder/400/300',
    category: 'Sports',
    dealType: 'weekend',
    endTime: '2024-01-21T23:59:59',
    stock: 15,
    sold: 35,
    rating: 4.4,
    reviews: 156,
    description: 'Complete home workout equipment bundle',
    features: ['Resistance Bands', 'Yoga Mat', 'Dumbbells Set'],
    freeShipping: true
  },
  {
    id: 4,
    title: 'Smart Home Hub',
    originalPrice: 499.99,
    dealPrice: 249.99,
    discount: 50,
    image: '/api/placeholder/400/300',
    category: 'Home',
    dealType: 'weekend',
    endTime: '2024-01-21T23:59:59',
    stock: 7,
    sold: 23,
    rating: 4.6,
    reviews: 189,
    description: 'Complete smart home system with voice control',
    features: ['Voice Assistant', 'Smart Lighting', 'Security Cameras'],
    freeShipping: true
  },
  {
    id: 5,
    title: 'Outdoor Furniture Set',
    originalPrice: 799.99,
    dealPrice: 399.99,
    discount: 50,
    image: '/api/placeholder/400/300',
    category: 'Home',
    dealType: 'weekend',
    endTime: '2024-01-21T23:59:59',
    stock: 4,
    sold: 11,
    rating: 4.5,
    reviews: 134,
    description: 'Patio furniture set for outdoor living',
    features: ['Weather Resistant', 'Modern Design', 'Comfortable Seating'],
    freeShipping: false
  },
  {
    id: 6,
    title: 'Gaming Console Bundle',
    originalPrice: 599.99,
    dealPrice: 299.99,
    discount: 50,
    image: '/api/placeholder/400/300',
    category: 'Gaming',
    dealType: 'weekend',
    endTime: '2024-01-21T23:59:59',
    stock: 6,
    sold: 28,
    rating: 4.7,
    reviews: 267,
    description: 'Next-gen gaming console with accessories',
    features: ['Latest Console', 'Extra Controller', 'Gaming Headset'],
    freeShipping: true
  }
]

const WeekendDealsPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Update current time every second for countdown timers
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-green-600 to-blue-600 text-white py-16'>
        <Container>
          <div className='text-center'>
            {/* Weekend Special Badge */}
            <div className='inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6'>
              <Calendar className='w-8 h-8 text-green-300' />
              <span className='text-2xl font-bold'>WEEKEND SPECIAL</span>
              <Calendar className='w-8 h-8 text-green-300' />
            </div>

            {/* Main Heading */}
            <h1 className='text-4xl md:text-6xl font-black mb-4'>
              UP TO <span className='text-green-300'>50% OFF</span>
            </h1>
            <p className='text-xl text-green-100 mb-8 max-w-3xl mx-auto'>
              🌴 Weekend exclusive deals! Limited time offers available only during weekends.
            </p>

            {/* Countdown Timer */}
            <div className='inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8'>
              <Calendar className='w-6 h-6 text-green-300' />
              <div className='text-center'>
                <div className='text-sm text-green-100 mb-2'>Weekend Ends In:</div>
                <div className='flex gap-3 text-3xl md:text-4xl font-bold font-mono'>
                  <div className='bg-white/20 rounded-lg px-4 py-2'>
                    <div className='text-green-300'>{formatNumber(currentTime.getHours())}</div>
                    <div className='text-sm text-green-100'>HRS</div>
                  </div>
                  <div className='bg-white/20 rounded-lg px-4 py-2'>
                    <div className='text-green-300'>{formatNumber(currentTime.getMinutes())}</div>
                    <div className='text-sm text-green-100'>MIN</div>
                  </div>
                  <div className='bg-white/20 rounded-lg px-4 py-2'>
                    <div className='text-green-300'>{formatNumber(currentTime.getSeconds())}</div>
                    <div className='text-sm text-green-100'>SEC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-300 hover:shadow-xl hoverEffect transform hover:scale-105 transition-all duration-300'>
                Shop Weekend Specials
              </button>
              <button className='bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 hover:shadow-xl hoverEffect border border-white/30'>
                View All Deals
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className='py-16'>
        <Container>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Featured <span className='text-green-600'>Weekend Specials</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Curated weekend deals with amazing savings. Perfect for home and leisure upgrades!
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {weekendSpecialProducts.map((product) => (
              <DealCard
                key={product.id}
                deal={product}
                currentTime={currentTime}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className='py-16 bg-white'>
        <Container>
          <div className='max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
              <div className='bg-green-50 rounded-xl p-6'>
                <Home className='w-12 h-12 text-green-600 mb-4 mx-auto' />
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Weekend Only</h3>
                <p className='text-gray-600'>Exclusive deals available only during weekends</p>
              </div>
              <div className='bg-blue-50 rounded-xl p-6'>
                <TrendingUp className='w-12 h-12 text-blue-600 mb-4 mx-auto' />
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Free Shipping</h3>
                <p className='text-gray-600'>Free delivery on all weekend special orders</p>
              </div>
              <div className='bg-purple-50 rounded-xl p-6'>
                <div className='w-12 h-12 text-purple-600 mb-4 mx-auto'>🎁</div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Best Prices</h3>
                <p className='text-gray-600'>Guaranteed lowest prices on weekend deals</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white'>
        <Container>
          <div className='max-w-2xl mx-auto text-center'>
            <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-8'>
              <div className='flex items-center gap-4 mb-6'>
                <TrendingUp className='w-8 h-8 text-green-300' />
                <h3 className='text-2xl font-bold'>Weekend Deals Alert!</h3>
              </div>
              <p className='text-green-100 mb-8'>
                Subscribe to get notified about new weekend specials and exclusive offers every Friday!
              </p>
              <form onSubmit={handleSubscribe} className='max-w-md mx-auto'>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-300'
                    required
                  />
                  <button
                    type='submit'
                    className='bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 hover:shadow-lg hoverEffect transform hover:scale-105 transition-all duration-300'
                  >
                    {isSubscribed ? 'Subscribed!' : 'Subscribe Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default WeekendDealsPage
