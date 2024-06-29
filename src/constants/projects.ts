export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  chipColor: string;
  playStoreLink?: URL | string;
  itchIoLink?: URL | string;
  playWebLink?: URL | string;
  iosStoreLink?: URL | string;
  epicGamesLink?: URL | string;
  steamStoreLink?: URL | string;
  technologies: string[];
  link: string;
  showTechStack?: boolean;
  hasDemo?: boolean;
}

export const myProjects: Project[] = [
  {
    title: "Idle Trillionaire",
    chipColor: "#000961",
    hasDemo: true,
    description:
      "Idle Trillionaire is a game about becoming a trillionaire. You are a seemingly normal person, but how will that break your fragile human mind when you are earning billions each second and realize madness is closer than your dreams of a trillion?",
    imageUrl: "img/responsiveTrillionaire.png",
    technologies: [
      "Single Player",
      "Casual",
      "Offline Progress",
      "Load/Save",
      "Milestones",
      "Prestige",
      "Unlock Cards",
    ],
    link: "https://www.idletrillionaire.com/",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.idletrillionaire.www",
    itchIoLink: "https://theslantedroom.itch.io/idle-trillionaire",
    playWebLink: "https://www.idletrillionaire.com/",
    epicGamesLink:
      "https://store.epicgames.com/en-US/p/idle-trillionaire-17afee",
    iosStoreLink:
      "https://apps.apple.com/us/app/idle-trillionaire-money-game/id6473220418",
    steamStoreLink:
      "https://store.steampowered.com/app/2753100/Idle_Trillionaire/",
  },
  {
    title: "Turn Based Boxing",
    chipColor: "#870000",
    hasDemo: true,
    description:
      "In this turn-based (optional auto-battler) simulation game, you'll recruit, train, and manage a roster of boxing champions as you strive to build the ultimate fighting dynasty.",
    imageUrl: "img/responsivehHbc.png",
    technologies: [
      "Create Your Gym",
      "Recruit Boxing Legends",
      "Complete Quests",
      "Perma-Death",
      "Unlock strategies",
      "Unlock Perks",
      "Turn Based",
      "Auto-Fight",
    ],
    link: "https://theslantedroom.itch.io/hbc-boxing",

    iosStoreLink: "#",
    epicGamesLink:
      "https://store.epicgames.com/en-US/p/idle-trillionaire-17afee",
    playStoreLink: "#",
    itchIoLink: "https://theslantedroom.itch.io/hbc-boxing",
    playWebLink: "https://www.hbcboxing.online/",
    steamStoreLink:
      "https://store.steampowered.com/app/2990450/Turn_Based_Boxing_Legends/",
  },
];
