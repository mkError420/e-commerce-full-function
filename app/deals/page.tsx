'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Container from '@/components/Container';
import DealCard from '@/components/DealCard';
import DealFilters from '@/components/DealFilters';
import Pagination from '@/components/Pagination';

// Sample deals data - in a real app, this would come from an API
const flashDeals = [
  {
    id: 1,
    title: 'Flash Sale: Premium Wireless Headphones',
    originalPrice: 199.99,
    dealPrice: 89.99,
    discount: 55,
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
    title: 'Lightning Deal: Smart Watch Pro',
    originalPrice: 349.99,
    dealPrice: 199.99,
    discount: 43,
    image: '/api/placeholder/400/300',
    category: 'Electronics',
    dealType: 'lightning',
    endTime: '2024-01-18T15:30:00',
    stock: 8,
    sold: 42,
    rating: 4.8,
    reviews: 89,
    description: 'Advanced fitness tracking and health monitoring smartwatch',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant'],
    freeShipping: true
  },
  {
    id: 5,
    title: 'Flash Sale: Gaming Mechanical Keyboard',
    originalPrice: 189.99,
    dealPrice: 99.99,
    discount: 47,
    image: '/api/placeholder/400/300',
    category: 'Gaming',
    dealType: 'flash',
    endTime: '2024-01-20T18:00:00',
    stock: 12,
    sold: 38,
    rating: 4.6,
    reviews: 167,
    description: 'RGB mechanical gaming keyboard with customizable lighting',
    features: ['Mechanical Switches', 'RGB Lighting', 'Programmable Keys'],
    freeShipping: true
  }
]

const weekendSpecials = [
  {
    id: 11,
    title: 'Weekend Special: Professional Camera Lens',
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
    id: 12,
    title: 'Weekend Special: Designer Handbag Collection',
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
    id: 13,
    title: 'Weekend Special: Fitness Equipment Bundle',
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
  }
]

const clearanceDeals = [
  {
    id: 3,
    title: 'Clearance: Designer Leather Jacket',
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
    id: 8,
    title: 'Clearance: Kids Educational Toys',
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
    id: 14,
    title: 'Clearance: Home Decor Set',
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
    id: 15,
    title: 'Clearance: Kitchen Appliances Pack',
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
  }
]

const dailyDeals = [
  {
    id: 4,
    title: 'Daily Deal: Organic Skincare Set',
    originalPrice: 119.99,
    dealPrice: 59.99,
    discount: 50,
    image: '/api/placeholder/400/300',
    category: 'Beauty',
    dealType: 'daily',
    endTime: '2024-01-19T23:59:59',
    stock: 25,
    sold: 75,
    rating: 4.9,
    reviews: 203,
    description: 'Complete organic skincare routine for radiant skin',
    features: ['Organic Ingredients', 'Cruelty Free', 'All Skin Types'],
    freeShipping: true
  },
  {
    id: 9,
    title: 'Daily Deal: Stainless Steel Water Bottle',
    originalPrice: 49.99,
    dealPrice: 19.99,
    discount: 60,
    image: '/api/placeholder/400/300',
    category: 'Sports',
    dealType: 'daily',
    endTime: '2024-01-19T23:59:59',
    stock: 50,
    sold: 150,
    rating: 4.3,
    reviews: 67,
    description: 'Insulated water bottle that keeps drinks cold for 24 hours',
    features: ['24hr Cold', 'BPA Free', 'Leak Proof'],
    freeShipping: true
  }
]

// Combine all deals for filtering
const hotDeals = [...flashDeals, ...weekendSpecials, ...clearanceDeals, ...dailyDeals]

const categories = [
  { name: 'All Deals', slug: 'all', count: hotDeals.length },
  { name: 'Electronics', slug: 'electronics', count: 3 },
  { name: 'Fashion', slug: 'fashion', count: 1 },
  { name: 'Beauty', slug: 'beauty', count: 1 },
  { name: 'Gaming', slug: 'gaming', count: 1 },
  { name: 'Sports', slug: 'sports', count: 2 },
  { name: 'Home', slug: 'home', count: 1 },
  { name: 'Toys', slug: 'toys', count: 1 }
]

