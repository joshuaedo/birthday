import { AllReviewsType, SingleReviewType } from '../types/validators';

import { queryAllReviews, querySingleReview } from './queries';

export async function request(query: string, variables?: Record<string, any>) {
  const hygraphEndpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT;
  const hygraphToken = import.meta.env.VITE_HYGRAPH_TOKEN;

  if (!hygraphEndpoint) {
    throw new Error('VITE_HYGRAPH_ENDPOINT is not defined');
  }

  if (!hygraphToken) {
    throw new Error('VITE_HYGRAPH_TOKEN is not defined');
  }

  const requestBody = { query, variables: variables || {} };

  try {
    const response = await fetch(hygraphEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${hygraphToken}`,
      },
      body: JSON.stringify(requestBody),
    });

    return response.json();
  } catch (error: any) {
    throw new Error(`Request failed: ${error.message}`);
  }
}

// queries

export async function getReviews(slug?: string) {
  const query = slug ? querySingleReview : queryAllReviews;
  const variables = slug ? { slug } : {};

  try {
    const result = await request(query, variables);

    if (slug) {
      return result?.data?.post as SingleReviewType;
    } else {
      return result?.data?.posts as AllReviewsType[];
    }
  } catch (error: any) {
    throw new Error(`Failed to get posts: ${error.message}`);
  }
}
