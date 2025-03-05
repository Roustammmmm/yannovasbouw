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
};