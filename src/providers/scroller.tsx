/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import useMediaQuery from '@/hooks/use-media-query';
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
      // (async () => {
      //   const LocomotiveScroll = (await import('locomotive-scroll')).default;
      //   const locomotiveScroll = new LocomotiveScroll();
      // })();
    }
  }, [lg]);

  return <>{children}</>;
};

export { ScrollerProvider };
