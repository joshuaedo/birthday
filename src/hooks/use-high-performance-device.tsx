import { useState, useEffect } from 'react';

const useHighPerformanceDevice = (acceptableTime = 1) => {
  const [isHighPerformance, setIsHighPerformance] = useState(true);

  useEffect(() => {
    const benchmarkTest = () => {
      const startTime = new Date().getTime();

      // Run a simple operation to measure performance
      for (let i = 0; i < 1e7; i++) {
        /* empty */
      } // Simple loop to simulate some work

      const endTime = new Date().getTime();
      const elapsedMilliseconds = endTime - startTime;

      return elapsedMilliseconds < acceptableTime;
    };

    const result = benchmarkTest();
    setIsHighPerformance(result);
  }, [acceptableTime]);

  return isHighPerformance;
};

export default useHighPerformanceDevice;
