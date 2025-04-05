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
      >{`Front of House, Monitors, System Tech, Consultation.`}</p>
 
      <img src="img/concertbanner.jpg" alt="concert" class={styles.image} />
    </div>
  );
};

export default SoundEngineer;
