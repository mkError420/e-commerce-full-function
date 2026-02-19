
import React from 'react'
import { Title } from './ui/text'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/images'
import { ArrowRight, Sparkles, Tag, Zap, Calendar } from 'lucide-react'

const HomeBanner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-shop_light_pink via-white to-shop_light_pink/50 rounded-2xl px-8 lg:px-24 py-16 md:py-20'>
      {/* Background decorative elements */}
      <div className='absolute top-0 right-0 w-64 h-64 bg-shop_btn_dark_green/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-48 h-48 bg-shop_orange/10 rounded-full blur-2xl'></div>
      
      <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12'>
        <div className='flex-1 space-y-8 text-center lg:text-left'>
          <div className='space-y-4'>
                        
            {/* Main heading */}
            <Title className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              Welcome to <span className='text-shop_dark_green'>Mk-ShopBD</span> <br />
              <span className='text-shop_orange'>50% OFF</span> Everything!😉
            </Title>
            
            {/* Subheading */}
            <p className='text-lg text-gray-600 max-w-lg'>
              Discover amazing products at unbeatable prices. Quality meets affordability in every click.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
            <Link 
              href={"/shop"} 
              className='inline-flex items-center gap-2 bg-shop_btn_dark_green text-white px-8 py-4 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-xl hoverEffect transform hover:scale-105'
            >
              Shop Now
              <ArrowRight className='w-5 h-5' />
            </Link>
            <Link 
              href={"/deals"} 
              className='inline-flex items-center gap-2 bg-white border-2 border-shop_orange text-shop_orange px-8 py-4 rounded-xl font-semibold hover:bg-shop_orange hover:text-white hover:shadow-xl hoverEffect transform hover:scale-105'
            >
              <Tag className='w-5 h-5' />
              View All Deals
            </Link>
          </div>
          
          {/* Stats */}
          <div className='flex gap-8 justify-center lg:justify-start pt-4'>
            <div>
              <div className='text-2xl font-bold text-shop_dark_green'>10K+</div>
              <div className='text-sm text-gray-600'>Happy Customers</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-shop_dark_green'>500+</div>
              <div className='text-sm text-gray-600'>Products</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-shop_dark_green'>4.9★</div>
              <div className='text-sm text-gray-600'>Rating</div>
            </div>
          </div>
        </div>
        
        {/* Image section */}
        <div className='flex-1 flex justify-center lg:justify-end'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-shop_btn_dark_green/20 to-shop_orange/20 rounded-2xl blur-2xl transform rotate-6'></div>
            <Image 
              src={banner_1} 
              alt='Shopping Banner' 
              className='relative w-80 md:w-96 lg:w-full max-w-md object-cover rounded-2xl shadow-2xl transform hover:scale-105 hoverEffect'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeBanner
