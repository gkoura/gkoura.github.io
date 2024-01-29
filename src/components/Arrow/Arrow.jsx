import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Arrow.module.css';

function Arrow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the scroll threshold as needed
      const scrollThreshold = 200;

      if (scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <>
      {isVisible && (
        <a href="#top">
          <img
            className={styles.arrow}
            src={getImageUrl('doubleUp.png')}
            alt="arrow_up"
          />
        </a>
      )}
    </>
  );
}

export default Arrow;
