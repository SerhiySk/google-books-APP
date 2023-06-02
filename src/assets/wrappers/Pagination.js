import styled from 'styled-components';

const Wrapper = styled.section`
  height: fit-content;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  .btn-container {
    width: fit-content;
    max-width: calc(100% - 0.4rem - 70px);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2px;
  }
  .page-btn {
    background: var(--neumorphismBackgroundPop);
    box-shadow: var(--neumorphismBoxShadowPop);

    border-color: transparent;
    width: 35px;
    height: 30px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .active {
    background: var(--neumorphismBackgroundNotPopActive);
    box-shadow: var(--neumorphismBoxShadowNotPop);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    width: 40px;
    height: 40px;
    background: var(--neumorphismBackgroundPop);
    box-shadow: var(--neumorphismBoxShadowPop);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: none;
    }
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    :active {
      background: var(--neumorphismBackgroundNotPop);
      box-shadow: var(--neumorphismBoxShadowNotPop);
    }
  }

  @media (min-width: 668px) {
    gap: 1rem;

    .btn-container {
      gap: 0.5rem;
    }
    .page-btn {
      min-width: 50px;
      height: 40px;
    }
    .prev-btn,
    .next-btn {
      width: 100px;
      span {
        display: block;
      }
    }
  }
`;
export default Wrapper;
