import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

// We'll reuse these images for now, but in production you'd replace them with actual game dev related images

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "games",
    title: "Games",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const companyValues = [
  { 
    title: "Innovation", 
    icon: c 
  },
  { 
    title: "Quality", 
    icon: cpp 
  },
  { 
    title: "Player Experience", 
    icon: python 
  },
  { 
    title: "Community", 
    icon: java 
  },
];

export const technologies = [
  { name: "Unreal Engine", icon: html },
  { name: "Unity", icon: css },
  { name: "C++", icon: javascript },
  { name: "C#", icon: reactjs },
  { name: "Blender", icon: tailwind },
  { name: "Maya", icon: nodejs },
  { name: "ZBrush", icon: threejs },
  { name: "Git", icon: git },
];

export const companyHistory = [
  {
    title: "CEO & Founder",
    teamMember: "Ioannis Papadopoulos",
    icon: mathwork,
    iconBg: "#161329",
    date: "Jan 2021 - Present",
    points: [
      "Founded Project Allecc with a vision to create innovative sci-fi games that challenge conventional gameplay.",
      "Led the conceptualization and early development of 'Lizards Vs Humans'.",
      "Built a team of passionate developers, artists, and designers to bring our games to life.",
      "Secured initial funding and established partnerships with key industry players.",
    ],
  },
  {
    title: "Lead Game Designer",
    teamMember: "Maria Konstantinou",
    icon: eduskill,
    iconBg: "#161329",
    date: "Mar 2021 - Present",
    points: [
      "Developed the core gameplay mechanics for 'Lizards Vs Humans', focusing on species-specific abilities and balanced combat.",
      "Created the game world lore and narrative structure, establishing the conflict between humans and reptilians.",
      "Designed diverse game environments, from urban battlegrounds to alien landscapes.",
      "Collaborates closely with art and development teams to ensure design vision is properly implemented.",
    ],
  },
  {
    title: "Lead Developer",
    teamMember: "Dimitris Alexiou",
    icon: edunet,
    iconBg: "#161329",
    date: "Apr 2021 - Present",
    points: [
      "Leads the technical development of our Unreal Engine-based game systems.",
      "Architected the networking infrastructure for multiplayer gameplay with emphasis on performance and anti-cheat measures.",
      "Implemented advanced AI systems for NPC behaviors in campaign mode.",
      "Mentors junior developers and establishes technical best practices for the studio.",
    ],
  },
  {
    title: "Early Access Launch",
    teamMember: "Company Milestone",
    icon: mathwork,
    iconBg: "#161329",
    date: "October 2024",
    points: [
      "Successfully launched 'Lizards Vs Humans' in Early Access on Steam.",
      "Reached over 50,000 players in the first month.",
      "Gathered crucial player feedback to guide future development.",
      "Implemented first major content update based on community suggestions.",
    ],
  },
];

export const games = [
  {
    name: "Lizards Vs Humans",
    description:
      "Our flagship multiplayer FPS set in an alternate reality where reptilian beings battle humans for control of Earth. Features unique species-specific abilities, diverse weapon systems, and tactical gameplay.",
    tags: [
      { name: "FPS", color: "blue-text-gradient" },
      { name: "Multiplayer", color: "green-text-gradient" },
      { name: "Sci-Fi", color: "pink-text-gradient" },
      { name: "Unreal Engine", color: "yellow-text-gradient" },
    ],
    image: weatherpedia, // Replace with actual game image
    game_link: "https://store.steampowered.com/app/lizardsvhumans",
  },
  {
    name: "Cosmic Pioneers",
    description:
      "A space exploration sandbox game where players discover new planets, establish colonies, and uncover ancient alien technologies. Currently in early development.",
    tags: [
      { name: "Sandbox", color: "blue-text-gradient" },
      { name: "Space", color: "green-text-gradient" },
      { name: "Exploration", color: "pink-text-gradient" },
    ],
    image: termpw, // Replace with actual game image
    game_link: "https://www.projectallecc.com/cosmic-pioneers",
  },
  {
    name: "Neural Nexus",
    description:
      "A cyberpunk puzzle adventure where players hack into digital systems using neural implants. Navigate corporate security and uncover a global conspiracy.",
    tags: [
      { name: "Cyberpunk", color: "blue-text-gradient" },
      { name: "Puzzle", color: "green-text-gradient" },
      { name: "Single-player", color: "pink-text-gradient" },
    ],
    image: mhft, // Replace with actual game image
    game_link: "https://www.projectallecc.com/neural-nexus",
  },
  {
    name: "Reptilian Rising",
    description:
      "A mobile strategy game set in the 'Lizards Vs Humans' universe. Build your base, train troops, and conquer territories in an ongoing faction war.",
    tags: [
      { name: "Mobile", color: "blue-text-gradient" },
      { name: "Strategy", color: "green-text-gradient" },
      { name: "Free-to-Play", color: "pink-text-gradient" },
    ],
    image: payloadmaster, // Replace with actual game image
    game_link: "https://play.google.com/store/apps/reptilianrising",
  },
  {
    name: "Echoes of Extinction",
    description:
      "A narrative-driven adventure about the last human survivor on a post-apocalyptic Earth. Discover what happened to humanity while avoiding alien hunters.",
    tags: [
      { name: "Adventure", color: "blue-text-gradient" },
      { name: "Horror", color: "green-text-gradient" },
      { name: "Survival", color: "pink-text-gradient" },
    ],
    image: CompileVortex, // Replace with actual game image
    game_link: "https://www.projectallecc.com/echoes-of-extinction",
  },
  {
    name: "Venom Labs",
    description:
      "A VR experience where players take on the role of a reptilian scientist developing biological weapons. Features realistic lab simulation and moral choices.",
    tags: [
      { name: "VR", color: "blue-text-gradient" },
      { name: "Simulation", color: "green-text-gradient" },
      { name: "Sci-Fi", color: "pink-text-gradient" },
    ],
    image: sketcher, // Replace with actual game image
    game_link: "https://www.oculus.com/experiences/venom-labs",
  },
];