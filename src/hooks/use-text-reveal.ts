import gsap from 'gsap';
import { useEffect } from 'react';

const useTextReveal = () => {
  useEffect(() => {
    gsap.to('.text-reveal', {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.2,
    });
  }, []);
  return {};
};

export default useTextReveal;
