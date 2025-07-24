import LinkWord from "../LinkWord/LinkWord";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
	return (
		<div class={styles.aboutContainer}>
			<div class={styles.aboutSection}>
				<p class={styles.description}>steve@theslantedroom.ca</p>
			</div>
		</div>
	);
};

export default AboutMe;
