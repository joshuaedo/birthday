import React from 'react';
import { Button } from './button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
import Media from './media';

const HoverText = ({
  src,
  children,
}: {
  src: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='link' className='px-0 py-0 h-auto font-bold'>
          {children}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        {src && <Media src={src} className='rounded-[4px] shadow-md' />}
      </HoverCardContent>
    </HoverCard>
  );
};

export { HoverText };
