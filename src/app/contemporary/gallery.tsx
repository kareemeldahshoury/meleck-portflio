
import React from 'react';
import ImageDisplay from './image'; 

interface Image {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: Image[]; 
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
      <div className="gallery-masonry m-2">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <ImageDisplay src={image.src} alt={image.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    );
  };
  

export default Gallery;
