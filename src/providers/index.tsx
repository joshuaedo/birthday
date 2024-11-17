import * as React from 'react';
import { ScrollerProvider } from './scroller';
import { SoundProvider } from './sound';
import { QueryProvider } from './query';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <SoundProvider>
        <ScrollerProvider>{children}</ScrollerProvider>
      </SoundProvider>
    </QueryProvider>
  );
};

export default Providers;
