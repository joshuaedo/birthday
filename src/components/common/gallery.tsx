import { years } from '@/lib/year';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from './image';
import { Button } from './button';
import { cn, formatAltText, optimizeCloudinaryImage } from '@/lib/utils';
import { X } from 'lucide-react';

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof years)[number] | null
  >(null);
  const optimizedSelectedPhotoSrc = optimizeCloudinaryImage(
    selectedPhoto?.src || ''
  );

  const handleImageClick = (photo: (typeof years)[number]) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleGoToReview = (photoAlt: string) => {
    window.location.href = `/year/${photoAlt}`;
  };

  return (
    <div className='relative w-full h-[65vh] overflow-hidden border border-tertiary rounded-[3px]'>
      {years.map((photo) => {
        const optimizedImageSrc = optimizeCloudinaryImage(photo.src);
        return (
          <motion.div
            key={photo.id}
            layoutId={`photo-${photo.id}`}
            className={`absolute inset-0 max-w-16 h-fit bg-white border border-tertiary transform transition-transform duration-300 ease-out px-1.5 pt-1.5 pb-3 rounded-[1px] cursor-pointer`}
            style={{
              ...photo.style,
              zIndex: hoveredId === photo.id ? 120 : photo.style.zIndex,
            }}
            onMouseEnter={() => setHoveredId(photo.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleImageClick(photo)}
          >
            <Image
              height={999}
              width={999}
              src={optimizedImageSrc}
              alt={photo.alt}
              className='h-full object-contain'
            />
          </motion.div>
        );
      })}

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              layoutId={`photo-${selectedPhoto.id}`}
              className='relative bg-white border border-tertiary p-12 rounded-[4px] shadow-lg max-w-[90vw] max-h-[80vh] grid grid-cols-2 gap-12'
              style={{ width: '80%', height: '80%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                className='absolute top-6 right-8 border-tertiary'
                size='sm'
                variant='outline'
                onClick={handleCloseModal}
              >
                <X strokeWidth={1} className='size-5' />
              </Button>
              <div className='w-full h-full bg-primary border border-tertiary rounded-[4px] px-12 max-h-[calc(80vh-3rem)] overflow-hidden'>
                <div className='w-full h-full bg-secondary px-12 max-h-[calc(80vh-3rem)] overflow-hidden'>
                  <Image
                    height={999}
                    width={999}
                    src={optimizedSelectedPhotoSrc}
                    alt={selectedPhoto.alt}
                    className='object-contain size-full max-h-[calc(80vh-3rem)] overflow-hidden'
                  />
                </div>
              </div>
              <div className='flex-col-center space-y-12'>
                <h1 className='text-7xl text-center'>
                  {formatAltText(selectedPhoto.alt)}
                </h1>
                {selectedPhoto.hasReview && (
                  <Button
                    onClick={() => handleGoToReview(selectedPhoto.alt)}
                    className={cn('text-sm border-tertiary')}
                    variant='outline'
                  >
                    Go to review
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
