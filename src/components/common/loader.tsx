import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { anim, pageSlide, transition } from '@/lib/anim';
import Video from './video';
import { TextEffect } from './text';
import Image from './image';
import { useLocation } from 'react-router-dom';
import {
  formatAltText,
  getYearFromUrl,
  optimizeCloudinaryVideo,
} from '@/lib/utils';

interface PageLoaderProps {
  onLoadingComplete?: () => void;
}

const HomePageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const optimizedVideoUrl = optimizeCloudinaryVideo(
    'https://res.cloudinary.com/dnw9fplsw/video/upload/v1731525007/birthday.joshuaedo.com/home/loader_tvkj9t.mp4'
  );

  const handleVideoStart = () => {
    setTimeout(() => {
      setShowVideo(true);
    }, 3000);
  };

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
      transition,
    },
  };

  useEffect(() => {
    handleVideoStart();
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
              animate={showVideo ? 'animate' : 'initial'}
            >
              {showVideo && (
                <Video
                  loop={false}
                  src={optimizedVideoUrl}
                  className='absolute z-10 inset-0'
                  onEnded={handleVideoEnd}
                />
              )}
            </motion.div>

            {!showVideo && (
              <div className='absolute-center w-full text-center'>
                <TextEffect
                  per='char'
                  preset='fade'
                  className='w-full text-center'
                >
                  Setting stuff up
                </TextEffect>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const YearPageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showImage, setShowImage] = useState(false);

  // Get the current URL path
  const location = useLocation();
  const year = getYearFromUrl(location.pathname); // Obtain the image source dynamically

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
                <TextEffect
                  per='char'
                  preset='fade'
                  className='w-full text-center'
                >
                  {formatAltText(year?.alt) ?? ''}
                </TextEffect>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { HomePageLoader, YearPageLoader };
