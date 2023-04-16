import type { Component } from "solid-js";
import { JSX, createSignal, onMount } from "solid-js";
import styles from "./ParticleBanner.module.css";
import Bowser from "bowser";

interface Props {
  mainTitle?: string;
}

const ParticleBanner: Component<Props> = ({
  mainTitle = "The Slanted Room",
}): JSX.Element => {
  const [isMobile, setIsMobile] = createSignal(true);

  onMount(() => {
    const bowser = Bowser.getParser(window?.navigator?.userAgent);
    const isMobile = bowser.getPlatformType(true) === "mobile";
    setIsMobile(isMobile);
    const script = document.createElement("script");
    script.src = isMobile ? "./js/particlesDisabled.js" : "./js/particles.js";
    document.body.appendChild(script);
  });

  return (
    <>
      <div class={styles.banner}>
        <canvas id="canvas1"></canvas>
      </div>
    </>
  );
};

export default ParticleBanner;
