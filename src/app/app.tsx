import { BrowserRouter } from 'react-router-dom';
import Router from '@/components/layout/router';
import Providers from '@/providers';
import Header from '@/components/layout/header';
import Main from '@/components/layout/main';
import Footer from '@/components/layout/footer';
import { PageLoader } from '@/components/layout/loader';
import { useState } from 'react';
import Cursor from '@/components/layout/cursor';
import useDate from '@/hooks/use-date';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isBirthday } = useDate();

  return (
    <BrowserRouter>
      <Providers>
        <div className='relative font-berlingske-serif select-none font-normal w-full max-w-screen bg-amber-50 text-zinc-700'>
          {isLoading && !isBirthday && (
            <PageLoader onLoadingComplete={() => setIsLoading(false)} />
          )}
          <Header />
          <Main>
            <Router />
          </Main>
          <Cursor />
          <Footer />
        </div>
      </Providers>
    </BrowserRouter>
  );
}
