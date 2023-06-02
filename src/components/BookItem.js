import Stars from './Stars';
import React from 'react';
import Wrapper from '../assets/wrappers/BookItem';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
const BookItem = ({
  id,
  title,
  subtitle,
  authors,
  imageLinks,
  averageRating,
  ratingsCount,
}) => {
  const imgSrc = imageLinks?.thumbnail || url;
  const titleTemp = subtitle ? title + ': ' + subtitle : title;
  const titleText =
    titleTemp.length > 30 ? `${titleTemp.substring(0, 30)}...` : titleTemp;

  const authorsTemp = authors?.join(', ') || 'none';

  const authorsText =
    authorsTemp.length > 15
      ? `${authorsTemp.substring(0, 15)}...`
      : authorsTemp;

  return (
    <Link to={`/books/` + id}>
      <Wrapper>
        <div className="container-img" key={id}>
          <img src={imgSrc} alt={titleText} />
        </div>
        <footer>
          <div className="container-description">
            <div className="title-book">
              <h4>{titleText}</h4>
            </div>
            <p>{authorsText}</p>
          </div>
          <Stars starsCount={averageRating} reviewsCount={ratingsCount} />
        </footer>
      </Wrapper>
    </Link>
  );
};
export default BookItem;
