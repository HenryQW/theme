// Henry's projects, for the footer of each project site. Add a new project here, then release the theme.
export const projects = [
  { title: "Henry Pi Harness", href: "https://pi.henry.wang" },
  { title: "Rounds", href: "https://rounds.henry.wang" },
  { title: "Activity Monitor X", href: "https://amx.henry.wang" },
];

// The author line, the same words as in the Settings of each HenryQW Mac app.
export const credit = "Made with Henry by AI 🤖.";

// The Blume footer of a project site: the author line, About Henry, the other projects and the license. `site` is
// the site's URL (`deployment.site`), `repo` is `owner/name`; `links` go first. Blume adds the GitHub icon from `github`.
export const footer = (site, repo, links = []) => ({
  copyright: credit,
  links: [
    ...links,
    { label: "About Henry", href: "https://henry.wang" },
    ...projects.filter((p) => p.href !== site).map((p) => ({ label: p.title, href: p.href })),
    { label: "MIT License", href: `https://github.com/${repo}/blob/main/LICENSE` },
  ],
});
