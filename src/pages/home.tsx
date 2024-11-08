import Gallery from '@/components/common/gallery';
import { HomePageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import Year from '@/components/common/year';
import useMediaQuery from '@/hooks/use-media-query';
import { years } from '@/lib/year';
import { useState } from 'react';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { lg } = useMediaQuery();
  return (
    <>
      {isLoading && (
        <HomePageLoader onLoadingComplete={() => setIsLoading(false)} />
      )}
      <Page className='relative pt-24 lg:pt-0 lg:flex-col-center container min-h-screen lg:h-screen'>
        {lg ? (
          <Gallery />
        ) : (
          years
            .slice()
            .reverse()
            .map((year) => <Year key={year.id} year={year} />)
        )}
      </Page>
    </>
  );
};

export default HomePage;
