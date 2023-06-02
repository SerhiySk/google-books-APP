import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100vw;
  background: var(--grey-700);
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1;
  box-shadow: var(--shadow-1);

  .nav-center {
    padding: 1rem 2rem;
    max-width: var(--max-width);
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .container-logo {
    color: var(--white);
    font-weight: bold;
    font-size: 2rem;
    span {
      color: var(--primary-600);
    }
  }
  .btn-login {
    text-transform: capitalize;
    font-size: 1rem;
    letter-spacing: 3px;
    color: var(--primary-800);
    padding: 1rem;
    background: var(--white);
    border: 4px solid var(--primary-600);
    border-radius: var(--borderRadius);
    transition: var(--transition);
    &:hover {
      background: var(--primary-700);
      border: 4px solid var(--white);
      color: var(--white);
    }
  }
  @media (min-width: 668px) {
    .btn-login {
      padding: 1rem 4rem;
    }
  }
`;

export default Wrapper;
