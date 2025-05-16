import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  csharp,
  ue,
  unity,
  blender,
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
  thronefall_cover,
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
    title: "Unreal Engine Expertise", 
    icon: ue 
  },
  { 
    title: "Unity Development", 
    icon: unity 
  },
  { 
    title: "3D Modeling and Animation", 
    icon: blender 
  },
  
];

export const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "ReactJS", icon: reactjs },
  { name: "Tailwind", icon: tailwind },
  { name: "Nodejs", icon: nodejs },
  { name: "Threejs", icon: threejs },
  { name: "Git", icon: git },
  { name: "Python", icon: python },
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "C#", icon: csharp },
  { name: "Java", icon: java },

];

export const companyHistory = [
  {
    title: "CEO & Lead Developer",
    teamMember: "Ioannis Papadopoulos",
    icon: mathwork,
    iconBg: "#161329",
    date: "Jan 2025 - Present",
    points: [
      "Founded Project Allecc with a vision to create innovative sci-fi games that challenge conventional gameplay.",
      "Developed the core gameplay mechanics for 'Lizards Vs Humans', focusing on species-specific abilities and balanced combat.",
      "Led the conceptualization and early development of 'Lizards Vs Humans'.",
      "Built a team of passionate developers, artists, and designers to bring our games to life.",
      "Secured initial funding and established partnerships with key industry players.",
    ],
  },
  {
    title: "Lead Game Designer",
    teamMember: "Vasilios Chiliaridis",
    icon: eduskill,
    iconBg: "#161329",
    date: "Mar 2025 - Present",
    points: [
      "Conceptualized and designed the game mechanics for 'Lizards Vs Humans', focusing on unique abilities for each species.",
      "Created the game world lore and narrative structure, establishing the conflict between humans and reptilians.",
      "Designed diverse game environments, from urban battlegrounds to alien landscapes.",
      "Collaborates closely with art and development teams to ensure design vision is properly implemented.",
    ],
  },
    {
    title: "Lead Sound Engineer",
    teamMember: "Paraskevas Pardalidis",
    icon: eduskill,
    iconBg: "#161329",
    date: "Mar 2025 - Present",
    points: [
      "Leads the audio design for 'Lizards Vs Humans', defining the sound identity for both the human and reptilian factions.",
      "Composes original soundtracks that reflect the tone of each game environment, from war-torn cities to alien jungles.",
      "Designs immersive soundscapes and real-time audio effects that enhance combat, dialogue, and exploration sequences.",
      "Collaborates with the narrative, design, and programming teams to reinforce storytelling and game feel through sound.",
    ],
  },
  {
    title: "What We Offer",
    teamMember: "Our Capabilities",
    icon: eduskill,
    iconBg: "#161329",
    date: "Available Worldwide",
    points: [
      "Full-cycle Game Development using Unreal Engine and Unity, including gameplay systems, world design, and multiplayer infrastructure.",
      "Responsive Web Development with modern stacks like React, Next.js, and WordPress, optimized for performance and UX.",
      "AI Development for games, tools, and business automation—ranging from NPC behavior systems to custom GPT integrations.",
      "UI/UX Design tailored to both web and gaming applications, combining aesthetic design with functional user experience.",
      "Backend & API Development using scalable architectures with Node.js, Django, or Laravel.",
      "Cross-platform deployment and optimization for desktop, mobile, and cloud-based environments.",
    ],
  },

  {
    title: "Early Access Launch",
    teamMember: "Company Milestone",
    icon: mathwork,
    iconBg: "#161329",
    date: "October 2025",
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
    name: "Thronefall: Eclipse",
    description:
      "Step into a dark medieval fantasy world where myth and steel collide. Explore ancient ruins, scale castle walls with parkour and battle legendary foes in intense duels or massive sieges. A rich multiplayer experience where every fight shapes your legend.",
    tags: [
      { name: "Souls-like", color: "pink-text-gradient" },
      { name: "MMORPG", color: "pink-text-gradient" },
      { name: "Unreal Engine", color: "yellow-text-gradient" },
    ],
    image: thronefall_cover, // Replace with actual game image variable
    game_link: "https://store.steampowered.com/app/thronefall",
  },

  {
    name: "Big Fellos: Fanistasy",
    description:
      "A cyberpunk adventure where players hack into digital systems using neural implants called FANTUM. Navigate corporate security and uncover a global conspiracy.",
    tags: [
      { name: "Cyberpunk", color: "blue-text-gradient" },
      { name: "Puzzle", color: "green-text-gradient" },
      { name: "Single-player", color: "pink-text-gradient" },
    ],
    image: mhft, // Replace with actual game image
    game_link: "https://www.projectallecc.com/neural-nexus",
  },
];