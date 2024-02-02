import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Certifications.module.css';
import { slides } from '../../data/carouselData.js';

function Certifications() {
  const courses = [
    {
      'Coursera - Programming Foundations with JavaScript, HTML and CSS': 'https://coursera.org/verify/KK62DCMQMZFA',
    },
    {
      'Coursera - Introduction to Git and GitHub': 'https://coursera.org/verify/JTL4KTRBE7MB',
    },
    {
      'Coursera - Python for Everybody Specialization Certificate': 'https://coursera.org/verify/specialization/GJVHTNKZWPLL',
    },
  ];
  const [course, setCourse] = useState(courses[0]); // Fix the initial state

  const [slide, setSlide] = useState(0);
  

  const nextSlide = () => {
    const nextSlideIndex = slide === slides.length - 1 ? 0 : slide + 1;
    setSlide(nextSlideIndex);
    setCourse(courses[nextSlideIndex]); // Fix to get the correct course based on the updated slide
  };

  const prevSlide = () => {
    const prevSlideIndex = slide === 0 ? slides.length - 1 : slide - 1;
    setSlide(prevSlideIndex);
    setCourse(courses[prevSlideIndex]); // Fix to get the correct course based on the updated slide
  };

  return (
    <section className={styles.container} id='certs'>
      <h2 className={styles.section_title}>Certifications</h2>
      <div className={styles.carousel}>
        <img
          src={getImageUrl('certs/arrowLeft.png')}
          alt='left_arrow'
          onClick={prevSlide}
          className={`${styles.arrow} ${styles.arrowLeft}`}
        />
        {slides.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={`${styles.slide} ${slide === idx ? '' : styles.slideHidden}`}
            />
          );
        })}
        <img
          src={getImageUrl('certs/arrowRight.png')}
          alt='right_arrow'
          onClick={nextSlide}
          className={`${styles.arrow} ${styles.arrowRight}`}
        />
        <span className={styles.indicators}>
          {slides.map((_, idx) => {
            return (
              <button
                key={idx}
                className={`${styles.indicator} ${slide === idx ? '' : styles.indicatorInactive}`}
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
        <a target='_blank' className={styles.descrLink} href={Object.values(course)[0]}>
          <p className={styles.descr}>{Object.keys(course)[0]}</p>
        </a>
      </div>
    </section>
  );
}

export default Certifications;
