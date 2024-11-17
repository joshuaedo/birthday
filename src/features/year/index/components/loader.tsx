import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { anim, pageSlide, transition } from '@/lib/anim';
import { useLocation } from 'react-router-dom';
import { formatAltText, getYearFromUrl } from '@/lib/utils';
import Image from '@/components/common/image';
import { AnimatedText } from '@/components/common/animated-text';

interface PageLoaderProps {
  onLoadingComplete?: () => void;
}

const YearPageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showImage, setShowImage] = useState(false);

  const location = useLocation();
  const year = getYearFromUrl(location.pathname);

  const handleImageStart = () => {
    setTimeout(() => {
      setShowImage(true);
    }, 3000);
  };

  const handleImageEnd = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  };

  const videoContainerVariants = {
    initial: {
      clipPath: 'inset(100% 0 0 0)',
    },
    animate: {
      clipPath: 'inset(0 0 0 0)',
      transition,
    },
  };

  useEffect(() => {
    handleImageStart();
    handleImageEnd();
  }, []);

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
              variants={videoContainerVariants}
              initial='initial'
              animate={showImage ? 'animate' : 'initial'}
            >
              {showImage && year && (
                <Image
                  src={year?.src}
                  alt={formatAltText(year?.alt)}
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
                  {formatAltText(year?.alt) ?? ''}
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
