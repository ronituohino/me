export type Project = {
  title: string;
  organization: string;
  year: string;
  description: string;
  technologies: Technology[];
  links: Link[];
  image: ImageFile;
  // show in front page
  show?: boolean;
};

type Technology = string;

type Link = {
  url: string;
  type: "general" | "live" | "demo" | "github" | "google-play";
};

type ImageFile = {
  file: string;
  alt: string;
};

export const projects = [
  {
    title: "Ruutu",
    organization: "Sanoma",
    year: "2023",
    description: "Finnish over-the-top video streaming service.",
    technologies: [
      "Next",
      "React",
      "Storybook",
      "Docker",
    ] satisfies Technology[],
    links: [
      {
        url: "https://ruutu.fi",
        type: "live",
      },
    ] satisfies Link[],
    image: { file: "", alt: "" } satisfies ImageFile,
  },

  {
    title: "Chroniconnect",
    organization: "Junction",
    year: "2023",
    description:
      "48-hour-long hackathon project for Tietoevry, a Finnish med-tech company.",
    technologies: ["React", "Vite", "MUI"] satisfies Technology[],
    links: [] satisfies Link[],
    image: { file: "", alt: "" } satisfies ImageFile,
  },
  {
    title: "SCAS",
    year: "2023",
    organization: "",
    description: "Cryptocurrency security auditing tool.",
    technologies: [
      "Tauri",
      "Vite",
      "TypeScript",
      "Radix",
    ] satisfies Technology[],
    links: [] satisfies Link[],
    image: { file: "", alt: "" } satisfies ImageFile,
  },
  {
    title: "Doodle Design",
    organization: "University of Helsinki",
    year: "2022",
    description:
      "Fully featured e-commerce store for an imaginary clothing brand. Includes a simple CMS for admins. The app and dev environment are containerized.",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "GraphQL",
      "MongoDB",
      "Docker",
    ] satisfies Technology[],
    links: [
      { url: "https://recom-pnxd5duksa-lz.a.run.app/", type: "demo" },
      { url: "https://github.com/ronituohino/doodle-design", type: "github" },
    ] satisfies Link[],
    image: { file: "doodledesign.png", alt: "" } satisfies ImageFile,
    show: true,
  },
  {
    title: "Battle Sheep",
    organization: "University of Helsinki",
    year: "2022",
    description:
      "Web version of the popular board game with the same name, featuring an AI opponent.",
    technologies: ["React", "Vite", "TypeScript"] satisfies Technology[],
    links: [
      { url: "https://battle-sheep-game.web.app/", type: "demo" },
      { url: "https://github.com/ronituohino/battle-sheep", type: "github" },
    ] satisfies Link[],
    image: { file: "battlesheep.png", alt: "" } satisfies ImageFile,
    show: true,
  },
  {
    title: "Viitevarasto",
    organization: "University of Helsinki",
    year: "2022",
    description:
      "A BibTeX references management system for a software production course. Has a nifty DOI handler for fetching new references.",
    technologies: ["Flask", "Postgres"] satisfies Technology[],
    links: [
      { url: "https://viitevarasto.fly.dev/", type: "demo" },
      { url: "https://github.com/ronituohino/viitevarasto", type: "github" },
    ] satisfies Link[],
    image: { file: "viitevarasto.png", alt: "" } satisfies ImageFile,
    show: true,
  },
  {
    title: "GParticles",
    year: "2021",
    organization: "",
    description:
      "Mobile art project on simulating as many particles as possible.",
    technologies: ["Unity"] satisfies Technology[],
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=com.Tuohino.GParticles",
        type: "google-play",
      },
      { url: "https://github.com/ronituohino/gparticles", type: "github" },
    ] satisfies Link[],
    image: { file: "gparticles.png", alt: "" } satisfies ImageFile,
    show: true,
  },
] satisfies Project[];
