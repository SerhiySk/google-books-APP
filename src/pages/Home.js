import React, { useEffect } from 'react';
import { Books } from '../components';
import styled from 'styled-components';
import HeroSearch from '../components/HeroSearch';

const Home = () => {
  return (
    <Wrapper>
      <HeroSearch />
      <div className="section-center">
        <Books />
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  width: 100%;
  margin: 0 auto;
`;
