import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/contexts/CartContext";
import { SlideCartProvider } from "@/contexts/SlideCartContext";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import GlobalSlideCart from "@/components/GlobalSlideCart";
import OfferPopup from "@/components/OfferPopup";
import MobileLayoutWrapper from "@/components/MobileLayoutWrapper";


export const metadata: Metadata = {
  title:{
    template: '%s - Mk Online Shop',
    default: 'Mk Online Shop',
  },
  description: "Mk Online Shop is the best online shop for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="font-poppins antialiased">
       <CartProvider>
       <SlideCartProvider>
       <MobileMenuProvider>
       <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <MobileLayoutWrapper>
            {children}
          </MobileLayoutWrapper>
        </main>
        <Footer />
        </div>
        <GlobalSlideCart />
        <OfferPopup />
        <WhatsAppButton />
       </MobileMenuProvider>
       </SlideCartProvider>
       </CartProvider>
      </body>
    </html>
  );
}
