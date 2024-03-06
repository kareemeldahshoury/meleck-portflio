import React from 'react'

interface GalleryFilterProps {
    setFilter: (filer: string) => void;
}

const categories = ['all', 'verticle', 'horizontal'];

const GallerFilter: React.FC<GalleryFilterProps> = ({ setFilter }) => {
    return(
        <div className="gallery-filter">
        {categories.map((category) => (
          <button key={category} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
      </div>
    );
};

export default GallerFilter;