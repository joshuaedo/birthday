import { BrowserRouter } from 'react-router-dom';
import { PageLoader } from '@/components/common/loader';
import { useState } from 'react';
import useDate from '@/hooks/use-date';
import { CountdownTimer } from '@/components/common/counter';
import useMediaQuery from '@/hooks/use-media-query';
import { ScrollerProvider } from '@/providers/scroller';
import Header from '@/components/layout/header';
import Cursor from '@/components/layout/cursor';
import Footer from '@/components/layout/footer';
import Router from '@/components/layout/router';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isBirthday } = useDate();
  const { lg } = useMediaQuery();

  return (
    <BrowserRouter>
      <div className='relative font-berlingske-serif select-none font-normal w-full max-w-screen bg-amber-50 text-zinc-700'>
        {isBirthday ? (
          <CountdownTimer />
        ) : (
          <>
            {isLoading && (
              <PageLoader onLoadingComplete={() => setIsLoading(false)} />
            )}
            {lg ? (
              <ScrollerProvider>
                <Header />
                <Router />
                <Cursor />
                <Footer />
              </ScrollerProvider>
            ) : (
              <>
                <Header />
                <Router />
                <Footer />
              </>
            )}
          </>
        )}
      </div>
    </BrowserRouter>
  );
};
