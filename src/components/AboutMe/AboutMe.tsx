import LinkWord from "../LinkWord/LinkWord";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div class={styles.aboutContainer}>
      <div class={styles.aboutSection}>
        <div class={styles.noPadding}>
          <span class={styles.aboutText}>{`I am a `}</span>
          <LinkWord text={"software developer"} url={"#web-development-nav"} />
          <span class={styles.aboutText}>{` and `}</span>
          <LinkWord text={"sound engineer"} url={"#soundengineer-nav"} />
          <span class={styles.aboutText}>{` and `}</span>
          <LinkWord
            text={"music composer"}
            url={"https://www.pond5.com/artist/theslantedroom"}
          />
          <span class={styles.aboutText}>{`.`}</span>
        </div>

        <div>
          <span class={styles.aboutText}>{`I create `}</span>
          <LinkWord
            text={"apps"}
            url={
              "https://play.google.com/store/apps/dev?id=8189495994752916341"
            }
          />
          <span class={styles.aboutText}>{` and make `}</span>
          <LinkWord
            text={"physical"}
            url={
              "https://www.thegamecrafter.com/games/last-man-standing-the-adventure-game"
            }
          />
          <span class={styles.aboutText}>{` and `}</span>

          <LinkWord text={"digital"} url={"https://theslantedroom.itch.io/"} />
          <span class={styles.aboutText}>{` games.`}</span>
        </div>

        <div>
          <span
            class={styles.aboutText}
          >{`I mix concerts and write and compose `}</span>
          <LinkWord
            text={"music for games and media"}
            url={"https://www.pond5.com/artist/theslantedroom"}
          />
          <span class={styles.aboutText}>{`.`}</span>
        </div>

        <img class={styles.aboutImage} src={"img/pic1.png"} alt="profile img" />
      </div>
    </div>
  );
};

export default AboutMe;
