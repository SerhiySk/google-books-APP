import Wrapper from '../assets/wrappers/SearchInput';
import { GoSearch } from 'react-icons/go';
import { useMemo, useState } from 'react';
import { useGlobalContext } from '../context/context';
const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { handleSearchChange } = useGlobalContext();

  const debounce = () => {
    let timeoutID;
    setSearch('');

    return e => {
      const name = e.target.name;
      const value = e.target.value;

      setSearch(value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleSearchChange({ name, value });
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  return (
    <Wrapper className="container-search">
      <input
        name="search"
        type="search"
        placeholder="Search"
        value={search}
        onChange={optimizedDebounce}
      />
      <button type="submit" value="search" className="btn-search">
        <GoSearch />
      </button>
    </Wrapper>
  );
};
export default SearchInput;
