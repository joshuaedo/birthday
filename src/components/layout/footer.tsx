import { creator } from '@/config/site';
import useDate from '@/hooks/use-date';
import { Icons } from '@/components/common/icons';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../common/button';
import useMediaQuery from '@/hooks/use-media-query';

const Footer = () => {
  const { date, time, year } = useDate();
  const { lg } = useMediaQuery();

  return (
    <footer
      className={cn(
        'relative tracking-tighter w-full',
        lg ? 'h-[100vh] text-sm' : 'text-xs container'
      )}
      style={
        lg ? { clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' } : {}
      }
    >
      <div
        className={cn(
          lg
            ? 'fixed bottom-0 inset-x-0 h-[100vh] p-7 xl:p-8 divide-y divide-gray-700'
            : ''
        )}
      >
        {lg ? (
          <div className='py-12 grid grid-cols-3 max-w-3xl'>
            <div className='flex flex-col space-y-4'>
              <label className='uppercase font-medium text-xs'>
                C&apos;est Mon Anniversaire!
              </label>
              <p>{date}</p>
              {time && <p className='time hidden md:block'>{time}</p>}
            </div>
            <div className='flex flex-col space-y-4'>
              <label className='uppercase font-medium text-xs'>Follow Me</label>
              <Link
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    className: 'font-normal py-0 px-0 h-auto w-fit text-sm',
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
                    className: 'font-normal py-0 px-0 h-auto w-fit text-sm',
                  })
                )}
                to={creator.github}
                target='_blank'
              >
                Github
              </Link>
            </div>
            <div className='flex flex-col space-y-4'>
              <label className='uppercase font-medium text-xs'>
                Contact Me
              </label>
              <Link
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    className:
                      'font-normal py-0 px-0 h-auto w-fit text-sm text-wrap break-all',
                  })
                )}
                to={`mailto:${creator.email}`}
                target='_blank'
              >
                {creator.email}
              </Link>
              <div className='font-normal py-0 px-0 h-auto w-fit text-sm'>
                Call {creator.phone}
              </div>
            </div>
          </div>
        ) : null}

        <div className='flex items-center justify-between py-9'>
          <span>
            &#169; {year} {creator.name}. All Rights Reserved.
          </span>

          <span>
            <Icons.logo
              className={cn(
                lg ? 'size-8 xl:size-9' : 'size-6 md:size-7',
                'rounded-full'
              )}
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
