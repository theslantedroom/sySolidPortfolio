import type { Component } from "solid-js";
import { JSX, createSignal, createEffect, onMount } from "solid-js";
import styles from "./ProjectCard.module.css";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  showTechStack?: boolean;
}

interface Props {
  projects?: Project[];
  mainTitle?: string;
}

const ProjectCard: Component<Props> = ({
  projects = [
    {
      title: "HBC Boxing",
      description: "Turn Based Hex Grid Boxing",
      imageUrl: "img/responsivehHbc.png",
      technologies: ["React", "TypeScript", "MongoDb"],
      link: "https://hbcboxing.online/",
    },
    {
      title: "Idle Trillionaire",
      description: "Idle Game built with React - JavaScript.",
      imageUrl: "img/responsiveTrillionaire.png",
      technologies: ["React"],
      link: "https://www.idletrillionaire.com/",
    },
    {
      title: "Last Man Standing",
      description: "Interactive Game - Vanilla JavaScript",
      imageUrl: "img/responsiveLMS.png",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",
    },
    {
      title: "Stalk Tok",
      description: "React Satire App",
      imageUrl: "img/responsivestalk.png",
      technologies: ["Solid Js"],
      link: "https://theslantedroom.github.io/StalkTok/",
    },
  ],
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
      <div class={styles.portfolio__navigation}>
        <h1 class={styles.portfolio__title}>{currentProject().title}</h1>
        <button class={styles.portfolio__nav_button} onClick={handlePrevClick}>
          {"<"}
        </button>
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
