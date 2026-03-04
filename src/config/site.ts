const site = {
  // --- Site Metadata ---
  meta: {
    title: "Shippd",
    description:
      "A minimal personal blog about everyday's real world production stories (not only prod, also test and dev envs)",
    author: "PaperBackPear",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Writing", subtitle: "Blog", href: "/posts" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Friends", subtitle: "Links", href: "/friends" },
    { name: "About", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    {
      name: "GitHub",
      href: "https://github.com/PaperBackPear3",
      icon: "mdi:github",
    },
    {
      name: "Email",
      href: "mailto:fabioangeloni@gmail.com",
      icon: "mdi:email",
    },
    {
      name: "Linkedin",
      href: "www.linkedin.com/in/fabio-angeloni-7165041a9",
      icon: "mdi:linkedin",
    },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 Hello, I'm Fabio <PaperBackPear>",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      "I love coding and everything sourrounding computers. here you will read about real world scenarious i found myself into, the problems I faced and solutions I found",
    cards: [
      {
        icon: "mdi:explore",
        label: "Status",
        value: "Exploring K8s",
      },
      { icon: "mdi:location", label: "Location", value: "Earth" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025 Breeze",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  tools: [
    {
      name: "development",
      items: [
        "VS Code",
        "WebStorm",
        "Terminal",
        "Git",
        "Docker",
        "k8s",
        "Bruno",
      ],
    },
    {
      name: "productivity",
      items: ["Notion", "Obsidian", "Arc Browser"],
    },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Projects",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
