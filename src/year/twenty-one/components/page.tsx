import { review } from '../lib/review';
import { Paragraph } from './text';

const paragraphs = review.trim().split('\n\n');

interface Page21Props {}

const Page21 = ({}: Page21Props) => {
  return (
    <article className='relative py-20 lg:py-64 flex flex-col items-center space-y-[5vh] lg:space-y-[50vh] container'>
      {paragraphs.map((paragraph, i) => {
        {
          return <Paragraph key={i} paragraph={paragraph} />;
        }
      })}
    </article>
  );
};

export default Page21;
