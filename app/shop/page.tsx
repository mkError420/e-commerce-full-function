'use client'

import React, { useState, useMemo } from 'react'
import Container from '@/components/Container';
import ShopHeader from '@/components/ShopHeader';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';

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
    description: 'Genuine leather jacket with timeless style and exceptional craftsmanship.'
  },
  {
    id: 4,
    name: 'Organic Skincare Set Complete',
    price: 79.99,
    originalPrice: 119.99,
    image: '/api/placeholder/300/300',
    rating: 4.9,
    reviews: 203,
    badge: 'Hot Deal',
    category: 'Health',
    description: 'Complete skincare routine with organic ingredients for radiant skin.'
  },
  {
    id: 5,
    name: 'Gaming Mechanical Keyboard RGB',
    price: 129.99,
    originalPrice: 189.99,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 167,
    badge: 'Gaming',
    category: 'Electronics',
    description: 'Professional gaming keyboard with customizable RGB lighting.'
  },
  {
    id: 6,
    name: 'Professional Camera Lens 50mm',
    price: 599.99,
    originalPrice: 899.99,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 94,
    badge: 'Pro',
    category: 'Electronics',
    description: 'High-quality lens for professional photography enthusiasts.'
  },
  {
    id: 7,
    name: 'Ergonomic Office Chair Deluxe',
    price: 299.99,
    originalPrice: 449.99,
    image: '/api/placeholder/300/300',
    rating: 4.4,
    reviews: 145,
    badge: 'Comfort',
    category: 'Home',
    description: 'Ultimate comfort for long working hours with lumbar support.'
  },
  {
    id: 8,
    name: 'Bestseller Novel Collection Box Set',
    price: 39.99,
    originalPrice: 59.99,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 278,
    badge: 'Books',
    category: 'Books',
    description: 'Collection of award-winning novels from various genres.'
  },
  {
    id: 9,
    name: 'Yoga Mat Premium Non-Slip',
    price: 49.99,
    originalPrice: 79.99,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 89,
    badge: 'Sports',
    category: 'Sports',
    description: 'Extra thick yoga mat with superior grip and cushioning.'
  },
  {
    id: 10,
    name: 'Smart Home Security Camera',
    price: 159.99,
    originalPrice: 249.99,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 156,
    badge: 'Smart',
    category: 'Electronics',
    description: 'HD security camera with night vision and mobile app control.'
  },
  {
    id: 11,
    name: 'Kids Educational Building Blocks',
    price: 34.99,
    originalPrice: 54.99,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 234,
    badge: 'Toys',
    category: 'Toys',
    description: 'Creative building blocks that enhance problem-solving skills.'
  },
  {
    id: 12,
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    originalPrice: 39.99,
    image: '/api/placeholder/300/300',
    rating: 4.3,
    reviews: 67,
    badge: 'Eco',
    category: 'Sports',
    description: 'Insulated water bottle that keeps drinks cold for 24 hours.'
  }
]

const ShopPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // featured - keep original order
        break
    }

    return filtered
  }, [searchTerm, sortBy])

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
                <div className='text-gray-400 text-6xl mb-4'>🔍</div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  No products found
                </h3>
                <p className='text-gray-600 mb-6'>
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