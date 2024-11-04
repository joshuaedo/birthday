import { buttonVariants } from '@/components/common/button';
import { cn } from '@/lib/utils';

interface NotFoundPageProps {}

const NotFoundPage = ({}: NotFoundPageProps) => {
  return (
    <section id='not-found' className='flex-center h-screen'>
      <div className='flex-center w-[80%] md:w-[70%] lg:w-[60%] h-[60svh] md:h-[50svh] rounded-3xl shadow lg:-mb-32'>
        <div className='flex-col-center gap-2 lg:gap-4'>
          <p className='text-lg lg:text-xl lowercase'>OOPs! Page not found.</p>
          <div className='flex gap-2 lg:gap-4'>
            <a
              href={'/'}
              className={cn(
                'text-xs md:text-sm border-gray-700',
                buttonVariants({ variant: 'outline' })
              )}
            >
              Go back to homepage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
