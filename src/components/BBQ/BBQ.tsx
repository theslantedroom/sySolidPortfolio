import type { Component } from "solid-js";
import { JSX, createSignal, onMount } from "solid-js";
import Bowser from "bowser";

export const imgBBq = "img/bbq.jpg";
export const bacon_heaven = "img/bacon_heaven.png";
export const canadian_men_bbq = "img/canadian_men_bbq.png";

interface Props {
  mainTitle?: string;
}

const BBQ: Component<Props> = ({
  mainTitle = "The Slanted Room",
}): JSX.Element => {
  const [isMobile, setIsMobile] = createSignal(true);
  console.log("isMobile", isMobile());
  const [date] = createSignal("[Date]");

  onMount(() => {
    const bowser = Bowser.getParser(window?.navigator?.userAgent);
    const isMobile = bowser.getPlatformType(true) === "mobile";
    setIsMobile(isMobile);
  });

  const bannerCss = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  return (
    <>
      <div
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8) ), url(${imgBBq})`,
        }}
      >
        <h1>🌭BBQ Time New West🌭</h1>

        <img
          style={{
            ...bannerCss,
          }}
          src={imgBBq}
          alt="bbq"
        />
        <p>
          Join us for a sizzling spectacle where manly men gather to summit
          women and devour mountains of bacon. Grilling like estrogen fueled
          legends!
        </p>
        <h3>🍔 What: Grillin' & Chillin'</h3>
        <h3>📅 When: Saturday, [TBD] from 12 PM to 6 PM</h3>
        <h3>🌆 Where: The juiciest park in town - [Venue Name]</h3>
        <h3>🎵 Soundtrack: Big Ol Bacon Flaps</h3>
        <p>Let's have a Greasy BBQ</p>
        <h1>But wait, there's more! 🎉</h1>
        <img
          style={{
            ...bannerCss,
          }}
          src={bacon_heaven}
          alt="bacon_heaven"
        />
        <ul>
          <li>
            <strong>🌭 Eating:</strong> Amidst the chaos of synchronized
            chewing, embark on an otherworldly gastronomic adventure, where
            taste buds became intergalactic explorers in a vortex of
            eccentricity.
          </li>
          <li>
            <strong>🎶 Talking:</strong> With each passing minute, dialogue
            evolves into a symphony of bacon-related nonsensicalities, leaving
            bystanders bewildered
          </li>
          <li>
            <strong>🎶 Going Home:</strong> Find yourself torn between two
            worlds, the irresistible call of crispy bacon and the urgent need to
            escape the carnivorous clutches of the Bacon Brotherhood
          </li>
        </ul>

        <h4>🔥🕺 Can you smell? The 'bacon are cookin'? 🔥🕺</h4>
        <img
          style={{
            ...bannerCss,
          }}
          src={canadian_men_bbq}
          alt="canadian_men_bbq"
        />
      </div>
    </>
  );
};

export default BBQ;
