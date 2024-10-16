import { useState, useEffect } from 'react';
import useMediaQuery from './use-media-query';

const useDate = () => {
  const locale = 'en';
  const [today, setToday] = useState(new Date());
  const { lg } = useMediaQuery();

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 60 * 1000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Determine if today is the birthday (November 28)
  const isBirthday = today.getDate() === 28 && today.getMonth() === 10; // 0-indexed months

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'long',
  })}`;

  const month = today.getMonth();
  const hour = today.getHours();
  const wish = `Good ${
    hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Ebening'
  }`;

  const year = today.getFullYear();

  // Set time to an empty string if it's between September and December (months 8 to 11)
  const time =
    month >= 8 && month <= 11 && !lg
      ? ''
      : today.toLocaleTimeString(locale, {
          hour: 'numeric',
          hour12: true,
          minute: 'numeric',
        });

  const isEbening = hour >= 17;

  return {
    date,
    time,
    wish,
    year,
    isEbening,
    isBirthday,
  };
};

export default useDate;
