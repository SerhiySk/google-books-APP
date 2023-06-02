import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export default customFetch;
