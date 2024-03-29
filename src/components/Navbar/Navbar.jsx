import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className={styles.navbar} id="top">
			<a className={styles.title} href="/">
				Gregory Gkoura
			</a>
			<div className={styles.menu}>
				<img
					className={styles.menuBtn}
					src={
						menuOpen
							? getImageUrl("navbar_icons/closeIcon.png")
							: getImageUrl("navbar_icons/menuIcon.png")
					}
					alt="menu-button"
					onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
				/>
				<ul
					className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
					onClick={() => setMenuOpen(false)}
				>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#certs">Certifications</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
