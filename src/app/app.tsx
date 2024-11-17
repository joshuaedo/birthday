import { BrowserRouter } from 'react-router-dom';
import useDate from '@/hooks/use-date';
import { CountdownTimer } from '@/components/common/counter';
import Router from '@/components/layout/router';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Providers from '@/providers';

// import Cursor from '@/components/layout/cursor';

export const App = () => {
  const { isBirthday } = useDate();

  return (
    <BrowserRouter>
      <div className='relative font-cormorant-garamond font-normal max-w-screen bg-primary text-tertiary'>
        {isBirthday ? (
          <CountdownTimer />
        ) : (
          <Providers>
            <Header />
            <Router />
            {/* <Cursor /> */}
            <Footer />
          </Providers>
        )}
      </div>
    </BrowserRouter>
  );
};
