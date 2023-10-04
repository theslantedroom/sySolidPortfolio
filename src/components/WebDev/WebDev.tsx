import type { Component } from "solid-js";
import { JSX, createSignal, createEffect } from "solid-js";
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
    "React.js",
    "Meteor.js",
    "Jest",
    "Cypress",
    "material UI",
    "webRTC",
    "HTML",
    "CSS",
    "C",
    "Python",
    "Flask",
    "GIT",
    "Mongo",
    "XState",
    "Sqlite3",
    "Postgres",
  ],
}): JSX.Element => {
  return (
    <div class={styles.webDevelopmentInfo}>
      <h1 class={styles.aboutTitle}>Web Development</h1>

      <p class={styles.skills}>
        {skills.map((s) => (
          <span class={styles.skill}>{s}</span>
        ))}
      </p>
      <ProjectCard />
    </div>
  );
};

export default WebDev;
