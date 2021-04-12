import {useEffect, useState, MutableRefObject} from 'react';

export default ({refs}) => {

  const [section, setSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTops = refs.map(node => node.current.getBoundingClientRect().top + window.scrollY);
      const windowPosition = window.scrollY + (window.innerHeight * 0.7);
      const last = sectionTops.length - 1 
      const currentSection = sectionTops.findIndex((st, i) => windowPosition > st &&
          (i === last || windowPosition < sectionTops[i + 1]));
      if (currentSection !== section) {
        setSection(currentSection);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [refs, section]);

  return {section};
};
