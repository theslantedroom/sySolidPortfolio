import LinkWord from "../LinkWord/LinkWord";
import styles from "./GameDev.module.css";

const GameDev = () => {
	return (
		<div class={styles.container}>
			<h1 class={styles.title}>Games</h1>

			<div class={styles.noPadding}>
				<span class={styles.text}>{` `}</span>
				<LinkWord text={"Games"} url={"https://www.theslantedroom.ca/"} />
				<span class={styles.text}>{` `}</span>
				for
				<span class={styles.text}>{` `}</span>
				<LinkWord text={"mobile"} url={"https://www.theslantedroom.ca/"} />
				<span class={styles.text}>{` `}</span>
				and
				<span class={styles.text}>{` `}</span>
				<LinkWord text={"desktop"} url={"https://www.theslantedroom.ca/"} />
				<span class={styles.text}>{` `}</span>
			</div>

			<div>
				<a href="https://www.theslantedroom.ca/" target="blank">
					www.theslantedroom.ca
				</a>
			</div>
		</div>
	);
};

export default GameDev;
