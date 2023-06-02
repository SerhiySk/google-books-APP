import React from 'react';
import Wrapper from '../assets/wrappers/Stars';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ starsCount, reviewsCount }) => {
  const stars = starsCount ? starsCount : 0;
  const reviews = reviewsCount ? reviewsCount : 0;

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    if (stars < index + 0.5) return <BsStar key={index + 1} />;
    else if (stars < index + 1) return <BsStarHalf key={index + 1} />;
    else return <BsStarFill key={index + 1} />;
  });

  return (
    <Wrapper className="container-rate">
      <span>
        {tempStars.map(star => star)}{' '}
        <span className="text">{`  ${stars}/5`}</span>
      </span>

      <p>{reviews + ' ratings'}</p>
    </Wrapper>
  );
};

export default Stars;
