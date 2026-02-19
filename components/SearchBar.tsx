'use client'

import { Search, X } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { productsData } from '@/constants/data'
import Link from 'next/link'
import Image from 'next/image'

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<typeof productsData>([])
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  // Handle search
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      console.log('Searching for:', query) // Debug log
      
      // Search across ALL products and ALL categories
      const results = productsData.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(query)
        const categoryMatch = product.category.toLowerCase().includes(query)
        const descriptionMatch = product.description?.toLowerCase().includes(query)
        const badgeMatch = product.badge?.toLowerCase().includes(query)
        
        console.log(`Checking product: ${product.name}`)
        console.log(`- Name match: ${nameMatch} ("${product.name}" includes "${query}")`)
        console.log(`- Category match: ${categoryMatch} ("${product.category}" includes "${query}")`)
        console.log(`- Description match: ${descriptionMatch} ("${product.description}" includes "${query}")`)
        console.log(`- Badge match: ${badgeMatch} ("${product.badge}" includes "${query}")`)
        
        // Return product if it matches ANY field (search across all categories)
        return nameMatch || categoryMatch || descriptionMatch || badgeMatch
      }).slice(0, 5) // Limit to 5 results for dropdown
      
      console.log('Search results from all categories:', results) // Debug log
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setIsOpen(false)
      setSearchQuery('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(searchQuery)
  }

  const handleProductClick = (productId: number) => {
    console.log('Product clicked:', productId) // Debug log
    setIsOpen(false)
    setSearchQuery('')
    // Navigate to product detail page or search results
    const product = productsData.find(p => p.id === productId)
    if (product) {
      console.log('Found product:', product.name) // Debug log
      handleSearch(product.name)
    }
  }
  return (
    <div className='relative' ref={searchRef}>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative p-2 hover:text-shop_light_green hoverEffect transition-colors'
      >
        <Search className='w-5 h-5' />
        {isOpen && (
          <span className='absolute -top-1 -right-1 w-2 h-2 bg-shop_orange rounded-full'></span>
        )}
      </button>

      {/* Search Dropdown */}
      {isOpen && (
        <div className='absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden'>
          {/* Search Input */}
          <form onSubmit={handleSubmit} className='p-4 border-b border-gray-100'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search products...'
                className='w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                autoFocus
              />
              {searchQuery && (
                <button
                  type='button'
                  onClick={() => setSearchQuery('')}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                  <X className='w-4 h-4' />
                </button>
              )}
            </div>
          </form>

          {/* Search Results */}
          <div className='max-h-96 overflow-y-auto'>
            {searchQuery && searchResults.length > 0 ? (
              <div className='p-2'>
                <div className='text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2 px-2'>
                  Products ({searchResults.length})
                </div>
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className='flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors'
                  >
                    {/* Product Image */}
                    <div className='w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden'>
                      <div className='w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center'>
                        <div className='w-6 h-6 bg-gray-400 rounded'></div>
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className='flex-1 min-w-0'>
                      <h4 className='text-sm font-medium text-gray-900 truncate'>
                        {product.name}
                      </h4>
                      <p className='text-xs text-gray-500 truncate'>
                        {product.category}
                      </p>
                      <div className='flex items-center gap-2 mt-1'>
                        <span className='text-sm font-bold text-shop_dark_green'>
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className='text-xs text-gray-400 line-through'>
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* View All Results */}
                <button
                  onClick={() => handleSearch(searchQuery)}
                  className='w-full mt-2 p-3 text-center text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors'
                >
                  View all results for "{searchQuery}"
                </button>
              </div>
            ) : searchQuery ? (
              <div className='p-8 text-center'>
                <div className='w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center'>
                  <Search className='w-6 h-6 text-gray-400' />
                </div>
                <p className='text-sm text-gray-500'>No products found</p>
                <p className='text-xs text-gray-400 mt-1'>Try different keywords</p>
              </div>
            ) : (
              <div className='p-6 text-center'>
                <div className='w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center'>
                  <Search className='w-6 h-6 text-gray-400' />
                </div>
                <p className='text-sm text-gray-500 mb-2'>Start typing to search</p>
                <p className='text-xs text-gray-400'>Search by product name or category</p>
                
                {/* Popular Searches */}
                <div className='mt-4 pt-4 border-t border-gray-100'>
                  <p className='text-xs text-gray-500 font-semibold mb-2'>Popular Searches</p>
                  <div className='flex flex-wrap gap-1 justify-center'>
                    {['Headphones', 'Watch', 'Jacket', 'Keyboard', 'Camera'].map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          setSearchQuery(term)
                          handleSearch(term)
                        }}
                        className='px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors'
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
