import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { anim, pageSlide, transition } from '@/lib/anim';
import { useLocation } from 'react-router-dom';
import { formatAltText, getYearFromUrl } from '@/lib/utils';
import ImageComponent from '@/components/common/image';
import { AnimatedText } from '@/components/common/animated-text';

interface PageLoaderProps {
  onLoadingComplete?: () => void;
}

const YearPageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const location = useLocation();
  const year = getYearFromUrl(location.pathname);

  const handleImageEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 4500);
  };

  const imageContainerVariants = {
    initial: {
      clipPath: 'inset(100% 0 0 0)',
    },
    animate: {
      clipPath: 'inset(0 0 0 0)',
      transition,
    },
  };

  useEffect(() => {
    if (!year?.src) {
      handleImageEnd();
      return;
    }

    // Set up loading timeout
    timeoutRef.current = setTimeout(() => {
      console.log('Image loading timed out after 5 seconds');
      handleImageEnd();
    }, 5000);

    // Preload the image
    const img = new Image();
    img.src = year.src;

    const handleLoad = () => {
      // Clear the timeout since image is ready
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setShowImage(true);
      handleImageEnd(); // Start the end timer once image is loaded
    };

    img.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      img.removeEventListener('load', handleLoad);
    };
  }, [year?.src]);

  return (
    <AnimatePresence mode='wait' onExitComplete={() => onLoadingComplete?.()}>
      {isVisible && (
        <motion.div
          {...anim(pageSlide)}
          className='fixed inset-0 flex-col-center z-[999] font-cormorant-garamond bg-secondary w-full'
        >
          <motion.div className='flex flex-col-center relative w-full'>
            <motion.div
              className='w-[200px] h-[346px] relative'
              variants={imageContainerVariants}
              initial='initial'
              animate={showImage ? 'animate' : 'initial'}
            >
              {showImage && year && (
                <ImageComponent
                  src={year.src}
                  alt={formatAltText(year.alt)}
                  className='absolute z-10 inset-0 object-contain h-full'
                />
              )}
            </motion.div>

            {!showImage && year && (
              <div className='absolute-center w-full text-center'>
                <AnimatedText
                  per='char'
                  preset='fade'
                  className='w-full text-center'
                >
                  {formatAltText(year.alt) ?? ''}
                </AnimatedText>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { YearPageLoader };
