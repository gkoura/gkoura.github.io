import React, { useState } from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Certifications.module.css"
import { slides } from "../../data/carouselData.js";

function Certifications() {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <section className={styles.container} id='certs'> 
      <h2 className={styles.section_title}>Certifications</h2>
      <div className={styles.carousel} >
        <img src={getImageUrl("certs/arrowLeft.png")} alt="left_arrow" 
          onClick={prevSlide} 
          className={`${styles.arrow} ${styles.arrowLeft}`}
        />
        {slides.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={`${styles.slide} ${slide === idx ? "" : styles.slideHidden}`}
            />
          );
        })}
        <img src={getImageUrl("certs/arrowRight.png")} alt="right_arrow" 
          onClick={nextSlide} 
          className={`${styles.arrow} ${styles.arrowRight}`}
        />
        <span className={styles.indicators}>
          {slides.map((_, idx) => {
            return (
              <button
                key={idx}
                className={`${styles.indicator} ${slide === idx ? "" : styles.indicatorInactive}`}
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </section>
  );
  
}

export default Certifications
