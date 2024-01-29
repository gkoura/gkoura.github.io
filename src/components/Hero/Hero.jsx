import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.intro}>HELLO THERE, WELCOME TO MY SITE</p>
        <h1 className={styles.title}>I'm Greg</h1>
        <h1 className={styles.title}>A Full-Stack Developer</h1>
        <div className={styles.BtnContainer} >
          <a className={styles.contactBtn} 
            target="_blank" rel="noopener noreferrer"
            onClick={() => window.open("/resume.pdf")}>Download CV
          </a>
          <a className={styles.contactBtn}  
            href="https://www.linkedin.com/in/gkoura/"
            target="_blank">LinkedIn
          </a>
        </div>
      </div>
      <img className={styles.heroImg} src={getImageUrl("profile.jpeg")} alt="hero_image"/>
      <div className={styles.topBlur} ></div>
      <div className={styles.bottomBlur} ></div>
    </section>
  )
}

export default Hero

