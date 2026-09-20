/** Where the site is mounted: `/` in dev, `/cattachasm/` on GitHub Pages. */
const BASE = import.meta.env.BASE_URL;

/** Hangs a route path off the deploy base, so links work wherever we deploy. */
const href = (path: string) => `${BASE}${path.replace(/^\//, "")}`;

/** Canonical paths. Anything that navigates should reference these. */
export const ROUTES = {
  home: href("/"),
  game: href("/cattachasm"),
} as const;

export type RouteName = keyof typeof ROUTES;

/**
 * Paths that resolve to each route, including the spellings the original
 * router accepted. Written without the base, which `resolveRoute` strips off
 * before matching. GitHub Pages serves `404.html` — a copy of `index.html` —
 * for anything that is not a real file, so this table is still the only place
 * a URL is matched.
 */
const ALIASES: Record<RouteName, readonly string[]> = {
  home: ["/"],
  game: ["/cattachasm", "/games", "/game"],
};

/** Removes the deploy base from a pathname, leaving a leading-slash path. */
const stripBase = (pathname: string) =>
  pathname.startsWith(BASE) ? pathname.slice(BASE.length - 1) : pathname;

/** Resolves a pathname to a route, falling back to the title screen. */
export const resolveRoute = (pathname: string): RouteName => {
  const path = stripBase(pathname || "/").replace(/\/+$/, "") || "/";
  for (const [name, aliases] of Object.entries(ALIASES)) {
    if (aliases.includes(path)) return name as RouteName;
  }
  return "home";
};
