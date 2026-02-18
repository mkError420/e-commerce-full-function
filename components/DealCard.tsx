import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, ShoppingCart, Heart, Star, Bolt, Tag, Package, Truck } from 'lucide-react'

interface Deal {
  id: number
  title: string
  originalPrice: number
  dealPrice: number
  discount: number
  image: string
  category: string
  dealType: 'flash' | 'lightning' | 'daily' | 'weekend' | 'clearance'
  endTime: string
  stock: number
  sold: number
  rating: number
  reviews: number
  description: string
  features: string[]
  freeShipping: boolean
}

interface DealCardProps {
  deal: Deal
  currentTime: Date
}

const DealCard = ({ deal, currentTime }: DealCardProps) => {
  const getTimeLeft = (endTime: string) => {
    const end = new Date(endTime).getTime()
    const now = currentTime.getTime()
    const difference = end - now

    if (difference <= 0) {
      return { expired: true, text: 'Expired' }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    if (days > 0) {
      return { expired: false, text: `${days}d ${hours}h ${minutes}m` }
    } else if (hours > 0) {
      return { expired: false, text: `${hours}h ${minutes}m ${seconds}s` }
    } else if (minutes > 0) {
      return { expired: false, text: `${minutes}m ${seconds}s` }
    } else {
      return { expired: false, text: `${seconds}s` }
    }
  }

  const timeLeft = getTimeLeft(deal.endTime)
  const stockPercentage = (deal.sold / (deal.sold + deal.stock)) * 100
  const isUrgent = !timeLeft.expired && (
    (deal.dealType === 'flash' || deal.dealType === 'lightning') ||
    stockPercentage > 80 ||
    (new Date(deal.endTime).getTime() - currentTime.getTime() < 2 * 60 * 60 * 1000) // Less than 2 hours
  )

  const getDealTypeBadge = () => {
    switch (deal.dealType) {
      case 'flash':
        return { color: 'bg-yellow-500', text: 'Flash Sale', icon: '⚡' }
      case 'lightning':
        return { color: 'bg-purple-500', text: 'Lightning', icon: '🌩' }
      case 'daily':
        return { color: 'bg-blue-500', text: 'Daily Deal', icon: '📅' }
      case 'weekend':
        return { color: 'bg-green-500', text: 'Weekend', icon: '🌴' }
      case 'clearance':
        return { color: 'bg-gray-700', text: 'Clearance', icon: '🏷️' }
      default:
        return { color: 'bg-red-500', text: 'Hot Deal', icon: '🔥' }
    }
  }

  const dealBadge = getDealTypeBadge()

  return (
    <div className={`
      group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border-2
      ${isUrgent ? 'border-red-300 animate-pulse' : 'border-gray-100'}
    `}>
      {/* Header with Deal Type Badge */}
      <div className='relative'>
        {/* Deal Type Badge */}
        <div className='absolute top-4 left-4 z-10'>
          <span className={`
            ${dealBadge.color} text-white px-3 py-1 rounded-full text-xs font-bold
            flex items-center gap-1
          `}>
            <span>{dealBadge.icon}</span>
            {dealBadge.text}
          </span>
        </div>

        {/* Urgency Badge */}
        {isUrgent && (
          <div className='absolute top-4 right-4 z-10'>
            <span className='bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse'>
              Ending Soon!
            </span>
          </div>
        )}

        {/* Product Image */}
        <div className='relative overflow-hidden h-48 bg-gray-100'>
          <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
            <div className='text-gray-400 text-center'>
              <div className='w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2'></div>
              <p className='text-sm'>Deal Image</p>
            </div>
          </div>

          {/* Discount Overlay */}
          <div className='absolute top-4 right-4 bg-red-600 text-white rounded-lg px-3 py-2 text-center'>
            <div className='text-2xl font-bold'>-{deal.discount}%</div>
            <div className='text-xs'>OFF</div>
          </div>
        </div>
      </div>

      <div className='p-6'>
        {/* Title and Category */}
        <div className='mb-3'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-xs text-shop_dark_green font-semibold uppercase tracking-wide'>
              {deal.category}
            </span>
            <div className='flex items-center gap-1 text-xs text-gray-500'>
              <Star className='w-3 h-3 text-yellow-400 fill-current' />
              {deal.rating}
            </div>
          </div>
          <h3 className='text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-shop_dark_green transition-colors duration-300'>
            <Link href={`/deals/${deal.id}`}>
              {deal.title}
            </Link>
          </h3>
          <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
            {deal.description}
          </p>
        </div>

        {/* Features */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {deal.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className='px-2 py-1 bg-shop_light_pink text-shop_dark_green rounded text-xs font-medium'
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Stock Progress */}
        <div className='mb-4'>
          <div className='flex items-center justify-between text-sm mb-1'>
            <span className='text-gray-600'>Stock Progress</span>
            <span className={`
              font-medium
              ${stockPercentage > 80 ? 'text-red-600' : stockPercentage > 50 ? 'text-yellow-600' : 'text-green-600'}
            `}>
              {deal.stock} left
            </span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2 overflow-hidden'>
            <div
              className={`
                h-full transition-all duration-300
                ${stockPercentage > 80 ? 'bg-red-500' : stockPercentage > 50 ? 'bg-yellow-500' : 'bg-green-500'}
              `}
              style={{ width: `${stockPercentage}%` }}
            ></div>
          </div>
          <div className='text-xs text-gray-500 mt-1'>
            {deal.sold} sold
          </div>
        </div>

        {/* Countdown Timer */}
        <div className={`
          flex items-center justify-between p-3 rounded-lg mb-4
          ${timeLeft.expired 
            ? 'bg-gray-100 text-gray-600' 
            : isUrgent 
              ? 'bg-red-100 text-red-700' 
              : 'bg-orange-100 text-orange-700'
          }
        `}>
          <div className='flex items-center gap-2'>
            <Clock className='w-4 h-4' />
            <span className='text-sm font-medium'>
              {timeLeft.expired ? 'Deal Ended' : `Ends in: ${timeLeft.text}`}
            </span>
          </div>
          {deal.freeShipping && (
            <div className='flex items-center gap-1 text-xs'>
              <Truck className='w-3 h-3' />
              <span>Free Shipping</span>
            </div>
          )}
        </div>

        {/* Price and Actions */}
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center gap-3 mb-1'>
              <span className='text-2xl font-bold text-shop_dark_green'>
                ${deal.dealPrice}
              </span>
              <span className='text-lg text-gray-400 line-through'>
                ${deal.originalPrice}
              </span>
            </div>
            <div className='text-xs text-gray-500'>
              You save ${(deal.originalPrice - deal.dealPrice).toFixed(2)}
            </div>
          </div>

          <button className='bg-red-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-red-700 hover:shadow-lg hoverEffect flex items-center gap-2 group/btn'>
            <ShoppingCart className='w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300' />
            Get Deal
          </button>
        </div>

        {/* Additional Info */}
        <div className='flex items-center justify-between pt-4 border-t border-gray-100 mt-4'>
          <div className='flex items-center gap-3 text-sm text-gray-500'>
            <div className='flex items-center gap-1'>
              <Package className='w-4 h-4' />
              <span>{deal.reviews} reviews</span>
            </div>
          </div>
          <Link
            href={`/deals/${deal.id}`}
            className='text-shop_dark_green font-semibold hover:text-shop_dark_green/80 transition-colors duration-300 text-sm'
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DealCard
