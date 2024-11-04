import { homeGallery } from '@/lib/gallery';
import { useState } from 'react';
import Image from './image';

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  console.log(homeGallery);

  return (
    <div className='relative w-full h-[65vh] overflow-hidden border border-zinc-700 rounded-[3px]'>
      {homeGallery.map((photo) => (
        <div
          key={photo.id}
          className={`absolute inset-0 max-w-16 h-fit bg-white border border-zinc-700 transform transition-transform duration-300 ease-out px-1.5 pt-1.5 pb-3 rounded-[1px]`}
          style={{
            ...photo.style,
            zIndex: hoveredId === photo.id ? 99 : photo.style.zIndex,
          }}
          onMouseEnter={() => setHoveredId(photo.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Image
            height={999}
            width={999}
            src={photo.src}
            alt={photo.alt}
            className='h-full object-contain'
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
