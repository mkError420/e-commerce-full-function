'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ShoppingCart, Heart, Star } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useSlideCart } from '@/contexts/SlideCartContext'
import { productsData } from '@/constants/data'
import Link from 'next/link'

const TVScroller = () => {
  const { addToCart } = useCart()
  const { openSlideCart } = useSlideCart()
  const [currentPosition, setCurrentPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Get featured products for the scroller
  const scrollerProducts = productsData.slice(0, 12) // First 12 products
  const productsPerSlide = 3 // Show 3 products per slide
  const totalSlides = Math.ceil(scrollerProducts.length / productsPerSlide)

  const handleAddToCart = (product: any) => {
    const productToAdd = {
      ...product,
      quantity: 1
    }
    addToCart(productToAdd, 'product')
    openSlideCart()
  }

  const handlePrevious = () => {
    setCurrentPosition((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPosition((prev) => Math.min(totalSlides - 1, prev + 1))
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % totalSlides)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [isPaused, scrollerProducts.length])

  return (
    <div className='bg-gradient-to-r from-shop_light_bg to-white py-12 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-8'>
          {/* Empty header - removed as requested */}
        </div>

        {/* TV Scroller Container */}
        <div 
          className='relative'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scroller Track */}
          <div className='overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100'>
            <div 
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentPosition * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className='w-full flex-shrink-0 p-6'>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                    {scrollerProducts.slice(slideIndex * productsPerSlide, (slideIndex + 1) * productsPerSlide).map((product) => (
                      <div key={product.id} className='block'>
                        <Link href={`/product/${product.id}`} className='block'>
                          <div className='flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-300'>
                            {/* Product Image */}
                            <div className='relative w-24 h-24 flex-shrink-0'>
                              <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center'>
                                <div className='text-gray-400 text-center'>
                                  <div className='w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-1'></div>
                                  <p className='text-xs'>Product</p>
                                </div>
                              </div>
                              
                              {/* Discount Badge */}
                              {product.originalPrice && (
                                <div className='absolute top-1 right-1'>
                                  <span className='bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-bold'>
                                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice * 100))}%
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Product Info */}
                            <div className='flex-1 min-w-0'>
                              <h3 className='text-lg font-bold text-gray-900 mb-2 line-clamp-1'>
                                {product.name}
                              </h3>

                              {/* Price */}
                              <div className='flex items-center gap-3'>
                                <span className='text-xl font-bold text-shop_dark_green'>
                                  ৳{product.price}
                                </span>
                                {product.originalPrice && (
                                  <span className='text-lg text-gray-400 line-through'>
                                    ৳{product.originalPrice}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className='flex justify-center gap-2 mt-6'>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPosition(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPosition === index
                    ? 'bg-shop_dark_green w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TVScroller
