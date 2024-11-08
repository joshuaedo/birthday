import { YearPageLoader } from '@/components/common/loader';
import { ScrollProgress } from '@/components/common/scroll-progress';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

interface YearPageLayoutProps {}

export const YearPageLayout = ({}: YearPageLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && (
        <YearPageLoader onLoadingComplete={() => setIsLoading(false)} />
      )}
      <ScrollProgress color='#3f3f46' />
      <Outlet />
    </>
  );
};
