import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Skills.module.css"
import Card from "../Card/Card"
import data from "../../data/skills"

function Skills() {

  const cards = data.map ((item,index) => {
    return (
      <Card 
        key = {index}
        img = {item.icon}
        title = {item.title}
        skills = {item.skills}
      />
  )})

  return (
    <section className={styles.container} id='skills'> 
        <h2 className={styles.section_title}>Skills</h2>
        <div className={styles.cards} >
          {cards}
        </div>

    </section>
  )
}

export default Skills
