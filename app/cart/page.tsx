'use client'

import React from 'react'
import { productsData } from '@/constants/data'
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  X, 
  Trash2, 
  Heart, 
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Truck,
  Shield,
  Tag
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

const CartPage = () => {
  console.log('CartPage component rendering') // Debug log
  const { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount 
  } = useCart()

  console.log('Cart context values:', { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemsCount }) // Debug log

  const [couponCode, setCouponCode] = React.useState('')
  const [discount, setDiscount] = React.useState(0)
  const [shipping, setShipping] = React.useState(0)

  // Calculate totals
  const subtotal = getCartTotal()
  const totalAfterDiscount = subtotal - discount
  const total = totalAfterDiscount + shipping
  const totalItems = getCartItemsCount()

  // Apply coupon
  const applyCoupon = () => {
    if (couponCode === 'SAVE10') {
      setDiscount(subtotal * 0.1)
    } else if (couponCode === 'SAVE20') {
      setDiscount(subtotal * 0.2)
    } else {
      setDiscount(0)
    }
  }

  // Get recommended products
  const recommendedProducts = productsData.slice(0, 4)

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-shop_light_pink relative'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%2394a3" stroke-width="0.5"%3E%3Cpath d="M0 30h60M30 0v60M0 0h60M30 60v60M60 0h60"/%3E%3C/g%3E%3C/svg")] opacity-10'></div>
      </div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10'>
        {/* Header */}
        <div className='mb-12'>
          <Link href='/' className='inline-flex items-center text-gray-500 hover:text-shop_dark_green mb-6 transition-all duration-300 group'>
            <div className='w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300'>
              <ArrowLeft className='w-5 h-5 text-gray-600 group-hover:text-shop_dark_green' />
            </div>
            <span className='font-medium ml-3 group-hover:text-shop_dark_green transition-colors duration-300'>Continue Shopping</span>
          </Link>
          
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-shop_dark_green via-shop_light_green to-shop_dark_green rounded-2xl mb-6 shadow-2xl'>
              <ShoppingCart className='w-10 h-10 text-white' />
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-shop_dark_green via-shop_light_green to-shop_dark_green bg-clip-text'>
              Shopping Cart
            </h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className='text-center py-24'>
            <div className='relative inline-block'>
              {/* Floating Cart Icon */}
              <div className='w-32 h-32 bg-white/90 backdrop-blur-lg rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl border-2 border-white/50'>
                <ShoppingCart className='w-12 h-12 text-gray-400' />
              </div>
              
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-shop_dark_green via-shop_light_green to-shop_dark_green bg-clip-text'>
                Your cart is empty
              </h2>
              
              <p className='text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
                Discover our curated collection and add items to begin your shopping journey.
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <Link 
                  href="/shop" 
                  className='group relative px-8 py-4 bg-gradient-to-r from-shop_dark_green via-shop_light_green to-shop_dark_green text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden'
                >
                  {/* Shimmer Effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  
                  <span className='relative z-10 flex items-center'>
                    <Tag className='w-5 h-5 mr-3' />
                    Explore Products
                    <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300' />
                  </span>
                </Link>
                
                <button className='group relative px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl shadow-2xl hover:shadow-3xl hover:border-shop_dark_green/50 hover:text-shop_dark_green transform hover:scale-105 transition-all duration-300 overflow-hidden'>
                  {/* Hover Glow */}
                  <div className='absolute inset-0 bg-gradient-to-r from-shop_dark_green/10 to-shop_light_green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  
                  <span className='relative z-10 flex items-center'>
                    <Heart className='w-5 h-5 mr-3' />
                    View Wishlist
                    <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300' />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Cart with Items */
          <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8'>
            {/* Cart Items */}
            <div className='md:col-span-8 lg:col-span-8'>
              <div className='bg-white/95 backdrop-blur-md border border-gray-100/50 rounded-3xl shadow-2xl'>
                <div className='px-8 py-6 border-b border-gray-100/50'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
                    <ShoppingCart className='w-6 h-6 mr-3 text-shop_dark_green' />
                    Cart Items
                  </h2>
                </div>
                
                <div className='divide-y divide-gray-100/50'>
                  {cartItems.map((item) => {
                    const currentItem = item.itemType === 'product' ? item.product : item.deal
                    const itemId = item.itemType === 'product' ? item.product?.id : item.deal?.id
                    
                    return (
                      <div key={`${item.itemType}-${itemId}`} className='group relative p-6 hover:bg-gradient-to-r from-shop_light_pink/30 via-white/20 to-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1'>
                        {/* Hover Glow Effect */}
                        <div className='absolute inset-0 bg-gradient-to-r from-shop_dark_green/5 to-shop_light_green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl'></div>
                        
                        {/* Product Image */}
                        <div className='flex flex-col sm:flex-row gap-4 md:gap-6'>
                          <div className='w-16 h-16 sm:w-20 md:w-24 lg:h-28 lg:w-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex-shrink-0 overflow-hidden border border-gray-200 group-hover:border-shop_dark_green/30 transition-all duration-300'>
                            <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                              <div className='w-8 h-8 sm:w-10 md:w-12 md:h-12 lg:h-16 bg-gray-300 rounded-lg'></div>
                            </div>
                          </div>
                          
                          {/* Product Details */}
                          <div className='flex-1 min-w-0'>
                            <div className='flex justify-between items-start mb-4'>
                              <div className='flex-1'>
                                <h3 className='text-lg md:text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-shop_dark_green transition-colors duration-300'>
                                  {currentItem?.name || currentItem?.title}
                                </h3>
                                <button
                                  onClick={() => removeFromCart(itemId!, item.itemType)}
                                  className='text-gray-400 hover:text-red-500 p-2 transition-colors duration-200 rounded-lg hover:bg-red-50'
                                >
                                  <X className='w-4 h-4' />
                                </button>
                              </div>
                              <div className='text-right'>
                                {item.itemType === 'deal' && currentItem?.discount && (
                                  <div className='mb-2'>
                                    <span className='px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium'>
                                      {currentItem.discount}% OFF
                                    </span>
                                  </div>
                                )}
                                <div className='text-2xl md:text-3xl font-bold text-gray-900'>
                                  ৳{(((item.itemType === 'product' ? currentItem?.price : currentItem?.dealPrice) || 0) * item.quantity).toFixed(2)}
                                </div>
                                {item.itemType === 'deal' && currentItem?.originalPrice && (
                                  <div className='text-sm text-gray-500 line-through'>
                                    ৳{currentItem.originalPrice} each
                                  </div>
                                )}
                                {item.itemType === 'product' && (
                                  <div className='text-sm text-gray-500'>
                                    ৳{currentItem?.price} each
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className='md:col-span-4 lg:col-span-4'>
              <div className='bg-white/95 backdrop-blur-md border border-gray-100/50 rounded-3xl shadow-2xl sticky top-8'>
                <div className='px-8 py-6 border-b border-gray-100/50'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center'>
                    <div className='w-8 h-8 bg-gradient-to-r from-shop_dark_green to-shop_light_green rounded-full flex items-center justify-center mr-3'>
                      <Tag className='w-4 h-4 text-white' />
                    </div>
                    Order Summary
                  </h2>
                </div>
                
                {/* Coupon Code */}
                <div className='px-8 py-6 border-b border-gray-100/50'>
                  <label className='block text-sm font-bold text-gray-700 mb-3'>Coupon Code</label>
                  <div className='flex gap-3'>
                    <div className='flex-1 relative'>
                      <input
                        type='text'
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        placeholder='Enter code'
                        className='w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-shop_dark_green/20 focus:border-shop_dark_green/50 bg-white/80 backdrop-blur-sm text-sm'
                      />
                      <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                        <button
                          onClick={applyCoupon}
                          className='bg-gradient-to-r from-shop_dark_green to-shop_light_green text-white px-4 py-3 rounded-lg font-medium hover:from-shop_dark_green hover:to-shop_light_green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  {discount > 0 && (
                    <div className='mt-3 p-4 bg-green-50 border border-green-200 rounded-xl'>
                      <p className='text-sm text-green-700 font-medium flex items-center'>
                        <div className='w-4 h-4 bg-green-500 rounded-full mr-2'></div>
                        Coupon applied! You saved ${discount.toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Price Breakdown */}
                <div className='px-8 py-6 space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600 text-sm'>Subtotal</span>
                    <span className='font-medium text-gray-900 text-lg'>৳{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className='flex justify-between items-center'>
                      <span className='text-green-600 text-sm'>Discount</span>
                      <span className='font-medium text-green-600 text-lg'>-৳{discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600 text-sm'>Shipping</span>
                    <span className='font-medium text-gray-900 text-lg'>
                      {shipping === 0 ? 'FREE' : `৳${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className='border-t border-gray-200 pt-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-xl font-bold text-gray-900 tracking-wide'>Total</span>
                      <span className='text-2xl font-bold text-shop_dark_green tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-shop_dark_green via-shop_light_green to-shop_dark_green bg-clip-text'>
                        ৳{total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Shipping Info */}
                <div className='px-8 py-6 border-t border-gray-100/50'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3 p-4 bg-gray-50 rounded-xl'>
                      <Truck className='w-6 h-6 text-gray-600' />
                      <div className='text-sm text-gray-700 leading-relaxed'>
                        <span className='font-medium'>Free shipping</span> on orders over ৳10000
                      </div>
                    </div>
                    
                    <div className='flex items-center gap-3 p-4 bg-gray-50 rounded-xl'>
                      <Shield className='w-6 h-6 text-gray-600' />
                      <div className='text-sm text-gray-700 leading-relaxed'>
                        <span className='font-medium'>Secure checkout</span> powered by industry standards
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='md:col-span-4 lg:col-span-4'>
              <div className='bg-white/95 backdrop-blur-md border border-gray-100/50 rounded-3xl shadow-2xl'>
                <div className='px-8 py-6'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <Link 
                      href="/checkout"
                      className='group relative px-8 py-4 bg-gradient-to-r from-shop_dark_green via-shop_light_green to-shop_dark_green text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden'
                    >
                      {/* Shimmer Effect */}
                      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                      
                      <span className='relative z-10 flex items-center justify-center'>
                        <CreditCard className='w-6 h-6 mr-3' />
                        <span className='text-lg'>PROCEED TO CHECKOUT</span>
                        <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300' />
                      </span>
                    </Link>
                    
                    <button 
                      onClick={clearCart}
                      className='group relative px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:border-shop_dark_green/50 hover:text-shop_dark_green transform hover:scale-105 transition-all duration-300 overflow-hidden'
                    >
                      {/* Hover Glow */}
                      <div className='absolute inset-0 bg-gradient-to-r from-shop_dark_green/10 to-shop_light_green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                      
                      <span className='relative z-10 flex items-center justify-center'>
                        <Trash2 className='w-6 h-6 mr-3 text-red-500' />
                        <span className='text-lg'>Clear Cart</span>
                      </span>
                    </button>
                  </div>
                  
                  <div className='mt-4'>
                    <Link 
                        href='/shop'
                        className='w-full bg-white border border-gray-200 text-gray-700 py-2 sm:py-3 rounded-none font-light hover:bg-gray-50 transition-all duration-300 text-xs sm:text-sm flex items-center justify-center'
                      >
                        <ArrowLeft className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
                        <span className='text-xs sm:text-sm'>Continue</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )}

        {/* Recommended Products */}
        {cartItems.length > 0 && (
          <div className='mt-16 max-w-7xl mx-auto px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl font-light text-gray-900 mb-4 tracking-wide'>You might also like</h2>
              <p className='text-gray-500 max-w-2xl mx-auto leading-relaxed'>Based on your cart items, we recommend these products</p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
              {recommendedProducts.map((product) => (
                <div key={product.id} className='bg-white border border-gray-100 group'>
                  {/* Product Image */}
                  <div className='relative h-48 bg-gray-50 overflow-hidden'>
                    {product.badge && (
                      <div className='absolute top-4 left-4 z-10'>
                        <span className='bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium'>
                          {product.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                      <div className='w-8 h-8 bg-gray-300 rounded'></div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className='p-6'>
                    <div className='text-xs text-gray-600 font-medium mb-2 uppercase tracking-wide'>
                      {product.category}
                    </div>
                    
                    <h3 className='text-lg font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300'>
                      {product.name}
                    </h3>
                    
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                        ))}
                      </div>
                      <span className='text-sm text-gray-500'>{product.rating} ({product.reviews})</span>
                    </div>

                    <div className='flex items-center gap-2 mb-4'>
                      <span className='text-xl font-light text-gray-900'>৳{product.price}</span>
                      <span className='text-lg text-gray-400 line-through'>৳{product.originalPrice}</span>
                    </div>

                    <div className='text-sm text-gray-500 mb-4 line-clamp-2'>
                      {product.description}
                    </div>

                    <div className='flex gap-2 sm:gap-3 lg:gap-4'>
                      <button 
                        onClick={() => addToCart(product, 'product')}
                        className='flex-1 bg-gray-900 text-white py-2 sm:py-3 lg:py-4 rounded-none font-light hover:bg-gray-800 transition-all duration-300 tracking-wide flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 group text-xs sm:text-sm lg:text-base'
                      >
                        <ShoppingCart className='w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300' />
                        <span className='text-xs sm:text-sm lg:text-base'>ADD TO CART</span>
                      </button>
                      <button className='p-2 sm:p-3 lg:p-4 bg-white border border-gray-200 text-gray-700 rounded-none hover:bg-gray-50 transition-all duration-300 group'>
                        <Heart className='w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300' />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage;
