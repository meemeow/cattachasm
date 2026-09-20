/**
 * Every static asset path in one place, so no component ever hardcodes a URL.
 * Files live under `public/`, so these are resolved against the deploy base.
 */

/**
 * Prefixes a `public/` path with the base the site is mounted at — `/` locally,
 * `/cattachasm/` on GitHub Pages. Vite rewrites the asset URLs it can see in
 * HTML and CSS, but never strings like these, so they ask for the base
 * themselves.
 */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const IMAGES = {
  back: asset("images/back.png"),
  bananaCatHeart: asset("images/bananacatheart.png"),
  /** The play-area frame. Referenced by URL from `styles/pages/game.css`. */
  frame: asset("images/cattachasm_border.png"),
  catDead: asset("images/catded.png"),
  cutter: asset("images/cutter.png"),
  play: asset("images/play.png"),
  sheriff: asset("images/sheriff.webp"),
  sniper: asset("images/sniper.png"),
  star: asset("images/star.png"),
  start: asset("images/start.png"),
} as const;

export const GIFS = {
  bananaCat: asset("others/bananacat.gif"),
  background: asset("others/bg.gif"),
  bossAngry: asset("others/catbossangry.gif"),
  bossExplaining: asset("others/catbossexplaining.gif"),
  bossMain: asset("others/catbossmain.gif"),
  catCry: asset("others/catcry.gif"),
  catShock: asset("others/catshock.gif"),
  game: asset("others/game.gif"),
  happyCat: asset("others/happycat.gif"),
  laughingCat: asset("others/laughingcat.gif"),
  yapapa: asset("others/yapapa.gif"),
} as const;

export const SOUNDS = {
  bonk: asset("sounds/bonk.mp3"),
  bossMusic: asset("sounds/bossmusic.mp3"),
  catDead: asset("sounds/catded.mp3"),
  catLaughing: asset("sounds/catlaughing.mp3"),
  chineseCat: asset("sounds/chinesecat.mp3"),
  collect: asset("sounds/collect.mp3"),
  cry: asset("sounds/cry.mp3"),
  death: asset("sounds/death.mp3"),
  dialogue: asset("sounds/dialogue.mp3"),
  footsteps: asset("sounds/footsteps.mp3"),
  germanCat: asset("sounds/germancat.mp3"),
  happy: asset("sounds/happy.mp3"),
  jump: asset("sounds/jump.mp3"),
  levelFinish: asset("sounds/levelfinish.mp3"),
  levelMusic: asset("sounds/levelmusic.mp3"),
  roll: asset("sounds/roll.mp3"),
  sheriffReload: asset("sounds/sheriffreload.mp3"),
  sheriffShot: asset("sounds/sheriffsound.mp3"),
  sniperShot: asset("sounds/snipersound.mp3"),
  yapapa: asset("sounds/yapapa.mp3"),
} as const;

/**
 * Terrain and sky art, diced out of `background_assets.jpg` with its white
 * matte cut to transparency. Drawn to the canvas, never referenced from CSS.
 */
export const TERRAIN = {
  clouds: [
    asset("images/terrain/cloud-1.png"),
    asset("images/terrain/cloud-2.png"),
    asset("images/terrain/cloud-3.png"),
    asset("images/terrain/cloud-4.png"),
  ],
  /** A lone summit, used sparsely on the farthest parallax layer. */
  peak: asset("images/terrain/peak.png"),
  /** A full ridge line, repeated to build the two nearer layers. */
  range: asset("images/terrain/range.png"),
  /** A decorative boulder, drawn as a cut-out prop rather than a full cell. */
  rock: asset("images/terrain/rock.png"),
  brick: asset("images/terrain/brick.png"),
  dirt: [
    asset("images/terrain/dirt-1.png"),
    asset("images/terrain/dirt-2.png"),
    asset("images/terrain/dirt-3.png"),
  ],
  grass: [asset("images/terrain/grass-1.png"), asset("images/terrain/grass-2.png")],
} as const;
