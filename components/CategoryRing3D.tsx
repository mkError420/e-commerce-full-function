'use client'

import React, { useEffect, useRef, useState } from 'react'
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Book, 
  Heart, 
  Gamepad2, 
  Camera 
} from 'lucide-react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

gsap.registerPlugin(Draggable)

const categories = [
  {
    name: 'Electronics',
    icon: Smartphone,
    href: '/categories/electronics',
    color: 'bg-blue-500',
    gradient: 'from-blue-400 to-blue-600',
    bgImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    name: 'Computers',
    icon: Laptop,
    href: '/categories/computers',
    color: 'bg-purple-500',
    gradient: 'from-purple-400 to-purple-600',
    bgImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    name: 'Fashion',
    icon: Shirt,
    href: '/categories/fashion',
    color: 'bg-pink-500',
    gradient: 'from-pink-400 to-pink-600',
    bgImage: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    name: 'Home & Living',
    icon: Home,
    href: '/categories/home',
    color: 'bg-green-500',
    gradient: 'from-green-400 to-green-600',
    bgImage: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  },
  {
    name: 'Books',
    icon: Book,
    href: '/categories/books',
    color: 'bg-yellow-500',
    gradient: 'from-yellow-400 to-yellow-600',
    bgImage: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    name: 'Health',
    icon: Heart,
    href: '/categories/health',
    color: 'bg-red-500',
    gradient: 'from-red-400 to-red-600',
    bgImage: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    href: '/categories/gaming',
    color: 'bg-indigo-500',
    gradient: 'from-indigo-400 to-indigo-600',
    bgImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    name: 'Photography',
    icon: Camera,
    href: '/categories/photography',
    color: 'bg-teal-500',
    gradient: 'from-teal-400 to-teal-600',
    bgImage: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  }
]

const CategoryRing3D = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !ringRef.current) return

    const ring = ringRef.current
    const items = ring.querySelectorAll('.category-item')
    const itemCount = items.length
    const angleStep = 360 / itemCount
    
    // Responsive radius based on screen size
    const getRadius = () => {
      const width = window.innerWidth
      if (width < 640) return 120  // Mobile-M and below
      if (width < 768) return 160  // Mobile-L
      return 250  // Desktop and above
    }
    
    let radius = getRadius()

    // Position items in a circle
    gsap.set(items, {
      position: 'absolute',
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
    })

    const updatePositions = () => {
      radius = getRadius()
      items.forEach((item, index) => {
        const angle = angleStep * index
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const z = Math.sin((angle * Math.PI) / 180) * radius
        
        gsap.set(item, {
          x: x,
          z: z,
          rotationY: -angle,
        })
      })
    }

    updatePositions()

    // Handle window resize
    const handleResize = () => {
      updatePositions()
    }
    window.addEventListener('resize', handleResize)

    // Auto-rotate animation
    const autoRotate = gsap.to(ring, {
      rotationY: 360,
      duration: 20,
      ease: 'none',
      repeat: -1,
      paused: false,
    })

    // Draggable functionality
    const draggable = Draggable.create(ring, {
      type: 'rotation',
      inertia: true,
      onDrag: function() {
        autoRotate.pause()
        setRotation(this.rotation)
      },
      onThrowUpdate: function() {
        setRotation(this.rotation)
      },
      onDragEnd: function() {
        // Resume auto-rotate after a delay
        setTimeout(() => {
          autoRotate.play()
        }, 3000)
      }
    })

    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY
      
      const rotateX = (mouseY / rect.height) * 15
      const rotateY = (mouseX / rect.width) * 15
      
      gsap.to(ring, {
        rotationX: -rotateX,
        rotationY: rotateY + rotation,
        duration: 1,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(ring, {
        rotationX: 0,
        rotationY: rotation,
        duration: 1,
        ease: 'power2.out'
      })
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove)
      containerRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      autoRotate.kill()
      draggable[0].kill()
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove)
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [isClient, rotation])

  if (!isClient) {
    return (
      <section className='py-8 sm:py-12 md:py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8'>
          <div className='text-center mb-8 sm:mb-10 md:mb-12'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
              Shop by <span className='text-shop_dark_green'>Category</span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4'>
              Browse our wide selection of products across different categories
            </p>
          </div>
          <div className='h-96 flex items-center justify-center'>
            <div className='animate-pulse text-gray-400'>Loading 3D Category Ring...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='py-8 sm:py-12 md:py-16 bg-shop_light_bg relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-10 md:mb-12 relative z-10'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Shop by <span className='text-shop_dark_green'>Category</span>
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4'>
            Drag to rotate and explore our categories in 3D
          </p>
        </div>

        {/* 3D Ring Container */}
        <div 
          ref={containerRef}
          className='relative h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center perspective-1000'
          style={{ perspective: '1000px' }}
        >
          {/* Background elements */}
          <div className='absolute inset-0 overflow-hidden opacity-30'>
            <div className='absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-shop_light_green rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
            <div className='absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-shop_orange rounded-full mix-blend-multiply filter blur-3xl animate-pulse' style={{ animationDelay: '2s' }}></div>
            <div className='absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-shop_dark_green rounded-full mix-blend-multiply filter blur-3xl animate-pulse' style={{ animationDelay: '4s' }}></div>
          </div>

          {/* 3D Ring */}
          <div 
            ref={ringRef}
            className='relative w-full h-full transform-gpu'
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'rotateX(0deg) rotateY(0deg)'
            }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={index}
                  href={category.href}
                  className='category-item group block'
                >
                  <div 
                    className={`
                      relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl sm:rounded-2xl 
                      bg-white shadow-lg hover:shadow-2xl
                      transform transition-all duration-300 hover:scale-110
                      border border-gray-100
                      flex flex-col items-center justify-center
                      cursor-pointer
                    `}
                    style={{
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    {/* Icon container */}
                    <div className={`
                      inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300
                      ${category.color === 'bg-blue-500' ? 'bg-blue-100 text-blue-600' : ''}
                      ${category.color === 'bg-purple-500' ? 'bg-purple-100 text-purple-600' : ''}
                      ${category.color === 'bg-pink-500' ? 'bg-pink-100 text-pink-600' : ''}
                      ${category.color === 'bg-green-500' ? 'bg-green-100 text-green-600' : ''}
                      ${category.color === 'bg-yellow-500' ? 'bg-yellow-100 text-yellow-600' : ''}
                      ${category.color === 'bg-red-500' ? 'bg-red-100 text-red-600' : ''}
                      ${category.color === 'bg-indigo-500' ? 'bg-indigo-100 text-indigo-600' : ''}
                      ${category.color === 'bg-teal-500' ? 'bg-teal-100 text-teal-600' : ''}
                    `}>
                      <Icon className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
                    </div>
                    
                    {/* Category name */}
                    <h3 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-shop_dark_green transition-colors duration-300 text-center'>
                      {category.name}
                    </h3>
                    
                    {/* Shop now indicator - hidden on mobile for cleaner look */}
                    <div className='hidden sm:block mt-1 text-xs text-gray-500 group-hover:text-shop_dark_green transition-colors duration-300'>
                      Shop Now →
                    </div>
                    
                    {/* Hover effect */}
                    <div className='absolute inset-0 bg-white/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200'></div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Instructions */}
        <div className='text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 relative z-10'>
          <Link
            href='/categories'
            className='inline-flex items-center gap-2 bg-white border-2 border-shop_dark_green text-shop_dark_green px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:text-white hover:shadow-lg hoverEffect text-xs sm:text-sm md:text-base transition-all duration-300'
          >
            View All Categories
            <svg className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategoryRing3D
