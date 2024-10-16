import { creator, siteConfig } from '@/config/site';
import useDate from '@/hooks/use-date';
import { Icons } from '@/components/common/icons';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../common/button';

const { github } = siteConfig;

const Footer = () => {
  const { date, time, year } = useDate();
  return (
    <footer
      className='relative h-[100vh] text-xs lg:text-sm tracking-tighter'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className='fixed bottom-0 inset-x-0 h-[100vh] p-5 md:p-6 lg:p-7 xl:p-8 divide-y divide-darker'>
        <div className='py-12 grid grid-cols-3 max-w-3xl'>
          <div className='flex flex-col space-y-4'>
            <label className='uppercase font-medium text-2xs lg:text-xs'>
              C&apos;est Mon Anniversaire!
            </label>
            <p>{date}</p>
            {time && <p className='time hidden md:block'>{time}</p>}
          </div>
          <div className='flex flex-col space-y-4'>
            <label className='uppercase font-medium text-2xs lg:text-xs'>
              Follow Me
            </label>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to={creator.x}
              target='_blank'
            >
              X (fka Twitter)
            </Link>

            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm',
                })
              )}
              to={github}
              target='_blank'
            >
              Github
            </Link>
          </div>
          <div className='flex flex-col space-y-4'>
            <label className='uppercase font-medium text-2xs lg:text-xs'>
              Contact Me
            </label>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className:
                    'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm text-wrap break-all',
                })
              )}
              to={`mailto:${creator.email}`}
              target='_blank'
            >
              {creator.email}
            </Link>

            <div
              className={cn(
                'font-normal py-0 px-0 h-auto w-fit text-xs lg:text-sm'
              )}
            >
              Call {creator.phone}
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between py-12 gap-3 text-2xs md:text-xs lg:text-sm'>
          <p>
            &#169; {year} {creator.name}. All Rights Reserved.
          </p>
          <Icons.logo className='size-6 md:size-7 lg:size-8 xl:size-9 rounded-full' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
