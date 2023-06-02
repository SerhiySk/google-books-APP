import axios from '../helpers/axios';
import React, { useContext, useEffect, useReducer } from 'react';

import {
  SET_LOADING,
  HANDLE_CHANGE,
  RESET_SEARCH,
  CHANGE_PAGE,
  RESET_BOOK_ERROR,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_SINGLE_BOOK_SUCCESS,
  FETCH_SINGLE_BOOK_ERROR,
} from './actions';
import reducer from './reducer';

const initialSearchState = {
  sort: 'relevance',
  page: 1,
  search: '',
  category: 'all',
};
const initialState = {
  isLoading: false,
  isBookError: false,
  books: [],
  book: null,
  totalItems: 0,
  numOfPages: 1,
  singleBookError: false,
  searchState: { ...initialSearchState },
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const changePage = page => {
    dispatch({ type: CHANGE_PAGE, payload: page });
  };
  const resetSearch = () => {
    dispatch({ type: RESET_SEARCH, payload: { ...initialSearchState } });
  };
  const resetBookError = () => {
    dispatch({ type: RESET_BOOK_ERROR });
  };
  const handleSearchChange = inputObject => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: inputObject,
    });
  };

  const setBooks = async () => {
    const { search, category, sort, page } = state.searchState;

    setLoading();
    let url = `/volumes?q=`;
    if (search) url += `+intitle:${search}`;
    url += `+inauthor:&langRestrict=en&orderBy=${sort}`;
    if (category !== 'all') url += `&filter=${category}`;
    try {
      const startIndex = (page - 1) * 40;
      // I make a request twice since with startIndex > 1 query the server always sends different totalItems. So the first request is used to obtain totalItems (This way it shows more correct totalItems, but still not perfect)
      const {
        data: { totalItems },
      } = await axios.get(url);
      const { data } = await axios.get(
        url + `&startIndex=${startIndex}&maxResults=40`
      );

      dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: { items: data.items, totalItems: totalItems },
      });
    } catch (error) {
      dispatch({ type: FETCH_BOOKS_ERROR });
    }
  };
  const setSingleBook = async id => {
    setLoading();
    resetBookError();
    try {
      const { data } = await axios.get(`/volumes/${id}`);

      dispatch({ type: FETCH_SINGLE_BOOK_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_BOOK_ERROR });
    }
  };

  useEffect(() => {
    setBooks();
  }, [state.searchState]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        changePage,
        setBooks,
        resetSearch,
        setLoading,
        handleSearchChange,
        setSingleBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
