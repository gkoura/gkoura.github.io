import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Card.module.css"

function Card(props) {
  return (    
        <div className={styles.cardContainer}>
            <div className={styles.iconContainer}>
                <img className={styles.cardIcon} src={props.img} alt="card_icon" />
            </div>
            <h3 className={styles.cardTitle}>{props.title}</h3>
            <ul className={styles.skillsList}>
                {props.skills.map((skill, index) => (
                    <div className={styles.skillsContainer} key={index}>
                        <img className={styles.skillIcon}  src={Object.values(skill)} alt="skill_icon" />
                        <li className={styles.skill} >{Object.keys(skill)}</li>
                    </div>
                    ))}
            </ul>            
        </div>
)
}

export default Card



