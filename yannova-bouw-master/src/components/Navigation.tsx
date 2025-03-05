"use client";

import React from "react";
import { Menu } from "lucide-react";
"use client";

import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Functie om schermgrootte te controleren
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is een standaard breekpunt voor mobiel
    };

    // Voer controle uit bij mount
    checkIfMobile();

    // Stel listener in voor schermgroottewijzigingen
    window.addEventListener('resize', checkIfMobile);

    // Ruim op bij unmount
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const isMobile = useIsMobile();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Over ons" },
    { href: "/services", label: "Diensten" },
    { href: "/projects", label: "Projecten" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-black font-semibold">Yannova-Bouw</span>
              <span className="text-[#33C3F0]">ramen I deuren I Veranda's</span>
            </a>
            
            {!isMobile && (
              <div className="ml-20 flex items-center gap-8">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors font-bold hover:shadow-[0_0_15px_rgba(51,195,240,0.3)] px-3 py-2 rounded-md animate-pulse-subtle"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {!isMobile && (
            <div className="ml-auto">
              <a
                href="/contact"
                className="bg-black text-[#33C3F0] px-4 py-2 rounded-md hover:bg-black/90 transition-all shadow-[0_0_15px_rgba(51,195,240,0.3)] hover:shadow-[0_0_20px_rgba(51,195,240,0.5)]"
              >
                Offerte aanvragen
              </a>
            </div>
          )}

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors font-bold hover:shadow-[0_0_15px_rgba(51,195,240,0.3)] px-3 py-2 rounded-md animate-pulse-subtle"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="/contact"
                    className="bg-black text-[#33C3F0] px-4 py-2 rounded-md hover:bg-black/90 transition-all shadow-[0_0_15px_rgba(51,195,240,0.3)] hover:shadow-[0_0_20px_rgba(51,195,240,0.5)] text-center"
                  >
                    Offerte aanvragen
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;