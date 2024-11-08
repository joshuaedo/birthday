import { YearPageLoader } from '@/components/common/loader';
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
      <Outlet />
    </>
  );
};
