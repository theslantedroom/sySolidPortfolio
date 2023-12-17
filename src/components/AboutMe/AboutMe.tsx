import LinkWord from "../LinkWord/LinkWord";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div class={styles.aboutContainer}>
      <div class={styles.aboutSection}>
        <div class={styles.noPadding}>
          <span class={styles.aboutText}>{`The Slanted Room creates `}</span>
          <LinkWord text={"software"} url={"#web-development-nav"} />
          <span class={styles.aboutText}>{`, `}</span>
          <LinkWord
            text={"music"}
            url={"https://www.pond5.com/artist/theslantedroom"}
          />
          <span class={styles.aboutText}>{` and `}</span>
          <LinkWord
            text={"physical"}
            url={
              "https://www.thegamecrafter.com/games/last-man-standing-the-adventure-game"
            }
          />
          <span class={styles.aboutText}>{` games.`}</span>
        </div>

        <div>
          <span class={styles.aboutText}>{`We also license `}</span>
          <LinkWord
            text={"music for games and media"}
            url={"https://www.pond5.com/artist/theslantedroom"}
          />
          <span class={styles.aboutText}>{`.`}</span>
        </div>

        <img class={styles.aboutImage} src={"img/pic1.png"} alt="profile img" />
      </div>

      <div class={styles.aboutSection}>
        <h1 class={styles.aboutTitle}>Contact</h1>
        <p class={styles.description}>steve@theslantedroom.ca</p>
      </div>
    </div>
  );
};

export default AboutMe;
