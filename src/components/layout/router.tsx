import NotFoundPage from '@/pages/404';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@/pages/home';
import Page21 from '@/features/year/twenty-one/components/page';
import { YearPageLayout } from '@/features/year/index/components/layout';
import Page22 from '@/features/year/twenty-two/components/page';

const Router = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />

      <Route path='/year' element={<YearPageLayout />}>
        <Route index element={<Navigate to='/' />} />
        <Route path='twenty-one' element={<Page21 />} />
        <Route path='twenty-two' element={<Page22 />} />
      </Route>
    </Routes>
  );
};

export default Router;
