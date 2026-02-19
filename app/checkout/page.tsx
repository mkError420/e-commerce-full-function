'use client'

import React, { useState } from 'react'
import { 
  CreditCard, 
  Truck, 
  Shield, 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Package,
  Check
} from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

const CheckoutPage = () => {
  const { cartItems, getCartTotal, getCartItemsCount, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  })
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const subtotal = getCartTotal()
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true)
      clearCart()
    }, 2000)
  }

  if (cartItems.length === 0) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center'>
            <Package className='w-16 h-16 text-gray-400' />
          </div>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Your cart is empty</h2>
          <p className='text-gray-600 mb-8'>Add some products to proceed with checkout</p>
          <Link 
            href='/shop'
            className='inline-flex items-center bg-shop_btn_dark_green text-white px-8 py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg transition-all duration-300'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center max-w-md'>
          <div className='w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
            <Check className='w-12 h-12 text-green-600' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>Order Confirmed!</h1>
          <p className='text-gray-600 mb-8'>
            Thank you for your purchase. Your order has been successfully placed and will be delivered soon.
          </p>
          <div className='space-y-3'>
            <Link 
              href='/'
              className='w-full bg-shop_btn_dark_green text-white py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg transition-all duration-300 block text-center'
            >
              Continue Shopping
            </Link>
            <Link 
              href='/account/orders'
              className='w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors block text-center'
            >
              View Order History
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8'>
          <Link href='/cart' className='inline-flex items-center text-gray-600 hover:text-gray-900 mb-4'>
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back to Cart
          </Link>
          <h1 className='text-3xl font-bold text-gray-900'>Checkout</h1>
          
          {/* Progress Steps */}
          <div className='flex items-center justify-center mt-8'>
            <div className={`flex items-center ${step >= 1 ? 'text-shop_dark_green' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-shop_dark_green text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className='ml-2 font-medium'>Shipping</span>
            </div>
            <div className={`w-16 h-1 mx-4 ${step >= 2 ? 'bg-shop_dark_green' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-shop_dark_green' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-shop_dark_green text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className='ml-2 font-medium'>Payment</span>
            </div>
            <div className={`w-16 h-1 mx-4 ${step >= 3 ? 'bg-shop_dark_green' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-shop_dark_green' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-shop_dark_green text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className='ml-2 font-medium'>Confirmation</span>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            {step === 1 && (
              /* Shipping Information */
              <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-6 flex items-center'>
                  <Truck className='w-5 h-5 mr-2 text-shop_dark_green' />
                  Shipping Information
                </h2>
                <form onSubmit={handleShippingSubmit}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>First Name</label>
                      <input
                        type='text'
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='John'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Last Name</label>
                      <input
                        type='text'
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='Doe'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                      <input
                        type='email'
                        required
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='john@example.com'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Phone</label>
                      <input
                        type='tel'
                        required
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='+1 234 567 8900'
                      />
                    </div>
                  </div>

                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Address</label>
                    <input
                      type='text'
                      required
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                      placeholder='123 Main Street'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>City</label>
                      <input
                        type='text'
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='New York'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>ZIP Code</label>
                      <input
                        type='text'
                        required
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='10001'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Country</label>
                      <input
                        type='text'
                        required
                        value={shippingInfo.country}
                        onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='United States'
                      />
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-shop_btn_dark_green text-white py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg transition-all duration-300'
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              /* Payment Information */
              <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-6 flex items-center'>
                  <CreditCard className='w-5 h-5 mr-2 text-shop_dark_green' />
                  Payment Information
                </h2>
                <form onSubmit={handlePaymentSubmit}>
                  <div className='mb-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Card Number</label>
                    <input
                      type='text'
                      required
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                      placeholder='1234 5678 9012 3456'
                      maxLength={19}
                    />
                  </div>

                  <div className='mb-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Cardholder Name</label>
                    <input
                      type='text'
                      required
                      value={paymentInfo.cardName}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                      placeholder='John Doe'
                    />
                  </div>

                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Expiry Date</label>
                      <input
                        type='text'
                        required
                        value={paymentInfo.expiryDate}
                        onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='MM/YY'
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>CVV</label>
                      <input
                        type='text'
                        required
                        value={paymentInfo.cvv}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green'
                        placeholder='123'
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
                    <div className='flex items-center'>
                      <Shield className='w-5 h-5 text-blue-600 mr-2' />
                      <span className='text-sm text-blue-800'>
                        Your payment information is secure and encrypted
                      </span>
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <button
                      type='button'
                      onClick={() => setStep(1)}
                      className='w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors'
                    >
                      Back to Shipping
                    </button>
                    <button
                      type='submit'
                      className='w-full bg-shop_btn_dark_green text-white py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg transition-all duration-300'
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              /* Order Processing */
              <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
                  <Package className='w-8 h-8 text-blue-600 animate-pulse' />
                </div>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Processing Your Order</h2>
                <p className='text-gray-600 mb-8'>
                  Please wait while we process your payment and confirm your order...
                </p>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div className='bg-shop_dark_green h-2 rounded-full animate-pulse' style={{width: '60%'}}></div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-6'>Order Summary</h2>
              
              {/* Cart Items */}
              <div className='space-y-3 mb-6 max-h-64 overflow-y-auto'>
                {cartItems.map((item) => (
                  <div key={item.product.id} className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center'>
                      <div className='w-4 h-4 bg-gray-400 rounded'></div>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h4 className='text-sm font-medium text-gray-900 line-clamp-1'>{item.product.name}</h4>
                      <p className='text-xs text-gray-500'>Qty: {item.quantity}</p>
                    </div>
                    <span className='text-sm font-semibold text-gray-900'>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className='space-y-3 border-t border-gray-200 pt-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Subtotal:</span>
                  <span className='font-semibold'>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Shipping:</span>
                  <span className='font-semibold'>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Tax:</span>
                  <span className='font-semibold'>${tax.toFixed(2)}</span>
                </div>
                
                <div className='border-t border-gray-200 pt-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg font-bold text-gray-900'>Total:</span>
                    <span className='text-xl font-bold text-shop_dark_green'>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {shipping > 0 && (
                <div className='mt-4 p-3 bg-green-50 border border-green-200 rounded-lg'>
                  <p className='text-sm text-green-700'>
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
