import React from 'react'
import styled from 'styled-components'
import {storyMobileWidth, MapContainer } from '../Styles'
import text from '../Copy'

const Container = styled.div`
  position: relative;
  z-index: 100;

  @media(max-width: ${storyMobileWidth}px) {
    position: sticky;
    bottom: 0;
    top: 0;
    pointer-events: none;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;

    > div {
      transform: scale(1);
    }
  }

  .photo-container {
    width: 100%;
    height: 60vh;
    transition: opacity 0.6s ease;
    opacity: 1;
    position: relative;
    top: 0;
    left: 0;
    height: 450;
    background: #547598;
  }

  img { 
    height: 100%;
    width: 100%;
  }
`;

const Photo = (props) => {
  const {section} = props;

  let info = text[`section_${section}`] || text['section_0']
  return (
    <Container style={{
      position: window.innerWidth < 700 && section !== null ? 'sticky' : undefined,
      height: window.innerWidth < 700 && section !== null ? 'auto' : undefined,
    }}>
      <div className="sticky-container">
        <h3>{info.title}</h3>
        <div className="photo-container">
          <img src={ `./public/${info.img}` } />
        </div>
      </div>
    </Container>
  );
};

export default Photo;
