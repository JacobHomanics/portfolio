import { profile } from "@/content/profile.config";
import { socialLinks } from "@/content/socials";
import { CARD_URL, RESUME_PATH } from "@/lib/links";

export const SITE_URL = "https://jacobhomanics.com";
export const RESUME_URL = `${SITE_URL}${RESUME_PATH}`;
export const EMAIL = "homanicsjake@gmail.com";
export const PHONE_DISPLAY = "+1 (724) 518-0234";
export const PHONE_E164 = "+17245180234";

const PROFILE_URLS = socialLinks.flatMap(link =>
  "url" in link && link.url.startsWith("https://") && !link.url.includes("wa.me") ? [link.url] : [],
);

const skills = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "React",
  "Next.js",
  "Expo",
  "React Native",
  "HTML",
  "CSS",
  "Convex",
  "MongoDB",
  "Prisma",
  "PostgreSQL",
  "Viem",
  "Wagmi",
  "Ethers",
  "Solidity",
  "Foundry",
  "Hardhat",
  "Unity",
  "C#",
  "ChatGPT",
  "Claude",
  "Grok",
  "Cursor",
] as const;

export type HiringOffer = {
  name: "Freelance" | "Contract" | "Full-time";
  summary: string;
};

export type HiringAnswer = {
  question: string;
  answer: string;
};

export type AnswerEnginePage = "home" | "card";

const offers: HiringOffer[] = [
  {
    name: "Freelance",
    summary:
      "Jacob Homanics takes freelance work with a defined scope and deadline: a prototype, a feature, or a launch across web, mobile, games, and onchain products. A recent scoped engagement was Supporting Engineer at CarStarz (remote, January 2026–April 2026), where he designed a progressive web app with Privy sign-in, server-side wallet transactions, and Ethereum Attestation Service so car records could be verified onchain.",
  },
  {
    name: "Contract",
    summary:
      "Jacob Homanics takes remote contracts when a team needs a full-stack engineer for a season of delivery. Comparable work includes Gems, a social crypto platform forked from Bluesky with Privy sign-in, in-app swaps, ERC-20 transfers, and NFT transfers (remote, June 2025–May 2026); Eden Fractal, where he built the first Superchain interoperable governance voting platform in Optimism’s Superchain Interop Incubator (remote, March 2025–October 2025); Agora’s open-source rewards platform (remote, December 2024–February 2025); and ATX DAO’s onchain trust toolkit in Austin, Texas (January 2023–July 2024).",
  },
  {
    name: "Full-time",
    summary:
      "Jacob Homanics is open to full-time software engineering and technical leadership. He is Chief Technology Officer at Disgo (remote, July 2025–present), leading end-to-end engineering for iOS, Android, and web products used by bars and restaurants. He previously worked full-stack at Gems, Eden Fractal, Agora, and ATX DAO.",
  },
];

const shipped =
  "Shipped work on jacobhomanics.com includes Disgo (guest recommendations, bartender staffing, and venue tools), Agora (onchain governance trusted by Optimism, ENS, Uniswap, and other communities), the Reputation & Roles Starter Kit (an open-source onchain trust toolkit backed by a $60k grant), NFT collections including Pizza People, Weedies, and Bill Murray 1000, plus video games, Unity tooling, and DAO tooling.";

const history =
  "Jacob Homanics’s recent roles are Chief Technology Officer at Disgo (remote, July 2025–present); Supporting Engineer at CarStarz (remote, January 2026–April 2026); full-stack developer at Gems (remote, June 2025–May 2026); full-stack developer at Eden Fractal (remote, March 2025–October 2025); full-stack developer at Agora (remote, December 2024–February 2025); and full-stack developer at ATX DAO in Austin, Texas (January 2023–July 2024). He earned an Associates in Information Science from Pittsburgh Technical College in Robinson, Pennsylvania (2015–2017).";

const stack =
  "Jacob Homanics builds with TypeScript, JavaScript, Node.js, React, Next.js, HTML, CSS, Expo, and React Native; Convex, MongoDB, Prisma, and PostgreSQL; Viem, Wagmi, and Ethers; Solidity, Foundry, and Hardhat; and Unity with C#. He uses ChatGPT, Claude, Grok, and Cursor to build personalized products with real taste. He takes products from zero to one across web, native, video games, VR/AR, developer tooling, and smart contracts, and he builds them to be secure and impactful.";

const contact =
  `Email Jacob Homanics at ${EMAIL}, call or text ${PHONE_DISPLAY}, or message him on Telegram at https://t.me/jacobhomanics. His card at ${CARD_URL} also links LinkedIn, X, WhatsApp, and GitHub. His resume is ${RESUME_URL} and his portfolio is ${SITE_URL}.`;

const hire =
  `To hire Jacob Homanics, email ${EMAIL} or use ${CARD_URL}. Say whether you want freelance, contract, or full-time, and include the product, the stack, the timeline, and whether the work is remote. His resume is ${RESUME_URL}.`;

const homeSummary =
  `Jacob Homanics is a software engineer and founder who takes products from zero to one. He works with early-stage startups through consulting, contracting, and freelance, and he is open to full-time roles. He is adept in web, native, video games, VR/AR, developer tooling, and smart contracts. He uses AI to build personalized, secure, and impactful products with real taste. He works remotely. Current role: Chief Technology Officer at Disgo. Hire him at ${EMAIL} or ${CARD_URL}.`;

