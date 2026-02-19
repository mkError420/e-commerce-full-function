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
    <div className='min-h-screen bg-[#fafafa]'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Header */}
        <div className='mb-12'>
          <Link href='/' className='inline-flex items-center text-gray-500 hover:text-gray-900 mb-6 transition-colors duration-300'>
            <ArrowLeft className='w-5 h-5 mr-3' />
            <span className='font-medium'>Continue Shopping</span>
          </Link>
          <div className='border-b border-gray-200 pb-6'>
            <h1 className='text-4xl font-light text-gray-900 tracking-tight'>Shopping Cart</h1>
            <p className='text-gray-500 mt-2'>{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className='text-center py-24'>
            <div className='w-24 h-24 bg-gray-100 rounded-2xl mx-auto mb-8 flex items-center justify-center'>
              <ShoppingCart className='w-12 h-12 text-gray-300' />
            </div>
            <h2 className='text-2xl font-light text-gray-900 mb-4'>Your cart is empty</h2>
            <p className='text-gray-500 mb-12 max-w-md mx-auto leading-relaxed'>
              Discover our curated collection and add items to begin your shopping journey.
            </p>
            <Link 
              href='/shop'
              className='inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-none font-light hover:bg-gray-800 transition-all duration-300 tracking-wide'
            >
              <Tag className='w-5 h-5 mr-3' />
              START SHOPPING
            </Link>
          </div>
        ) : (
          /* Cart with Items */
          <div className='grid lg:grid-cols-12 gap-8'>
            {/* Cart Items */}
            <div className='lg:col-span-8'>
              <div className='bg-white border border-gray-100'>
                <div className='px-8 py-6 border-b border-gray-100'>
                  <h2 className='text-lg font-light text-gray-900 tracking-wide'>Cart Items</h2>
                </div>
                
                <div className='divide-y divide-gray-100'>
                  {cartItems.map((item) => (
                    <div key={item.product.id} className='flex gap-6 p-6 hover:bg-gray-50 transition-colors duration-200'>
                      {/* Product Image */}
                      <div className='w-16 h-16 bg-gray-50 rounded-lg flex-shrink-0 overflow-hidden border border-gray-200'>
                        <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                          <div className='w-6 h-6 bg-gray-300 rounded-sm'></div>
                        </div>
                      </div>
                      
                      {/* Product Details */}
                      <div className='flex-1 min-w-0'>
                        <div className='flex justify-between items-start mb-3'>
                          <h3 className='text-gray-900 font-medium leading-tight line-clamp-2'>
                            {item.product.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className='text-gray-400 hover:text-red-500 p-2 transition-colors duration-200'
                          >
                            <X className='w-4 h-4' />
                          </button>
                        </div>
                        
                        <p className='text-gray-500 text-sm mb-4'>{item.product.category}</p>
                        
                        {/* Quantity Controls */}
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-3'>
                            <span className='text-gray-600 text-sm font-medium'>Quantity:</span>
                            <div className='flex items-center border border-gray-200 rounded-lg'>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className='w-10 h-10 hover:bg-gray-100 flex items-center justify-center transition-colors duration-200'
                              >
                                <Minus className='w-4 h-4 text-gray-600' />
                              </button>
                              <span className='w-12 text-center font-medium text-gray-900'>{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className='w-10 h-10 hover:bg-gray-100 flex items-center justify-center transition-colors duration-200'
                              >
                                <Plus className='w-4 h-4 text-gray-600' />
                              </button>
                            </div>
                          </div>
                          
                          {/* Price */}
                          <div className='text-right'>
                            <span className='text-lg font-light text-gray-900'>
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                            <div className='text-sm text-gray-500'>
                              ${item.product.price} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className='lg:col-span-4'>
              <div className='bg-white border border-gray-100 sticky top-8'>
                <div className='px-8 py-6 border-b border-gray-100'>
                  <h2 className='text-lg font-light text-gray-900 tracking-wide'>Order Summary</h2>
                </div>
                
                {/* Coupon Code */}
                <div className='px-8 py-6 border-b border-gray-100'>
                  <label className='block text-sm font-medium text-gray-700 mb-3'>Coupon Code</label>
                  <div className='flex gap-2'>
                    <input
                      type='text'
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder='Enter code'
                      className='flex-1 px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm'
                    />
                    <button
                      onClick={applyCoupon}
                      className='px-6 py-3 bg-gray-900 text-white rounded-none font-light hover:bg-gray-800 transition-all duration-300 tracking-wide'
                    >
                      Apply
                    </button>
                  </div>
                  {discount > 0 && (
                    <div className='mt-3 p-3 bg-green-50 border border-green-200 rounded-lg'>
                      <p className='text-sm text-green-700 font-medium'>Coupon applied! You saved ${discount.toFixed(2)}</p>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className='px-8 py-6 border-b border-gray-100'>
                  <div className='space-y-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600 text-sm'>Subtotal</span>
                      <span className='font-medium text-gray-900'>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className='flex justify-between items-center'>
                        <span className='text-green-600 text-sm'>Discount</span>
                        <span className='font-medium text-green-600'>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600 text-sm'>Shipping</span>
                      <span className='font-medium text-gray-900'>
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className='border-t border-gray-200 pt-4'>
                      <div className='flex justify-between items-center'>
                        <span className='text-lg font-light text-gray-900 tracking-wide'>Total</span>
                        <span className='text-xl font-light text-gray-900'>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className='px-8 py-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3 p-4 bg-gray-50 rounded-lg'>
                      <Truck className='w-5 h-5 text-gray-600' />
                      <div className='text-sm text-gray-700 leading-relaxed'>
                        <span className='font-medium'>Free shipping</span> on orders over $50
                      </div>
                    </div>
                    <div className='flex items-center gap-3 p-4 bg-gray-50 rounded-lg'>
                      <Shield className='w-5 h-5 text-gray-600' />
                      <div className='text-sm text-gray-700 leading-relaxed'>
                        <span className='font-medium'>Secure checkout</span> powered by industry standards
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='px-8 py-6'>
                  <div className='space-y-3'>
                    <Link 
                      href="/checkout"
                      className='w-full bg-gray-900 text-white py-4 rounded-none font-light hover:bg-gray-800 transition-all duration-300 tracking-wide flex items-center justify-center'
                    >
                      <CreditCard className='w-5 h-5 mr-3' />
                      PROCEED TO CHECKOUT
                    </Link>
                    
                    <div className='grid grid-cols-2 gap-3'>
                      <button 
                        onClick={clearCart}
                        className='w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-none font-light hover:bg-gray-50 transition-all duration-300'
                      >
                        <Trash2 className='w-4 h-4 mr-2' />
                        Clear Cart
                      </button>
                      <Link 
                        href='/shop'
                        className='w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-none font-light hover:bg-gray-50 transition-all duration-300'
                      >
                        <ArrowLeft className='w-4 h-4 mr-2' />
                        Continue
                      </Link>
                    </div>
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
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
                      <span className='text-xl font-light text-gray-900'>${product.price}</span>
                      <span className='text-lg text-gray-400 line-through'>${product.originalPrice}</span>
                    </div>

                    <div className='text-sm text-gray-500 mb-4 line-clamp-2'>
                      {product.description}
                    </div>

                    <div className='flex gap-3'>
                      <button 
                        onClick={() => addToCart(product)}
                        className='flex-1 bg-gray-900 text-white py-4 rounded-none font-light hover:bg-gray-800 transition-all duration-300 tracking-wide flex items-center justify-center gap-3 group'
                      >
                        <ShoppingCart className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
                        <span>ADD TO CART</span>
                      </button>
                      <button className='p-4 bg-white border border-gray-200 text-gray-700 rounded-none hover:bg-gray-50 transition-all duration-300 group'>
                        <Heart className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
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
