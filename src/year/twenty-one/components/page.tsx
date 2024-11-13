import AudioToggle from '@/components/layout/audio-toggle';
import { review } from '../lib/review';
import { Footer } from './footer';
import { Paragraph } from './text';

const paragraphs = review.trim().split('\n\n');

interface Page21Props {}

const Page21 = ({}: Page21Props) => {
  return (
    <main>
      <AudioToggle />
      <article className='relative py-20 lg:py-64 flex flex-col items-center space-y-[5vh] lg:space-y-[65vh] container'>
        {paragraphs.map((paragraph, i) => {
          {
            return <Paragraph key={i} paragraph={paragraph} />;
          }
        })}
        <Footer />
      </article>
    </main>
  );
};

export default Page21;
