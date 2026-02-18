'use client'

import React, { useState, useEffect } from 'react'
import Container from '@/components/Container';
import DealCard from '@/components/DealCard';
import { Tag, Home, Truck, AlertTriangle } from 'lucide-react'

// Clearance sale data - in a real app, this would come from an API
const clearanceProducts = [
  {
    id: 1,
    title: 'Designer Leather Jacket',
    originalPrice: 449.99,
    dealPrice: 149.99,
    discount: 67,
    image: '/api/placeholder/400/300',
    category: 'Fashion',
    dealType: 'clearance',
    endTime: '2024-01-31T23:59:59',
    stock: 5,
    sold: 45,
    rating: 4.7,
    reviews: 56,
    description: 'Genuine leather jacket with timeless style',
    features: ['Genuine Leather', 'Handcrafted', 'Limited Edition'],
    freeShipping: false
  },
  {
    id: 2,
    title: 'Kids Educational Toys',
    originalPrice: 89.99,
    dealPrice: 34.99,
    discount: 61,
    image: '/api/placeholder/400/300',
    category: 'Toys',
    dealType: 'clearance',
    endTime: '2024-01-31T23:59:59',
    stock: 8,
    sold: 42,
    rating: 4.8,
    reviews: 234,
    description: 'Educational building blocks for creative learning',
    features: ['STEM Learning', 'Safe Materials', 'Creative Play'],
    freeShipping: true
  },
  {
    id: 3,
    title: 'Home Decor Set',
    originalPrice: 199.99,
    dealPrice: 79.99,
    discount: 60,
    image: '/api/placeholder/400/300',
    category: 'Home',
    dealType: 'clearance',
    endTime: '2024-01-31T23:59:59',
    stock: 12,
    sold: 28,
    rating: 4.5,
    reviews: 89,
    description: 'Complete home decor accessory set',
    features: ['Wall Art', 'Decorative Pillows', 'Vases'],
    freeShipping: true
  },
  {
    id: 4,
    title: 'Kitchen Appliances Pack',
    originalPrice: 599.99,
    dealPrice: 239.99,
    discount: 60,
    image: '/api/placeholder/400/300',
    category: 'Home',
    dealType: 'clearance',
    endTime: '2024-01-31T23:59:59',
    stock: 6,
    sold: 14,
    rating: 4.3,
    reviews: 67,
    description: 'Essential kitchen appliances bundle pack',
    features: ['Blender', 'Toaster', 'Coffee Maker'],
    freeShipping: false
  },
  {
    id: 5,
    title: 'Office Furniture Collection',
    originalPrice: 899.99,
    dealPrice: 359.99,
    discount: 60,
    image: '/api/placeholder/400/300',
    category: 'Home',
    dealType: 'clearance',
    endTime: '2024-01-31T23:59:59',
    stock: 3,
    sold: 17,
    rating: 4.2,
    reviews: 145,
    description: 'Modern office furniture set for productive workspace',
    features: ['Ergonomic Chair', 'Standing Desk', 'Storage Solutions'],
    freeShipping: false
  },
  {
    id: 6,
    title: 'Sports Equipment Final Sale',
    originalPrice: 399.99,
    dealPrice: 159.99,
    discount: 60,
    image: '/api/placeholder/400/300',
    category: 'Sports',
    dealType: 'clearance',
    endTime: '2024-01-31T23:59:59',
    stock: 4,
    sold: 28,
    rating: 4.4,
    reviews: 156,
    description: 'Complete sports equipment for home workouts',
    features: ['Resistance Bands', 'Yoga Mat', 'Dumbbells Set'],
    freeShipping: true
  }
]

const ClearanceSalePage = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

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

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16'>
        <Container>
          <div className='text-center'>
            {/* Clearance Badge */}
            <div className='inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6'>
              <AlertTriangle className='w-8 h-8 text-red-300' />
              <span className='text-2xl font-bold'>CLEARANCE SALE</span>
              <AlertTriangle className='w-8 h-8 text-red-300' />
            </div>

            {/* Main Heading */}
            <h1 className='text-4xl md:text-6xl font-black mb-4'>
              FINAL <span className='text-red-300'>CLEARANCE</span> - UP TO 67% OFF
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              🏷️ Everything must go! Final clearance on all items. Last chance to save big!
            </p>

            {/* CTA Button */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 hover:shadow-xl hoverEffect transform hover:scale-105 transition-all duration-300'>
                Shop Clearance Sale
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
              Featured <span className='text-red-600'>Clearance Deals</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Final clearance on premium items. Once they're gone, they're gone forever!
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {clearanceProducts.map((product) => (
              <DealCard
                key={product.id}
                deal={product}
                currentTime={new Date()}
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
              <div className='bg-red-50 rounded-xl p-6'>
                <Tag className='w-12 h-12 text-red-600 mb-4 mx-auto' />
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Lowest Prices</h3>
                <p className='text-gray-600'>Guaranteed lowest prices on clearance items</p>
              </div>
              <div className='bg-yellow-50 rounded-xl p-6'>
                <Truck className='w-12 h-12 text-yellow-600 mb-4 mx-auto' />
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Limited Stock</h3>
                <p className='text-gray-600'>While supplies last - shop early for best selection</p>
              </div>
              <div className='bg-green-50 rounded-xl p-6'>
                <Home className='w-12 h-12 text-green-600 mb-4 mx-auto' />
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Final Markdown</h3>
                <p className='text-gray-600'>Massive discounts on quality items - final reduction</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white'>
        <Container>
          <div className='max-w-2xl mx-auto text-center'>
            <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-8'>
              <div className='flex items-center gap-4 mb-6'>
                <AlertTriangle className='w-8 h-8 text-red-300' />
                <h3 className='text-2xl font-bold'>Last Chance for Deals!</h3>
              </div>
              <p className='text-gray-300 mb-8'>
                Subscribe to receive notifications about final clearance events and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className='max-w-md mx-auto'>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-300'
                    required
                  />
                  <button
                    type='submit'
                    className='bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:shadow-lg hoverEffect transform hover:scale-105 transition-all duration-300'
                  >
                    {isSubscribed ? 'Subscribed!' : 'Get Notified'}
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

export default ClearanceSalePage
