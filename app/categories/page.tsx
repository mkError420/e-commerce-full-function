'use client'

import React, { useState, useMemo } from 'react'
import Container from '@/components/Container'
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Book, 
  Heart, 
  Gamepad2, 
  Camera,
  Baby,
  Car,
  Dumbbell,
  Music,
  Plane,
  ShoppingBag,
  Watch,
  Utensils,
  Palette,
  Dog,
  Wrench,
  Coffee,
  Tv,
  Headphones,
  Smartphone as Phone,
  Package,
  Gift,
  Star
} from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    name: 'Electronics',
    icon: Smartphone,
    href: '/category/electronics',
    color: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    description: 'Smartphones, tablets, accessories',
    productCount: 1250,
    subcategories: ['Mobile Phones', 'Tablets', 'Accessories', 'Smart Watches']
  },
  {
    name: 'Computers',
    icon: Laptop,
    href: '/category/computers',
    color: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    description: 'Laptops, desktops, components',
    productCount: 890,
    subcategories: ['Laptops', 'Desktops', 'Monitors', 'Components']
  },
  {
    name: 'Fashion',
    icon: Shirt,
    href: '/category/fashion',
    color: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
    description: 'Clothing, shoes, accessories',
    productCount: 3420,
    subcategories: ["Men's Wear", "Women's Wear", "Kids Wear", "Shoes", "Accessories"]
  },
  {
    name: 'Home & Living',
    icon: Home,
    href: '/category/home',
    color: 'bg-green-100 text-green-600 hover:bg-green-200',
    description: 'Furniture, decor, kitchen',
    productCount: 2100,
    subcategories: ['Furniture', 'Kitchen', 'Decor', 'Bedding', 'Storage']
  },
  {
    name: 'Books',
    icon: Book,
    href: '/category/books',
    color: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
    description: 'Fiction, non-fiction, educational',
    productCount: 5600,
    subcategories: ['Fiction', 'Non-Fiction', 'Educational', 'Comics', 'E-books']
  },
  {
    name: 'Health & Beauty',
    icon: Heart,
    href: '/category/health',
    color: 'bg-red-100 text-red-600 hover:bg-red-200',
    description: 'Skincare, makeup, wellness',
    productCount: 1890,
    subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Wellness', 'Supplements']
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    href: '/category/gaming',
    color: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
    description: 'Consoles, games, accessories',
    productCount: 750,
    subcategories: ['Consoles', 'Video Games', 'Accessories', 'Gaming Chairs']
  },
  {
    name: 'Photography',
    icon: Camera,
    href: '/category/photography',
    color: 'bg-teal-100 text-teal-600 hover:bg-teal-200',
    description: 'Cameras, lenses, equipment',
    productCount: 420,
    subcategories: ['DSLR Cameras', 'Mirrorless', 'Lenses', 'Accessories']
  },
  {
    name: 'Sports & Outdoors',
    icon: Dumbbell,
    href: '/category/sports',
    color: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    description: 'Fitness equipment, outdoor gear',
    productCount: 1680,
    subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Water Sports']
  },
  {
    name: 'Toys & Games',
    icon: Gamepad2,
    href: '/category/toys',
    color: 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200',
    description: 'Educational toys, board games',
    productCount: 2340,
    subcategories: ['Educational Toys', 'Board Games', 'Action Figures', 'Puzzles']
  },
  {
    name: 'Baby & Kids',
    icon: Baby,
    href: '/category/baby',
    color: 'bg-rose-100 text-rose-600 hover:bg-rose-200',
    description: 'Baby care, kids products',
    productCount: 1560,
    subcategories: ['Baby Care', 'Kids Clothing', 'Toys', 'Furniture']
  },
  {
    name: 'Automotive',
    icon: Car,
    href: '/category/automotive',
    color: 'bg-slate-100 text-slate-600 hover:bg-slate-200',
    description: 'Car parts, accessories',
    productCount: 980,
    subcategories: ['Car Parts', 'Accessories', 'Tools', 'Electronics']
  },
  {
    name: 'Music & Audio',
    icon: Music,
    href: '/category/music',
    color: 'bg-violet-100 text-violet-600 hover:bg-violet-200',
    description: 'Instruments, audio equipment',
    productCount: 670,
    subcategories: ['Musical Instruments', 'Audio Equipment', 'Records', 'Accessories']
  },
  {
    name: 'Travel',
    icon: Plane,
    href: '/category/travel',
    color: 'bg-sky-100 text-sky-600 hover:bg-sky-200',
    description: 'Luggage, travel accessories',
    productCount: 540,
    subcategories: ['Luggage', 'Backpacks', 'Travel Accessories', 'Travel Gear']
  },
  {
    name: 'Jewelry & Watches',
    icon: Watch,
    href: '/category/jewelry',
    color: 'bg-amber-100 text-amber-600 hover:bg-amber-200',
    description: 'Fine jewelry, watches',
    productCount: 1890,
    subcategories: ['Fine Jewelry', 'Fashion Jewelry', 'Watches', 'Accessories']
  },
  {
    name: 'Food & Beverages',
    icon: Utensils,
    href: '/category/food',
    color: 'bg-lime-100 text-lime-600 hover:bg-lime-200',
    description: 'Groceries, snacks, beverages',
    productCount: 3200,
    subcategories: ['Groceries', 'Snacks', 'Beverages', 'Organic Food']
  },
  {
    name: 'Art & Crafts',
    icon: Palette,
    href: '/category/art',
    color: 'bg-fuchsia-100 text-fuchsia-600 hover:bg-fuchsia-200',
    description: 'Art supplies, craft materials',
    productCount: 890,
    subcategories: ['Art Supplies', 'Craft Materials', 'DIY Kits', 'Painting']
  },
  {
    name: 'Pet Supplies',
    icon: Dog,
    href: '/category/pets',
    color: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200',
    description: 'Pet food, accessories, toys',
    productCount: 1230,
    subcategories: ['Dog Supplies', 'Cat Supplies', 'Bird Supplies', 'Pet Food']
  },
  {
    name: 'Tools & Hardware',
    icon: Wrench,
    href: '/category/tools',
    color: 'bg-stone-100 text-stone-600 hover:bg-stone-200',
    description: 'Power tools, hardware',
    productCount: 760,
    subcategories: ['Power Tools', 'Hand Tools', 'Hardware', 'Garden Tools']
  },
  {
    name: 'Kitchen & Dining',
    icon: Coffee,
    href: '/category/kitchen',
    color: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    description: 'Cookware, appliances, dining',
    productCount: 1450,
    subcategories: ['Cookware', 'Small Appliances', 'Dining', 'Bakery']
  },
  {
    name: 'TV & Home Theater',
    icon: Tv,
    href: '/category/tv',
    color: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    description: 'TVs, sound systems, streaming',
    productCount: 680,
    subcategories: ['TVs', 'Sound Systems', 'Streaming Devices', 'Cables']
  },
  {
    name: 'Audio & Headphones',
    icon: Headphones,
    href: '/category/audio',
    color: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    description: 'Headphones, speakers, audio',
    productCount: 920,
    subcategories: ['Headphones', 'Speakers', 'Audio Accessories', 'Pro Audio']
  },
  {
    name: 'Office Supplies',
    icon: Package,
    href: '/category/office',
    color: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
    description: 'Stationery, office furniture',
    productCount: 1100,
    subcategories: ['Stationery', 'Office Furniture', 'Storage', 'Technology']
  },
  {
    name: 'Gifts & Occasions',
    icon: Gift,
    href: '/category/gifts',
    color: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
    description: 'Gift ideas, party supplies',
    productCount: 2340,
    subcategories: ['Gift Ideas', 'Party Supplies', 'Gift Cards', 'Seasonal']
  }
]

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCategories = useMemo(() => {
    return categories.filter(category => {
      const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || category.name === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const categoryOptions = ['all', ...categories.map(cat => cat.name)]

  return (
    <div className='bg-shop-light-pink min-h-screen'>
      <Container className='bg-transparent py-8'>
        {/* Breadcrumb */}
        <nav className='mb-8'>
          <ol className='flex items-center space-x-2 text-sm text-gray-600'>
            <li>
              <Link href='/' className='hover:text-shop_dark_green transition-colors'>
                Home
              </Link>
            </li>
            <li className='flex items-center'>
              <svg className='w-4 h-4 mx-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
              <span className='text-shop_dark_green font-medium'>Categories</span>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            All <span className='text-shop_dark_green'>Categories</span>
          </h1>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto mb-8'>
            Browse our complete collection of products across all categories. Find exactly what you're looking for with our organized catalog.
          </p>
          
          {/* Search Bar */}
          <div className='max-w-2xl mx-auto mb-8'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search categories, products, or subcategories...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full px-6 py-4 pr-12 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-shop_dark_green focus:border-transparent bg-white shadow-sm'
              />
              <div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
                <svg className='w-6 h-6 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className='flex flex-wrap justify-center gap-2 mb-8'>
            {categoryOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedCategory(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === option
                    ? 'bg-shop_dark_green text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {option === 'all' ? 'All Categories' : option}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className='mb-8 text-center'>
          <p className='text-gray-600'>
            Found <span className='font-semibold text-shop_dark_green'>{filteredCategories.length}</span> categories
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12'>
          {filteredCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className='group'
              >
                <div className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hoverEffect transform hover:-translate-y-2 border border-gray-100 h-full'>
                  {/* Icon and Product Count */}
                  <div className='flex items-start justify-between mb-4'>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className='w-8 h-8' />
                    </div>
                    <span className='bg-shop_light_green text-white text-xs px-2 py-1 rounded-full font-medium'>
                      {category.productCount.toLocaleString()} items
                    </span>
                  </div>

                  {/* Category Info */}
                  <h3 className='text-xl font-semibold text-gray-900 group-hover:text-shop_dark_green transition-colors duration-300 mb-2'>
                    {category.name}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                    {category.description}
                  </p>

                  {/* Subcategories */}
                  <div className='mb-4'>
                    <p className='text-xs text-gray-500 mb-2 font-medium'>Popular in this category:</p>
                    <div className='flex flex-wrap gap-1'>
                      {category.subcategories.slice(0, 3).map((sub, subIndex) => (
                        <span
                          key={subIndex}
                          className='text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md'
                        >
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className='text-xs text-gray-500 px-2 py-1'>
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Shop Now Button */}
                  <div className='flex items-center justify-between'>
                    <span className='text-shop_dark_green font-medium text-sm group-hover:text-shop_dark_green transition-colors duration-300'>
                      Shop Now
                    </span>
                    <svg className='w-4 h-4 text-shop_dark_green group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className='text-center py-16'>
            <div className='inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4'>
              <svg className='w-10 h-10 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>No categories found</h3>
            <p className='text-gray-600 mb-4'>
              Try adjusting your search terms or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className='bg-shop_dark_green text-white px-6 py-2 rounded-lg hover:bg-shop_btn_dark_green transition-colors duration-300'
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Popular Categories Section */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <section className='mt-16 pt-16 border-t border-gray-200'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Most <span className='text-shop_dark_green'>Popular</span> Categories
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Discover what's trending and explore our most sought-after product categories
              </p>
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
              {categories.slice(0, 8).map((category, index) => {
                const Icon = category.icon
                return (
                  <Link
                    key={index}
                    href={category.href}
                    className='group flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-shop_dark_green hover:shadow-md transition-all duration-300'
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className='w-6 h-6' />
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-medium text-gray-900 group-hover:text-shop_dark_green transition-colors duration-300'>
                        {category.name}
                      </h4>
                      <p className='text-xs text-gray-500'>
                        {category.productCount.toLocaleString()} items
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </Container>
    </div>
  )
}

export default CategoriesPage
