import React from 'react';
import { Query } from 'react-apollo';
import {MOVIE_DETAILS} from './queries';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 15px;
  color: black;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  height: 100%;
  width: 70%;
  margin: 30px auto;
  justify-content: center;
  padding: 30px 20px;
  font-size: 18px;
  background-color: papayawhip;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

const PosterContainer = styled.div`
  height: auto;
  width: 40%;
`;

const Poster = styled.div`
  background-image: ${props => `url(${props.poster})`};
  align-items: center;
  background-size: auto;
  height: 320px;
  width: 230px;

`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Ratings = styled.div`
  font-size: 1em;
  color: saddlebrown;
  text-align: right
`;

const Text = styled.div`
  font-size: 1em;
  color: saddlebrown;
  padding: 0 1em;
`;

const Description = styled.div`
  width: 60%;
  height: auto;
  padding: 10px 10px;
`

const getStars = (num) => {
  let stars = num/2;
  if (stars < 1) {
    return '⭐️';
  }else if (stars < 2) {
    return '⭐️⭐️';
  }else if (stars < 3) {
    return '⭐️⭐️⭐️';
  }else if (stars < 4) {
    return '⭐️⭐️⭐️⭐️';
  }else {
    return '⭐️⭐️⭐️⭐️⭐️';
  }
}

const Detail = (props) => {
  const movieId = parseInt(props.match.params.movieId)

  return (
    <Query query={ MOVIE_DETAILS } variables={{movieId}}>
      {({loading, error, data}) => {
        if (loading) return 'loading';
        if (error) return 'error';
        return (
          <Container>
            <Title>{data.movie.title}</Title>
            <br/>
            <ContentContainer >
              <PosterContainer>
                <Poster poster={data.movie.medium_cover_image} />
              </PosterContainer>
              <Description>
                <Ratings>
                  {data.movie.rating} / 10 <br/>
                  {getStars(data.movie.rating)}
                </Ratings>
                <br/>  <br/>
                <Text>{data.movie.description_intro}</Text>
                <br/>
              </Description>
            </ContentContainer>
          </Container>
        );
      }}
    </Query>
)};

export default Detail;
