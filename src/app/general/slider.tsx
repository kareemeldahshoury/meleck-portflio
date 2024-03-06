
'use client'

import { useState } from "react";

interface CarouselProps {
  slides: string[]; // Define the type of the `slides` prop as an array of strings.
}


export default function Carousel({ slides = [] }: CarouselProps) {
  let [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageForLightbox, setCurrentImageForLightbox] = useState('');

  const toggleLightbox = (src: string) => {
    setCurrentImageForLightbox(src); // Update the current image for the lightbox
    setLightboxOpen(!lightboxOpen);
  };

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="overflow-hidden relative" style={{ width: '61%', height: '700px' }}>
        <div
          className="flex transition ease-out duration-400"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((src, index) => (
            <img 
              src={src} 
              style={{ 
                width: `${100 / slides.length}%`,
                height: '700px',
                objectFit: 'contain',
                objectPosition: 'center',
              }} 
              alt={`Slide ${index}`} 
              key={index} 
              onClick={() => toggleLightbox(src)}
            />
          ))}
        </div>

        <button onClick={previousSlide} style={{ position: 'absolute', top: '0px', right: '50px', padding: '2px'}}>(prev/</button>
        <button onClick={nextSlide} style={{ position: 'absolute', top: '0px', right: '10px', padding: '2px'}}>next)</button>
      </div>

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
          onClick={() => setLightboxOpen(false)} // Close lightbox when clicked
        >
          <img 
            src={currentImageForLightbox} 
            alt="Current slide" 
            style={{ width: 'auto', height: 'auto', maxHeight: '90vh', maxWidth: '90vw' }} 
          />
        </div>
      )}
    </div>
  );
}
