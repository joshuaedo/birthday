import { Paragraph as AnimatedParagraph } from '@/year/21/components/animated-text';
import { review } from '../lib/review';
import useMediaQuery from '@/hooks/use-media-query';

const paragraphs = review.trim().split('\n\n');

interface Page21Props {}

const Page21 = ({}: Page21Props) => {
  const { lg } = useMediaQuery();
  return (
    <article className='relative py-20 lg:py-64 flex flex-col items-center space-y-[5vh] lg:space-y-[60vh] container'>
      {paragraphs.map((paragraph, i) => {
        if (lg) {
          return <AnimatedParagraph key={i} paragraph={paragraph} />;
        } else {
          return <p key={i}>{paragraph}</p>;
        }
      })}
    </article>
  );
};

export default Page21;
