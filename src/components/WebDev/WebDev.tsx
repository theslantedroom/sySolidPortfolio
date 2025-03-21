import type { Component } from "solid-js";
import { JSX } from "solid-js";
import styles from "./WebDev.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";

interface Props {
  skills?: string[];
  mainTitle?: string;
}

const WebDev: Component<Props> = ({
  skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
    "React",
    "Meteor.js",
    "Capacitor.js",
    "Android Studio",
    "Jest",
    "Cypress",
    "material UI",
    "webRTC",
    "HTML",
    "CSS",
    "Flask",
    "GIT",
    "Mongo",
    "XState",
    "XCode",
    "Sqlite3",
    "Postgres",
  ],
}): JSX.Element => {
  return (
    <div id="web-development-nav" class={styles.webDevelopmentInfo}>
      <ProjectCard />

      <h1 class={styles.aboutTitle}>Independent Game Developer</h1>
      <p class={styles.description}>
        Your support helps keep new games coming.
      </p>
      <img
        class={styles.playStoreImg}
        src={"img/donate_paypal.png"}
        alt={"donate_paypal"}
        onClick={() => {
          window.open(
            "https://www.paypal.com/donate?hosted_button_id=NN7GRPQRZU62S",
            "_blank"
          );
        }}
      />
    </div>
  );
};

export default WebDev;
