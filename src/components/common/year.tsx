import { useState } from 'react';
import { motion } from 'framer-motion';
import { splitTitle, truncateString } from '@/lib/utils';
import Image from './image';
import { useNavigate } from 'react-router-dom';
import { GalleryItem } from '@/lib/gallery';

const anim = {
  initial: { width: 0 },

  open: {
    width: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },

  closed: { width: 0 },
};

interface YearProps {
  year: GalleryItem;
}

const Year: React.FC<YearProps> = ({ year }) => {
  const [isActive, setIsActive] = useState(false);
  const title = year.alt;
  const { title1, title2 } = splitTitle(truncateString(title, 25));
  const navigate = useNavigate();

  return (
    <div
      key={year.id}
      onDoubleClick={() => navigate(`/year/${year.id}`)}
      className='flex justify-center'
    >
      <div
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onClick={() => setIsActive(true)}
        className='w-[90%] flex items-center justify-center cursor-pointer border-t border-foreground dark:border-[#333333] py-[0.9rem]'
      >
        <p className='font-thin m-0 text-[1.5rem]'>{title1}</p>
        <motion.div
          variants={anim}
          animate={isActive ? 'open' : 'closed'}
          className='flex justify-center overflow-hidden w-0'
        >
          <Image
            src={year.src}
            alt={year.alt}
            height={1000}
            width={1000}
            onClick={() => navigate(`/year/${year.id}`)}
            className='w-[2.5rem] mx-2'
          />
        </motion.div>
        <p className='font-thin m-0 text-[1.5rem]'>{title2}</p>
      </div>
    </div>
  );
};

export default Year;
