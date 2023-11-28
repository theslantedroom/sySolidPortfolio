import WebDev from "~/components/WebDev/WebDev";
import ParticleBanner from "~/components/ParticleBanner/ParticleBanner";
import AboutMe from "~/components/AboutMe/AboutMe";
import SoundEngineer from "~/components/SoundEngineer/SoundEngineer";
import Composer from "~/components/Composer/Composer";
import "./index.css";

export default function Home() {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Dhurjati&display=swap"
        rel="stylesheet"
      />
      <ParticleBanner />
      <AboutMe />
      <WebDev />
      <SoundEngineer />
      <Composer />

      <div>contact: steve@theslantedroom.ca</div>
    </main>
  );
}
