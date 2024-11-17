import { useEffect, useState } from 'react';
import useSound from '@/hooks/use-sound';
import { AudioLines, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '../common/switch';
import { motion, AnimatePresence } from 'framer-motion';
import { transition } from '@/lib/anim';

const AudioTogglePopover = () => {
  const { isSoundEnabled, toggleSound } = useSound();
  const [isOpen, setIsOpen] = useState(false);

  const closePopover = () => setIsOpen(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 6500);

    const closeTimer = setTimeout(() => {
      setIsOpen(false);
    }, 30000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    }; // Cleanup on component unmount
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.div
          initial={{ y: '800px' }}
          animate={{ y: 0 }}
          exit={{ y: '800px' }}
          transition={transition}
          className='fixed z-[99] bottom-10 right-10 w-72 p-4 bg-white rounded-[4px] border border-tertiary'
        >
          <div className='flex justify-between items-center'>
            <p className='font-semibold'>Sound Settings</p>
            <button
              onClick={closePopover}
              aria-label='Close Popover'
              className='text-gray-500 hover:text-gray-700 focus:outline-none'
            >
              <X size={16} />
            </button>
          </div>
          <p className='mt-2 text-sm'>This page uses sound.</p>

          <div className='flex items-start gap-4 mt-4'>
            <span>Disable</span>
            <div className='flex-col-center space-y-4 mt-[0.1rem]'>
              <Switch
                checked={isSoundEnabled}
                onCheckedChange={toggleSound}
                aria-label='Toggle Sound'
              />
              <AudioLines
                className={cn(
                  'transition-transform duration-500',
                  isSoundEnabled ? 'rotate-180 text-darker' : 'text-muted'
                )}
              />
            </div>
            <span>Enable</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioTogglePopover;
