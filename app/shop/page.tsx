'use client'

import React, { useState, useMemo } from 'react'
import Container from '@/components/Container';
import ShopHeader from '@/components/ShopHeader';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';

// Categories and deal types for filters
const categories = [
  { id: 'electronics', name: 'Electronics', count: 156 },
  { id: 'fashion', name: 'Fashion', count: 234 },
  { id: 'home', name: 'Home & Living', count: 89 },
  { id: 'books', name: 'Books', count: 67 },
  { id: 'sports', name: 'Sports', count: 45 },
  { id: 'toys', name: 'Toys & Games', count: 78 }
]

const dealTypes = [
  { name: 'Flash Sale', slug: 'flash', icon: '⚡' },
  { name: 'Lightning Deal', slug: 'lightning', icon: '🌩' },
  { name: 'Daily Deal', slug: 'daily', icon: '📅' },
  { name: 'Weekend Special', slug: 'weekend', icon: '🌴' },
  { name: 'Clearance', slug: 'clearance', icon: '🏷️' }
]

// Sample product data - in a real app, this would come from an API
const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones Premium',
    price: 89.99,
    originalPrice: 149.99,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 128,
    badge: 'Best Seller',
    category: 'Electronics',
    size: 'M',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.'
  },
  {
    id: 2,
    name: 'Smart Watch Pro Series 5',
    price: 199.99,
    originalPrice: 299.99,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 89,
    badge: 'New',
    category: 'Electronics',
    size: 'M',
    description: 'Advanced fitness tracking and health monitoring in a sleek design.'
  },
  {
    id: 3,
    name: 'Premium Leather Jacket Classic',
    price: 149.99,
    originalPrice: 249.99,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 56,
    badge: 'Limited',
    category: 'Fashion',
    size: 'L',
    description: 'Genuine leather jacket with timeless style and exceptional craftsmanship.'
  },
  {
    id: 4,
    name: 'Organic Skincare Set Complete',
    price: 59.99,
    originalPrice: 119.99,
    image: '/api/placeholder/300/300',
    rating: 4.9,
    reviews: 278,
    badge: 'Books',
    category: 'Beauty',
    size: 'S',
    description: 'Complete organic skincare routine for radiant skin.'
  },
  {
    id: 5,
    name: 'Yoga Mat Premium Non-Slip',
    price: 49.99,
    originalPrice: 79.99,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 89,
    badge: 'Sports',
    category: 'Sports',
    size: 'M',
    description: 'Extra thick yoga mat with superior grip and cushioning.'
  },
  {
    id: 6,
    name: 'Smart Home Security Camera',
    price: 159.99,
    originalPrice: 249.99,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 156,
    badge: 'Smart',
    category: 'Electronics',
    size: 'M',
    description: 'HD security camera with night vision and mobile app control.'
  },
  {
    id: 7,
    name: 'Kids Educational Building Blocks',
    price: 34.99,
    originalPrice: 54.99,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 234,
    badge: 'Toys',
    category: 'Toys',
    size: 'S',
    description: 'Creative building blocks that enhance problem-solving skills.'
  },
  {
    id: 8,
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    originalPrice: 39.99,
    image: '/api/placeholder/300/300',
    rating: 4.3,
    reviews: 67,
    badge: 'Eco',
    category: 'Sports',
    size: 'S',
    description: 'Insulated water bottle that keeps drinks cold for 24 hours.'
  },
  {
    id: 9,
    name: 'Classic Literature Collection',
    price: 59.99,
    originalPrice: 99.99,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 278,
    badge: 'Books',
    category: 'Books',
    size: 'M',
    description: 'Collection of award-winning novels from various genres.'
  },
  {
    id: 10,
    name: 'Yoga Mat Premium Non-Slip',
    price: 49.99,
    originalPrice: 79.99,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 89,
    badge: 'Sports',
    category: 'Sports',
    size: 'M',
    description: 'Extra thick yoga mat with superior grip and cushioning.'
  },
  {
    id: 11,
    name: 'Smart Home Security Camera',
    price: 159.99,
    originalPrice: 249.99,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 156,
    badge: 'Smart',
    category: 'Electronics',
    size: 'M',
    description: 'HD security camera with night vision and mobile app control.'
  },
  {
    id: 12,
    name: 'Kids Educational Building Blocks',
    price: 34.99,
    originalPrice: 54.99,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 234,
    badge: 'Toys',
    category: 'Toys',
    size: 'S',
    description: 'Creative building blocks that enhance problem-solving skills.'
  }
]

const ShopPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(9)
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = sampleProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase()
      
      const matchesPriceRange = product.price >= priceRange.min && product.price <= priceRange.max
      
      const matchesRatings = selectedRatings.length === 0 || selectedRatings.includes(Math.floor(product.rating))
      
      const matchesSizes = selectedSizes.length === 0 || selectedSizes.includes(product.size || '')
      
      return matchesSearch && matchesCategory && matchesPriceRange && matchesRatings && matchesSizes
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name))
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating)
      default:
        // featured - keep original order
        return filtered
    }
  }, [searchTerm, sortBy, selectedCategory, selectedRatings, selectedSizes, priceRange])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage)
  const currentProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='min-h-screen bg-shop_light_bg'>
      {/* Shop Header */}
      <ShopHeader
        totalProducts={filteredAndSortedProducts.length}
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <Container className='py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Sidebar */}
          <aside className='lg:w-80 flex-shrink-0'>
            <FilterSidebar
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              categories={categories}
              dealTypes={dealTypes}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedDealType="all"
              setSelectedDealType={() => {}}
              sortBy={sortBy}
              setSortBy={setSortBy}
              selectedRatings={selectedRatings}
              setSelectedRatings={setSelectedRatings}
              selectedSizes={selectedSizes}
              setSelectedSizes={setSelectedSizes}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Main Content */}
          <main className='flex-1'>
            {/* Products Grid/List */}
            {currentProducts.length > 0 ? (
              <>
                <div className={`
                  grid gap-6
                  ${viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                  }
                `}>
                  {currentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={viewMode}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalItems={filteredAndSortedProducts.length}
                    itemsPerPage={itemsPerPage}
                  />
                )}
              </>
            ) : (
              <div className='text-center py-16'>
                <div className='text-shop_dark_green text-6xl mb-4'>🔍</div>
                <h3 className='text-xl font-semibold text-shop_light_green mb-2'>
                  No products found
                </h3>
                <p className='text-shop_dark_green mb-6'>
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setCurrentPage(1)
                  }}
                  className='bg-shop_dark_green text-white px-6 py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg hoverEffect'
                >
                  Clear Search
                </button>
              </div>
            )}
          </main>
        </div>
      </Container>
    </div>
  )
}

export default ShopPage;