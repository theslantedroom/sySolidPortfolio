import AboutMe from "~/components/AboutMe/AboutMe";
import Composer from "~/components/Composer/Composer";
import ParticleBanner from "~/components/ParticleBanner/ParticleBanner";
import WebDev from "~/components/WebDev/WebDev";
import "./index.css";
import GameDev from "../components/GameDev/GameDev";
import LinkWord from "../components/LinkWord/LinkWord";
import SoundEngineer from "../components/SoundEngineer/SoundEngineer";

export default function Home() {
	return (
		<main>
			<link
				href="https://fonts.googleapis.com/css?family=VT323"
				rel="stylesheet"
				type="text/css"
			></link>
			{/* Fonts Preload*/}
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="anonymous"
			></link>
			{/* Fonts */}
			<link
				href="https://fonts.googleapis.com/css2?family=Dhurjati&display=swap"
				rel="stylesheet"
			></link>
			<link
				href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=PT+Sans+Narrow:wght@400;700&display=swap"
				rel="stylesheet"
			></link>
			<link
				href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=PT+Sans+Narrow:wght@400;700&display=swap"
				rel="stylesheet"
			></link>
			<ParticleBanner />
			<AboutMe />

			<SoundEngineer />
			<Composer />
			<GameDev />

			{/* <iframe
				src="https://www.theslantedroom.ca/" // Replace with the desired URL
				width="100%"
				height="900px"
				style={{ border: "none" }}
				title="Embedded Content"
			></iframe> */}
		</main>
	);
}
