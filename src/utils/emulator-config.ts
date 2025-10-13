/**
 * Configuración de emuladores web para diferentes consolas
 * Usando EmulatorJS - Una biblioteca open source para emuladores web
 */

export interface EmulatorConfig {
  system: string;
  core: string;
  rom?: string;
  bios?: string[];
  extensions: string[];
}

export const emulatorSystems: Record<string, EmulatorConfig> = {
  // Super Nintendo (SNES)
  snes: {
    system: "snes",
    core: "snes9x",
    extensions: [".smc", ".sfc", ".zip"],
    bios: [],
  },

  // Nintendo 64
  n64: {
    system: "n64",
    core: "mupen64plus",
    extensions: [".n64", ".z64", ".v64", ".zip"],
    bios: [],
  },

  // PlayStation 1
  psx: {
    system: "psx",
    core: "pcsx_rearmed",
    extensions: [".cue", ".bin", ".chd", ".pbp", ".zip"],
    bios: ["scph1001.bin", "scph5501.bin", "scph7001.bin"],
  },

  // Arcade (MAME)
  arcade: {
    system: "arcade",
    core: "mame2003",
    extensions: [".zip"],
    bios: ["neogeo.zip"],
  },

  // Game Boy Advance
  gba: {
    system: "gba",
    core: "mgba",
    extensions: [".gba", ".zip"],
    bios: ["gba_bios.bin"],
  },

  // Sega Genesis/Mega Drive
  genesis: {
    system: "segaMD",
    core: "genesis_plus_gx",
    extensions: [".md", ".gen", ".smd", ".zip"],
    bios: [],
  },
};

/**
 * URLs de CDN para EmulatorJS
 */
export const emulatorAssets = {
  js: "https://cdn.emulatorjs.org/stable/data/loader.js",
  wasm: "https://cdn.emulatorjs.org/stable/data/cores/",
  css: "https://cdn.emulatorjs.org/stable/data/localization/en.js",
};

/**
 * Configuración de juegos de ejemplo (ROMs homebrews/libres)
 */
export const freeGames = {
  snes: [
    {
      name: "Super Boss Gaiden",
      url: "https://www.zophar.net/fileuploads/2/10691uzmbn/superbossGaidenv1.0.smc",
      description: "Homebrew SNES game",
    },
  ],
  gba: [
    {
      name: "Goodboy Galaxy",
      url: "https://example.com/goodboy-galaxy-demo.gba",
      description: "Indie GBA game",
    },
  ],
  arcade: [
    {
      name: "Open Liero",
      url: "https://example.com/openliero.zip",
      description: "Open source arcade game",
    },
  ],
};

/**
 * Genera la configuración HTML para EmulatorJS
 */
export function generateEmulatorHTML(system: string, romUrl: string): string {
  const config = emulatorSystems[system];
  if (!config) {
    throw new Error(`Sistema no soportado: ${system}`);
  }

  return `
    <div id="game-container" style="width: 100%; height: 100%;">
      <div id="game" style="width: 100%; height: 100%;"></div>
    </div>
    
    <script>
      window.EJS_player = '#game';
      window.EJS_core = '${config.core}';
      window.EJS_gameUrl = '${romUrl}';
      window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
      window.EJS_startOnLoaded = true;
      window.EJS_fullscreenOnLoaded = false;
    </script>
    
    <script src="${emulatorAssets.js}"></script>
  `;
}

/**
 * Lista de sitios alternativos con menos problemas de CORS
 */
export const alternativeEmulatorSites = [
  {
    name: "ClassicReload",
    url: "https://classicreload.com",
    description: "Juegos clásicos sin problemas de CORS",
    systems: ["dos", "arcade", "c64"],
  },
  {
    name: "Internet Archive",
    url: "https://archive.org/details/software",
    description: "Archivo de software histórico",
    systems: ["dos", "apple2", "atari"],
  },
  {
    name: "WebRcade",
    url: "https://www.webrcade.com",
    description: "Emulador web moderno",
    systems: ["nes", "snes", "genesis", "gba"],
  },
];
