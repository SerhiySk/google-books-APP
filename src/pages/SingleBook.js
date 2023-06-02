import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import { Link, useParams } from 'react-router-dom';
import { Loading, BookViewer } from '../components';
import Wrapper from '../assets/wrappers/SingleBookPage';
import { Stars } from '../components';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
const SingleBook = () => {
  const { book, isLoading, isBookError, setSingleBook } = useGlobalContext();
  const id = useParams().id;

  useEffect(() => {
    setSingleBook(id);
  }, []);
  if (isLoading || (!isBookError && !book)) return <Loading />;
  if (isBookError) return <h3>Something went wrong</h3>;

  const {
    title,
    subtitle,
    imageLinks,
    averageRating,
    ratingsCount,
    description,
    authors,
    pageCount,

    publisher,
    publishedDate,
  } = book.volumeInfo;

  const imgSrc = imageLinks?.thumbnail || url;
  const titleTemp = subtitle ? title + ': ' + subtitle : title;
  const titleText = titleTemp;

  const authorsTemp = authors?.join(', ') || 'none';

  const authorsText = authorsTemp;

  return (
    <Wrapper>
      <div className="section">
        <div className="section-center section-description-header">
          <article>
            <p>Ebook | {pageCount} pages</p>
            <div className="container-title">
              <h2>{titleText}</h2>
              {authors && (
                <p>
                  By <span>{authorsText}</span>
                </p>
              )}
            </div>
            <footer>
              <Stars starsCount={averageRating} reviewsCount={ratingsCount} />
              <Link to={'/'} className="button">
                all books
              </Link>
            </footer>
          </article>
          <div className="section-img">
            <div className="background"></div>
            <div className="container-img" key={id}>
              <img src={imgSrc} alt={titleText} className="img-book" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <BookViewer id={id} />
      </div>
      <div className="section">
        <div className="section-center section-description-footer">
          <h3>About this ebook</h3>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="book-description"
          ></div>
          <hr />
          <div className="publish-details">
            {publisher && (
              <p>
                {' '}
                <span>Publisher:</span> {publisher}
              </p>
            )}

            {publishedDate && (
              <p>
                {' '}
                <span>Published:</span> {publishedDate}
              </p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleBook;
