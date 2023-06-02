import styled from 'styled-components';
const Wrapper = styled.div`
  min-width: 150px;
  width: 80vw;
  display: flex;
  align-items: center;
  border-radius: var(--borderRadius);
  gap: 5px;
  justify-content: space-between;

  select {
    color: var(--grey-500);
    letter-spacing: var(--letterSpacing);
    padding: 5px;
    width: 50vw;
    max-width: 350px;
    cursor: pointer;
    border: none;

    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.65);

    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);

    transition: var(--transition);

    :hover,
    :focus {
      background: rgba(255, 255, 255, 0.8);
      letter-spacing: 3px;
    }
  }
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: start;

    h5 {
      width: 100px;
      font-size: 1.2rem;
      font-weight: 900;
    }
    select {
      padding: 0.7rem;
      font-size: 1rem;
    }
  }
  @media (min-width: 1000px) {
    justify-content: center;
    gap: 1rem;
    h5 {
      width: fit-content;
      font-size: 1.3rem;
    }
  }
`;
export default Wrapper;
