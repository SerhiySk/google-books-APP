import Wrapper from '../assets/wrappers/BooksPage';
import { useGlobalContext } from '../context/context';
import BookItem from './BookItem';
import Loading from './Loading';
import Pagination from './Pagination';
const Books = () => {
  const { books, isLoading, search, totalItems } = useGlobalContext();
  if (isLoading) return <Loading />;

  return (
    <Wrapper>
      <h3>
        found {totalItems} results for “{search}”
      </h3>

      {books ? (
        <div className="container-books">
          {books.map((book, i) => (
            <BookItem key={i} {...book.volumeInfo} id={book.id} />
          ))}
        </div>
      ) : (
        <p>No book found</p>
      )}
      <Pagination />
    </Wrapper>
  );
};
export default Books;
