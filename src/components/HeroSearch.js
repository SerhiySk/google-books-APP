import SearchInput from './SearchInput';
import Wrapper from '../assets/wrappers/HeroSearch';
import { useEffect, useState } from 'react';
import { sortOptions, filterOptions } from '../helpers/constants';
import { useGlobalContext } from '../context/context';

import FormRow from './FormRow';
const initialState = { sort: 'relevance', category: 'all' };
const HeroSearch = () => {
  const [state, setState] = useState(initialState);

  const { handleSearchChange, resetSearch } = useGlobalContext();
  useEffect(() => {
    console.log('Reset');

    resetSearch();
  }, []);

  const handleFilterChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
    handleSearchChange({ name, value });
  };

  return (
    <Wrapper>
      <h2>search for books</h2>
      <form onSubmit={e => e.preventDefault()}>
        <SearchInput />
        <div className="container-filters">
          <FormRow
            name="category"
            value={state.category}
            label="categories"
            options={filterOptions}
            handleChange={handleFilterChange}
          />
          <FormRow
            name="sort"
            value={state.sort}
            label="sort by"
            options={sortOptions}
            handleChange={handleFilterChange}
          />
        </div>
      </form>
    </Wrapper>
  );
};
export default HeroSearch;
