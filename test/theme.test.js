import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { colors } from "../tokens.js";

const read = (file) =>
  readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
const kebab = (name) =>
  name.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();

test("tokens.js matches every color in tokens.css", () => {
  const cssColors = Object.fromEntries(
    [
      ...read("tokens.css").matchAll(/--ui-([a-z0-9-]+): (oklch\([^)]*\));/g),
    ].map(([, name, value]) => [name, value]),
  );
  const jsColors = Object.fromEntries(
    Object.entries(colors).map(([name, value]) => [kebab(name), value]),
  );
  assert.deepEqual(jsColors, cssColors);
});

test("reveal start states hide content only when scripts run and motion is allowed", () => {
  const css = read("components.css");
  const scripting = css.indexOf("@media (scripting: enabled)");
  const motion = css.lastIndexOf(
    "@media (prefers-reduced-motion: no-preference)",
    scripting,
  );
  const hiddenRules = [...css.matchAll(/:not\(\[data-revealed\]\)/g)];

  assert.ok(motion !== -1 && motion < scripting);
  assert.ok(hiddenRules.length > 0);
  for (const rule of hiddenRules) assert.ok(rule.index > scripting);
});
