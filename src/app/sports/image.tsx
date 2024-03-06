'use client'
import React, { useState } from 'react';

interface ImageDisplayProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt, className }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const toggleLightbox = () => {
    setLightboxOpen(!lightboxOpen);
  };
  
  return (
    <div>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto" 
        onClick={toggleLightbox}
      />
      {lightboxOpen && (
        <div 
          className="lightbox" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000, 
          }}
          onClick={toggleLightbox} 
        >
          <img 
            src={src} 
            alt={alt} 
            style={{ width: 'auto', height: 'auto', maxHeight: '90vh', maxWidth: '90vw' }} 
          />
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