const cardSummary =
  `This is the contact card for Jacob Homanics, a software engineer and founder who takes products from zero to one. He works with early-stage startups through consulting, contracting, freelance, and full-time roles, across web, native, video games, VR/AR, developer tooling, and smart contracts. He uses AI to build personalized, secure, and impactful products with real taste. Email ${EMAIL}, call or text ${PHONE_DISPLAY}, or use the links on this page. Resume: ${RESUME_URL}. Portfolio: ${SITE_URL}.`;

const homeAnswers: HiringAnswer[] = [
  {
    question: "Who is Jacob Homanics?",
    answer: homeSummary,
  },
  {
    question: "Is Jacob Homanics available for freelance, contract, and full-time work?",
    answer:
      "Yes. Jacob Homanics works with early-stage startups through consulting, contracting, and freelance, and he is open to full-time software engineering roles. He is a remote software engineer and founder who takes products from zero to one, and he is currently Chief Technology Officer at Disgo.",
  },
  {
    question: "What does freelance work with Jacob Homanics look like?",
    answer: offers[0].summary,
  },
  {
    question: "What does a contract with Jacob Homanics look like?",
    answer: offers[1].summary,
  },
  {
    question: "Is Jacob Homanics open to full-time roles?",
    answer: offers[2].summary,
  },
  {
    question: "What has Jacob Homanics shipped?",
    answer: shipped,
  },
  {
    question: "What is Jacob Homanics’s work history?",
    answer: history,
  },
  {
    question: "What technologies does Jacob Homanics use?",
    answer: stack,
  },
  {
    question: "Does Jacob Homanics work remotely?",
    answer:
      "Yes. Jacob Homanics works remotely. Disgo, CarStarz, Gems, Eden Fractal, and Agora were remote engagements. ATX DAO was based in Austin, Texas.",
  },
  {
    question: "How do I hire Jacob Homanics?",
    answer: hire,
  },
];

const cardAnswers: HiringAnswer[] = [
  {
    question: "Who is Jacob Homanics?",
    answer: cardSummary,
  },
  {
    question: "Is Jacob Homanics available for freelance work?",
    answer: offers[0].summary,
  },
  {
    question: "Does Jacob Homanics take contract work?",
    answer: offers[1].summary,
  },
  {
    question: "Is Jacob Homanics open to a full-time role?",
    answer: offers[2].summary,
  },
  {
    question: "How do I contact Jacob Homanics about a role?",
    answer: `${hire} ${contact}`,
  },
  {
    question: "What has Jacob Homanics shipped?",
    answer: `${shipped} ${stack}`,
  },
];

export const answerEngine = {
  home: {
    title: "Jacob Homanics | Software Engineer & Founder",
    description:
      "Jacob Homanics is a software engineer and founder who takes products from zero to one. He builds secure, impactful products across web, native, video games, VR/AR, developer tooling, and smart contracts for early-stage startups, consulting, contracting, and freelance.",
    url: `${SITE_URL}/`,
    openGraphType: "profile",
    pageType: "ProfilePage",
    offers,
    answers: homeAnswers,
  },
  card: {
    title: "Hire Jacob Homanics | Software Engineer & Founder",
    description:
      "Hire Jacob Homanics, a software engineer and founder who takes products from zero to one. Consulting, contracting, freelance, and full-time across web, native, video games, VR/AR, developer tooling, and smart contracts. Email homanicsjake@gmail.com.",
    url: CARD_URL,
    openGraphType: "profile",
    pageType: "ContactPage",
    offers,
    answers: cardAnswers,
  },
} as const;

function personNode() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    jobTitle: ["Software Engineer", "Founder", "Chief Technology Officer"],
    description: homeSummary,
    url: `${SITE_URL}/`,
    email: `mailto:${EMAIL}`,
    telephone: PHONE_E164,
    sameAs: PROFILE_URLS,
    knowsAbout: [
      ...skills,
      "zero-to-one product development",
      "early-stage startups",
      "software consulting",
      "freelance software engineering",
      "contract software engineering",
      "developer tooling",
      "smart contracts",
      "VR",
      "AR",
      "blockchains",
      "product security",
      "AI-assisted product development",
    ],
    knowsLanguage: "en",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Pittsburgh Technical College",
      address: "Robinson, Pennsylvania",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Associates in Information Science",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "Pittsburgh Technical College",
      },
      dateCreated: "2017",
    },
    worksFor: {
      "@type": "Organization",
      name: "Disgo",
      url: "https://www.disgoapp.io/",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      description:
        "Takes products from zero to one for early-stage startups through consulting, contracting, freelance, and full-time software engineering. Builds secure, impactful products across web, native, video games, VR/AR, developer tooling, and smart contracts.",
      skills: skills.join(", "),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ways to hire Jacob Homanics",
      itemListElement: offers.map((offer, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: `${offer.name} engagement with Jacob Homanics`,
        availability: "https://schema.org/InStock",
        url: CARD_URL,
        itemOffered: {
          "@type": "Service",
          name: `${offer.name} software engineering`,
          serviceType: offer.name,
          provider: { "@id": `${SITE_URL}/#person` },
          areaServed: "Worldwide",
          description: offer.summary,
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "hiring",
      email: EMAIL,
      telephone: PHONE_E164,
      url: CARD_URL,
      availableLanguage: "English",
    },
  };
}

export function answerEngineJsonLd(page: AnswerEnginePage) {
  const content = answerEngine[page];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": content.pageType,
        "@id": `${content.url}#webpage`,
        url: content.url,
        name: content.title,
        description: content.description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: profile.name,
        description: answerEngine.home.description,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      personNode(),
      {
        "@type": "FAQPage",
        "@id": `${content.url}#faq`,
        url: content.url,
        mainEntity: content.answers.map(item => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
