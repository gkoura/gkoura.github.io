import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certifications from "./components/Certifications/Certifications";
import Arrow from "./components/Arrow/Arrow";

function App() {
	return (
		<div className={styles.App}>
			<Arrow />
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Certifications />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
