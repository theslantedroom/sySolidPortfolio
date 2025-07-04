import LinkWord from "../LinkWord/LinkWord";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
	return (
		<div class={styles.aboutContainer}>
			<div class={styles.aboutSection}>
				<div class={styles.noPadding}>
					Use your
					<span class={styles.aboutText}>{` `}</span>
					<LinkWord
						text={"ears"}
						url={"https://soundcloud.com/the-slanted-room"}
					/>
					<span class={styles.aboutText}>{` `}</span>
					play
					<span class={styles.aboutText}>{` `}</span>
					<LinkWord
						text={"music"}
						url={"https://soundcloud.com/the-slanted-room"}
					/>
					<span class={styles.aboutText}>{`.`}</span>
				</div>
				<div class={styles.noPadding}>
					Play
					<span class={styles.aboutText}>{` `}</span>
					<LinkWord text={"games"} url={"https://www.theslantedroom.ca/"} />
					<span class={styles.aboutText}>{` `}</span>
					have
					<span class={styles.aboutText}>{` `}</span>
					<LinkWord text={"fun"} url={"https://www.theslantedroom.ca/"} />
					<span class={styles.aboutText}>{`.`}</span>
				</div>
				{/* <img class={styles.aboutImage} src={"img/bacon_heaven.png"} alt="profile img" /> */}
				{/* <img class={styles.aboutImage} src={"img/canadian_men_bbq.png"} alt="profile img" /> */}
			</div>

			<div class={styles.aboutSection}>
				<p class={styles.description}>steve@theslantedroom.ca</p>
			</div>
		</div>
	);
};

export default AboutMe;
