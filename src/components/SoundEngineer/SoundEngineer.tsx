import type { Component } from "solid-js";
import { JSX } from "solid-js";
import styles from "./SoundEngineer.module.css";

interface Props {}

const SoundEngineer: Component<Props> = ({}): JSX.Element => {
  return (
    <div id="soundengineer-nav" class={styles.container}>
      <h1 class={styles.aboutTitle}>Sound Engineering</h1>

      <p
        class={styles.aboutText}
      >{`I have over 15 years experience mixing FOH and Monitors for concerts, comedians, musical theater, touring bands and music festivals. `}</p>
      <p
        class={styles.aboutText}
      >{`I have been producing, writing, recording, editing, mixing and mastering in studio as well.`}</p>
      <img src="img/concertbanner.jpg" alt="concert" class={styles.image} />
    </div>
  );
};

export default SoundEngineer;
