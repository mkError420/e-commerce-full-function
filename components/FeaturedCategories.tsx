import React from 'react'
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Book, 
  Heart, 
  Gamepad2, 
  Camera 
} from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    name: 'Electronics',
    icon: Smartphone,
    href: '/categories/electronics',
    color: 'bg-blue-100 text-blue-600 hover:bg-blue-200'
  },
  {
    name: 'Computers',
    icon: Laptop,
    href: '/categories/computers',
    color: 'bg-purple-100 text-purple-600 hover:bg-purple-200'
  },
  {
    name: 'Fashion',
    icon: Shirt,
    href: '/categories/fashion',
    color: 'bg-pink-100 text-pink-600 hover:bg-pink-200'
  },
  {
    name: 'Home & Living',
    icon: Home,
    href: '/categories/home',
    color: 'bg-green-100 text-green-600 hover:bg-green-200'
  },
  {
    name: 'Books',
    icon: Book,
    href: '/categories/books',
    color: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
  },
  {
    name: 'Health',
    icon: Heart,
    href: '/categories/health',
    color: 'bg-red-100 text-red-600 hover:bg-red-200'
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    href: '/categories/gaming',
    color: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
  },
  {
    name: 'Photography',
    icon: Camera,
    href: '/categories/photography',
    color: 'bg-teal-100 text-teal-600 hover:bg-teal-200'
  }
]

const FeaturedCategories = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Shop by <span className='text-shop_dark_green'>Category</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Browse our wide selection of products across different categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className='group'
              >
                <div className='bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hoverEffect transform hover:-translate-y-2 border border-gray-100'>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className='w-8 h-8' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 group-hover:text-shop_dark_green transition-colors duration-300'>
                    {category.name}
                  </h3>
                  <div className='mt-2 text-sm text-gray-500'>
                    Shop Now →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className='text-center mt-12'>
          <Link
            href='/categories'
            className='inline-flex items-center gap-2 bg-shop_btn_dark_green text-white px-8 py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg hoverEffect'
          >
            View All Categories
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories
