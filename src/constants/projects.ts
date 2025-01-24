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
    // iosStoreLink: "#",
    // epicGamesLink: "#",
    // playStoreLink: "#",
    itchIoLink: "https://theslantedroom.itch.io/hbc-boxing",
    playWebLink: "https://www.hbcboxing.online/",
    steamStoreLink:
      "https://store.steampowered.com/app/2990450/Turn_Based_Boxing_Legends/",
  },
  {
    title: "Kitty Krush",
    chipColor: "#8f3996",
    hasDemo: true,
    description: "Like Poker but with cats.... (coming 2025)",
    imageUrl: "img/responsiveKittyKrush.png",
    technologies: [
      "Rogue like deck builder",
      "Cat cards",
      "Unlock deck modifier cards",
      "Perma-Death",
    ],
    link: "https://theslantedroom.itch.io/hbc-boxing",
    playWebLink: "https://kitty-krush.vercel.app/",
  },

  {
    title: "Idle Influencer",
    chipColor: "#300c66",
    hasDemo: false,
    description:
      "Idle Influencer takes place inside the Idle Trillionaire universe. Welcome to the trillionaire's social media journey.",
    imageUrl: "img/responsiveInfluencer.png",
    technologies: [
      "Casual",
      "Offline Progress",
      "Load/Save",
      "Milestones",
      "Prestige",
      "Unlock Cards",
      "Unlock Meme Videos",
    ],
    link: "https://idle-influencer.vercel.app/",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.idle_influencer.www&hl=en_CA",
    itchIoLink: "https://theslantedroom.itch.io/idle-influencer",
    playWebLink: "https://idle-influencer.vercel.app/",
    epicGamesLink: "",
    iosStoreLink:
      "https://apps.apple.com/us/app/idle-influencer-followers-lol/id6474143547",
  },
  {
    title: "Last Man Standing",
    chipColor: "#300c66",
    hasDemo: true,
    description:
      "Last Man Standing is a Board Game. This is a simplified spin off / web game.",
    imageUrl: "img/responsiveLMS.png",
    technologies: ["Board Game - 2-4 players", "Web Game - single player"],
    link: "https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",
    playStoreLink: "",
    itchIoLink: "https://theslantedroom.itch.io/last-man-standing-mini-game",
    playWebLink:
      "https://theslantedroom.github.io/Last-Man-Standing-Mini-Game/",
    epicGamesLink: "",
    iosStoreLink: "",
  },
];
