import { ProjectData } from "./types";

export const data: Array<ProjectData> = [
  {
    name: "Supercharged Vector2",
    description: "Enhances Vector2s with events, helper methods, and components for health and timer management.",
    imgSrc: "/unity-assets/supercharged-vector2.png",
    link: "https://assetstore.unity.com/packages/tools/utilities/supercharged-vector2-305553",
    //   links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/pool-management-system" }],
  },
  {
    name: "Raycast Controller",
    description:
      "Flexible raycasting configuration for distance, layers, and runtime control. Event-based callbacks (`OnEnter`, `OnStay`, `OnExit`) for interaction logic. Debugging tools to visualize raycasts and hit points in the Scene view.",
    imgSrc: "/unity-assets/raycast-controller.png",
    link: "https://assetstore.unity.com/packages/tools/utilities/raycast-controller-305913",
    //   links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/raycast-controller" }],
  },
  {
    name: "Event Driven Pool Management System",
    description:
      "Utilizes UnityEvents to make development an ease when dealing with GameObjects that need managed in a pool. What/How things are pooled is up to the developer. The system allows for the developer to define what it means for a pooled object to be spawned or despawned.",
    imgSrc: "/unity-assets/pms.webp",
    link: "https://assetstore.unity.com/packages/tools/integration/event-driven-pool-management-system-176853",
    //   links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/pool-management-system" }],
  },
  {
    name: "Overlap Shape",
    description: "simplifies the process of detecting and responding to colliders in Unity using geometrical shapes.",
    imgSrc: "/unity-assets/overlap-shapes.png",
    link: "https://assetstore.unity.com/packages/tools/utilities/overlap-shapes-305907",
    //   links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/overlap-shape" }],
  },
  {
    name: "Callbacks",
    description: "Provides a unified way to handle MonoBehaviour lifecycle events through UnityEvents.",
    imgSrc: "/unity-assets/callbacks.png",
    link: "https://assetstore.unity.com/packages/tools/utilities/callbacks-305914",
    //   links: [{ icon: GithubLogo, url: "https://github.com/JacobHomanics/callbacks" }],
  },
];
