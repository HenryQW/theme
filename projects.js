// Henry's projects, for the footer of each project site. Add a new project here, then release the theme.
export const projects = [
  { title: "Henry Pi Harness", href: "https://pi.henry.wang" },
  { title: "Rounds", href: "https://rounds.henry.wang" },
  { title: "Activity Monitor X", href: "https://amx.henry.wang" },
];

// Blume footer links to the other projects; `site` is this site's URL (`deployment.site`).
export const projectLinks = (site) =>
  projects.filter((p) => p.href !== site).map((p) => ({ label: p.title, href: p.href }));
