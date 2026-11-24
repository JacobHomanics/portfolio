import type { StaticImageData } from "next/image";
import image0 from "../assets/images/projects/bill.webp";
import image1 from "../assets/images/projects/starter-kit.png";
import image2 from "../assets/images/projects/brandgage.jpg";
import image3 from "../assets/images/projects/disgo.webp";
import image4 from "../assets/images/projects/atlas.webp";
import image5 from "../assets/images/projects/pizza-people.webp";
import image6 from "../assets/images/projects/carstarz.png";
import image7 from "../assets/images/projects/independent-games.png";

export const projects: { name: string; description: string; url: string; image: StaticImageData }[] = [
  { name: "Bill Murray 1000", description: "Bill Murray 1000 is an Ethereum NFT collection. I engineered and deployed its smart contracts, and the launch attracted 500+ unique users and generated $240K+ in revenue.", url: "https://opensea.io/collection/billmurray1000", image: image0 },
  { name: "Reputation & Roles Starter Kit", description: "Reputation & Roles Starter Kit is an open-source framework for tracking and rewarding trust between individuals and organizations through transparent, verifiable onchain records, built with a $60K grant I secured.", url: "https://github.com/ATXDAO/rep-and-roles-starter-kit", image: image1 },
  { name: "Brandgage", description: "At Brandgage, I developed interactive applications, video games, and immersive VR/AR experiences showcased at multiple pharmaceutical conferences, combining real-time 3D, game development, and interactive storytelling.", url: "https://www.brandgage.com", image: image2 },
  { name: "Disgo", description: "Led engineering for Disgo, a social discovery platform, and Bartynder, a B2B2C platform for hospitality businesses, shipping two cross-platform apps that serve 800+ users and onboarding 10+ venues.", url: "https://app.disgoapp.io", image: image3 },
  { name: "OP Atlas", description: "Built the web application submission process for open-source software contributions on OP Atlas, which rewarded 250+ developers.", url: "https://atlas.optimism.io/", image: image4 },
  { name: "BigShot Toyworks", description: "At BigShot Toyworks, I developed interconnected products, including Pizza People and Weedies, that collectively generated over $60K in revenue, built on shared components and integrations across apps.", url: "https://pizzapeople.wtf", image: image5 },
  { name: "CarStarz", description: "At CarStarz, I designed and implemented a Progressive Web App prototype for specialty vehicle owners, with Privy sign-in, server-side wallet transactions, and Ethereum Attestation Service for on-chain verifiability of car records.", url: "https://carstarz.io", image: image6 },
  { name: "Independent Games & Unity Tools", description: "Developed 3 arcade-style mobile games for iOS and Android, web-based RPGs, and 5 Unity Asset Store tools.", url: "https://jacobhomanics.itch.io", image: image7 },
];
