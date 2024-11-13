import { Button } from '@/components/common/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/common/hover-card';
import Media from '@/components/common/media';
import { media } from '../lib/db';

const HoverText = ({
  src,
  word,
}: {
  src: string | undefined;
  word: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='link' className='px-0 font-bold'>
          {word}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        {src && <Media src={src} className='rounded-[4px] shadow-md' />}
      </HoverCardContent>
    </HoverCard>
  );
};

const getMediaForKeyWord = (word: string) => {
  return Object.values(media).find((item) => item.keyword === word);
};

const Paragraph = ({ paragraph }: { paragraph: string }) => {
  const words = paragraph.split(' ');

  return (
    <div className='prose max-w-3xl'>
      <p>
        {words.map((word, i) => {
          // Check if the word matches any media entry
          const mediaItem = getMediaForKeyWord(word);
          if (mediaItem) {
            const mediaSrc = mediaItem.video || mediaItem.image;
            return <HoverText key={i} src={mediaSrc} word={word} />;
          }
          return <span key={i}> {word} </span>;
        })}
      </p>
    </div>
  );
};

export { Paragraph };
