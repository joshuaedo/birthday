import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { anim, pageSlide } from '@/lib/anim';
import Video from './video';
import { AnimatedNumber } from './animated-number';

interface PageLoaderProps {
  onLoadingComplete?: () => void;
}

export const PageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(21);
  }, []);

  // Initialize numbers array
  useEffect(() => {
    const nums = Array.from({ length: 21 }, (_, i) => i + 1);
    setNumbers(nums);
  }, []);

  // Handle number animation sequence
  useEffect(() => {
    if (currentIndex < numbers.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 200); // Controls speed of number changes

      return () => clearTimeout(timer);
    } else if (currentIndex === numbers.length) {
      // When number animation completes, show video after delay
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, numbers.length]);

  const handleVideoEnd = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const videoContainerVariants = {
    initial: {
      clipPath: 'inset(100% 0 0 0)',
    },
    animate: {
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 1.5,
        ease: [0.16, 0.1, 0.17, 0.98],
        delay: 0.2,
      },
    },
  };

  return (
    <AnimatePresence mode='wait' onExitComplete={() => onLoadingComplete?.()}>
      {isVisible && (
        <motion.div
          {...anim(pageSlide)}
          className='fixed inset-0 flex flex-col items-center justify-center z-[999] font-cormorant-garamond bg-secondary'
        >
          <motion.div className='flex flex-col items-center justify-center space-y-8'>
            <motion.div
              className='w-[200px] h-[346px] relative'
              variants={videoContainerVariants}
              initial='initial'
              animate={showVideo ? 'animate' : 'initial'}
            >
              {showVideo && (
                <Video
                  loop={false}
                  src='/videos/home/loader.mp4'
                  className='absolute z-10 inset-0'
                  onEnded={handleVideoEnd}
                />
              )}
            </motion.div>

            {!showVideo && (
              <div className='relative h-32 w-32 overflow-hidden bg-secondary'>
                <div className='flex w-full items-center justify-center'>
                  <AnimatedNumber
                    className='inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50'
                    springOptions={{
                      bounce: 0,
                      duration: 3000,
                    }}
                    value={value}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
