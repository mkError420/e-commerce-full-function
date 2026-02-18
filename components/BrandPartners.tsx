import React from 'react'

const BrandPartners = () => {
  const brands = [
    { name: 'TechCorp', logo: '/api/placeholder/120/60' },
    { name: 'StyleHub', logo: '/api/placeholder/120/60' },
    { name: 'HomeLiving', logo: '/api/placeholder/120/60' },
    { name: 'GameZone', logo: '/api/placeholder/120/60' },
    { name: 'HealthPlus', logo: '/api/placeholder/120/60' },
    { name: 'BookWorld', logo: '/api/placeholder/120/60' },
    { name: 'PhotoPro', logo: '/api/placeholder/120/60' },
    { name: 'Fashionista', logo: '/api/placeholder/120/60' }
  ]

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Trusted by <span className='text-shop_dark_green'>Leading Brands</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            We partner with the best brands to bring you quality products you can trust
          </p>
        </div>

        {/* Brands Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {brands.map((brand, index) => (
            <div
              key={index}
              className='flex items-center justify-center p-8 bg-gray-50 rounded-xl hover:bg-shop_light_pink hover:shadow-md transition-all duration-300 group'
            >
              <div className='text-center'>
                {/* Brand Logo Placeholder */}
                <div className='w-24 h-12 bg-gray-300 rounded-lg mx-auto mb-3 group-hover:bg-shop_dark_green/20 transition-colors duration-300'></div>
                <p className='text-sm text-gray-600 group-hover:text-shop_dark_green transition-colors duration-300 font-medium'>
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className='mt-16 text-center bg-shop_light_bg rounded-2xl p-8'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            Want to Partner With Us?
          </h3>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Join our growing network of trusted brands and reach thousands of customers looking for quality products.
          </p>
          <a
            href='/partner-with-us'
            className='inline-flex items-center gap-2 bg-shop_dark_green text-white px-8 py-3 rounded-xl font-semibold hover:bg-shop_dark_green hover:shadow-lg hoverEffect'
          >
            Become a Partner
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BrandPartners
