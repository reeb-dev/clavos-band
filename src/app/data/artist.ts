import type { Lang } from '../i18n/lang';

const links = {
  instagram: 'https://www.instagram.com/clavosband_clavito369/',
  spotify: 'https://open.spotify.com/artist/4b8GbUgdmvIoc0etR8puFz',
  audiomack: 'https://audiomack.com/clavos-band-1',
  youtube: 'https://youtube.com/@Clavosband',
} as const;

const collaborations = [
  'Javier Martínez (Manal)',
  'Ricardo Iorio',
  'Claudio “Tano” Marciello',
  'Willy Quiroga (Vox Dei)',
  'Simón Quiroga (Vox Dei)',
  'Lito Vitale',
  'Luis Salinas',
  'Oscar Alemán',
  'Deacon Jones',
  'Kenny Kirkland',
  'Juanjo Hermida',
  'Hugo Méndez',
  'Osvaldo “Pilu” Camacho',
  'Osvaldo Avena',
  'Ricardo Báez',
  'Carlinhos Da Silva',
  'Yeye López',
  'José María Núñez',
  'Darío el Inimitable',
  'Marcelo Roascio',
  'Claudio Leal Dasso',
  'Alejandro Medina',
  'Daniel Maza',
  'Vitico',
  'Beto Ceriotti',
  'Nahuel Antuña',
  'Gustavo Zavala',
  'Carlos Gardellini',
  'Totti Gieco (Jóvenes Pordioseros)',
  'Maxi Trusso',
  'Fernando Scarcella',
  'Alambre González',
  'Patán Vidal',
  'Miguel Tallarita',
  'Sol Ulloa',
  'Paulo Sergio Paiva',
  'Paki Balaguer',
  'Ana María Giunta',
  'Jorge Polaco',
] as const;

const tracksShared = [
  {
    title: 'Andinia',
    album: 'Andinia',
    year: '2025',
    href: 'https://open.spotify.com/album/5EmwyjngBb0YVNILbIc1l2',
  },
  {
    title: 'Melodía Morfina',
    album: 'Shadows of Life – Melodía Morfina',
    year: '2025',
    href: 'https://open.spotify.com/album/2UwZq04cZq9JH1ukAG3MGE',
  },
  {
    title: 'Positivo',
    album: 'Clavos Band',
    year: '2025',
    href: 'https://open.spotify.com/artist/4b8GbUgdmvIoc0etR8puFz',
  },
  {
    title: 'Calle, vereda y cordón',
    album: 'Clavos Band',
    year: '2023',
    href: 'https://open.spotify.com/artist/4b8GbUgdmvIoc0etR8puFz',
  },
  {
    title: 'Solo un final',
    album: 'Clavos Band',
    year: '2020',
    href: 'https://open.spotify.com/artist/4b8GbUgdmvIoc0etR8puFz',
  },
  {
    title: 'Pappo Blues',
    album: 'Esclavo del Rock',
    year: '2010',
    href: 'https://open.spotify.com/album/3IufhLNewoxUvBB8q2x05P',
  },
] as const;

type ArtistContent = {
  name: string;
  lead: string;
  tagline: string;
  pitch: string;
  bio: {
    headline: string;
    body: string;
    extended: string;
    more: string;
  };
  training: { title: string; detail: string }[];
  lineup: { role: string; name: string; note: string }[];
  collaborations: readonly string[];
  projects: { title: string; detail: string }[];
  endorsements: { brand: string; detail: string }[];
  links: typeof links;
  platforms: {
    id: string;
    label: string;
    description: string;
    href: string;
  }[];
  tracks: readonly {
    title: string;
    album: string;
    year: string;
    href: string;
  }[];
  albums: { title: string; year: string; note: string; href: string }[];
  milestones: { year: string; title: string; detail: string }[];
  photos: { src: string; alt: string; caption: string; wide: boolean }[];
  quotes: { text: string; source: string }[];
  booking: { headline: string; body: string };
};

