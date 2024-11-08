import { BrowserRouter } from 'react-router-dom';
import useDate from '@/hooks/use-date';
import { CountdownTimer } from '@/components/common/counter';
import Router from '@/components/layout/router';
import Footer from '@/components/layout/footer';
import { ScrollerProvider } from '@/providers/scroller';
import Header from '@/components/layout/header';
import Cursor from '@/components/layout/cursor';

export const App = () => {
  const { isBirthday } = useDate();

  return (
    <BrowserRouter>
      <div className='relative font-cormorant-garamond font-normal w-full max-w-screen bg-primary text-tertiary'>
        {isBirthday ? (
          <CountdownTimer />
        ) : (
          <ScrollerProvider>
            <Header />
            <Router />
            <Cursor />
            <Footer />
          </ScrollerProvider>
        )}
      </div>
    </BrowserRouter>
  );
};
