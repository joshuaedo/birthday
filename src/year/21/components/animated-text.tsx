import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { parseParagraphToWords } from '@/lib/utils';

const Paragraph = ({ paragraph }: { paragraph: string }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = parseParagraphToWords(paragraph);

  return (
    <div ref={container} className='prose max-w-3xl'>
      <p className='flex text-sm flex-wrap'>
        {words.map((word, index) => {
          return (
            <Word
              key={index}
              progress={scrollYProgress}
              index={index}
              totalWords={words.length}
              bold={word.bold}
            >
              {word.text}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

const Word = ({
  children,
  progress,
  index,
  totalWords,
  bold,
}: {
  children: string;
  progress: any;
  index: number;
  totalWords: number;
  bold: boolean;
}) => {
  const start = index / totalWords;
  const end = (index + 1) / totalWords;

  return (
    <span className={`relative mr-3 mt-3 ${bold ? 'font-bold' : ''}`}>
      {children.split('').map((char, i) => (
        <Character
          key={i}
          progress={progress}
          range={[start, end]}
          index={i}
          totalChars={children.length}
        >
          {char}
        </Character>
      ))}
    </span>
  );
};

const Character = ({
  children,
  progress,
  range,
  index,
  totalChars,
}: {
  children: string;
  progress: any;
  range: [number, number];
  index: number;
  totalChars: number;
}) => {
  const charStart = range[0] + (index / totalChars) * (range[1] - range[0]);
  const charEnd = range[0] + ((index + 1) / totalChars) * (range[1] - range[0]);
  const opacity = useTransform(progress, [charStart, charEnd], [0, 1]);

  return (
    <span className='relative'>
      <span className='absolute opacity-20'>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export { Paragraph };
