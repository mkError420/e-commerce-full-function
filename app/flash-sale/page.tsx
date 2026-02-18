'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/Container';
import DealCard from '@/components/DealCard';
import { Clock, Zap, TrendingUp } from 'lucide-react'

// Define the Deal type
type Deal = {
  id: number
  title: string
  originalPrice: number
  dealPrice: number
  discount: number
  image: string
  category: string
  dealType: 'flash' | 'lightning' | 'daily' | 'weekend' | 'clearance'
  endTime: string
  stock: number
  sold: number
  rating: number
  reviews: number
  description: string
  features: string[]
  freeShipping: boolean
}

// Flash sale data - in a real app, this would come from an API
const flashSaleProducts: Deal[] = [
  {
    id: 1,
    title: 'Premium Wireless Headphones',
    originalPrice: 299.99,
    dealPrice: 89.99,
    discount: 70,
    image: '/api/placeholder/400/300',
    category: 'Electronics',
    dealType: 'flash',
    endTime: '2024-01-20T23:59:59',
    stock: 15,
    sold: 85,
    rating: 4.5,
    reviews: 128,
    description: 'Premium noise-cancelling wireless headphones with superior sound quality',
    features: ['Noise Cancelling', '30hr Battery', 'Premium Sound'],
    freeShipping: true
  },
  {
    id: 2,
    title: 'Gaming Laptop Pro',
    originalPrice: 1299.99,
    dealPrice: 389.99,
    discount: 70,
    image: '/api/placeholder/400/300',
    category: 'Electronics',
    dealType: 'flash',
    endTime: '2024-01-20T18:00:00',
    stock: 8,
    sold: 42,
    rating: 4.6,
    reviews: 445,
    description: 'High-performance gaming laptop with RTX graphics',
    features: ['RTX 4060', '32GB RAM', '1TB SSD'],
    freeShipping: true
  },
  {
    id: 3,
    title: 'Smart TV 55" 4K',
    originalPrice: 899.99,
    dealPrice: 269.99,
    discount: 70,
    image: '/api/placeholder/400/300',
    category: 'Electronics',
    dealType: 'flash',
    endTime: '2024-01-20T22:00:00',
    stock: 12,
    sold: 38,
    rating: 4.8,
    reviews: 234,
    description: 'Ultra HD 4K smart TV with streaming apps',
    features: ['4K Resolution', 'HDR', 'Smart TV OS'],
    freeShipping: true
  },
  {
    id: 4,
    title: 'Fitness Tracker Watch',
    originalPrice: 199.99,
    dealPrice: 59.99,
    discount: 70,
    image: '/api/placeholder/400/300',
    category: 'Sports',
    dealType: 'flash',
    endTime: '2024-01-20T20:30:00',
    stock: 25,
    sold: 75,
    rating: 4.7,
    reviews: 189,
    description: 'Advanced fitness tracking with heart rate monitoring',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant'],
    freeShipping: true
  },
  {
    id: 5,
    title: 'Designer Sunglasses',
    originalPrice: 249.99,
    dealPrice: 74.99,
    discount: 70,
    image: '/api/placeholder/400/300',
    category: 'Fashion',
    dealType: 'flash',
    endTime: '2024-01-20T21:00:00',
    stock: 18,
    sold: 32,
    rating: 4.4,
    reviews: 156,
    description: 'Premium designer sunglasses with UV protection',
    features: ['UV Protection', 'Polarized Lenses', 'Designer Brand'],
    freeShipping: true
  },
  {
    id: 6,
    title: 'Bluetooth Speaker Premium',
    originalPrice: 149.99,
    dealPrice: 44.99,
    discount: 70,
    image: '/api/placeholder/400/300',
    category: 'Electronics',
    dealType: 'flash',
    endTime: '2024-01-20T19:00:00',
    stock: 30,
    sold: 70,
    rating: 4.3,
    reviews: 267,
    description: 'Portable bluetooth speaker with premium sound quality',
    features: ['360° Sound', 'Waterproof', '20hr Battery'],
    freeShipping: true
  }
]

const FlashSalePage = () => {
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
    <div className='min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-16'>
        <Container>
          <div className='text-center'>
            {/* Flash Sale Badge */}
            <div className='inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6'>
              <Zap className='w-8 h-8 text-yellow-300' />
              <span className='text-2xl font-bold'>FLASH SALE</span>
              <Zap className='w-8 h-8 text-yellow-300' />
            </div>

            {/* Main Heading */}
            <h1 className='text-4xl md:text-6xl font-black mb-4'>
              UP TO <span className='text-yellow-300'>70% OFF</span>
            </h1>
            <p className='text-xl text-yellow-100 mb-8 max-w-3xl mx-auto'>
              ⚡ Lightning deals! Limited time only. Grab these incredible savings before they're gone!
            </p>

            {/* Countdown Timer */}
            <div className='inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8'>
              <Clock className='w-6 h-6 text-yellow-300' />
              <div className='text-center'>
                <div className='text-sm text-yellow-100 mb-2'>Sale Ends In:</div>
                <div className='flex gap-3 text-3xl md:text-4xl font-bold font-mono'>
                  <div className='bg-white/20 rounded-lg px-4 py-2'>
                    <div className='text-yellow-300'>{formatNumber(currentTime.getHours())}</div>
                    <div className='text-sm text-yellow-100'>HRS</div>
                  </div>
                  <div className='bg-white/20 rounded-lg px-4 py-2'>
                    <div className='text-yellow-300'>{formatNumber(currentTime.getMinutes())}</div>
                    <div className='text-sm text-yellow-100'>MIN</div>
                  </div>
                  <div className='bg-white/20 rounded-lg px-4 py-2'>
                    <div className='text-yellow-300'>{formatNumber(currentTime.getSeconds())}</div>
                    <div className='text-sm text-yellow-100'>SEC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:shadow-xl hoverEffect transform hover:scale-105 transition-all duration-300'>
                Shop Flash Sale
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
              Featured <span className='text-yellow-600'>Flash Deals</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Handpicked flash deals with maximum savings. These won't last long!
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {flashSaleProducts.map((product) => (
              <DealCard
                key={product.id}
                deal={product}
                currentTime={currentTime}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 bg-white'>
        <Container>
          <div className='max-w-2xl mx-auto text-center'>
            <div className='bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-8 text-white'>
              <div className='flex items-center gap-4 mb-6'>
                <TrendingUp className='w-8 h-8 text-yellow-300' />
                <h3 className='text-2xl font-bold'>Don't Miss Future Flash Sales!</h3>
              </div>
              <p className='text-yellow-100 mb-8'>
                Subscribe to our newsletter and be the first to know about upcoming flash deals and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className='max-w-md mx-auto'>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300'
                    required
                  />
                  <button
                    type='submit'
                    className='bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold hover:bg-yellow-50 hover:shadow-lg hoverEffect transform hover:scale-105 transition-all duration-300'
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

export default FlashSalePage
