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
    "React.js",
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
    "Sqlite3",
    "Postgres",
  ],
}): JSX.Element => {
  return (
    <div id="web-development-nav" class={styles.webDevelopmentInfo}>
      <h1 class={styles.aboutTitle}>Software Development</h1>
      <p class={styles.description}>
        A short list of personal projects and key clients
      </p>

      <ProjectCard />
      <h1 class={styles.aboutTitle}>Technologies</h1>
      <p class={styles.skills}>
        {skills.map((s) => (
          <span class={styles.skill}>{s}</span>
        ))}
      </p>
    </div>
  );
};

export default WebDev;
