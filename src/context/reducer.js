import {
  SET_LOADING,
  CHANGE_PAGE,
  RESET_SEARCH,
  RESET_BOOK_ERROR,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_SINGLE_BOOK_SUCCESS,
  FETCH_SINGLE_BOOK_ERROR,
  HANDLE_CHANGE,
} from './actions';

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true, showAlert: false, editComplete: false };
  }
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      searchState: { ...state.searchState, page: action.payload },
    };
  }
  if (action.type === HANDLE_CHANGE) {
    const { name, value } = action.payload;

    return {
      ...state,
      searchState: { ...state.searchState, [name]: value, page: 1 },
    };
  }
  if (action.type === RESET_SEARCH) {
    return { ...state, searchState: action.payload };
  }

  if (action.type === RESET_BOOK_ERROR) {
    return { ...state, isBookError: false };
  }

  if (action.type === FETCH_BOOKS_SUCCESS) {
    const { items, totalItems } = action.payload;
    return {
      ...state,
      isLoading: false,
      books: items,
      numOfPages: Math.ceil(totalItems / 40),
      totalItems: totalItems,
    };
  }

  if (action.type === FETCH_BOOKS_ERROR) {
    return { ...state, isLoading: false };
  }

  if (action.type === FETCH_SINGLE_BOOK_SUCCESS) {
    return { ...state, isLoading: false, book: action.payload };
  }

  if (action.type === FETCH_SINGLE_BOOK_ERROR) {
    return { ...state, isLoading: false, book: null, isBookError: true };
  }

  throw new Error(`no such action : ${action}`);
};

export default reducer;
