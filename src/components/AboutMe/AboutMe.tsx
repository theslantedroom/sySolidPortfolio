import LinkWord from "../LinkWord/LinkWord";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div class={styles.aboutContainer}>
      <div class={styles.aboutSection}>
        <div class={styles.noPadding}>
          <LinkWord text={"video games"} url={"#web-development-nav"} />
          <span class={styles.aboutText}>{`, `}</span>
          <LinkWord
            text={"music"}
            url={"https://www.pond5.com/artist/theslantedroom"}
          />
          <span class={styles.aboutText}>{`, `}</span>
          <LinkWord
            text={"board games"}
            url={
              "https://www.thegamecrafter.com/games/last-man-standing-definitive-edition"
            }
          />
          <span class={styles.aboutText}>{`.`}</span>
        </div>

        {/* <img class={styles.aboutImage} src={"img/pic1.png"} alt="profile img" /> */}
      </div>

      <div class={styles.aboutSection}>
        <p class={styles.description}>steve@theslantedroom.ca</p>
      </div>
    </div>
  );
};

export default AboutMe;
