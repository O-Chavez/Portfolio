// Copy for /work/knowvia. Claims here were checked against the Knowvia source, so keep them in sync if it changes.

export const glance = [
  { label: "Role", value: "Founder and sole engineer: product, design, code, infrastructure" },
  { label: "Built for", value: "Founders and growing SaaS teams" },
  { label: "Timeline", value: "2024 – present" },
  { label: "Stack", value: "TypeScript, React, Node, MongoDB, WebSockets, OpenAI, Stripe" },
  // Word joiner (U+2060) stops the price range breaking after the en dash.
  { label: "Status", value: "Live with four plans, $80–⁠$1,200/mo" },
];

export const liveDemoNote =
  "The chat in the corner of the site is Knowvia, answering questions about itself.";

export const problem = {
  heading: "Chatbots were scaring off the leads they were built to catch.",
  intro:
    "Founders and SaaS teams wanted one chat that could answer product questions and spot buyers. The tools available did one or the other, and both lost people.",
  others: {
    supportOnly: {
      title: "Support-only",
      body: "Answers questions, then lets an interested visitor leave without anyone knowing they were there.",
    },
    gated: {
      title: "Gated or scripted",
      body: "Demands a form before helping, or swerves into a canned script the moment it spots interest: “Sounds like you’d like to connect! Please give me your name and email…” Visitors can tell they’ve hit a form, and they lose confidence in the whole experience.",
    },
  },
  knowvia: {
    title: "Help first. Convert without pressure.",
    body: "Answers from the product’s own docs and asks for contact details only when the moment fits. The prompt guides visitors toward a decision: to buy, or to find out honestly that the product isn’t right for them.",
  },
};

export const steps = [
  {
    title: "Upload your docs",
    body: "PDFs and Word files become the assistant’s knowledge base.",
  },
  {
    title: "Match your brand",
    body: "Enter your site’s URL. Knowvia scrapes its colors and styles into a chat theme, which you can preview and fine-tune.",
  },
  {
    title: "Paste one script tag",
    body: "Add it to any site’s HTML. The chat opens in its own window over the page, on Webflow, WordPress or a custom build.",
  },
  {
    title: "Get scored leads",
    body: "When a visitor shares contact info, they become a lead scored hot, warm or cold, with an AI summary emailed to the owner.",
  },
];

export const architecture = {
  intro:
    "Three deployable apps share a single types package, so the widget, API and dashboard can’t drift out of sync.",
  widget: { name: "Widget", detail: ["React · Vite · one script tag", "Auto-themed to the host site"] },
  api: { name: "API", detail: ["Node · Express · TypeScript", "MongoDB · OpenAI"] },
  dashboard: { name: "Dashboard", detail: ["React · Tailwind · Chart.js", "Leads, analytics, billing"] },
  widgetLink: ["WebSocket", "one session per chat"],
  dashboardLink: ["REST + auth", "Google OAuth"],
  sharedTypes: { name: "Shared types package", detail: "Published to npm · imported by all three apps" },
  services: [
    "OpenAI API",
    "MongoDB",
    "AWS S3 (documents)",
    "Stripe (subscriptions)",
    "Headless Chrome",
    "Transactional email",
  ],
  shipping: "GitHub Actions → DigitalOcean (PM2)",
};

export const decisions = [
  {
    title: "Lock each API key to its owner’s domains",
    problem:
      "The widget’s API key sits in the page source of every customer’s site. Anyone could copy it onto their own site and burn through the customer’s quota.",
    decision:
      "Owners allowlist the domains their widget can run on, exact or wildcard (*.example.com). Each chat opens a WebSocket whose handshake checks the key, matches the page’s origin against that list, then checks the account status and the plan’s conversation quota before loading the knowledge base. Dev mode lifts the domain check for localhost and preview links, and shows visitors a warning if it’s left on.",
    why: "A copied key won’t load on anyone else’s site. The server holds the whole conversation, so the browser never sees or edits the prompt, and when the socket closes one handler titles, saves and meters the chat.",
  },
  {
    title: "Publish the API contract as a package",
    problem:
      "Three apps in three repos all talk to one API. Change a message shape and something breaks quietly in production.",
    decision:
      "Keep every shared type in one package, published to npm and imported by the widget, API and dashboard.",
    why: "A breaking change fails the TypeScript build instead of a customer’s chat.",
  },
  {
    title: "Auto-brand the widget with headless Chrome",
    problem:
      "A widget that looks foreign on a site hurts trust, and most customers won’t hand-tune CSS.",
    decision:
      "From the dashboard, the owner enters their URL. Puppeteer loads the site and reads the computed styles of its body, header, buttons and links. The most saturated color becomes the brand accent. Average background brightness decides between a light and a dark chat, and the button’s corner radius carries over.",
    why: "The widget looks native without the owner touching CSS. Every text color is checked against WCAG’s 4.5:1 contrast ratio, so a pale brand color can’t make the chat unreadable.",
  },
  {
    title: "Let the model flag leads mid-conversation",
    problem:
      "My first version matched phrases like “how much” or “talk to sales.” It couldn’t tell someone browsing from someone ready to buy, and transcripts were too long for a busy owner to read.",
    decision:
      "The system prompt defines hot, warm and cold. When the model sees buying intent or contact details, it adds a hidden JSON tag to its reply. The server removes the tag before the visitor sees the reply, validates the email and phone, and saves a lead once it has a name plus one way to reach them. A second call writes a one- or two-sentence summary for the owner’s email.",
    why: "Asking for contact details stays part of the conversation instead of interrupting it. A lead is saved only when someone can follow up on it, so the leads board never fills with dead ends, and the owner knows who to call first without opening the dashboard.",
  },
];

export const product = {
  intro:
    "Knowvia promised owners three things: answers, leads, and insight into what customers are really asking. When a chat ends, the server gives it an AI-written topic and saves it for analytics, so owners see what visitors care about, not just who left an email.",
};

export const lookingBack = {
  rag: {
    eyebrow: "Designed, ready to build",
    title: "A retrieval pipeline, sized to the customer",
    intro:
      "Plans are sized by how much documentation a customer can upload, from 5,000 tokens on Starter to 500,000 on Enterprise. The smaller tiers fit in the prompt with every conversation, which is simple and accurate, so that’s how the MVP works. The larger tiers don’t: 500,000 tokens is nearly four times what GPT-4o can read at once. From day one I had a full RAG pipeline specced for them:",
    points: [
      "Sync from third-party document providers, designed in the early days of MCP.",
      "A vector-based knowledge map that shows owners what their docs don’t cover.",
      "Agents that role-play the business’s target audience: they generate the questions real visitors would ask, run them against the knowledge base and rank the answers, so gaps surface before a visitor finds them.",
    ],
  },
  lesson: {
    eyebrow: "What I’d do differently",
    title: "Take it to market sooner",
    paragraphs: [
      "Knowvia was working by early 2025, when businesses were most open to this kind of product. People I knew in the Scottsdale tech scene were interested. Instead of selling it, I kept building.",
      "The engineering was never the hard part; putting it in front of customers was. Next time, a working product goes to its first few paying customers early, and they help set the roadmap.",
    ],
  },
};
