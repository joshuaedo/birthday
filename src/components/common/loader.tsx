import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { anim, pageSlide, transition } from '@/lib/anim';
import Video from './video';
import { AnimatedText } from './animated-text';
import { optimizeCloudinaryVideo } from '@/lib/utils';
import { WavyEllipsis } from './wavy-ellipsis';
import usePageLoader from '@/hooks/use-page-loader';

interface PageLoaderProps {
  onLoadingComplete?: () => void;
}

const HomePageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isVisible } = usePageLoader();

  const optimizedVideoUrl = optimizeCloudinaryVideo(
    'https://res.cloudinary.com/dnw9fplsw/video/upload/v1731525007/birthday.joshuaedo.com/home/loader_tvkj9t.mp4'
  );

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
    // Preload the video
    const video = new Audio(optimizedVideoUrl);
    const handleCanPlayThrough = () => {
      // Clear the timeout since video is ready
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setShowVideo(true);
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);

    // Cleanup
    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [optimizedVideoUrl]);

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
                  ref={videoRef}
                  loop={false}
                  src={optimizedVideoUrl}
                  className='absolute z-10 inset-0'
                />
              )}
            </motion.div>

            {!showVideo && (
              <div className='w-full text-center absolute-center flex-center gap-1'>
                <AnimatedText per='char' preset='fade'>
                  Setting stuff up
                </AnimatedText>
                <WavyEllipsis />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { HomePageLoader };
