import React, { useRef, useEffect } from 'react';

import Photo from './Photo'
import StorySectionContainer from './StorySectionContainer'
import useScrollingSections from './ScrollingSections'

import { Root } from './Styles'

const PopGdp = () => {
  const section_0 = useRef(null);
  const section_1 = useRef(null);
  const section_2 = useRef(null);
  const section_3 = useRef(null);
  const section_4 = useRef(null);
  const section_5 = useRef(null);
  const section_6 = useRef(null);
  const section_7 = useRef(null);
  const section_8 = useRef(null);
  const section_9 = useRef(null);

  const {section} = useScrollingSections({refs: [
    section_0,
    section_1,
    section_2,
    section_3,
    section_4,
    section_5,
    section_6,
    section_7,
    section_8,
    section_9,
  ]});

  return (
    <Root>
      <div className="stories-grid">
        <div className="story-heading">Scrolling Picture Page</div>
        <Photo section={section} />
        <div className="main-narrative">
          <div className="text-block">
            <StorySectionContainer section={section_0} copy="section_0" />
            <StorySectionContainer section={section_1} copy="section_1" />
            <StorySectionContainer section={section_2} copy="section_2" />
            <StorySectionContainer section={section_3} copy="section_3" />
            <StorySectionContainer section={section_4} copy="section_4" />
            <StorySectionContainer section={section_5} copy="section_5" />
            <StorySectionContainer section={section_6} copy="section_6" />
            <StorySectionContainer section={section_7} copy="section_7" />
            <StorySectionContainer section={section_8} copy="section_8" />
            <StorySectionContainer section={section_9} copy="section_9" />
          </div>
        </div>
      </div>
    </Root>
  );
};
  
export default PopGdp