const es: ArtistContent = {
  name: 'Clavos Band',
  lead: 'Clavito Actis',
  tagline: 'Músico, bajista, cantautor y productor.',
  pitch:
    'Blues-rock desde 1992. Productor Warner Chappell. Clavos Band / Clavito Actis.',
  bio: {
    headline: 'Clavos Band / Clavito Actis',
    body: 'Bajista, cantautor, autor, compositor y productor Warner Chappell. Estudió música con el pianista Osvaldo Tarantino, del quinteto de Astor Piazzolla. En 1992 armó Clavos Band y debutó en Rock & Pop, tocando en rockerías de CABA y el Gran Buenos Aires.',
    extended:
      'Sus inicios fueron a los 14 años con guitarra clásica en el Instituto Williams y contrabajo en el Teatro Roma, en paralelo con el bajo eléctrico. A los 17 arrancó como sesionista con cantantes como Yuyu Da Silva y Altemar Dutra; después integró la banda de Oscar Alemán y tocó cuatro años junto a Luis Salinas.',
    more: 'Participó en infinitas formaciones de nivel nacional e internacional, grabó en más de 50 discos de otros artistas y compartió escenario y estudio con figuras del rock, el blues y el folklore. Hoy sigue con Clavos Band — Sergio Biagetti en batería y Zurdo Pérez en guitarra — produciendo material nuevo y saliendo de gira.',
  },
  training: [
    {
      title: 'Osvaldo Tarantino',
      detail: 'Estudio con el pianista del quinteto de Astor Piazzolla.',
    },
    {
      title: 'Instituto Williams',
      detail: 'Guitarra clásica desde los 14 años.',
    },
    {
      title: 'Teatro Roma',
      detail: 'Contrabajo, en paralelo al bajo eléctrico.',
    },
  ],
  lineup: [
    {
      role: 'Bajo y voz',
      name: 'Clavito Actis',
      note: 'Fundador · compositor · productor Warner Chappell',
    },
    {
      role: 'Guitarra',
      name: 'Zurdo Pérez',
      note: 'Formación actual',
    },
    {
      role: 'Batería',
      name: 'Sergio Biagetti',
      note: 'Formación actual',
    },
  ],
  collaborations,
  projects: [
    {
      title: 'Vudú · homenaje a Jobim y Vinicius',
      detail: 'Con el cantante Paulo Sergio Paiva. CD para el sello Magenta.',
    },
    {
      title: 'Coalition',
      detail: 'Participación en banda de metal.',
    },
    {
      title: 'Basta de boludos',
      detail: 'Javier Martínez con Clavos Band en dos tracks del disco.',
    },
    {
      title: 'Diemen Noord',
      detail: '2012: Clavito Actis en el segundo álbum de la banda.',
    },
    {
      title: 'El Tutor',
      detail:
        'Musicalización de la obra junto a Paki Balaguer, con el cineasta Jorge Polaco (Kindergarten).',
    },
    {
      title: 'Los sueños de Nini',
      detail: 'Musicalización de la obra con Ana María Giunta.',
    },
    {
      title: 'Rock y Fierros',
      detail:
        'Compilado con La Naranja, Negro García López, Polos Rock, La 25 y La Trifásica. Presentado en CM — Canal de la Música, con participación de Lito Vitale.',
    },
    {
      title: 'Poder del Bajo (2010)',
      detail:
        'Producción con Marcelo Roascio. Bajistas: Alejandro Medina, Daniel Maza, Willy Quiroga, Beto Ceriotti, Vitico, Nahuel Antuña y Gustavo Zavala.',
    },
    {
      title: 'Pelo Cárdenas',
      detail: 'Grabación del CD junto a Ricardo Iorio.',
    },
    {
      title: 'Iorio y amigos',
      detail:
        'Participación en el disco y shows; material nuevo también en 2022.',
    },
    {
      title: 'Dinamita Veloso',
      detail: '2022: producción de material nuevo en paralelo a Clavos Band.',
    },
  ],
  endorsements: [
    {
      brand: 'Gallien-Krueger',
      detail: 'Endorse de la marca (amplificación).',
    },
    {
      brand: 'Music Man / Ernie Ball',
      detail: 'Desde 2014, bajo Sterling 34.',
    },
  ],
  links,
  platforms: [
    {
      id: 'instagram',
      label: 'Instagram',
      description: '@clavosband_clavito369',
      href: links.instagram,
    },
    {
      id: 'youtube',
      label: 'YouTube',
      description: '@Clavosband',
      href: links.youtube,
    },
    {
      id: 'spotify',
      label: 'Spotify',
      description: 'Catálogo completo',
      href: links.spotify,
    },
    {
      id: 'audiomack',
      label: 'Audiomack',
      description: 'Temas y singles',
      href: links.audiomack,
    },
  ],
  tracks: tracksShared,
  albums: [
    {
      title: 'Andinia',
      year: '2025',
      note: 'Iorio con Clavos Band',
      href: 'https://open.spotify.com/album/5EmwyjngBb0YVNILbIc1l2',
    },
    {
      title: 'Melodía Morfina',
      year: '2025',
      note: 'Shadows of Life · con Maxi Trusso e Iorio',
      href: 'https://open.spotify.com/album/2UwZq04cZq9JH1ukAG3MGE',
    },
    {
      title: 'Clavos Band A Continuación',
      year: '2019',
      note: 'Soporte digital · shows y telonero de Iorio',
      href: 'https://open.spotify.com/album/4ihjferlNfEVkqAPLpabrv',
    },
    {
      title: 'Ama',
      year: '2021',
      note: 'En Spotify',
      href: 'https://open.spotify.com/album/3UnqiHW6UDpQVivtidbb2G',
    },
    {
      title: 'Mutando',
      year: '2015',
      note: 'Estudios Ion · Señor Silver',
      href: 'https://open.spotify.com/album/426ko1VPcHkqA77pmKzO6N',
    },
    {
      title: 'Esclavo del Rock',
      year: '2010',
      note: 'Con Totti Gieco (Jóvenes Pordioseros)',
      href: 'https://open.spotify.com/album/3IufhLNewoxUvBB8q2x05P',
    },
    {
      title: 'El Blues de los Espejos',
      year: '2010',
      note: 'En Spotify',
      href: 'https://open.spotify.com/album/75wLmeykmv9qDhSK73iJcx',
    },
    {
      title: 'Track Uno',
      year: '2005',
      note: 'GLD · Iorio, Tano Marciello, Willy y Simón Quiroga (Vox Dei)',
      href: 'https://open.spotify.com/album/49Blrj1EEz2vxBGokLRbVH',
    },
    {
      title: 'El Jardín de mi Tía',
      year: '2003',
      note: 'En Spotify',
      href: 'https://open.spotify.com/album/2fnPXfcjFzYsVVzLIr0kR3',
    },
    {
      title: 'Clavos Band en vivo Betty Blues',
      year: '2001',
      note: 'Registro en vivo',
      href: 'https://open.spotify.com/album/3KYt7EOpgcl4qECtrDlTyI',
    },
    {
      title: 'Brujita de cartón',
      year: '1995',
      note: 'Debut discográfico · sello ATC',
      href: 'https://open.spotify.com/album/00xmhydLyNp6anDZLebdKP',
    },
  ],
  milestones: [
    {
      year: '14 años',
      title: 'Formación clásica',
      detail:
        'Guitarra en el Instituto Williams y contrabajo en el Teatro Roma; en paralelo, bajo eléctrico.',
    },
    {
      year: '17 años',
      title: 'Sesionista',
      detail:
        'Trabaja con cantantes como Yuyu Da Silva y Altemar Dutra; después Oscar Alemán y cuatro años con Luis Salinas.',
    },
    {
      year: '1992',
      title: 'Nace Clavos Band',
      detail: 'Debut en Rock & Pop; circuitos de CABA y Gran Buenos Aires.',
    },
    {
      year: '1995',
      title: 'Brujita de cartón',
      detail:
        'Primer disco (ATC). Parceria con Javier Martínez (Manal) y canciones como Pappo Blues.',
    },
    {
      year: 'c. 2000',
      title: 'Cine y teatro',
      detail:
        'Musicaliza El Tutor con Paki Balaguer y Jorge Polaco, y Los sueños de Nini con Ana María Giunta.',
    },
    {
      year: '2005',
      title: 'Track Uno',
      detail:
        'GLD con invitados: Ricardo Iorio, Tano Marciello, Willy y Simón Quiroga (Vox Dei) y Carlos Gardellini.',
    },
    {
      year: '2007',
      title: 'Cosquín Rock',
      detail: 'Clavos Band en el festival.',
    },
    {
      year: '2010',
      title: 'Esclavo del Rock · Poder del Bajo',
      detail:
        'Disco propio, compilado de bajistas y Rock y Fierros en CM. Endorse Gallien-Krueger.',
    },
    {
      year: '2012',
      title: 'Diemen Noord',
      detail: 'Participa en el segundo álbum de la banda.',
    },
    {
      year: '2014',
      title: 'Music Man / Ernie Ball',
      detail: 'Endorse del bajo Sterling 34.',
    },
    {
      year: '2016',
      title: '50 años del rock nacional',
      detail:
        'Shows con Willy Quiroga (Vox Dei) y Javier Martínez (Manal) en Vorterix Rosario y Gran Rex.',
    },
    {
      year: '2018–19',
      title: 'A Continuación',
      detail:
        'CD digital; telonero de Ricardo Iorio; grabaciones con Iorio, Pelo Cárdenas e Iorio y amigos.',
    },
    {
      year: '2020',
      title: 'Pandemia en redes',
      detail:
        'Shows online y video de Solo un final con Tano Marciello y Fernando Scarcella (CM TV).',
    },
    {
      year: '2021',
      title: 'Sesiones en Pilar Music',
      detail:
        'Grabación con Scarcella e invitados: Alambre González, Hugo Méndez, Patán Vidal, Miguel Tallarita, Sol Ulloa.',
    },
    {
      year: '2022',
      title: 'Iorio y Dinamita Veloso',
      detail:
        'Nuevo material con Ricardo Iorio (Iorio y amigos) y producción de Dinamita Veloso.',
    },
    {
      year: '2023',
      title: 'Teatro UOCRA',
      detail:
        'Show propio; graba Calle, vereda y cordón con Ricardo Iorio.',
    },
    {
      year: '2025',
      title: 'Material nuevo',
      detail:
        'Positivo (Martínez / Actis / Marciello), Melodía Morfina con Maxi Trusso e Iorio, Andinia (Iorio con Clavos Band).',
    },
  ],
  photos: [
    {
      src: 'photos/hq-band-studio.jpg',
      alt: 'Clavos Band en estudio de grabación',
      caption: 'Estudio · rock.com.ar',
      wide: true,
    },
    {
      src: 'photos/hq-spotify.jpg',
      alt: 'Clavito Actis con bajo Sterling',
      caption: 'Bajo · Spotify',
      wide: false,
    },
    {
      src: 'photos/hq-yt-show-01.jpg',
      alt: 'Clavito Actis en sesión de estudio',
      caption: 'Sesión · YouTube',
      wide: false,
    },
    {
      src: 'photos/hq-clavito-radio.jpg',
      alt: 'Clavito Actis en Radio Provincia',
      caption: 'Radio Provincia',
      wide: false,
    },
    {
      src: 'photos/hq-yt-show-02.jpg',
      alt: 'Clavos Band — video YouTube',
      caption: 'Video',
      wide: false,
    },
    {
      src: 'photos/hq-yt-show-03.jpg',
      alt: 'Clavos Band en vivo',
      caption: 'En vivo',
      wide: false,
    },
    {
      src: 'photos/post1.jpg',
      alt: 'Clavito Actis en vivo con bajo',
      caption: 'Instagram',
      wide: false,
    },
    {
      src: 'photos/post8.jpg',
      alt: 'Clavito Actis en Warner Chappell Music',
      caption: 'Warner Chappell',
      wide: false,
    },
  ],
  quotes: [
    {
      text: 'La música es alma y espíritu, y la unión de las personas.',
      source: 'Clavito Actis',
    },
  ],
  booking: {
    headline: 'Shows y prensa',
    body: 'Seguí el día a día en Instagram. YouTube para shows y videos. Para fechas o prensa, escribinos por las redes.',
  },
};

