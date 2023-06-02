import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  margin: 5rem auto;
  padding: 1rem;
  background: var(--neumorphismBackgroundPop);
  box-shadow: var(--neumorphismBoxShadowPop);
  border-radius: var(--borderRadius);
  #viewerCanvas {
    width: 100%;
    height: 80vh;
    margin: 0 auto;
  }
  .tab-btns {
    background: transparent;
    margin-top: 1rem;
    padding-bottom: 0;
    width: 100%;
  }
  .container-btns {
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem;
    display: flex;
    gap: 4rem;
    justify-content: space-around;
    background: var(--neumorphismInsideBackground);
    box-shadow: var(--neumorphismInsideBoxShadow);
    border-radius: var(--borderRadius);
    div {
      font-size: 34px;
      gap: 1rem;
    }
    button {
      color: var(--primary-600);
      background: transparent;
      font-size: 1.5rem;
      border: 3px solid var(--primary-800);
      transition: var(--transition);
      border: transparent;
      cursor: pointer;
      :hover {
        color: var(--primary-800);
      }
    }
    .control-page {
      margin-left: 0.5rem;
    }
    .control-zoom {
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 668px) {
    width: 55vw;
  }
`;

export default Wrapper;
