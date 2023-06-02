import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  .section {
    margin: 0 auto;
    background: var(--primary-100);
  }
  .section-description-header {
    max-width: var(--max-width);

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: 2rem;
    footer {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: space-between;
    }
  }
  article {
    padding: 1rem;
  }
  .button {
    font-weight: 600;
    padding: 1rem 2rem;
    max-width: 300px;
    border: none;
    border-radius: 5px;
    background: var(--neumorphismBackgroundPop);
    box-shadow: var(--neumorphismBoxShadowPop);
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary-700);
    font-size: 15px;
    transition: var(--transition);
    :active {
      background: var(--neumorphismInsideBackground);
      box-shadow: var(--neumorphismInsideBoxShadow);
    }
  }
  .container-title {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    p {
      span {
        border-bottom: 2px solid var(--grey-500);
      }
    }
  }
  .container-rate {
    justify-content: start;
    gap: 1rem;
    align-items: center;
    font-size: 1.3rem;
  }
  img {
    object-fit: contain;
    vertical-align: bottom;
  }
  .section-img {
    width: 100%;
    height: fit-content;
    position: relative;
    .background {
      background: var(--neumorphismBackgroundPop);
      box-shadow: var(--neumorphismBoxShadowPop);
      position: absolute;
      width: 100%;
      height: 85%;
    }
  }

  .container-img {
    margin: 0 auto;
    width: 50vw;
    height: 100%;
    box-sizing: border-box;
    z-index: 1;

    box-shadow: var(--neumorphismBoxShadowPop);
    display: block;
  }

  h4 {
    font-size: 1.5rem;
  }
  .section-description-footer {
    margin-bottom: 2rem;
    max-width: 978px;
    padding: 1rem;
    h3 {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 0.3rem;
    }
    /* Styling book description */
    .book-description {
      color: var(--grey-800);
      font-family: 'Open Sans', sans-serif;
      line-height: 1.2rem;
      margin-bottom: 2rem;
      p {
        font-family: 'Open Sans', sans-serif;

        font-size: 1.2rem;
        font-weight: 500;
      }
      b {
        color: var(--grey-900);
        font-weight: 700;
      }
      ul {
        padding-left: 1rem;
        margin-top: 1rem;
        list-style-type: circle;
      }
      li {
        list-style-type: circle;
        margin-bottom: 0.8rem;
      }
    }
    .publish-details {
      margin-top: 2rem;
      span {
        font-weight: 900;
      }
    }
  }
  @media (min-width: 668px) {
    /* width: 90vw; */

    article {
      padding: 0;
    }
    .section-description-header {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
      padding: 1rem;
      footer {
        gap: 4rem;
      }
    }
    .section-img {
      .background {
        top: 0;
        right: 0%;
        width: 100%;
      }
    }
    .container-img {
      min-width: 10rem;
      width: fit-content;
    }
    .container-rate {
      flex-direction: column;
      align-items: start;
      gap: 0.3rem;
    }
  }
  @media (min-width: 786px) {
    .section-img {
      display: grid;
      place-items: center;
      max-width: 18rem;
    }

    .container-img {
      min-width: 15rem;
    }
    .background {
      width: 18rem;
    }
  }
`;

export default Wrapper;