const en: ArtistContent = {
  name: 'Clavos Band',
  lead: 'Clavito Actis',
  tagline: 'Musician, bassist, singer-songwriter, and producer.',
  pitch:
    'Blues-rock since 1992. Warner Chappell producer. Clavos Band / Clavito Actis.',
  bio: {
    headline: 'Clavos Band / Clavito Actis',
    body: 'Bassist, singer-songwriter, author, composer, and Warner Chappell producer. He studied music with pianist Osvaldo Tarantino of Astor Piazzolla’s quintet. In 1992 he formed Clavos Band and debuted on Rock & Pop, playing rock clubs across Buenos Aires City and Greater Buenos Aires.',
    extended:
      'He started at 14 with classical guitar at the Williams Institute and double bass at Teatro Roma, alongside electric bass. At 17 he began as a session player with singers such as Yuyu Da Silva and Altemar Dutra; later he joined Oscar Alemán’s band and spent four years with Luis Salinas.',
    more: 'He has played in countless national and international lineups, recorded on more than 50 albums for other artists, and shared the stage and studio with figures from rock, blues, and folk. Today he continues with Clavos Band — Sergio Biagetti on drums and Zurdo Pérez on guitar — producing new material and touring.',
  },
  training: [
    {
      title: 'Osvaldo Tarantino',
      detail: 'Studied with the pianist from Astor Piazzolla’s quintet.',
    },
    {
      title: 'Williams Institute',
      detail: 'Classical guitar from age 14.',
    },
    {
      title: 'Teatro Roma',
      detail: 'Double bass, alongside electric bass.',
    },
  ],
  lineup: [
    {
      role: 'Bass & vocals',
      name: 'Clavito Actis',
      note: 'Founder · songwriter · Warner Chappell producer',
    },
    {
      role: 'Guitar',
      name: 'Zurdo Pérez',
      note: 'Current lineup',
    },
    {
      role: 'Drums',
      name: 'Sergio Biagetti',
      note: 'Current lineup',
    },
  ],
  collaborations,
  projects: [
    {
      title: 'Vudú · tribute to Jobim and Vinicius',
      detail: 'With singer Paulo Sergio Paiva. CD for the Magenta label.',
    },
    {
      title: 'Coalition',
      detail: 'Appearance with a metal band.',
    },
    {
      title: 'Basta de boludos',
      detail: 'Javier Martínez with Clavos Band on two tracks of the album.',
    },
    {
      title: 'Diemen Noord',
      detail: '2012: Clavito Actis on the band’s second album.',
    },
    {
      title: 'El Tutor',
      detail:
        'Score for the play with Paki Balaguer and filmmaker Jorge Polaco (Kindergarten).',
    },
    {
      title: 'Los sueños de Nini',
      detail: 'Score for the play with Ana María Giunta.',
    },
    {
      title: 'Rock y Fierros',
      detail:
        'Compilation with La Naranja, Negro García López, Polos Rock, La 25, and La Trifásica. Presented on CM — Canal de la Música, with Lito Vitale.',
    },
    {
      title: 'Poder del Bajo (2010)',
      detail:
        'Production with Marcelo Roascio. Bassists: Alejandro Medina, Daniel Maza, Willy Quiroga, Beto Ceriotti, Vitico, Nahuel Antuña, and Gustavo Zavala.',
    },
    {
      title: 'Pelo Cárdenas',
      detail: 'CD recording with Ricardo Iorio.',
    },
    {
      title: 'Iorio y amigos',
      detail: 'Album and live shows; new material again in 2022.',
    },
    {
      title: 'Dinamita Veloso',
      detail: '2022: producing new material alongside Clavos Band.',
    },
  ],
  endorsements: [
    {
      brand: 'Gallien-Krueger',
      detail: 'Brand endorsee (amplification).',
    },
    {
      brand: 'Music Man / Ernie Ball',
      detail: 'Since 2014, Sterling 34 bass.',
    },
  ],
  links,
  platforms: [
    {
      id: 'instagram',
      label: 'Instagram',
      description: '@clavosband_clavito369',
      href: links.instagram,
    },
    {
      id: 'youtube',
      label: 'YouTube',
      description: '@Clavosband',
      href: links.youtube,
    },
    {
      id: 'spotify',
      label: 'Spotify',
      description: 'Full catalog',
      href: links.spotify,
    },
    {
      id: 'audiomack',
      label: 'Audiomack',
      description: 'Tracks & singles',
      href: links.audiomack,
    },
  ],
  tracks: tracksShared,
  albums: [
    {
      title: 'Andinia',
      year: '2025',
      note: 'Iorio with Clavos Band',
      href: 'https://open.spotify.com/album/5EmwyjngBb0YVNILbIc1l2',
    },
    {
      title: 'Melodía Morfina',
      year: '2025',
      note: 'Shadows of Life · with Maxi Trusso and Iorio',
      href: 'https://open.spotify.com/album/2UwZq04cZq9JH1ukAG3MGE',
    },
    {
      title: 'Clavos Band A Continuación',
      year: '2019',
      note: 'Digital release · shows and opening for Iorio',
      href: 'https://open.spotify.com/album/4ihjferlNfEVkqAPLpabrv',
    },
    {
      title: 'Ama',
      year: '2021',
      note: 'On Spotify',
      href: 'https://open.spotify.com/album/3UnqiHW6UDpQVivtidbb2G',
    },
    {
      title: 'Mutando',
      year: '2015',
      note: 'Estudios Ion · Señor Silver',
      href: 'https://open.spotify.com/album/426ko1VPcHkqA77pmKzO6N',
    },
    {
      title: 'Esclavo del Rock',
      year: '2010',
      note: 'With Totti Gieco (Jóvenes Pordioseros)',
      href: 'https://open.spotify.com/album/3IufhLNewoxUvBB8q2x05P',
    },
    {
      title: 'El Blues de los Espejos',
      year: '2010',
      note: 'On Spotify',
      href: 'https://open.spotify.com/album/75wLmeykmv9qDhSK73iJcx',
    },
    {
      title: 'Track Uno',
      year: '2005',
      note: 'GLD · Iorio, Tano Marciello, Willy and Simón Quiroga (Vox Dei)',
      href: 'https://open.spotify.com/album/49Blrj1EEz2vxBGokLRbVH',
    },
    {
      title: 'El Jardín de mi Tía',
      year: '2003',
      note: 'On Spotify',
      href: 'https://open.spotify.com/album/2fnPXfcjFzYsVVzLIr0kR3',
    },
    {
      title: 'Clavos Band en vivo Betty Blues',
      year: '2001',
      note: 'Live recording',
      href: 'https://open.spotify.com/album/3KYt7EOpgcl4qECtrDlTyI',
    },
    {
      title: 'Brujita de cartón',
      year: '1995',
      note: 'Debut album · ATC label',
      href: 'https://open.spotify.com/album/00xmhydLyNp6anDZLebdKP',
    },
  ],
  milestones: [
    {
      year: 'Age 14',
      title: 'Classical training',
      detail:
        'Guitar at the Williams Institute and double bass at Teatro Roma; electric bass in parallel.',
    },
    {
      year: 'Age 17',
      title: 'Session player',
      detail:
        'Works with singers such as Yuyu Da Silva and Altemar Dutra; later Oscar Alemán and four years with Luis Salinas.',
    },
    {
      year: '1992',
      title: 'Clavos Band is born',
      detail:
        'Debut on Rock & Pop; circuits across Buenos Aires City and Greater Buenos Aires.',
    },
    {
      year: '1995',
      title: 'Brujita de cartón',
      detail:
        'First album (ATC). Partnership with Javier Martínez (Manal) and songs like Pappo Blues.',
    },
    {
      year: 'c. 2000',
      title: 'Film & theater',
      detail:
        'Scores El Tutor with Paki Balaguer and Jorge Polaco, and Los sueños de Nini with Ana María Giunta.',
    },
    {
      year: '2005',
      title: 'Track Uno',
      detail:
        'GLD with guests: Ricardo Iorio, Tano Marciello, Willy and Simón Quiroga (Vox Dei), and Carlos Gardellini.',
    },
    {
      year: '2007',
      title: 'Cosquín Rock',
      detail: 'Clavos Band at the festival.',
    },
    {
      year: '2010',
      title: 'Esclavo del Rock · Poder del Bajo',
      detail:
        'Own album, bassist compilation, and Rock y Fierros on CM. Gallien-Krueger endorsee.',
    },
    {
      year: '2012',
      title: 'Diemen Noord',
      detail: 'Appears on the band’s second album.',
    },
    {
      year: '2014',
      title: 'Music Man / Ernie Ball',
      detail: 'Endorsee for the Sterling 34 bass.',
    },
    {
      year: '2016',
      title: '50 years of Argentine rock',
      detail:
        'Shows with Willy Quiroga (Vox Dei) and Javier Martínez (Manal) at Vorterix Rosario and the Gran Rex.',
    },
    {
      year: '2018–19',
      title: 'A Continuación',
      detail:
        'Digital CD; opening for Ricardo Iorio; recordings with Iorio, Pelo Cárdenas, and Iorio y amigos.',
    },
    {
      year: '2020',
      title: 'Pandemic online',
      detail:
        'Online shows and the Solo un final video with Tano Marciello and Fernando Scarcella (CM TV).',
    },
    {
      year: '2021',
      title: 'Sessions at Pilar Music',
      detail:
        'Recording with Scarcella and guests: Alambre González, Hugo Méndez, Patán Vidal, Miguel Tallarita, Sol Ulloa.',
    },
    {
      year: '2022',
      title: 'Iorio and Dinamita Veloso',
      detail:
        'New material with Ricardo Iorio (Iorio y amigos) and production for Dinamita Veloso.',
    },
    {
      year: '2023',
      title: 'Teatro UOCRA',
      detail:
        'Own show; records Calle, vereda y cordón with Ricardo Iorio.',
    },
    {
      year: '2025',
      title: 'New material',
      detail:
        'Positivo (Martínez / Actis / Marciello), Melodía Morfina with Maxi Trusso and Iorio, Andinia (Iorio with Clavos Band).',
    },
  ],
  photos: [
    {
      src: 'photos/hq-band-studio.jpg',
      alt: 'Clavos Band in the recording studio',
      caption: 'Studio · rock.com.ar',
      wide: true,
    },
    {
      src: 'photos/hq-spotify.jpg',
      alt: 'Clavito Actis with Sterling bass',
      caption: 'Bass · Spotify',
      wide: false,
    },
    {
      src: 'photos/hq-yt-show-01.jpg',
      alt: 'Clavito Actis in a studio session',
      caption: 'Session · YouTube',
      wide: false,
    },
    {
      src: 'photos/hq-clavito-radio.jpg',
      alt: 'Clavito Actis on Radio Provincia',
      caption: 'Radio Provincia',
      wide: false,
    },
    {
      src: 'photos/hq-yt-show-02.jpg',
      alt: 'Clavos Band — YouTube video',
      caption: 'Video',
      wide: false,
    },
    {
      src: 'photos/hq-yt-show-03.jpg',
      alt: 'Clavos Band live',
      caption: 'Live',
      wide: false,
    },
    {
      src: 'photos/post1.jpg',
      alt: 'Clavito Actis live with bass',
      caption: 'Instagram',
      wide: false,
    },
    {
      src: 'photos/post8.jpg',
      alt: 'Clavito Actis at Warner Chappell Music',
      caption: 'Warner Chappell',
      wide: false,
    },
  ],
  quotes: [
    {
      text: 'Music is soul and spirit, and the bond between people.',
      source: 'Clavito Actis',
    },
  ],
  booking: {
    headline: 'Shows & press',
    body: 'Follow day-to-day news on Instagram. YouTube for shows and videos. For dates or press, reach out on social media.',
  },
};

export const artistByLang: Record<Lang, ArtistContent> = { es, en };

/** @deprecated Prefer artistByLang[lang] — kept for any leftover imports */
export const artist = es;

export type Artist = ArtistContent;
