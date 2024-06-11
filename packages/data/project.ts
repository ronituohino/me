export type Project = {
  title: string;
  slug: string;
  organization: string;
  year: string;
  description: string;
  technologies: Technology[];
  links: Link[];
  show: "hidden" | "front" | "featured";
};

type Technology = string;

type Link = {
  url: string;
  type: "general" | "live" | "demo" | "github" | "google-play";
};

export const projects = [
  {
    title: "Supla",
    slug: "supla",
    organization: "Nelonen Media",
    year: "2024",
    description: "Finnish podcast streaming service.",
    technologies: [
      "Next",
      "React",
      "Storybook",
      "Docker",
    ] satisfies Technology[],
    links: [
      {
        url: "https://supla.fi",
        type: "live",
      },
    ] satisfies Link[],
    show: "front",
  },
  {
    title: "Ruutu",
    slug: "ruutu",
    organization: "Nelonen Media",
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
    show: "featured",
  },
  {
    title: "Chroniconnect",
    slug: "chroniconnect",
    organization: "Junction",
    year: "2023",
    description: "48-hour-long hackathon project for Tietoevry.",
    technologies: ["React", "Vite", "MUI"] satisfies Technology[],
    links: [] satisfies Link[],
    show: "hidden",
  },
  {
    title: "SCAS",
    slug: "scas",
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
    show: "hidden",
  },
  {
    title: "Doodle Design",
    slug: "doodle-design",
    organization: "University of Helsinki",
    year: "2022",
    description:
      "Fully featured e-commerce store for an imaginary clothing brand.",
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
    show: "front",
  },
  {
    title: "Battle Sheep",
    slug: "battle-sheep",
    organization: "University of Helsinki",
    year: "2022",
    description: "Web version of the popular board game with an AI opponent.",
    technologies: ["React", "Vite", "TypeScript"] satisfies Technology[],
    links: [
      { url: "https://battle-sheep-game.web.app/", type: "demo" },
      { url: "https://github.com/ronituohino/battle-sheep", type: "github" },
    ] satisfies Link[],
    show: "front",
  },
  {
    title: "Viitevarasto",
    slug: "viitevarasto",
    organization: "University of Helsinki",
    year: "2022",
    description: "A BibTeX references management system.",
    technologies: ["Flask", "Postgres"] satisfies Technology[],
    links: [
      { url: "https://viitevarasto.fly.dev/", type: "demo" },
      { url: "https://github.com/ronituohino/viitevarasto", type: "github" },
    ] satisfies Link[],
    show: "front",
  },
  {
    title: "GParticles",
    slug: "gparticles",
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
    show: "front",
  },
] satisfies Project[];
