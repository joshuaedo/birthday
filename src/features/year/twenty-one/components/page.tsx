import AudioToggle from '@/components/layout/audio-toggle';
import { Footer } from './footer';
import useYearlyReview from '../../index/hooks/use-yearly-review';
import { useLocation } from 'react-router-dom';
import { getYearFromUrl } from '@/lib/utils';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { HoverText } from '@/components/common/hover-text';

interface Page21Props {}

const Page21 = ({}: Page21Props) => {
  const location = useLocation();
  const year = getYearFromUrl(location.pathname);
  const { documentContent, isContentFetched, isFetchingContent } =
    useYearlyReview(year?.alt);

  console.log('content:', documentContent);
  console.log('isContentFetched:', isContentFetched);
  console.log('isFetchingContent:', isFetchingContent);

  return (
    <main>
      <AudioToggle />
      <article className='relative py-20 lg:py-64 flex flex-col items-center container'>
        <section className='space-y-[5vh] lg:space-y-[65vh] prose max-w-3xl pb-20 lg:pb-64'>
          <RichText
            //  @ts-expect-error Property content does not exist on type: SingleReviewType
            content={documentContent?.content?.raw}
            renderers={{
              p: ({ children }) => (
                <p className='text-sm lg:text-base'>{children}</p>
              ),
              a: ({ href, children }) => (
                <HoverText src={href}>{children}</HoverText>
              ),
            }}
          />
        </section>

        <Footer />
      </article>
    </main>
  );
};

export default Page21;
