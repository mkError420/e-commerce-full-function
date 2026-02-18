import React from 'react'
import { Clock, Zap, Tag, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'Flash Sale',
      subtitle: 'Up to 70% OFF',
      description: 'Limited time offer on selected electronics',
      icon: Zap,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      endTime: 'Ends in: 2h 45m',
      href: '/flash-sale'
    },
    {
      id: 2,
      title: 'Weekend Special',
      subtitle: 'Buy 1 Get 1 Free',
      description: 'On all fashion items',
      icon: Tag,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      endTime: 'This weekend only',
      href: '/weekend-deals'
    },
    {
      id: 3,
      title: 'Clearance Sale',
      subtitle: 'Up to 80% OFF',
      description: 'Last chance to grab these deals',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      endTime: 'While stocks last',
      href: '/clearance'
    }
  ]

  return (
    <section className='py-16 bg-shop_light_bg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Hot <span className='text-shop_orange'>Deals & Offers</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Don't miss out on these amazing limited-time deals. Save big on your favorite products!
          </p>
        </div>

        {/* Offers Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {offers.map((offer) => {
            const Icon = offer.icon
            return (
              <div
                key={offer.id}
                className={`${offer.bgColor} rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100`}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${offer.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className='relative z-10'>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${offer.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className='w-8 h-8' />
                  </div>

                  {/* Content */}
                  <div className='space-y-4'>
                    <div>
                      <h3 className={`text-2xl font-bold ${offer.textColor} mb-2`}>
                        {offer.title}
                      </h3>
                      <div className={`text-3xl font-bold ${offer.textColor}`}>
                        {offer.subtitle}
                      </div>
                    </div>

                    <p className='text-gray-600'>
                      {offer.description}
                    </p>

                    {/* Timer */}
                    <div className='flex items-center gap-2 text-sm font-medium text-gray-500'>
                      <Clock className='w-4 h-4' />
                      <span>{offer.endTime}</span>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={offer.href}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${offer.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hoverEffect transform hover:scale-105 transition-all duration-300`}
                    >
                      Shop Now
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Banner */}
        <div className='mt-12 bg-gradient-to-r from-shop_dark_green to-shop_light_green rounded-2xl p-8 text-white relative overflow-hidden'>
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-4 left-4 w-24 h-24 border-2 border-white rounded-full'></div>
            <div className='absolute bottom-4 right-4 w-32 h-32 border-2 border-white rounded-full'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full'></div>
          </div>

          <div className='relative z-10 text-center'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              🎉 Mega Sale Event - Up to 50% OFF Everything!
            </h3>
            <p className='text-xl text-white/90 mb-6 max-w-2xl mx-auto'>
              Use code: <span className='bg-white/20 px-3 py-1 rounded font-mono font-bold'>MEGA50</span> at checkout
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/mega-sale'
                className='inline-flex items-center justify-center gap-2 bg-white text-shop_dark_green px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-xl hoverEffect transform hover:scale-105 transition-all duration-300'
              >
                Shop Mega Sale
                <Zap className='w-5 h-5' />
              </Link>
              <Link
                href='/terms'
                className='inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-shop_dark_green hover:shadow-xl hoverEffect transform hover:scale-105 transition-all duration-300'
              >
                View Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
