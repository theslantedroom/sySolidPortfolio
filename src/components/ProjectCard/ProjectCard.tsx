import type { Component } from "solid-js";
import { JSX, createSignal, createEffect, onMount } from "solid-js";
import styles from "./ProjectCard.module.css";
import { Project, myProjects } from "../../constants/projects";

interface Props {
  projects?: Project[];
  mainTitle?: string;
}

const ProjectCard: Component<Props> = ({
  projects = myProjects,
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

        <button class={styles.portfolio__nav_button} onClick={handleNextClick}>
          {">"}
        </button>
      </div>

      <img
        class={styles.portfolio__image}
        src={currentProject().imageUrl}
        alt={currentProject().imageUrl}
        onClick={viewProject}
      />
      <p class={styles.portfolio__description}>
        {currentProject().description}
      </p>

      {currentProject().technologies.length ? (
        <ul class={styles.portfolio__technologies}>
          {currentProject().technologies.map((tech) => (
            <li
              class={styles.portfolio__technology}
              style={{ "background-color": currentProject().chipColor }}
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}

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

        {currentProject().epicGamesLink ? (
          <img
            class={styles.playStoreImg}
            src={"img/get-it-on-epic.png"}
            alt={"get-it-on-epic"}
            onClick={() => {
              window.open(currentProject().epicGamesLink, "_blank");
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
    </div>
  );
};

export default ProjectCard;
