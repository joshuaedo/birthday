import { buttonVariants } from '@/components/common/button';
import { Page } from '@/components/common/page';
import { cn } from '@/lib/utils';

interface NotFoundPageProps {}

const NotFoundPage = ({}: NotFoundPageProps) => {
  return (
    <Page id='not-found' className='flex-center h-screen'>
      <div className='flex-center w-[80%] md:w-[70%] lg:w-[60%] h-[60svh] md:h-[50svh] rounded-[3px] lg:-mb-32 bg-secondary border border-tertiary'>
        <div className='flex-col-center gap-2 lg:gap-4'>
          <p className='text-lg lg:text-xl lowercase'>OOPs! Page not found.</p>
          <div className='flex gap-2 lg:gap-4'>
            <a
              href={'/'}
              className={cn(
                'text-xs md:text-sm border-tertiary',
                buttonVariants({ variant: 'outline' })
              )}
            >
              Go back to homepage
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NotFoundPage;
