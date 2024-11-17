/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import useMediaQuery from '@/hooks/use-media-query';
import Lenis from 'lenis';
import { useInRouterContext, useLocation } from 'react-router-dom';

const ScrollerProvider = ({ children }: { children: React.ReactNode }) => {
  const { lg } = useMediaQuery();
  const location = useLocation();
  const routerContext = useInRouterContext();

  // Scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, routerContext]);

  useEffect(() => {
    if (!lg) {
      return;
    } else {
      // Initialize Lenis for smooth scrolling on larger screens
      const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        syncTouch: true,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => {
        lenis.stop();
      };
    }
  }, [lg]);

  return <>{children}</>;
};

export { ScrollerProvider };
