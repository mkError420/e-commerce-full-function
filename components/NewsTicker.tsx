"use client"

import React, { useEffect, useRef, useState } from 'react'

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  const newsItems = [
    { type: 'partnership', text: '🤝 TechCorp joins our premium partner network', highlight: true },
    { type: 'achievement', text: '🏆 10K+ satisfied customers this month', highlight: false },
    { type: 'brand', text: '🎉 Welcome StyleHub - Exclusive fashion collection now live', highlight: true },
    { type: 'milestone', text: '📈 98% customer satisfaction rate maintained', highlight: false },
    { type: 'partnership', text: '🌟 HomeLiving expands home decor collection', highlight: true },
    { type: 'news', text: '🚀 Fast delivery now available in 50+ cities', highlight: false },
    { type: 'brand', text: '💎 GameZone launches gaming accessories exclusive', highlight: true },
    { type: 'achievement', text: '⭐ Rated 4.9/5 by verified customers', highlight: false }
  ]

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    const scrollContent = ticker.querySelector('.ticker-content') as HTMLElement
    if (!scrollContent) return

    let scrollPosition = 0
    let animationId: number

    const scroll = () => {
      if (!isPaused) {
        scrollPosition -= 1
        if (Math.abs(scrollPosition) >= scrollContent.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContent.style.transform = `translateX(${scrollPosition}px)`
      }
      animationId = requestAnimationFrame(scroll)
    }

    scroll()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  return (
    <div className='bg-shop_btn_dark_green shadow-lg rounded-r-lg'>
      <div 
        ref={tickerRef}
        className='relative overflow-hidden'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className='absolute left-0 top-0 bottom-0 bg-white z-10 flex items-center px-4 rounded-r-lg shadow-md'>
          <span className='text-red-500 font-bold text-sm uppercase tracking-wider'>Latest Update</span>
        </div>
        
        <div className='overflow-hidden h-10 flex items-center'>
          <div className='ticker-content flex items-center whitespace-nowrap'>
            {/* Duplicate items for seamless loop */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <span 
                key={index}
                className={`inline-block px-6 text-sm ${
                  item.highlight 
                    ? 'text-white font-semibold' 
                    : 'text-white/90'
                } transition-all duration-300 hover:text-white`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Pause indicator */}
        {isPaused && (
          <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 text-xs'>
            ⏸ Paused
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsTicker
