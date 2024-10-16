import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from './image';

export const Gallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      title: 1,
      src: 'one',
      color: 'purple',
      scale: scale4,
    },
    {
      title: 4,
      src: 'four',
      color: 'green',
      scale: scale5,
    },
    {
      title: 17,
      src: 'seventeen',
      color: 'blue',
      scale: scale6,
    },
    {
      title: 19,
      src: 'nineteen',
      color: 'yellow',
      scale: scale8,
    },
    {
      title: 21,
      src: 'twenty-one',
      color: 'red',
      scale: scale9,
    },
  ];

  return (
    <div className='relative h-[300vh]'>
      <div className='sticky top-0 h-screen overflow-hidden'>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 w-full h-full flex items-center justify-center
              ${index === 1 && 'top-[-30vh] left-[5vw]'}
              ${index === 2 && 'top-[-10vh] left-[-25vw]'}
              ${index === 3 && 'left-[27.5vw]'}
              ${index === 4 && 'top-[27.5vh] left-[5vw]'}
              ${index === 5 && 'top-[27.5vh] left-[-22.5vw]'}
              ${index === 6 && 'top-[22.5vh] left-[25vw]'}
            `}
            >
              <div
                className={`relative
              ${index === 0 && 'w-[5vw] h-[5vh]'}
              ${index === 1 && 'w-[10vw] h-[10vh]'}
              ${index === 2 && 'w-[15vw] h-[15vh]'}
              ${index === 3 && 'w-[25vw] h-[25vh]'}
              ${index === 4 && 'w-[30vw] h-[30vh]'}
              ${index === 5 && 'w-[35vw] h-[35vh]'}
              ${index === 6 && 'w-[40vw] h-[40vh]'}
            `}
              >
                <Image
                  src={`https://joshuaedo.sirv.com/birthday/images/webp/${src}.webp`}
                  alt={src}
                  placeholder='blur'
                  blurDataURL={`https://joshuaedo.sirv.com/birthday/images/webp/${src}.webp?w=10&h=10&blur=50`}
                  className='object-contain size-full'
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
