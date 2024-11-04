import Gallery from '@/components/common/gallery';
import Year from '@/components/common/year';
import useMediaQuery from '@/hooks/use-media-query';
import { homeGallery } from '@/lib/gallery';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  const { lg } = useMediaQuery();
  return (
    <article className='relative pt-24 lg:pt-0 lg:flex-col-center container min-h-screen lg:h-screen'>
      {lg ? (
        <Gallery />
      ) : (
        homeGallery &&
        homeGallery
          .slice()
          .reverse()
          .map((year) => <Year key={year.id} year={year} />)
      )}
    </article>
  );
};

export default HomePage;
