import React from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { productsData } from '@/constants/data'

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
          {productsData.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
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
