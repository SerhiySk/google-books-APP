import styled from 'styled-components';
const Wrapper = styled.div`
  position: relative;
  min-width: 200px;
  width: 90vw;
  max-width: 650px;
  margin: 0 auto;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  border-radius: 6px;

  /* mirror */
  background: transparent;

  input {
    width: 100%;
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.65);

    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);

    transition: var(--transition);
    ::placeholder {
      color: var(--black);
      text-transform: uppercase;
      letter-spacing: var(--letterSpacing);
      transition: var(--transition);
    }
    ::-webkit-search-cancel-button {
      position: relative;
      right: 30px;
    }
    :hover,
    :focus {
      background: rgba(255, 255, 255, 0.8);
      ::placeholder {
        letter-spacing: 3px;
      }
    }
  }
  .btn-search {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    border: transparent;
    color: var(--grey-500);
    line-height: 1rem;
    font-size: 25px;
    cursor: pointer;
    transition: var(--transition);
    :hover {
      color: var(--grey-400);
    }
  }
`;
export default Wrapper;
