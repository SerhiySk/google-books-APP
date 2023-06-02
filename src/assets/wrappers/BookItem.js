import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid var(--grey-200);
  max-width: var(--max-width);
  background: linear-gradient(145deg, #d6d1c3, #fff8e8);
  box-shadow: 5px 5px 10px #838077, -5px -5px 10px #ffffff;
  border-radius: var(--borderRadius);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15rem auto;
  grid-gap: 1rem;
  transition: var(--transition);
  :hover {
    background: linear-gradient(145deg, #fff8e8, #d6d1c3);
    box-shadow: 5px 5px 10px #838077, -5px -5px 10px #ffffff;
    .container-img {
      box-shadow: 5px 5px 10px #69665f, -5px -5px 10px #ffffff;
    }
  }
  img {
    object-fit: contain;
  }
  footer {
    display: flex;
    grid-gap: 1rem;
    justify-content: space-between;
    flex-direction: column;
    color: var(--grey-900);
    .title-book {
      overflow: hidden;
      min-height: 3rem;
      h4 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
  .container-img {
    margin: 0 auto;
    width: fit-content;
    box-shadow: 5px 5px 10px #b0aca1, -5px -5px 10px #ffffff;
  }
  .container-rate {
    justify-content: start;
    flex-direction: column;
    gap: 2px;
  }
  h4 {
    font-size: 1.5rem;
  }
`;

export default Wrapper;
