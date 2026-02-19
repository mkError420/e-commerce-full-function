"use client"

import { useState, useEffect } from 'react'
import { Clock, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import DealCard from './DealCard'

// Sample hot deals data - in a real app, this would come from an API
const hotDeals = [
  {
    id: 1,
    title: 'Lightning Deal: Premium Wireless Headphones',
    originalPrice: 199.99,
    dealPrice: 89.99,
    discount: 55,
    image: '/images/products/product_1.png',
    category: 'Electronics',
    dealType: 'lightning' as const,
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
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
    title: 'Daily Deal: Smart Watch Pro',
    originalPrice: 349.99,
    dealPrice: 199.99,
    discount: 43,
    image: '/images/products/product_2.png',
    category: 'Electronics',
    dealType: 'daily' as const,
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
    stock: 8,
    sold: 42,
    rating: 4.8,
    reviews: 89,
    description: 'Advanced fitness tracking and health monitoring smartwatch',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant'],
    freeShipping: true
  },
  {
    id: 3,
    title: 'Lightning Deal: Gaming Mechanical Keyboard',
    originalPrice: 189.99,
    dealPrice: 99.99,
    discount: 47,
    image: '/images/products/product_5.png',
    category: 'Gaming',
    dealType: 'lightning' as const,
    endTime: new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString(), // 1 hour from now
    stock: 12,
    sold: 38,
    rating: 4.6,
    reviews: 167,
    description: 'RGB mechanical gaming keyboard with customizable lighting',
    features: ['Mechanical Switches', 'RGB Lighting', 'Programmable Keys'],
    freeShipping: true
  },
  {
    id: 4,
    title: 'Daily Deal: Organic Skincare Set',
    originalPrice: 119.99,
    dealPrice: 59.99,
    discount: 50,
    image: '/images/products/product_4.png',
    category: 'Beauty',
    dealType: 'daily' as const,
    endTime: new Date(Date.now() + 18 * 60 * 60 * 1000).toISOString(), // 18 hours from now
    stock: 25,
    sold: 75,
    rating: 4.9,
    reviews: 203,
    description: 'Complete organic skincare routine for radiant skin',
    features: ['Organic Ingredients', 'Cruelty Free', 'All Skin Types'],
    freeShipping: true
  },
  {
    id: 5,
    title: 'Lightning Deal: Professional Camera Lens',
    originalPrice: 899.99,
    dealPrice: 449.99,
    discount: 50,
    image: '/images/products/product_6.png',
    category: 'Photography',
    dealType: 'lightning' as const,
    endTime: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(), // 3 hours from now
    stock: 3,
    sold: 17,
    rating: 4.8,
    reviews: 94,
    description: 'Professional 50mm camera lens for photography enthusiasts',
    features: ['50mm Focal Length', 'Wide Aperture', 'Sharp Images'],
    freeShipping: false
  },
  {
    id: 6,
    title: 'Daily Deal: Stainless Steel Water Bottle',
    originalPrice: 49.99,
    dealPrice: 19.99,
    discount: 60,
    image: '/images/products/product_9.png',
    category: 'Sports',
    dealType: 'daily' as const,
    endTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(), // 12 hours from now
    stock: 50,
    sold: 150,
    rating: 4.3,
    reviews: 67,
    description: 'Insulated water bottle that keeps drinks cold for 24 hours',
    features: ['24hr Cold', 'BPA Free', 'Leak Proof'],
    freeShipping: true
  }
]

const SpecialOffers = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [visibleDeals, setVisibleDeals] = useState(6)
  const [endingSoonCount, setEndingSoonCount] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Update current time every second for countdown timers
  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Update ending soon count on client side only
  useEffect(() => {
    if (isClient) {
      const count = hotDeals.filter(deal => {
        const timeLeft = new Date(deal.endTime).getTime() - currentTime.getTime()
        return timeLeft > 0 && timeLeft < 2 * 60 * 60 * 1000 // Less than 2 hours
      }).length
      setEndingSoonCount(count)
    }
  }, [currentTime, isClient])

  // Filter deals based on selected filter
  const filteredDeals = hotDeals.filter(deal => {
    if (selectedFilter === 'all') return true
    if (selectedFilter === 'lightning') return deal.dealType === 'lightning'
    if (selectedFilter === 'daily') return deal.dealType === 'daily'
    return true
  })

  // Sort deals by urgency (ending soon first)
  const sortedDeals = [...filteredDeals].sort((a, b) => {
    const timeLeftA = new Date(a.endTime).getTime() - Date.now()
    const timeLeftB = new Date(b.endTime).getTime() - Date.now()
    return timeLeftA - timeLeftB
  })

  // Get deals to display
  const displayedDeals = sortedDeals.slice(0, visibleDeals)

  // Calculate stats
  const totalDeals = hotDeals.length
  const lightningDeals = hotDeals.filter(deal => deal.dealType === 'lightning').length
  const dailyDeals = hotDeals.filter(deal => deal.dealType === 'daily').length
  const avgDiscount = Math.round(hotDeals.reduce((acc, deal) => acc + deal.discount, 0) / hotDeals.length)

  return (
    <section className='py-16 bg-shop_light_bg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Hot <span className='text-shop_orange'>Deals & Offers</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Don't miss out on these amazing limited-time deals. Save big on your favorite products!
          </p>
        </div>

        {/* Stats Bar */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
          <div className='bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100'>
            <div className='text-2xl font-bold text-shop_dark_green'>{totalDeals}</div>
            <div className='text-sm text-gray-600'>Active Deals</div>
          </div>
          <div className='bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100'>
            <div className='text-2xl font-bold text-shop_orange'>{avgDiscount}%</div>
            <div className='text-sm text-gray-600'>Avg Discount</div>
          </div>
          <div className='bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100'>
            <div className='text-2xl font-bold text-red-600'>{isClient ? endingSoonCount : 0}</div>
            <div className='text-sm text-gray-600'>Ending Soon</div>
          </div>
          <div className='bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100'>
            <div className='text-2xl font-bold text-purple-600'>{lightningDeals}</div>
            <div className='text-sm text-gray-600'>Lightning Deals</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'all'
                ? 'bg-shop_dark_green text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Deals ({totalDeals})
          </button>
          <button
            onClick={() => setSelectedFilter('lightning')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedFilter === 'lightning'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Zap className='w-4 h-4' />
            Lightning ({lightningDeals})
          </button>
          <button
            onClick={() => setSelectedFilter('daily')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedFilter === 'daily'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Clock className='w-4 h-4' />
            Daily ({dailyDeals})
          </button>
        </div>

        {/* Hot Deals Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {displayedDeals.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
              currentTime={currentTime}
            />
          ))}
        </div>

        {/* Load More Button */}
        {displayedDeals.length < sortedDeals.length && (
          <div className='text-center mb-8'>
            <button
              onClick={() => setVisibleDeals(prev => Math.min(prev + 3, sortedDeals.length))}
              className='inline-flex items-center gap-2 bg-shop_dark_green text-white px-8 py-3 rounded-xl font-semibold hover:bg-shop_dark_green/90 hover:shadow-lg hoverEffect transform hover:scale-105 transition-all duration-300'
            >
              Load More Deals
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
        )}

        {/* View All Deals Button */}
        <div className='text-center'>
          <Link
            href='/deals'
            className='inline-flex items-center gap-2 bg-white text-shop_dark_green border-2 border-shop_dark_green px-8 py-4 rounded-xl font-semibold hover:bg-shop_dark_green hover:text-white hover:shadow-xl hoverEffect transform hover:scale-105 transition-all duration-300'
          >
            View All Hot Deals
            <ArrowRight className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
