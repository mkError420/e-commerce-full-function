"use client";
import { AlignLeft } from 'lucide-react'
import React from 'react'
import SideMenu from './SideMenu'
import { useMobileMenu } from '@/contexts/MobileMenuContext'

function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu();
  
  return (
    <>
      <button onClick={toggleMobileMenu}>
        <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer'/>
      </button>
      <div className='md:hidden'>
        <SideMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />
      </div>
    </>
  )
}

export default MobileMenu
