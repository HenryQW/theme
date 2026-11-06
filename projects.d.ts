export declare const projects: readonly { title: string; href: string }[];
export declare const credit: string;
type Link = { label: string; href: string };
export declare const footer: (site: string, repo: string, links?: Link[]) => { copyright: string; links: Link[] };
