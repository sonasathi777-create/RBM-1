import imageDimensions from "./project-image-dimensions.json";

export type Project = {
  slug: string;
  name: string;
  category: "Food & drink" | "Fashion" | "Pet care" | "Hospitality";
  summary: string;
  services: string[];
  sourceFolder: string;
  boardCount: number;
  coverBoard: number;
  originalFiles?: string[];
  localVideos?: { src: string; title: string; poster?: string }[];
  video?: { src: string; title: string };
};

export const projects: Project[] = [
  {
    slug: "wow-kulfi", name: "Wow Kulfi", category: "Food & drink",
    summary: "Summer flavours, familiar memories and a playful pink world. Social creatives and a summer campaign reel for Wow Kulfi.",
    services: ["Social content", "Creative direction", "Seasonal campaigns", "Video Studio"],
    sourceFolder: "wow-kulfi", boardCount: 11, coverBoard: 1,
    originalFiles: Array.from({ length: 11 }, (_, index) => `${String(index + 1).padStart(2, "0")}.webp`),
    localVideos: [
      { src: "/work/projects/wow-kulfi/summer-campaign.mp4", title: "Wow Kulfi: summer campaign", poster: "/work/projects/wow-kulfi/02.webp" },
    ],
  },
  {
    slug: "1937", name: "1937", category: "Food & drink",
    summary: "Calcutta’s culinary memories, freshly told. Food photography, coffeehouse stories, dessert creatives and films for 1937.",
    services: ["Social content", "Food photography", "Creative direction", "Video Studio"],
    sourceFolder: "1937", boardCount: 26, coverBoard: 1,
    originalFiles: ["WhatsApp Image 2026-10-26 at 7.39.07 PM (4).jpeg", "Artboard 12 copy 2@3x.jpg", "Artboard 12 copy 3@3x.jpg", "Artboard 12 copy 4@3x.jpg", "Artboard 12 copy@3x.jpg", "Artboard 12@3x.jpg", "WhatsApp Image 2026-10-26 at 7.37.17 PM (2).jpeg", "WhatsApp Image 2026-10-26 at 7.37.17 PM.jpeg", "WhatsApp Image 2026-10-26 at 7.37.18 PM (1).jpeg", "WhatsApp Image 2026-10-26 at 7.37.18 PM.jpeg", "WhatsApp Image 2026-10-26 at 7.37.19 PM.jpeg", "WhatsApp Image 2026-10-26 at 7.37.57 PM (1).jpeg", "WhatsApp Image 2026-10-26 at 7.37.57 PM (2).jpeg", "WhatsApp Image 2026-10-26 at 7.37.57 PM.jpeg", "WhatsApp Image 2026-10-26 at 7.37.58 PM (1).jpeg", "WhatsApp Image 2026-10-26 at 7.37.58 PM.jpeg", "WhatsApp Image 2026-10-26 at 7.38.25 PM.jpeg", "WhatsApp Image 2026-10-26 at 7.39.07 PM (1).jpeg", "WhatsApp Image 2026-10-26 at 7.39.07 PM (3).jpeg", "WhatsApp Image 2026-10-26 at 7.39.07 PM.jpeg", "WhatsApp Image 2026-10-26 at 7.39.08 PM.jpeg", "WhatsApp Image 2026-10-28 at 3.39.02 PM.jpeg", "WhatsApp Image 2026-10-28 at 3.39.03 PM (1).jpeg", "WhatsApp Image 2026-10-28 at 3.39.03 PM (2).jpeg", "WhatsApp Image 2026-10-28 at 3.39.03 PM.jpeg", "WhatsApp Image 2026-10-28 at 3.39.04 PM.jpeg"],
    localVideos: [
      { src: "/work/projects/1937/film-02.mp4", title: "1937: our favourite things", poster: "/work/projects/1937/16.webp" },
      { src: "/work/projects/1937/film-03.mp4", title: "1937: Calcutta’s culinary story", poster: "/work/projects/1937/21.webp" },
    ],
  },
  {
    slug: "amber", name: "Amber", category: "Food & drink",
    summary: "Amber, established in 1959. A frame-by-frame collection of food photography, cocktail stories and social creatives.",
    services: ["Social content", "Food photography", "Creative direction"],
    sourceFolder: "amber", boardCount: 14, coverBoard: 1,
    originalFiles: Array.from({ length: 14 }, (_, index) => `${String(index + 1).padStart(2, "0")}.webp`),
  },
  {
    slug: "wow-china", name: "Wow China", category: "Food & drink",
    summary: "Bold red creatives, food close-ups, and flavours from across Asia. Social content and video stories for Wow China.",
    services: ["Social content", "Food photography", "Campaigns", "Video Studio"],
    sourceFolder: "wow_china", boardCount: 13, coverBoard: 1,
    originalFiles: ["WhatsApp Image 2026-11-11 at 3.18.07 PM (1).jpeg","WhatsApp Image 2026-11-11 at 3.18.07 PM.jpeg","WhatsApp Image 2026-11-11 at 3.19.05 PM.jpeg","WhatsApp Image 2026-11-11 at 3.19.06 PM.jpeg","WhatsApp Image 2026-11-11 at 3.19.25 PM.jpeg","WhatsApp Image 2026-11-11 at 3.19.43 PM (1).jpeg","WhatsApp Image 2026-11-11 at 3.19.43 PM (2).jpeg","WhatsApp Image 2026-11-11 at 3.19.43 PM (3).jpeg","WhatsApp Image 2026-11-11 at 3.19.43 PM.jpeg","WhatsApp Image 2026-11-11 at 3.20.16 PM (1).jpeg","WhatsApp Image 2026-11-11 at 3.20.16 PM (2).jpeg","WhatsApp Image 2026-11-11 at 3.20.16 PM.jpeg","WhatsApp Image 2026-11-11 at 3.22.48 PM.jpeg"],
  },
  {
    slug: "anjohn", name: "ANJOHN", category: "Fashion",
    summary: "Salon style, academy stories and beauty in detail. Social grids and seasonal campaigns for A N John Salons & Academy.",
    services: ["Social content", "Creative direction", "Seasonal campaigns"],
    sourceFolder: "anjohn", boardCount: 12, coverBoard: 1,
    originalFiles: ["A N John Grid (1).png", "A N John Grid (2).png", "Academy Griod Look.png", "Artboard 1.png", "Anjohn Design 3.jpg", "Get your nails done.png", "Giveaway Grid 2.png", "A N John Valentine_s Day 2.png", "Valentine_s Day 3.png", "Story 1.png", "Story 2.png", "Story 3.png"],
  },
  {
    slug: "flavours-of-india", name: "Flavours of India", category: "Food & drink",
    summary: "Food, fusion, and festive storytelling. A collection of menu-led visuals, seasonal creatives, and food and drink content for Flavours of India.",
    services: ["Social content", "Food photography", "Seasonal campaigns"], sourceFolder: "foi", boardCount: 14, coverBoard: 1,
  },
  {
    slug: "hideaway", name: "Hideaway", category: "Food & drink",
    summary: "A warm, coffee-inspired visual world. Menu features, café moments, live-music creatives, and social storytelling for Hideaway.",
    services: ["Social content", "Food photography", "Event creatives"], sourceFolder: "hideaway", boardCount: 14, coverBoard: 1,
  },
  {
    slug: "kinkys", name: "Kinky’s", category: "Food & drink",
    summary: "Scrumptious. Saucy. Messy. Bold food imagery and playful, expressive social creatives that put Kinky’s personality front and centre.",
    services: ["Social content", "Food photography", "Creative direction"], sourceFolder: "kinkys", boardCount: 5, coverBoard: 1,
  },
  {
    slug: "the-paw-story", name: "The Paw Story", category: "Pet care",
    summary: "Pet portraits, grooming offers, and care-led communication. An affectionate, playful collection of social content for The Paw Story.",
    services: ["Social content", "Pet photography", "Promotional creatives"], sourceFolder: "PAW STORY", boardCount: 6, coverBoard: 1,
  },
  {
    slug: "turtle", name: "Turtle", category: "Fashion",
    summary: "Everyday essentials and occasion dressing, seen through a cohesive visual lens. Fashion imagery, collection stories, and promotional creatives for Turtle.",
    services: ["Social content", "Fashion campaigns", "Promotional creatives"], sourceFolder: "turtle", boardCount: 14, coverBoard: 1,
  },
  {
    slug: "utsav", name: "Utsav Hotel & Banquet", category: "Hospitality",
    summary: "Hospitality rooted in culture. Brand identity explorations, festive communication, and visual stories of the stays, celebrations, and experiences at Utsav.",
    services: ["Brand identity", "Social content", "Festive campaigns"], sourceFolder: "utsav", boardCount: 10, coverBoard: 1,
  },
];

export function projectImage(project: Project, board = project.coverBoard) {
  return `/work/projects/${project.slug}/${String(board).padStart(2, "0")}.webp`;
}

export function projectImageDimensions(project: Project, board = project.coverBoard) {
  if (project.slug === "amber") return { width: 2200, height: 1556 };
  const key = `${project.slug}/${board}` as keyof typeof imageDimensions;
  return imageDimensions[key] ?? { width: 3508, height: 2480 };
}

export function originalProjectImage(project: Project, board: number) {
  if (project.originalFiles) return `/work/projects/${project.slug}/${encodeURIComponent(project.originalFiles[board - 1])}`;
  return `/RBM%20brand%20book/${encodeURIComponent(project.sourceFolder)}/Artboard%20${board}.jpg`;
}

export function projectBoards(project: Project) {
  return Array.from({ length: project.boardCount }, (_, index) => ({
    number: index + 1,
    src: projectImage(project, index + 1),
    ...projectImageDimensions(project, index + 1),
    original: originalProjectImage(project, index + 1),
  }));
}
