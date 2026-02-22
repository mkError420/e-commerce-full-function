'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  ArrowLeft, 
  Truck, 
  Shield, 
  RefreshCw,
  Minus,
  Plus,
  Check
} from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useSlideCart } from '@/contexts/SlideCartContext'
import { productsData } from '@/constants/data'

const ProductDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const { openSlideCart } = useSlideCart()
  
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  // Find product by ID
  const product = productsData.find(p => p.id === parseInt(params.id as string))

  if (!product) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Product Not Found</h2>
          <p className='text-gray-600 mb-8'>The product you're looking for doesn't exist.</p>
          <Link 
            href='/shop'
            className='inline-flex items-center bg-shop_btn_dark_green text-white px-8 py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg transition-all duration-300'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const discountPercentage = Math.round(((product.originalPrice || product.price) - product.price) / (product.originalPrice || product.price) * 100)

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      quantity: quantity
    }
    addToCart(productToAdd, 'product')
    openSlideCart()
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumb */}
        <nav className='flex items-center space-x-2 text-sm text-gray-500 mb-8'>
          <Link href='/' className='hover:text-gray-900'>Home</Link>
          <span>/</span>
          <Link href='/shop' className='hover:text-gray-900'>Shop</Link>
          <span>/</span>
          <span className='text-gray-900'>{product.name}</span>
        </nav>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Product Images */}
          <div className='space-y-4'>
            {/* Main Image */}
            <div className='relative overflow-hidden rounded-xl bg-gray-100 aspect-square'>
              {product.badge && (
                <div className='absolute top-4 left-4 z-10'>
                  <span className='bg-shop_orange text-white px-3 py-1 rounded-full text-xs font-semibold'>
                    {product.badge}
                  </span>
                </div>
              )}
              
              {product.originalPrice && (
                <div className='absolute top-4 right-4 z-10'>
                  <span className='bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
                    -{discountPercentage}%
                  </span>
                </div>
              )}

              <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                <div className='text-gray-400 text-center'>
                  <div className='w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4'></div>
                  <p className='text-sm'>Product Image</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className='grid grid-cols-4 gap-2'>
              {[...Array(4)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg bg-gray-100 aspect-square border-2 transition-all duration-200 ${
                    selectedImage === index ? 'border-shop_dark_green' : 'border-gray-200'
                  }`}
                >
                  <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                    <div className='w-12 h-12 bg-gray-300 rounded'></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className='space-y-6'>
            {/* Header */}
            <div>
              <div className='text-sm text-shop_dark_green font-semibold mb-2 uppercase tracking-wide'>
                {product.category}
              </div>
              <h1 className='text-3xl font-bold text-gray-900 mb-4'>{product.name}</h1>
              
              {/* Rating */}
              <div className='flex items-center gap-4 mb-4'>
                <div className='flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        product.rating && i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className='text-sm text-gray-600'>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className='flex items-center gap-4'>
              <span className='text-3xl font-bold text-shop_dark_green'>
                ৳{product.price}
              </span>
              {product.originalPrice && (
                <span className='text-xl text-gray-400 line-through'>
                  ৳{product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Description</h3>
              <p className='text-gray-600 leading-relaxed'>
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <label className='text-sm font-medium text-gray-700'>Quantity:</label>
                <div className='flex items-center border border-gray-300 rounded-lg'>
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className='p-2 hover:bg-gray-100 transition-colors'
                  >
                    <Minus className='w-4 h-4' />
                  </button>
                  <span className='px-4 py-2 font-medium'>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className='p-2 hover:bg-gray-100 transition-colors'
                  >
                    <Plus className='w-4 h-4' />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isAddedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-shop_btn_dark_green text-white hover:bg-shop_dark_green hover:shadow-lg'
                }`}
              >
                {isAddedToCart ? (
                  <>
                    <Check className='w-5 h-5' />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className='w-5 h-5' />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Features */}
            <div className='space-y-3 pt-6 border-t border-gray-200'>
              <div className='flex items-center gap-3'>
                <Truck className='w-5 h-5 text-shop_dark_green' />
                <span className='text-sm text-gray-600'>Free shipping on orders over ৳10000</span>
              </div>
              <div className='flex items-center gap-3'>
                <Shield className='w-5 h-5 text-shop_dark_green' />
                <span className='text-sm text-gray-600'>1 year warranty included</span>
              </div>
              <div className='flex items-center gap-3'>
                <RefreshCw className='w-5 h-5 text-shop_dark_green' />
                <span className='text-sm text-gray-600'>30-day return policy</span>
              </div>
            </div>

            {/* Actions */}
            <div className='flex gap-4 pt-6 border-t border-gray-200'>
              <button className='flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2'>
                <Heart className='w-5 h-5' />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8'>Related Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {productsData
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className='bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6'>
                  <div className='w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-gray-300 rounded'></div>
                  </div>
                  <h3 className='font-semibold text-gray-900 mb-2 line-clamp-2'>{relatedProduct.name}</h3>
                  <div className='flex items-center justify-between'>
                    <span className='text-lg font-bold text-shop_dark_green'>৳{relatedProduct.price}</span>
                    <Link 
                      href={`/product/${relatedProduct.id}`}
                      className='text-shop_dark_green hover:underline text-sm font-medium'
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
