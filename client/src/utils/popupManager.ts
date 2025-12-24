// src/utils/popupManager.ts
let openPopupCallback: (() => void) | null = null;

export const setOpenPopupCallback = (callback: () => void) => {
  openPopupCallback = callback;
};

export const openContactPopup = () => {
  if (openPopupCallback) {
    openPopupCallback();
  } else {
    // Fallback to scrolling to contact section
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
};

// Add to window object for global access
if (typeof window !== 'undefined') {
  (window as any).openContactPopup = openContactPopup;
}