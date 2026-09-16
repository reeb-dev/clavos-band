import type { Lang } from './lang';

export type UiCopy = {
  nav: {
    artist: string;
    history: string;
    photos: string;
    tracks: string;
    listen: string;
    contact: string;
  };
  hero: {
    listen: string;
  };
  bio: {
    label: string;
  };
  craft: {
    label: string;
    title: string;
    intro: string;
  };
  collab: {
    label: string;
    title: string;
    intro: string;
  };
  projects: {
    label: string;
    title: string;
    intro: string;
  };
  gallery: {
    label: string;
    title: string;
    intro: string;
    moreIg: string;
  };
  strip: {
    line: string;
    cta: string;
  };
  tracks: {
    title: string;
    intro: string;
  };
  listen: {
    title: string;
    intro: string;
  };
  history: {
    label: string;
    title: string;
    intro: string;
    studio: string;
  };
  lineup: {
    title: string;
  };
  discography: {
    title: string;
    intro: string;
    spotifyArtist: string;
  };
  footer: {
    tag: string;
  };
  lang: {
    es: string;
    en: string;
    aria: string;
  };
  alts: {
    hero: string;
    logo: string;
    studio: string;
  };
};

export const ui: Record<Lang, UiCopy> = {
  es: {
    nav: {
      artist: 'Artista',
      history: 'Historia',
      photos: 'Fotos',
      tracks: 'Temas',
      listen: 'Escuchar',
      contact: 'Contacto',
    },
    hero: {
      listen: 'Escuchar',
    },
    bio: {
      label: 'BIO',
    },
    craft: {
      label: 'OFICIO',
      title: 'Formación y escuela',
      intro:
        'Del Instituto Williams y el Teatro Roma al estudio con Osvaldo Tarantino, pianista del quinteto de Astor Piazzolla.',
    },
    collab: {
      label: 'ESCENARIO Y ESTUDIO',
      title: 'Colaboraciones',
      intro:
        'Más de 50 discos como sesionista y partnerías con el rock nacional e invitados internacionales.',
    },
    projects: {
      label: 'TAMBIÉN',
      title: 'Proyectos y obras',
      intro:
        'Sesiones, compilados, cine, teatro y producciones fuera del disco propio de Clavos Band.',
    },
    gallery: {
      label: 'GALERÍA',
      title: 'Escenario, estudio y camino',
      intro:
        'Clavito y la banda en vivo, en grabación y en prensa — el blues-rock como se ve de cerca.',
      moreIg: 'Ver más en Instagram',
    },
    strip: {
      line: 'Tres clavos. Una banda.',
      cta: 'Poner los temas',
    },
    tracks: {
      title: 'Temas',
      intro: 'Selección del catálogo. Abrí y escuchá.',
    },
    listen: {
      title: 'Escuchar',
      intro: 'Las mismas redes del bio de Instagram.',
    },
    history: {
      label: 'TRAYECTORIA',
      title: 'Historia',
      intro:
        'De sesionista adolescente a Clavos Band, Cosquín Rock, el Gran Rex y el material 2025 con Iorio, Martínez y Marciello.',
      studio: 'ESTUDIO',
    },
    lineup: {
      title: 'Formación',
    },
    discography: {
      title: 'Discografía',
      intro: 'Cada disco abre en Spotify.',
      spotifyArtist: 'Ver artista en Spotify',
    },
    footer: {
      tag: 'Blues-rock · Desde 1992 · Buenos Aires',
    },
    lang: {
      es: 'ES',
      en: 'EN',
      aria: 'Cambiar idioma',
    },
    alts: {
      hero: 'Clavito Actis con bajo',
      logo: 'Clavos Band',
      studio: 'Clavos Band en estudio',
    },
  },
  en: {
    nav: {
      artist: 'Artist',
      history: 'History',
      photos: 'Photos',
      tracks: 'Tracks',
      listen: 'Listen',
      contact: 'Contact',
    },
    hero: {
      listen: 'Listen',
    },
    bio: {
      label: 'BIO',
    },
    craft: {
      label: 'CRAFT',
      title: 'Training & school',
      intro:
        'From the Williams Institute and Teatro Roma to studying with Osvaldo Tarantino, pianist in Astor Piazzolla’s quintet.',
    },
    collab: {
      label: 'STAGE & STUDIO',
      title: 'Collaborations',
      intro:
        'Over 50 albums as a session player, plus partnerships across Argentine rock and international guests.',
    },
    projects: {
      label: 'ALSO',
      title: 'Projects & works',
      intro:
        'Sessions, compilations, film, theater, and productions beyond Clavos Band’s own records.',
    },
    gallery: {
      label: 'GALLERY',
      title: 'Stage, studio & road',
      intro:
        'Clavito and the band live, in the studio, and in the press — blues-rock up close.',
      moreIg: 'More on Instagram',
    },
    strip: {
      line: 'Three nails. One band.',
      cta: 'Play the tracks',
    },
    tracks: {
      title: 'Tracks',
      intro: 'A selection from the catalog. Open and listen.',
    },
    listen: {
      title: 'Listen',
      intro: 'The same links from the Instagram bio.',
    },
    history: {
      label: 'CAREER',
      title: 'History',
      intro:
        'From teenage session player to Clavos Band, Cosquín Rock, the Gran Rex, and the 2025 material with Iorio, Martínez, and Marciello.',
      studio: 'STUDIO',
    },
    lineup: {
      title: 'Lineup',
    },
    discography: {
      title: 'Discography',
      intro: 'Every album opens on Spotify.',
      spotifyArtist: 'View artist on Spotify',
    },
    footer: {
      tag: 'Blues-rock · Since 1992 · Buenos Aires',
    },
    lang: {
      es: 'ES',
      en: 'EN',
      aria: 'Switch language',
    },
    alts: {
      hero: 'Clavito Actis with bass',
      logo: 'Clavos Band',
      studio: 'Clavos Band in the studio',
    },
  },
};
