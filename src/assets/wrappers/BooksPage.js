import styled from 'styled-components';

const Wrapper = styled.section`
  margin-bottom: 4rem;
  .container-books {
    display: grid;

    margin-top: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1.5rem;
  }
  h3 {
    margin: 0 auto;
    margin-top: 5rem;
    width: fit-content;
    text-transform: capitalize;
  }
  span {
    font-size: 0.9rem;
  }

  @media (min-width: 1170px) {
    .container-books {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Wrapper;
