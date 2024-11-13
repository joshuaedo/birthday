import * as React from 'react';
import { ScrollerProvider } from './scroller';
import { SoundProvider } from './sound';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SoundProvider>
      <ScrollerProvider>{children}</ScrollerProvider>
    </SoundProvider>
  );
};

export default Providers;
