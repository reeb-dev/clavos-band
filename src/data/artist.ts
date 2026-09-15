export const artist = {
  name: "Clavos Band",
  lead: "Clavito Actis",
  tagline: "Blues-rock argentino desde 1992.",
  pitch:
    "Potencia, groove y tradición rockera desde Buenos Aires. Décadas de escenario, Cosquín Rock y colaboraciones con nombres del rock nacional.",
  bio: {
    headline: "Una fuerza del blues-rock argentino",
    body: "Fundada en 1992 por Clavito Actis (bajo y voz), Clavos Band recorre el blues y el rock con un sonido propio. A lo largo de su trayectoria compartió escenario y grabaciones con figuras como Javier Martínez, Ricardo Iorio, Luis Salinas y Claudio “Tano” Marciello. Con varios álbumes editados y presentaciones en festivales como Cosquín Rock, la banda sigue difundiendo material propio y nuevas producciones audiovisuales.",
  },
  lineup: [
    { role: "Bajo y voz", name: "Clavito Actis" },
    { role: "Guitarra", name: "Zurdo Pérez" },
    { role: "Batería", name: "Sergio Biagetti" },
  ],
  links: {
    instagram: "https://www.instagram.com/clavosband_clavito369/",
    spotify: "https://open.spotify.com/artist/4b8GbUgdmvIoc0etR8puFz",
    audiomack: "https://audiomack.com/clavos-band-1",
  },
  platforms: [
    {
      id: "spotify",
      label: "Spotify",
      description: "Escuchá el catálogo completo",
      href: "https://open.spotify.com/artist/4b8GbUgdmvIoc0etR8puFz",
    },
    {
      id: "instagram",
      label: "Instagram",
      description: "@clavosband_clavito369",
      href: "https://www.instagram.com/clavosband_clavito369/",
    },
    {
      id: "audiomack",
      label: "Audiomack",
      description: "Temas y singles",
      href: "https://audiomack.com/clavos-band-1",
    },
  ],
  albums: [
    { title: "El Jardín de mi Tía", year: "2025" },
    { title: "Ama", year: "2021" },
    { title: "Clavos Band A Continuación", year: "2019" },
    { title: "Mutando", year: "2015" },
    { title: "Esclavo del Rock", year: "2010" },
  ],
} as const;
