import type { Component } from "solid-js";
import { JSX, createSignal, createEffect, onMount } from "solid-js";
import styles from "./ProjectCard.module.css";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  playStoreLink?: URL | string;
  itchIoLink?: URL | string;
  playWebLink?: URL | string;
  iosStoreLink?: URL | string;
  steamStoreLink?: URL | string;
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
      description: "How big is a trillion?",
      imageUrl: "img/responsiveTrillionaire.png",
      technologies: [
        "Single Player",
        "Casual",
        "Offline Progress",
        "Load/Save",
        "Milestones",
        "Slot Machine",
        "Mobile",
      ],
      link: "https://www.idletrillionaire.com/",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.idletrillionaire.www",
      itchIoLink: "https://theslantedroom.itch.io/idle-trillionaire",
      playWebLink: "https://www.idletrillionaire.com/",
      iosStoreLink:
        "https://apps.apple.com/us/app/idle-trillionaire-money-game/id6473220418",
      steamStoreLink:
        "https://store.steampowered.com/app/2753100/Idle_Trillionaire/",
    },
    {
      title: "HBC Boxing",
      hasDemo: true,
      description:
        "Boxing gym management and fight simulation - coming soon to iOS and Android",
      imageUrl: "img/responsivehHbc.png",
      technologies: [
        "In Development",
        "single player",
        "online / PVP (beta)",
        "training and perks",
        "change fight strategies between rounds",
        "turn based control or auto-fight",
        "perma-death",
        "promote multiple boxers",
        "gym quests",
        "mobile / desktop",
      ],
      link: "https://theslantedroom.itch.io/hbc-boxing",
      itchIoLink: "https://theslantedroom.itch.io/hbc-boxing",
      playWebLink: "https://hbc-capacitor.vercel.app/",
      steamStoreLink: "#",
    },
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

  function viewProject() {
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
                window.open(currentProject().playStoreLink, "_blank");
              }}
            />
          ) : null}

          {currentProject().iosStoreLink ? (
            <img
              class={styles.playStoreImg}
              src={"img/get-it-on-ios.png"}
              alt={"get-it-on-ios"}
              onClick={() => {
                window.open(currentProject().iosStoreLink, "_blank");
              }}
            />
          ) : null}

          {currentProject().steamStoreLink ? (
            <img
              class={styles.playStoreImg}
              src={
                currentProject().steamStoreLink === "#"
                  ? "img/get-it-on-steam-soon.png"
                  : "img/get-it-on-steam.png"
              }
              alt={"get-it-on-steam-soon"}
              onClick={() => {
                window.open(currentProject().steamStoreLink, "_blank");
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
                window.open(currentProject().itchIoLink, "_blank");
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
                window.open(currentProject().playWebLink, "_blank");
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
