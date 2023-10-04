import type { Component } from "solid-js";
import { JSX, createSignal, createEffect } from "solid-js";
import styles from "./SoundEngineer.module.css";

interface Props {
  about?: string;
  mainTitle?: string;
}

const SoundEngineer: Component<Props> = ({
  about = "I have over 15 years experience mixing FOH and Monitors for concerts, comedians, musical theater, touring bands and music festivals. I have been producing, writing, recording, editing, mixing and mastering in studio as well.",
}): JSX.Element => {
  return (
    <div class={styles.container}>
      <h1 class={styles.aboutTitle}>Sound Engineering</h1>

      <p class={styles.aboutText}>{about}</p>
      <img src="img/concertbanner.jpg" alt="concert" class={styles.image} />
    </div>
  );
};

export default SoundEngineer;
