import image from '../images/pexels-lil-artsy-3368816.jpg';

import styled from 'styled-components';
const Wrapper = styled.div`
  min-height: 30vh;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${image}) center/cover no-repeat fixed;
  color: var(--white);
  position: relative;
  overflow-x: hidden;

  .container-filters {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    width: 90vw;
    max-width: 650px;
  }
  @media (min-width: 1000px) {
    .container-filters {
      margin-top: 3rem;
      max-width: 1000px;
      gap: 2rem;
      flex-direction: row;
    }
  }
`;
export default Wrapper;
