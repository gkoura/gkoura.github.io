import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

function About() {
	return (
		<section className={styles.container} id="about">
			<h2 className={styles.section_title}>About</h2>
			<div className={styles.content}>
				<img
					className={styles.about_img}
					src={getImageUrl("imgs/about.jpg")}
					alt="about_pic"
				/>
				<p className={styles.info}>
					My name is Gregory and I am a Physicist and a Full-Stack Developer. I
					initially started coding as a hobby, but quickly realized that it was
					something I was truly passionate about and decided to pursue a career
					change. It was a big decision, but I am excited to be able to do what
					I love and help others in the process. Beyond my professional life,
					I've been a scout for years. Tennis is another love though I don’t see
					myself going to Wimbledon anytime soon. I embrace challenges and I
					aspire to be a digital nomad someday.
				</p>
			</div>
		</section>
	);
}

export default About;
