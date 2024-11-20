import { useState, useEffect } from 'react';

const WavyEllipsis = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <span className='inline-flex items-center'>
      <span className='animate-bounce delay-0'>.</span>
      <span className='animate-bounce delay-150'>.</span>
      <span className='animate-bounce delay-300'>.</span>
    </span>
  );
};

export { WavyEllipsis };
