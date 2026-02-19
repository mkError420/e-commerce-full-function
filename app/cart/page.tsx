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
    <div className='min-h-screen bg-gray-50'>
      <div className='py-8'>
        {/* Header */}
        <div className='mb-8'>
          <Link href='/' className='inline-flex items-center text-gray-600 hover:text-gray-900 mb-4'>
            <ArrowLeft className='w-5 h-5 mr-2' />
            Continue Shopping
          </Link>
          <h1 className='text-3xl font-bold text-gray-900'>Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className='text-center py-16'>
            <div className='w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center'>
              <ShoppingCart className='w-16 h-16 text-gray-400' />
            </div>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Your cart is empty</h2>
            <p className='text-gray-600 mb-8 max-w-md mx-auto'>
              Looks like you haven&apos;t added any products to your cart yet. 
              Start shopping to add some amazing products!
            </p>
            <Link 
              href='/shop'
              className='inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors'
            >
              <Tag className='w-5 h-5 mr-2' />
              Start Shopping
            </Link>
          </div>
        ) : (
          /* Cart with Items */
          <div className='grid lg:grid-cols-3 gap-8'>
            {/* Cart Items */}
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-6'>Cart Items ({totalItems})</h2>
                
                <div className='space-y-4'>
                  {cartItems.map((item) => (
                    <div key={item.product.id} className='flex gap-4 p-4 bg-gray-50 rounded-lg'>
                      {/* Product Image */}
                      <div className='w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden'>
                        <div className='w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center'>
                          <div className='w-8 h-8 bg-gray-400 rounded'></div>
                        </div>
                      </div>
                      
                      {/* Product Details */}
                      <div className='flex-1 min-w-0'>
                        <div className='flex justify-between items-start mb-2'>
                          <h3 className='text-lg font-semibold text-gray-900 line-clamp-2'>
                            {item.product.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className='text-red-500 hover:text-red-700 p-1'
                          >
                            <X className='w-4 h-4' />
                          </button>
                        </div>
                        
                        <p className='text-sm text-gray-600 mb-2'>{item.product.category}</p>
                        <p className='text-sm text-gray-500 line-clamp-2 mb-3'>{item.product.description}</p>
                        
                        {/* Quantity Controls */}
                        <div className='flex items-center gap-3'>
                          <span className='text-sm font-medium text-gray-700'>Quantity:</span>
                          <div className='flex items-center gap-2'>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className='w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center'
                            >
                              <Minus className='w-4 h-4' />
                            </button>
                            <span className='w-12 text-center font-semibold'>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className='w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center'
                            >
                              <Plus className='w-4 h-4' />
                            </button>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className='flex justify-between items-center'>
                          <span className='text-lg font-bold text-gray-900'>${item.product.price}</span>
                          <span className='text-sm text-gray-500 line-through'>${item.product.originalPrice || 0}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className='lg:col-span-1'>
              <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-6'>Order Summary</h2>
                
                {/* Coupon Code */}
                <div className='mb-6'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Coupon Code</label>
                  <div className='flex gap-2'>
                    <input
                      type='text'
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder='Enter coupon code'
                      className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                    <button
                      onClick={applyCoupon}
                      className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors'
                    >
                      Apply
                    </button>
                  </div>
                  {discount > 0 && (
                    <div className='mt-2 p-3 bg-green-50 border border-green-200 rounded-lg'>
                      <p className='text-sm text-green-700 font-medium'>Coupon applied! You saved ${discount.toFixed(2)}</p>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className='space-y-3 mb-6'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Subtotal:</span>
                    <span className='font-semibold'>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600'>Discount:</span>
                      <span className='font-semibold text-green-600'>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Shipping:</span>
                    <span className='font-semibold'>
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <div className='border-t border-gray-200 pt-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-lg font-bold text-gray-900'>Total:</span>
                      <span className='text-lg font-bold text-indigo-600'>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className='mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
                  <div className='flex items-center mb-2'>
                    <Truck className='w-5 h-5 text-blue-600 mr-2' />
                    <span className='text-sm font-medium text-blue-800'>Free shipping on orders over $50</span>
                  </div>
                  <div className='flex items-center'>
                    <Shield className='w-5 h-5 text-blue-600 mr-2' />
                    <span className='text-sm font-medium text-blue-800'>Secure checkout powered by Stripe</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='space-y-3'>
                  <Link 
                    href="/checkout"
                    className='w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center'
                  >
                    <CreditCard className='w-5 h-5 mr-2' />
                    Proceed to Checkout
                  </Link>
                  
                  <div className='grid grid-cols-2 gap-3'>
                    <Link 
                      href="/shop"
                      className='w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center'
                    >
                      <ArrowLeft className='w-4 h-4 mr-2' />
                      Continue Shopping
                    </Link>
                    <button 
                      onClick={clearCart}
                      className='w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center'
                    >
                      <Trash2 className='w-4 h-4 mr-2' />
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Products */}
        {cartItems.length > 0 && (
          <div className='mt-12'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>You might also like</h2>
              <p className='text-gray-600'>Based on your cart items, we recommend these products</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {recommendedProducts.map((product) => (
                <div key={product.id} className='bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 group'>
                  {/* Product Image */}
                  <div className='relative h-48 bg-gray-50'>
                    {product.badge && (
                      <div className='absolute top-4 left-4 z-10'>
                        <span className='bg-shop_orange text-white px-3 py-1 rounded-full text-xs font-semibold'>
                          {product.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className='w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center'>
                      <div className='w-8 h-8 bg-gray-400 rounded'></div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className='p-6'>
                    <div className='text-xs text-shop_dark_green font-semibold mb-2 uppercase tracking-wide'>
                      {product.category}
                    </div>
                    
                    <h3 className='text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-shop_dark_green transition-colors duration-300'>
                      {product.name}
                    </h3>
                    
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                        ))}
                      </div>
                      <span className='text-sm text-gray-600'>{product.rating} ({product.reviews})</span>
                    </div>

                    <div className='flex items-center gap-2 mb-3'>
                      <span className='text-2xl font-bold text-shop_dark_green'>${product.price}</span>
                      <span className='text-lg text-gray-400 line-through'>${product.originalPrice}</span>
                    </div>
                  </div>

                    <div className='text-sm text-gray-500 mb-4 line-clamp-2'>
                      {product.description}
                    </div>

                    <div className='flex gap-2'>
                      <button 
                        onClick={() => addToCart(product)}
                        className='flex-1 bg-shop_btn_dark_green text-white py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg hoverEffect flex items-center justify-center gap-2 group/btn'
                      >
                        <ShoppingCart className='w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300' />
                        Add to Cart
                      </button>
                      <button className='p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 hoverEffect'>
                        <Heart className='w-5 h-5' />
                      </button>
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
