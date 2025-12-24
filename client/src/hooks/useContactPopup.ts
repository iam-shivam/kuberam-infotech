// src/hooks/useContactPopup.ts
import { useEffect } from 'react';
import { openContactPopup } from '../utils/popupManager';

export const useContactPopup = () => {
  useEffect(() => {
    // Add click handlers to all CTA buttons with specific classes
    const ctaButtons = document.querySelectorAll('.cta-start-project, .contact-popup-trigger');
    
    ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        openContactPopup();
      });
    });

    return () => {
      ctaButtons.forEach(button => {
        button.removeEventListener('click', openContactPopup);
      });
    };
  }, []);
};

// Update button classes in your components:
// Add class="cta-start-project" to all Start Your Project buttons