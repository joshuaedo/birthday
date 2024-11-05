import { years } from '@/lib/year';
import { useState } from 'react';
import Image from './image';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  console.log(years);

  return (
    <div className='relative w-full h-[65vh] overflow-hidden border border-tertiary rounded-[3px]'>
      {years.map((photo) => (
        <div
          key={photo.id}
          className={`absolute inset-0 max-w-16 h-fit bg-white border border-tertiary transform transition-transform duration-300 ease-out px-1.5 pt-1.5 pb-3 rounded-[1px] cursor-pointer`}
          style={{
            ...photo.style,
            zIndex: hoveredId === photo.id ? 99 : photo.style.zIndex,
          }}
          onMouseEnter={() => setHoveredId(photo.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Link to={`/year/${photo.id}`}>
            <Image
              height={999}
              width={999}
              src={photo.src}
              alt={photo.alt}
              className='h-full object-contain'
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
