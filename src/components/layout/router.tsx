import NotFoundPage from '@/pages/404';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@/pages/home';
import Page21 from '@/year/21/components/page';

const Router = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/year/21' element={<Page21 />} />
    </Routes>
  );
};

export default Router;
