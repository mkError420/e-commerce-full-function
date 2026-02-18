import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react'

// Sample product data - in a real app, this would come from an API
const featuredProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 149.99,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 128,
    badge: 'Best Seller',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 199.99,
    originalPrice: 299.99,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 89,
    badge: 'New',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Premium Leather Jacket',
    price: 149.99,
    originalPrice: 249.99,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 56,
    badge: 'Limited',
    category: 'Fashion'
  },
  {
    id: 4,
    name: 'Organic Skincare Set',
    price: 79.99,
    originalPrice: 119.99,
    image: '/api/placeholder/300/300',
    rating: 4.9,
    reviews: 203,
    badge: 'Hot Deal',
    category: 'Health'
  },
  {
    id: 5,
    name: 'Gaming Mechanical Keyboard',
    price: 129.99,
    originalPrice: 189.99,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 167,
    badge: 'Gaming',
    category: 'Gaming'
  },
  {
    id: 6,
    name: 'Professional Camera Lens',
    price: 599.99,
    originalPrice: 899.99,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 94,
    badge: 'Pro',
    category: 'Photography'
  },
  {
    id: 7,
    name: 'Ergonomic Office Chair',
    price: 299.99,
    originalPrice: 449.99,
    image: '/api/placeholder/300/300',
    rating: 4.4,
    reviews: 145,
    badge: 'Comfort',
    category: 'Home'
  },
  {
    id: 8,
    name: 'Bestseller Novel Collection',
    price: 39.99,
    originalPrice: 59.99,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 278,
    badge: 'Books',
    category: 'Books'
  }
]

const ProductCard = ({ product }: { product: typeof featuredProducts[0] }) => {
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className='group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100'>
      {/* Product Image Container */}
      <div className='relative overflow-hidden bg-gray-50'>
        {/* Badge */}
        <div className='absolute top-4 left-4 z-10'>
          <span className='bg-shop_orange text-white px-3 py-1 rounded-full text-xs font-semibold'>
            {product.badge}
          </span>
        </div>
        
        {/* Discount Badge */}
        <div className='absolute top-4 right-4 z-10'>
          <span className='bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
            -{discountPercentage}%
          </span>
        </div>

        {/* Action Buttons */}
        <div className='absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='flex flex-col gap-2'>
            <button className='bg-white p-2 rounded-full shadow-md hover:bg-shop_light_pink hoverEffect'>
              <Heart className='w-4 h-4 text-gray-600 hover:text-red-500' />
            </button>
            <button className='bg-white p-2 rounded-full shadow-md hover:bg-shop_light_pink hoverEffect'>
              <Eye className='w-4 h-4 text-gray-600 hover:text-shop_dark_green' />
            </button>
          </div>
        </div>

        {/* Placeholder Image */}
        <div className='w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
          <div className='text-gray-400 text-center'>
            <div className='w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-2'></div>
            <p className='text-sm'>Product Image</p>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className='p-6'>
        {/* Category */}
        <div className='text-xs text-shop_dark_green font-semibold mb-2 uppercase tracking-wide'>
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className='text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-shop_dark_green transition-colors duration-300'>
          {product.name}
        </h3>

        {/* Rating */}
        <div className='flex items-center gap-2 mb-3'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className='text-sm text-gray-600'>
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className='flex items-center gap-3 mb-4'>
          <span className='text-2xl font-bold text-shop_dark_green'>
            ${product.price}
          </span>
          <span className='text-lg text-gray-400 line-through'>
            ${product.originalPrice}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className='w-full bg-shop_btn_dark_green text-white py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg hoverEffect flex items-center justify-center gap-2 group/btn'>
          <ShoppingCart className='w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300' />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

const FeaturedProducts = () => {
  return (
    <section className='py-16 bg-shop_light_bg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Featured <span className='text-shop_dark_green'>Products</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Discover our handpicked selection of the best deals and trending products
          </p>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center mt-12'>
          <Link
            href='/shop'
            className='inline-flex items-center gap-2 bg-white border-2 border-shop_dark_green text-shop_dark_green px-8 py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:text-white hover:shadow-lg hoverEffect'
          >
            View All Products
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
