import { SoundContext } from '@/providers/sound';
import { useContext } from 'react';

const useSound = () => {
  const soundContext = useContext(SoundContext);

  if (!soundContext) {
    throw new Error('Sound must be used within a Provider');
  }

  const { isSoundEnabled, toggleSound } = soundContext;

  return {
    isSoundEnabled,
    toggleSound,
  };
};

export default useSound;
