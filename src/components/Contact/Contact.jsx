import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

function Contact() {
	return (
		<section id="contact" className={styles.container}>
			<h2 className={styles.section_title}>Contact</h2>
			<div className={styles.content}>
				<p className={styles.text}>Feel free to reach out!</p>
				<ul className={styles.links}>
					<li className={styles.link}>
						<a className={styles.iconLink} href="mailto:gkouras@icloud.com">
							<img
								className={styles.icon}
								src={getImageUrl("contact_icons/email.png")}
								alt="Email icon"
							/>
						</a>
						<a className={styles.textLink} href="mailto:gkouras@icloud.com">
							Gkouras@icloud.com
						</a>
					</li>
					<li className={styles.link}>
						<a
							className={styles.iconLink}
							target="_blank"
							href="https://www.linkedin.com/in/gkoura/"
						>
							<img
								className={styles.icon}
								src={getImageUrl("contact_icons/linkedin.png")}
								alt="LinkedIn icon"
							/>
						</a>
						<a
							className={styles.textLink}
							target="_blank"
							href="https://www.linkedin.com/in/gkoura/"
						>
							Linkedin.com/in/gkoura
						</a>
					</li>
					<li className={styles.link}>
						<a
							className={styles.iconLink}
							target="_blank"
							href="https://github.com/gkoura"
						>
							<img
								className={styles.icon}
								src={getImageUrl("contact_icons/github.png")}
								alt="Github icon"
							/>
						</a>
						<a
							className={styles.textLink}
							target="_blank"
							href="https://github.com/gkoura"
						>
							github.com/gkoura
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Contact;
