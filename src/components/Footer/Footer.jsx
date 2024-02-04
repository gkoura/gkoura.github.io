import React from "react";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<section className={styles.container}>
			<p className={styles.footer}>
				Copyright &#169; 2023 Gregory Gkoura. All Rights Reserved.
			</p>
		</section>
	);
}

export default Footer;
