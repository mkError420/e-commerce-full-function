"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MobileMenuContextType {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider');
  }
  return context;
};

interface MobileMenuProviderProps {
  children: ReactNode;
}

export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <MobileMenuContext.Provider value={{
      isMobileMenuOpen,
      openMobileMenu,
      closeMobileMenu,
      toggleMobileMenu
    }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
