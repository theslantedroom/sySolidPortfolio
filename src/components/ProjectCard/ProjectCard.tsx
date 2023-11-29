import type { Component } from "solid-js";
import { JSX, createSignal, createEffect, onMount } from "solid-js";
import styles from "./ProjectCard.module.css";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  playStoreLink: Location;
  itchIoLink: Location;
  playWebLink: Location;
  iosStoreLink: Location;
  steamStoreLink: Location;
  technologies: string[];
  link: string;
  showTechStack?: boolean;
  hasDemo?: boolean;
}

interface Props {
  projects?: Project[];
  mainTitle?: string;
}

const ProjectCard: Component<Props> = ({
  projects = [
    {
      title: "Idle Trillionaire",
      hasDemo: true,
      description: "Idle Game built with React - JavaScript.",
      imageUrl: "img/responsiveTrillionaire.png",
      technologies: ["React", "Capacitor", "Android Studio"],
      link: "https://www.idletrillionaire.com/",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.idletrillionaire.www",
      itchIoLink: "https://theslantedroom.itch.io/idle-trillionaire",
      playWebLink: "https://www.idletrillionaire.com/",
      iosStoreLink:
        "https://apps.apple.com/us/app/idle-trillionaire-money-game/id6473220418",
      steamStoreLink: "#",
    },
    {
      title: "HBC Boxing",
      description: "Turn Based Hex Grid Boxing",
      imageUrl: "img/responsivehHbc.png",
      technologies: ["React", "TypeScript", "MongoDb"],
      link: "https://theslantedroom.itch.io/hbc-boxing",
      itchIoLink: "https://theslantedroom.itch.io/hbc-boxing",
      playWebLink: "https://hbc-capacitor.vercel.app/",
    },

    {
      title: "Last Man Standing",
      description: "Interactive Game - Vanilla JavaScript",
      imageUrl: "img/responsiveLMS.png",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",
      playWebLink:
        "https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",

      itchIoLink: "https://theslantedroom.itch.io/last-man-standing-mini-game",
    },
    {
      title: "Client: Sessionwire",
      description:
        "Full Stack Developer: Sessionwire Studio is a powerhouse creative communication suite for your production team featuring live video and studio quality HQ Audio.",
      imageUrl: "img/swImg.png",
      technologies: [],
      link: "https://www.sessionwire.com/",
    },

    {
      title: "Client: V-Clubs",
      description:
        "Lead Developer - Full Stack - Socialize in virtual venues. Create your own venues or visit venues from all over the world. Video and private text chat. Create private tables. Enjoy venue entertainment and performances.",
      imageUrl: "img/vclubs.png",
      technologies: [],
      link: "https://www.v-clubs.com/",
    },

    // {
    //   title: "Stalk Tok",
    //   description: "React Satire App",
    //   imageUrl: "img/responsivestalk.png",
    //   technologies: ["Solid Js", "material Ui"],
    //   link: "https://theslantedroom.github.io/StalkTok/",
    // },
  ] as Project[],
}): JSX.Element => {
  const [currentProjectIndex, setCurrentProjectIndex] = createSignal(0);
  const [currentProject, setCurrentProject] = createSignal(projects[0]);

  createEffect(() => {
    setCurrentProject(projects[currentProjectIndex()]);
  }, currentProjectIndex());

  onMount(async () => {
    projects.forEach((p) => {
      console.log("load", p.imageUrl);
      const image = new Image();
      image.src = p.imageUrl;
    });
  });

  const handleNextClick = (): void => {
    setCurrentProjectIndex((prevIndex) => {
      if (prevIndex === projects.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePrevClick = (): void => {
    setCurrentProjectIndex((prevIndex) => {
      if (prevIndex === 0) {
        return projects.length - 1;
      }
      return prevIndex - 1;
    });
  };

  function viewProject(url) {
    // Open the link in a new tab
    window.open(currentProject().link, "_blank");
  }
  return (
    <div class={styles.portfolio}>
      <h1 class={styles.portfolio__title}>{currentProject().title}</h1>
      <div class={styles.portfolio__navigation}>
        <button class={styles.portfolio__nav_button} onClick={handlePrevClick}>
          {"<"}
        </button>

        <div class={styles.linkBtnStack}>
          {currentProject().playStoreLink ? (
            <img
              class={styles.playStoreImg}
              src={"img/get-it-on-google-play.png"}
              alt={"getOnGooglePlay"}
              onClick={() => {
                window.location = currentProject().playStoreLink;
              }}
            />
          ) : null}{" "}
          {currentProject().iosStoreLink ? (
            <img
              class={styles.playStoreImg}
              src={"img/get-it-on-ios.png"}
              alt={"get-it-on-ios"}
              onClick={() => {
                window.location = currentProject().playWebLink;
              }}
            />
          ) : null}
          {currentProject().itchIoLink ? (
            <img
              class={styles.playStoreImg}
              src={
                currentProject().hasDemo
                  ? "img/play_on_itchio_demo.png"
                  : "img/play_on_itchio.png"
              }
              alt={"playOnItchIo"}
              onClick={() => {
                window.location = currentProject().itchIoLink;
              }}
            />
          ) : null}
          {currentProject().playWebLink ? (
            <img
              class={styles.playStoreImg}
              src={
                currentProject().hasDemo
                  ? "img/play_in_browser_demo.png"
                  : "img/play_in_browser.png"
              }
              alt={"play_in_browser"}
              onClick={() => {
                window.location = currentProject().playWebLink;
              }}
            />
          ) : null}
          {currentProject().steamStoreLink ? (
            <img
              class={styles.playStoreImg}
              src={"img/get-it-on-steam-soon.png"}
              alt={"get-it-on-steam-soon"}
              onClick={() => {
                window.location = currentProject().playWebLink;
              }}
            />
          ) : null}
        </div>

        <button class={styles.portfolio__nav_button} onClick={handleNextClick}>
          {">"}
        </button>
      </div>
      <p class={styles.portfolio__description}>
        {currentProject().description}
      </p>

      {currentProject().technologies.length ? (
        <ul class={styles.portfolio__technologies}>
          {currentProject().technologies.map((tech) => (
            <li class={styles.portfolio__technology}>{tech}</li>
          ))}
        </ul>
      ) : null}
      <img
        class={styles.portfolio__image}
        src={currentProject().imageUrl}
        alt={currentProject().imageUrl}
        onClick={viewProject}
      />
    </div>
  );
};

export default ProjectCard;
