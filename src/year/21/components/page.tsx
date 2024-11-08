import { Paragraph as AnimatedParagraph } from '@/year/21/components/animated-text';
import { review } from '../lib/review';
import useHighPerformanceDevice from '@/hooks/use-high-performance-device';
import { Paragraph } from './text';

const paragraphs = review.trim().split('\n\n');

interface Page21Props {}

const Page21 = ({}: Page21Props) => {
  const isHighPerformance = useHighPerformanceDevice();

  return (
    <article className='relative py-20 lg:py-64 flex flex-col items-center space-y-[5vh] lg:space-y-[50vh] container'>
      {paragraphs.map((paragraph, i) => {
        if (isHighPerformance) {
          return <AnimatedParagraph key={i} paragraph={paragraph} />;
        } else {
          return <Paragraph key={i} paragraph={paragraph} />;
        }
      })}
    </article>
  );
};

export default Page21;
