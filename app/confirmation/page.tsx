'use client'

import React, { useEffect, useState } from 'react'
import { CheckCircle, Package, Truck, CreditCard, ArrowRight, Download, Home, ShoppingBag, MapPin, Clock, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const PaymentConfirmation = () => {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '',
    amount: 0,
    items: 0,
    paymentMethod: '',
    estimatedDelivery: '',
    customerEmail: ''
  })

  useEffect(() => {
    setMounted(true)
    
    // Simulate fetching order details from URL params or API
    const orderId = searchParams.get('order') || 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    const amount = searchParams.get('amount') || '0'
    const items = searchParams.get('items') || '0'
    const paymentMethod = searchParams.get('method') || 'Card'
    
    setOrderDetails({
      orderNumber: orderId,
      amount: parseFloat(amount),
      items: parseInt(items),
      paymentMethod: paymentMethod,
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      }),
      customerEmail: 'customer@example.com'
    })
  }, [searchParams])

  const downloadReceipt = () => {
    // Only run on client side
    if (typeof window === 'undefined') {
      // Fallback for server-side rendering
      alert('Receipt download is only available on client-side. Please use a desktop browser.')
      return
    }
    
    // Simulate PDF receipt generation
    const receiptContent = `
      <html>
        <head>
          <title>Order Receipt - ${orderDetails.orderNumber}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .order-info { margin: 20px 0; }
            .info-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
            .footer { text-align: center; margin-top: 30px; color: #666; }
            .logo { font-size: 24px; font-weight: bold; color: #059669; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">mk-ShopBD</div>
            <h1>Payment Receipt</h1>
          </div>
          
          <div class="order-info">
            <div class="info-row">
              <strong>Order Number:</strong>
              <span>${orderDetails.orderNumber}</span>
            </div>
            <div class="info-row">
              <strong>Date:</strong>
              <span>${new Date().toLocaleDateString()}</span>
            </div>
            <div class="info-row">
              <strong>Payment Method:</strong>
              <span>${orderDetails.paymentMethod}</span>
            </div>
            <div class="info-row">
              <strong>Amount:</strong>
              <span>৳${orderDetails.amount.toFixed(2)}</span>
            </div>
            <div class="info-row">
              <strong>Items Purchased:</strong>
              <span>${orderDetails.items} items</span>
            </div>
            <div class="info-row">
              <strong>Estimated Delivery:</strong>
              <span>${orderDetails.estimatedDelivery}</span>
            </div>
            <div class="info-row">
              <strong>Customer Email:</strong>
              <span>${orderDetails.customerEmail}</span>
            </div>
          </div>
          
          <div class="footer">
            <p>Thank you for your purchase!</p>
            <p>This is an automatically generated receipt.</p>
          </div>
        </body>
      </html>
    `
    
    // Create PDF from HTML content
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(receiptContent)
      printWindow.document.close()
      
      // Alternative: Use browser print to PDF
      setTimeout(() => {
        printWindow.print()
      }, 500)
    } else {
      // Fallback for mobile or unsupported browsers
      const blob = new Blob([receiptContent], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `receipt-${orderDetails.orderNumber}.html`
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-shop_light_bg to-white py-8 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Success Message */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4'>
            <CheckCircle className='w-10 h-10 text-green-600' />
          </div>
          <h1 className='text-4xl font-bold text-gray-900 mb-2'>
            Payment <span className='text-green-600'>Successful!</span>
          </h1>
          <p className='text-lg text-gray-600'>
            Thank you for your order. Your payment has been processed successfully.
          </p>
        </div>

        {/* Order Details Card */}
        <div className='bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6'>
          <div className='border-b border-gray-200 pb-6 mb-6'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Order Details</h2>
            
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Order Number</p>
                <p className='text-lg font-semibold text-gray-900'>{orderDetails.orderNumber}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Payment Method</p>
                <p className='text-lg font-semibold text-gray-900'>{orderDetails.paymentMethod}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Total Amount</p>
                <p className='text-2xl font-bold text-shop_dark_green'>৳{orderDetails.amount.toFixed(2)}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Items Purchased</p>
                <p className='text-lg font-semibold text-gray-900'>{orderDetails.items} items</p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className='grid md:grid-cols-2 gap-6 mb-6'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-shop_light_green/10 rounded-lg flex items-center justify-center'>
                <Truck className='w-6 h-6 text-shop_dark_green' />
              </div>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Estimated Delivery</p>
                <p className='text-lg font-semibold text-gray-900'>{orderDetails.estimatedDelivery}</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-shop_orange/10 rounded-lg flex items-center justify-center'>
                <Package className='w-6 h-6 text-shop_orange' />
              </div>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Order Status</p>
                <p className='text-lg font-semibold text-green-600'>Processing</p>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className='bg-gray-50 rounded-xl p-6'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-shop_dark_green/10 rounded-lg flex items-center justify-center'>
                <CreditCard className='w-5 h-5 text-shop_dark_green' />
              </div>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Billing Email</p>
                <p className='text-lg font-semibold text-gray-900'>{orderDetails.customerEmail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={downloadReceipt}
            className='flex items-center gap-2 bg-shop_dark_green text-white px-6 py-3 rounded-xl font-semibold hover:bg-shop_btn_dark_green hover:shadow-lg transition-all duration-300'
          >
            <Download className='w-5 h-5' />
            Download Receipt
          </button>
          
          <Link
            href='/shop'
            className='flex items-center gap-2 bg-white border-2 border-shop_dark_green text-shop_dark_green px-6 py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:text-white transition-all duration-300'
          >
            <ShoppingBag className='w-5 h-5' />
            Continue Shopping
          </Link>
          
          <Link
            href='/account/orders'
            className='flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300'
          >
            <Package className='w-5 h-5' />
            View Orders
          </Link>
        </div>
      </div>

      {/* Payment Tracking Section */}
      <div className='mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-8'>
        <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
          <MapPin className='w-6 h-6 text-shop_dark_green' />
          Payment Tracking
        </h3>
        
        <div className='grid md:grid-cols-2 gap-6 mb-6'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
              <CheckCircle className='w-6 h-6 text-green-600' />
            </div>
            <div>
              <p className='font-semibold text-gray-900 mb-1'>Payment Status</p>
              <p className='text-lg text-green-600 font-bold'>Completed</p>
              <p className='text-sm text-gray-600'>Transaction verified and confirmed</p>
            </div>
          </div>
          
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
              <Truck className='w-6 h-6 text-blue-600' />
            </div>
            <div>
              <p className='font-semibold text-gray-900 mb-1'>Shipping Status</p>
              <p className='text-lg text-orange-600 font-bold'>Processing</p>
              <p className='text-sm text-gray-600'>Order will be shipped within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className='border-t border-gray-200 pt-6'>
          <h4 className='text-lg font-semibold text-gray-900 mb-4'>Order Timeline</h4>
          <div className='space-y-4'>
            <div className='flex items-start gap-4'>
              <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
                <CheckCircle className='w-4 h-4 text-green-600' />
              </div>
              <div className='flex-1'>
                <p className='font-semibold text-gray-900'>Order Placed</p>
                <p className='text-sm text-gray-600'>{new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
            
            <div className='flex items-start gap-4'>
              <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
                <CreditCard className='w-4 h-4 text-blue-600' />
              </div>
              <div className='flex-1'>
                <p className='font-semibold text-gray-900'>Payment Confirmed</p>
                <p className='text-sm text-gray-600'>{new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
            
            <div className='flex items-start gap-4 opacity-60'>
              <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0'>
                <Package className='w-4 h-4 text-gray-600' />
              </div>
              <div className='flex-1'>
                <p className='font-semibold text-gray-900'>Shipped</p>
                <p className='text-sm text-gray-600'>Expected: {orderDetails.estimatedDelivery}</p>
              </div>
            </div>
            
            <div className='flex items-start gap-4 opacity-40'>
              <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0'>
                <Truck className='w-4 h-4 text-gray-600' />
              </div>
              <div className='flex-1'>
                <p className='font-semibold text-gray-900'>Delivered</p>
                <p className='text-sm text-gray-600'>Pending</p>
              </div>
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <div className='mt-6 text-center'>
          <button
            onClick={() => window.location.reload()}
            className='inline-flex items-center gap-2 bg-shop_dark_green text-white px-6 py-3 rounded-xl font-semibold hover:bg-shop_btn_dark_green hover:shadow-lg transition-all duration-300'
          >
            <RefreshCw className='w-5 h-5' />
            Refresh Status
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className='mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-8'>
        <h3 className='text-xl font-bold text-gray-900 mb-4'>What's Next?</h3>
        <div className='space-y-4'>
          <div className='flex items-start gap-3'>
            <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0 mt-1' />
            <div>
              <p className='font-semibold text-gray-900 mb-1'>Order Confirmation</p>
              <p className='text-gray-600'>You'll receive an email confirmation shortly with all order details.</p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <Truck className='w-5 h-5 text-shop_dark_green flex-shrink-0 mt-1' />
            <div>
              <p className='font-semibold text-gray-900 mb-1'>Shipping Process</p>
              <p className='text-gray-600'>Your order will be processed within 24 hours and shipped within 2-3 business days.</p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <Package className='w-5 h-5 text-shop_orange flex-shrink-0 mt-1' />
            <div>
              <p className='font-semibold text-gray-900 mb-1'>Track Your Order</p>
              <p className='text-gray-600'>Use your order number to track package status in real-time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className='mt-8 text-center'>
        <p className='text-gray-600 mb-4'>Need help with your order?</p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/contact'
            className='flex items-center gap-2 bg-shop_light_pink text-shop_dark_green px-6 py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:text-white transition-all duration-300'
          >
            Contact Support
            <ArrowRight className='w-4 h-4' />
          </Link>
          <Link
            href='/faq'
            className='flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300'
          >
            View FAQ
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentConfirmation
