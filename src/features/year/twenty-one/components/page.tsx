import AudioToggle from '@/components/layout/audio-toggle';
import { Footer } from './footer';
import useYearlyReview from '../../index/hooks/use-yearly-review';
import { useLocation } from 'react-router-dom';
import { formatAltText, getYearFromUrl } from '@/lib/utils';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { HoverText } from '@/components/common/hover-text';
import { AnimatedText } from '@/components/common/animated-text';
import { WavyEllipsis } from '@/components/common/wavy-ellipsis';

interface Page21Props {}

const Page21 = ({}: Page21Props) => {
  const location = useLocation();
  const year = getYearFromUrl(location.pathname);
  const { documentContent } = useYearlyReview(year?.alt);
  const pageName = formatAltText(year?.alt ?? '');

  return (
    <main>
      {documentContent && documentContent?.content?.raw ? (
        <>
          <AudioToggle />
          <article className='relative py-20 lg:py-32 flex flex-col items-center container'>
            <section className='space-y-[1vh] prose max-w-3xl pb-20 lg:pb-32'>
              <RichText
                content={documentContent?.content?.raw}
                renderers={{
                  p: ({ children }) => (
                    <p className='text-base lg:text-lg'>{children}</p>
                  ),
                  a: ({ href, children }) => (
                    <HoverText src={href}>{children}</HoverText>
                  ),
                }}
              />
            </section>

            <Footer />
          </article>
        </>
      ) : (
        <div className='h-screen w-full relative'>
          <div className='w-full text-center absolute-center flex-center gap-1'>
            <AnimatedText per='char' preset='shake' delay={6}>
              {`Retrieving Review For ${pageName}`}
            </AnimatedText>
            <WavyEllipsis />
          </div>
        </div>
      )}
    </main>
  );
};

export default Page21;
