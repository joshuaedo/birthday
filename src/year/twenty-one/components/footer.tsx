import { Button, buttonVariants } from '@/components/common/button';
import { Icons } from '@/components/common/icons';
import { Link } from '@/components/common/link';
import { cn } from '@/lib/utils';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  const handleGoBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='lg:grid grid-cols-2 w-full space-y-6 lg:space-y-0 lg:gap-12'>
      <Link
        to='/'
        className={cn(
          buttonVariants({
            variant: 'outline',
            size: 'lg',
          }),
          'w-full gap-12 text-base lg:text-3xl border-tertiary p-12 lg:p-32 rounded-[4px] text-center bg-secondary'
        )}
      >
        <Icons.longArrowDark className='size-12 lg:size-40 rotate-90' />
        Go back home
      </Link>
      <Button
        className='w-full gap-12 lg:gap-0 text-base lg:text-3xl border-tertiary p-12 lg:p-32 rounded-[4px] bg-secondary'
        variant='outline'
        size='lg'
        onClick={handleGoBackToTop}
      >
        <Icons.longArrowDark className='size-12 lg:size-40 rotate-180' />
        Go back to top
      </Button>
    </div>
  );
};
