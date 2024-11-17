// /
export const queryAllReviews = `query AllReviewsQuery {
  posts(last: 100, orderBy: date_DESC) {
    id
    slug
    title
    author {
      name
    }
    date
    excerpt
    coverImage {
      url
      id
    }
  }
}`;

// /year/[yearSlug]
export const querySingleReview = `query SingleReview($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      author {
        name
        picture {
          url
        }
      }
      content {
        raw
      }
      date
      updatedAt
      excerpt
      coverImage {
        url
        id
      }
    }
  }`;
