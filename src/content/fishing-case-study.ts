// Copy for /work/browser-fishing. Claims here were checked against the game's source, so keep them in sync if it changes.

export const glance = [
  { label: "Role", value: "Solo build: game design, code and hosting" },
  { label: "Timeline", value: "2026" },
  { label: "Stack", value: "TypeScript, Three.js, Node, WebSockets, PostgreSQL" },
  { label: "Status", value: "Live and free to play in the browser" },
];

export const architecture = {
  heading: "One server, one set of rules.",
  intro:
    "The browser draws the world. A single Node service serves the client, runs every room over WebSockets and saves each account.",
  client: { name: "Browser client", detail: ["Three.js · Vite", "Rendering, input, reel minigame"] },
  server: { name: "Game server", detail: ["Node · ws · TypeScript", "One room per map"] },
  storage: { name: "Saves", detail: ["PostgreSQL in production", "JSON files locally"] },
  clientLink: ["WebSocket", "JSON messages"],
  storageLink: ["Flushed", "every 2 seconds"],
  shared: {
    name: "Shared TypeScript rules",
    detail: "Economy, progression, casino and protocol · imported by both sides",
  },
  network:
    "Positions go out 10 times a second, and only for players who moved. The leaderboard goes out at most once a second.",
  shipping: "Render · one web service",
};

export const decisions = [
  {
    title: "The server owns every roll",
    body: "When a player casts, the server decides what bites, and it rejects a catch reported before a 1.5-second fight could have happened. Sales, purchases and casino bets are all checked server-side, so a modified client can’t award itself coins or fish.",
  },
  {
    title: "One set of rules on both sides",
    body: "The server imports the same TypeScript modules as the client for prices, odds and level gates, and both read one protocol file for message types. They can’t disagree about what a fish is worth.",
  },
  {
    title: "Everything built in code",
    body: "Every model, from the 20 fish to the town, is assembled from Three.js primitives, and the music and sound effects are synthesized with the Web Audio API at runtime. There are no 3D models or sound files to download, and a new fish or rod is plain TypeScript data.",
  },
  {
    title: "Tested like a product",
    body: "149 Vitest unit tests cover the economy, progression, casino odds and server rooms. A headless-Chrome smoke test plays the game end to end, and a repeatable render benchmark compares frame metrics between commits.",
  },
];
