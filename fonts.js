import { fontProviders } from "astro/config";

// Geist for astro.config `fonts`. Render it with <Font cssVariable="--font-geist" preload />.
export const geist = {
  provider: fontProviders.google(),
  name: "Geist",
  cssVariable: "--font-geist",
  weights: ["400 700"],
  subsets: ["latin"],
  fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
};
