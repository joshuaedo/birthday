import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface ScrollProgressProps {
  className?: string;
  color?: string;
  height?: number;
}

export const ScrollProgress = ({
  className,
  color = '#3b82f6', // default blue color
  height = 4,
}: ScrollProgressProps) => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (documentHeight === windowHeight) {
        setIsScrollable(false);
        return;
      }

      setIsScrollable(true);
      const scrollDistance = documentHeight - windowHeight;
      const currentProgress = (scrollTop / scrollDistance) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    // Initial calculation
    calculateProgress();

    // Add scroll listener
    window.addEventListener('scroll', calculateProgress);
    // Add resize listener to handle dynamic content changes
    window.addEventListener('resize', calculateProgress);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  if (!isScrollable) return null;

  return (
    <div
      className={cn('fixed top-0 left-0 right-0 z-50', className)}
      style={{ height }}
      ref={progressRef}
    >
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: color,
          transition: 'width 100ms ease-out',
        }}
      />
    </div>
  );
};
