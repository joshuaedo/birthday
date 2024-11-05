import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        {children}
      </div>
    );
  }
);

Page.displayName = 'Page';
