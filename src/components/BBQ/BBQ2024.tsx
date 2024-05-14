import type { Component } from "solid-js";
import { JSX } from "solid-js";

export const imgBBq = "img/bbqParty2024.png";
export const bacon_heaven = "img/bacon_heaven.png";
export const canadian_men_bbq = "img/canadian_men_bbq.png";

interface Props {}

const BBQ2024: Component<Props> = ({}): JSX.Element => {
  const bannerCss = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  const textCss = {
    color: "gold",
    margin: "10px",
  };
  const pCss = {
    color: "white",
    margin: "10px",
  };

  return (
    <>
      <div
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8) ), url(${canadian_men_bbq})`,
          "max-width": "800px",
          margin: "auto",
        }}
      >
        <h1>YOU ARE INVITED</h1>
        <img
          style={{
            ...bannerCss,
          }}
          src={imgBBq}
          alt="bbq"
        />
        <h3 style={textCss}>Annabel turns 30 on May 30, 2024.</h3>
        <h3 style={textCss}>Steve turns 40 on July 14, 2024​.</h3>
        <h3 style={textCss}>Canada turns 157 on July 1, 2024.</h3>
        <h3 style={textCss}>We got married on June 24, 2024.</h3>
        <p style={pCss}>
          As such on June 30, 2024 we are organizing a casual BBQ at Foreshore
          Park. This is a sunday. Monday is holiday (Canada Day). We will start
          at noon. Bring a chair maybe, something to fancy to eat if you have
          special needs. We'll bring a bunch of hotdogs and some field games
          (Kubb, a ball) Probably want to bring some drinks.
        </p>
        <img
          style={{
            ...bannerCss,
          }}
          src={bacon_heaven}
          alt="bacon_heaven"
        />
        <h2 style={{ "max-width": "500px", margin: "auto" }}>
          The event will take place by the new washroom and field with the pier
          at this{" "}
          <a
            href="https://www.google.com/maps/dir/Burnaby+Fraser+Foreshore+Park,+7751+Fraser+Park+Dr,+Burnaby,+BC+V5J+5L8/49.1880638,-122.9941608/@49.1879317,-122.9944379,341m/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x5486760111ae0ae5:0x5587199eb88a23b4!2m2!1d-122.9922299!2d49.186777!1m0!3e0?entry=tts&g_ep=EgoyMDI0MDUwOC4wKgBIAVAD"
            style={{ color: "lime" }}
            target="_blank"
          >
            location
          </a>
          .
        </h2>
        <h4>
          It is up river on the path not very far from the main parking lot. You
          can also a park on the street where Tillicum St bends and turns into
          Fraser Park Drive. (closest)
        </h4>
        <p style={textCss}>Steve Phone # 778 867 6588.</p>
        <p>
          See the{" "}
          <a
            href="https://www.google.com/maps/dir/Burnaby+Fraser+Foreshore+Park,+7751+Fraser+Park+Dr,+Burnaby,+BC+V5J+5L8/49.1880638,-122.9941608/@49.1879317,-122.9944379,341m/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x5486760111ae0ae5:0x5587199eb88a23b4!2m2!1d-122.9922299!2d49.186777!1m0!3e0?entry=tts&g_ep=EgoyMDI0MDUwOC4wKgBIAVAD"
            style={{ color: "lime" }}
            target="_blank"
          >
            map
          </a>{" "}
          for directions.
        </p>
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

export default BBQ2024;
