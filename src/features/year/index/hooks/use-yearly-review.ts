import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getReviews } from '../lib/requests';

const useYearlyReview = (yearSlug?: string) => {
  const [isContentFetched, setIsContentFetched] = useState(false);

  const {
    data: documentContent,
    isFetching: isFetchingContent,
    isFetched: isContentLoaded,
  } = useQuery({
    queryKey: ['yearly-review', yearSlug],
    queryFn: () => getReviews(yearSlug ?? ''),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isFetchingContent && !isContentLoaded) {
      setIsContentFetched(false);
    } else if (!isFetchingContent && isContentLoaded && documentContent) {
      setIsContentFetched(true);
    } else {
      setIsContentFetched(false);
    }
  }, [isFetchingContent, isContentLoaded, documentContent]);

  return {
    documentContent,
    isContentFetched,
    isFetchingContent,
  };
};

export default useYearlyReview;
