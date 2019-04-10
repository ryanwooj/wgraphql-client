import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 200px;
  margin-bottom: 40px;
  position: relative;
`

const Title = styled.span`
  background-color: gold;
  color: black;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
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

const Movie = ({id, title, rating, poster}) => (
  <Link to={`/details/${id}`}>
    <Card background={poster}>
      <Title>
        {title} <br/> {getStars(rating)}
      </Title>
    </Card>
  </Link>
)

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
