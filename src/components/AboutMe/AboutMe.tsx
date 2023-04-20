import { createSignal } from "solid-js";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div class={styles.aboutContainer}>
      <div class={styles.aboutSection}>
        <h1 class={styles.aboutTitle}>About</h1>
        <p class={styles.aboutText}>
          I am a{" "}
          <a class={styles.aboutLink} href="#web-development-nav">
            software engineer
          </a>{" "}
          and{" "}
          <a class={styles.aboutLink} href="#soundengineer-nav">
            sound technician
          </a>
          . I mix concerts, write and compose{" "}
          <a class={styles.aboutLink} href="#music-nav" target="blank">
            music for games and media.
          </a>{" "}
          I create{" "}
          <a
            target="_blank"
            class={styles.aboutLink}
            href="https://www.idletrillionaire.com/"
          >
            apps
          </a>{" "}
          and make{" "}
          <a
            target="_blank"
            class={styles.aboutLink}
            href="https://www.thegamecrafter.com/games/last-man-standing-the-adventure-game"
          >
            physical
          </a>{" "}
          and digital games.
        </p>
        <img class={styles.aboutImage} src={"img/pic1.png"} alt="profile img" />
      </div>
    </div>
  );
};

export default AboutMe;

const data = { description: "" };
