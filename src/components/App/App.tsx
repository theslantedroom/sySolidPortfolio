import type { Component } from "solid-js";
import { JSX, createSignal, createEffect } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
}

interface Props {
  projects?: Project[];
  mainTitle?: string;
}

const App: Component<Props> = ({
  mainTitle = "Steve Yee",
  projects = [
    {
      title: "Idle Trillionaire",
      description: "description",
      imageUrl: "/img/responsiveTrillionaire.png",
      technologies: ["technologies"],
      link: "link",
    },
    {
      title: "2",
      description: "description",
      imageUrl: "/img/responsiveLMS.png",
      technologies: ["technologies"],
      link: "link",
    },
  ],
}): JSX.Element => {
  const [currentProjectIndex, setCurrentProjectIndex] = createSignal(0);
  const [currentProject, setCurrentProject] = createSignal(projects[0]);
  console.log("currentProjectIndex", currentProjectIndex());

  createEffect(() => {
    setCurrentProject(projects[currentProjectIndex()]);
  }, currentProjectIndex());

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

  return (
    <div class={styles.portfolio}>
      <h1 class={styles.portfolio__title}>{mainTitle}</h1>
      <h1 class={styles.portfolio__title}>{currentProject().title}</h1>
      <p class={styles.portfolio__description}>
        {currentProject().description}
      </p>
      <img
        class={styles.portfolio__image}
        src={currentProject().imageUrl}
        alt={currentProject().title}
      />
      <ul class={styles.portfolio__technologies}>
        {currentProject().technologies.map((tech) => (
          <li class={styles.portfolio__technology}>{tech}</li>
        ))}
      </ul>
      <a class={styles.portfolio__link} href={currentProject().link}>
        View project
      </a>
      <div class={styles.portfolio__navigation}>
        <button class={styles.portfolio__nav_button} onClick={handlePrevClick}>
          Previous
        </button>
        <button class={styles.portfolio__nav_button} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
