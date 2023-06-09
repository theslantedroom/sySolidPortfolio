import type { Component } from "solid-js";
import { JSX, createSignal, createEffect } from "solid-js";
import styles from "./Composer.module.css";

interface Props {
  about?: string;
  mainTitle?: string;
}

const Composer: Component<Props> = ({
  mainTitle = "Steve Yee",
  about = "I have been producing music for media in various genres, with focus on instrumental, orchestral, cinematic, hip-hop, and fanstasy video game music.",
}): JSX.Element => {
  return (
    <div class={styles.container}>
      <h1 class={styles.aboutTitle}>Composing</h1>
      <p class={styles.aboutText}>{about}</p>
      <div class="player">
        <div>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/92917460&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
            <a
              href="https://soundcloud.com/the-slanted-room"
              title="The Slanted Room"
              target="_blank"
              style="color: #cccccc; text-decoration: none;"
            >
              The Slanted Room
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/the-slanted-room/sets/2015-compositions"
              title="Misc Music"
              target="_blank"
              style="color: #cccccc; text-decoration: none;"
            >
              Misc Music
            </a>
          </div>
        </div>
      </div>
      <div class={styles.musiclinks}>
        <ul>
          <li>
            <a href="https://theslantedroom.ca/" target="blank">
              theSlantedRoom.ca
            </a>
          </li>
          <li>
            <a
              href="https://www.pond5.com/artist/theslantedroom"
              target="blank"
            >
              Music Licensing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Composer;
