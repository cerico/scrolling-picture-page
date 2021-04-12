import styled from 'styled-components';
export const secondaryFont = "'OfficeCodeProWeb', monospace";
export const backgroundColor = '#f3f7e9';
const primaryFont = 'raleway'
export const storyMobileWidth = 700;
const contentMaxWidth = 900;
const navMaxWidth = 180;

export const MainNarrativeRoot = styled.div`
  @media(max-width: ${storyMobileWidth}px) {
    position: relative;
    z-index: 150 !important;
    margin-top: -224px;
  }
  .text-block {
    @media (min-width: ${storyMobileWidth}px) {
      padding: 1rem;
    }
  }
`;

export const Root = styled.main`
  padding: 0 1.25rem 8rem;
  color: #333;
  background: #f3f7e9 !important;
  background-color: ${backgroundColor};

  h1,
  h2,
  p {
    font-family: raleway;
  }

  p {
    font-size: 1.25rem;
  }

  h3 {
    color: rgb(243, 247, 233);
    text-align: center;
    font-family: ${primaryFont};
    text-transform: uppercase;
    font-weight: 400;
    color: #19385f;
  }

  p + h3 {
    margin-top: 3rem;
  }

  a {
    color: #4790b4;
    text-decoration: none;
    border-bottom: solid 1px #4790b4;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: 8fr 5fr;
    column-gap: 2rem;
    position: relative;

    @media (max-width: ${storyMobileWidth}px) {
      grid-template-columns: 1fr;
    }
  }

  .story-heading {
    grid-column: 1 / -1;
    font-weight: 600;
    font-size: 1.75rem;
    text-align: center;
  }

  .sticky-container {
    position: sticky;
    top: 0;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${storyMobileWidth}px) {
      position: relative;
      z-index: 10;
    }
  }

  .main-narrative {
    @media(max-width: ${storyMobileWidth}px) {
      position: relative;
      z-index: 150 !important;
      margin-top: -224px;
    }
    .text-block {
      @media (min-width: ${storyMobileWidth}px) {
        padding: 1rem;
      }
    }
  }
`;