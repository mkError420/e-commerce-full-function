"use client";
import React from 'react';
import { useMobileMenu } from '@/contexts/MobileMenuContext';

interface MobileLayoutWrapperProps {
  children: React.ReactNode;
}

const MobileLayoutWrapper: React.FC<MobileLayoutWrapperProps> = ({ children }) => {
  const { isMobileMenuOpen } = useMobileMenu();

  return (
    <div 
      className={`transition-transform duration-300 ease-in-out md:transform-none ${
        isMobileMenuOpen ? 'translate-x-72' : 'translate-x-0'
      }`}
    >
      {children}
    </div>
  );
};

export default MobileLayoutWrapper;