const dealTypes = [
  { name: 'All Types', slug: 'all', icon: '🔥' },
  { name: 'Flash Sale', slug: 'flash', icon: '⚡' },
  { name: 'Lightning Deal', slug: 'lightning', icon: '🌩' },
  { name: 'Daily Deal', slug: 'daily', icon: '📅' },
  { name: 'Weekend Special', slug: 'weekend', icon: '🌴' },
  { name: 'Clearance', slug: 'clearance', icon: '🏷️' }
]

const HotDealsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDealType, setSelectedDealType] = useState('all')
  const [sortBy, setSortBy] = useState('ending-soon')
  const [currentPage, setCurrentPage] = useState(1)
  const [currentTime, setCurrentTime] = useState(new Date())
  const dealsPerPage = 9

  // Update current time every second for countdown timers
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Filter deals based on category and deal type
  const filteredDeals = useMemo(() => {
    let filtered = hotDeals.filter(deal => {
      const matchesCategory = selectedCategory === 'all' || deal.category.toLowerCase() === selectedCategory.toLowerCase()
      const matchesDealType = selectedDealType === 'all' || deal.dealType === selectedDealType
      
      return matchesCategory && matchesDealType
    })

    // Sort deals
    switch (sortBy) {
      case 'ending-soon':
        filtered.sort((a, b) => new Date(a.endTime).getTime() - new Date(b.endTime).getTime())
        break
      case 'discount-high':
        filtered.sort((a, b) => b.discount - a.discount)
        break
      case 'price-low':
        filtered.sort((a, b) => a.dealPrice - b.dealPrice)
        break
      case 'popular':
        filtered.sort((a, b) => b.sold - a.sold)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedDealType, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredDeals.length / dealsPerPage)
  const currentDeals = filteredDeals.slice(
    (currentPage - 1) * dealsPerPage,
    currentPage * dealsPerPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const flashDealsCount = flashDeals.length
  const weekendSpecialsCount = weekendSpecials.length
  const clearanceDealsCount = clearanceDeals.length
  const dailyDealsCount = dailyDeals.length

  // Calculate ending soon deals for all deal types
  const endingSoonDeals = hotDeals
    .filter(deal => {
      const timeLeft = new Date(deal.endTime).getTime() - currentTime.getTime()
      return timeLeft > 0 && timeLeft < 24 * 60 * 60 * 1000 // Less than 24 hours
    })
    .slice(0, 3)

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-red-600 to-orange-600 text-white py-12'>
        <Container>
          <div className='text-center'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <span className='text-4xl animate-pulse'>🔥</span>
              <h1 className='text-4xl md:text-5xl font-bold'>Hot Deals</h1>
            </div>
            <p className='text-xl text-red-100 mb-8 max-w-2xl mx-auto'>
              Incredible savings on limited-time offers. Don't miss out on these amazing deals!
            </p>
            
            {/* Quick Stats */}
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto'>
              <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                <div className='text-3xl font-bold'>{hotDeals.length}</div>
                <div className='text-sm text-red-100'>Active Deals</div>
              </div>
              <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                <div className='text-3xl font-bold'>{Math.max(...hotDeals.map(d => d.discount))}%</div>
                <div className='text-sm text-red-100'>Max Discount</div>
              </div>
              <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                <div className='text-3xl font-bold'>{flashDealsCount}</div>
                <div className='text-sm text-red-100'>Flash Sales</div>
              </div>
              <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                <div className='text-3xl font-bold'>{weekendSpecialsCount}</div>
                <div className='text-sm text-red-100'>Weekend Deals</div>
              </div>
              <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                <div className='text-3xl font-bold'>{clearanceDealsCount}</div>
                <div className='text-sm text-red-100'>Clearance</div>
              </div>
              <div className='bg-white/20 backdrop-blur-sm rounded-lg p-4'>
                <div className='text-3xl font-bold'>{dailyDealsCount}</div>
                <div className='text-sm text-red-100'>Daily Deals</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className='py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Filters Sidebar */}
          <aside className='lg:w-80 flex-shrink-0'>
            <DealFilters
              categories={categories}
              dealTypes={dealTypes}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedDealType={selectedDealType}
              setSelectedDealType={setSelectedDealType}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </aside>

          {/* Main Content */}
          <main className='flex-1'>
            {/* Flash Sales Section */}
            {(selectedDealType === 'all' || selectedDealType === 'flash') && (
              <section className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='text-3xl'>⚡</span>
                  <h2 className='text-2xl font-bold text-gray-900'>Flash Sales</h2>
                  <span className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold'>
                    Limited Time - Act Fast!
                  </span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {filteredDeals.filter(deal => deal.dealType === 'flash').map((deal) => (
                    <DealCard
                      key={deal.id}
                      deal={deal}
                      currentTime={currentTime}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Weekend Specials Section */}
            {(selectedDealType === 'all' || selectedDealType === 'weekend') && (
              <section className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='text-3xl'>🌴</span>
                  <h2 className='text-2xl font-bold text-gray-900'>Weekend Specials</h2>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold'>
                    Weekend Only - Don't Miss Out!
                  </span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {filteredDeals.filter(deal => deal.dealType === 'weekend').map((deal) => (
                    <DealCard
                      key={deal.id}
                      deal={deal}
                      currentTime={currentTime}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Clearance Sale Section */}
            {(selectedDealType === 'all' || selectedDealType === 'clearance') && (
              <section className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='text-3xl'>🏷️</span>
                  <h2 className='text-2xl font-bold text-gray-900'>Clearance Sale</h2>
                  <span className='bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold'>
                    Final Clearance - Everything Must Go!
                  </span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {filteredDeals.filter(deal => deal.dealType === 'clearance').map((deal) => (
                    <DealCard
                      key={deal.id}
                      deal={deal}
                      currentTime={currentTime}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Daily Deals Section */}
            {(selectedDealType === 'all' || selectedDealType === 'daily') && (
              <section className='mb-12'>
                <div className='flex items-center gap-3 mb-6'>
                  <span className='text-3xl'>📅</span>
                  <h2 className='text-2xl font-bold text-gray-900'>Daily Deals</h2>
                  <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold'>
                    New Deals Every Day!
                  </span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {filteredDeals.filter(deal => deal.dealType === 'daily').map((deal) => (
                    <DealCard
                      key={deal.id}
                      deal={deal}
                      currentTime={currentTime}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* All Deals (when no specific type selected) */}
            {selectedDealType === 'all' && (
              <>
                {/* Ending Soon Alert */}
                {endingSoonDeals.length > 0 && currentPage === 1 && (
                  <div className='bg-red-100 border border-red-200 rounded-xl p-4 mb-6'>
                    <div className='flex items-center gap-3'>
                      <span className='text-2xl'>⏰</span>
                      <div>
                        <h3 className='text-lg font-bold text-red-800'>Deals Ending Soon!</h3>
                        <p className='text-red-600'>
                          {endingSoonDeals.length} deals ending in next 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Deals Grid */}
                {currentDeals.length > 0 ? (
                  <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                      {currentDeals.map((deal) => (
                        <DealCard
                          key={deal.id}
                          deal={deal}
                          currentTime={currentTime}
                        />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        totalItems={filteredDeals.length}
                        itemsPerPage={dealsPerPage}
                      />
                    )}
                  </>
                ) : (
                  <div className='text-center py-16'>
                    <div className='text-gray-400 text-6xl mb-4'>🎯</div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      No deals found
                    </h3>
                    <p className='text-gray-600 mb-6'>
                      Try adjusting your filters to see more amazing deals.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all')
                        setSelectedDealType('all')
                        setCurrentPage(1)
                      }}
                      className='bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 hover:shadow-lg hoverEffect'
                    >
                      View All Deals
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </Container>
    </div>
  )
}

export default HotDealsPage
