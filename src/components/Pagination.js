import Wrapper from '../assets/wrappers/Pagination';
import { useGlobalContext } from '../context/context';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
const Pagination = () => {
  const {
    numOfPages,
    setBooks,
    searchState: { page },
    changePage,
  } = useGlobalContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        {HiChevronDoubleLeft()} <span>prev</span>
      </button>
      <div className="btn-container">
        {pages.map((_, index) => {
          const pageIndex = index + 1;
          return (
            <button
              key={pageIndex}
              className={pageIndex === page ? 'page-btn active' : 'page-btn'}
              onClick={() => {
                changePage(pageIndex);
                setBooks();
              }}
            >
              {pageIndex}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        <span>next</span>
        {HiChevronDoubleRight()}
      </button>
    </Wrapper>
  );
};
export default Pagination;
