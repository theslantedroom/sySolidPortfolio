import WebDev from "~/components/WebDev/WebDev";
import ParticleBanner from "~/components/ParticleBanner/ParticleBanner";
import AboutMe from "~/components/AboutMe/AboutMe";
import Composer from "~/components/Composer/Composer";
import "./index.css";

export default function Home() {
  return (
    <main>
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
      <WebDev />
      {/* <SoundEngineer /> */}
      <Composer />
    </main>
  );
}
