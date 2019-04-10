import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  {
    movies(limit:25, rating:7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
query getMovie($movieId: Int!) {
  movie(id: $movieId) {
    medium_cover_image
    title
    rating
    description_intro
  }
}
`;
