import Image from "next/image";
import { artist } from "@/data/artist";

const photos = [
  {
    src: "/photos/escenario.jpg",
    alt: "Clavos Band en clima de escenario",
    caption: "Escenario",
  },
  {
    src: "/photos/poster.jpg",
    alt: "Arte visual Clavos Band — silueta y clavos",
    caption: "Clavos",
  },
  {
    src: "/photos/bajo.jpg",
    alt: "Bajo en vivo, luces ámbar",
    caption: "En vivo",
  },
  {
    src: "/photos/clavos.jpg",
    alt: "Clavos oxidados — identidad visual",
    caption: "Hierro",
  },
] as const;

function NailMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/nail.svg"
      alt=""
      aria-hidden
      className={`h-8 w-3 opacity-80 ${className}`}
    />
  );
}

function RivetRow() {
  return (
    <div aria-hidden className="flex items-center gap-2 py-1">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="size-1.5 rounded-full bg-[#6a4030] shadow-[inset_0_1px_1px_#c08050]"
        />
      ))}
    </div>
  );
}

const ctaPrimary =
  "inline-flex h-12 items-center justify-center rounded-sm bg-[#d4642a] px-7 text-base font-semibold tracking-wide text-[#1a0c06] transition-colors hover:bg-[#f0a060]";
const ctaOutline =
  "inline-flex h-12 items-center justify-center rounded-sm border border-[#d4642a]/70 bg-[#0a0705]/50 px-7 text-base tracking-wide text-[#f3ebe2] backdrop-blur-sm transition-colors hover:border-[#d4642a] hover:bg-[#d4642a]/20 hover:text-[#f0a060]";

export default function Home() {
  return (
    <div
      className="relative flex min-h-full flex-col"
      style={{ backgroundColor: "#0a0705", color: "#f3ebe2" }}
    >
      {/* texture wash */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: "url(/photos/clavos.jpg)",
          backgroundSize: "cover",
        }}
      />

      <header className="absolute inset-x-0 top-0 z-30 px-5 py-5 sm:px-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-lg tracking-[0.2em] text-[#f3ebe2]"
          >
            <NailMark />
            CLAVOS BAND
          </a>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-[#a09080]">
            <a href="#fotos" className="transition-colors hover:text-[#f0a060]">
              Fotos
            </a>
            <a href="#temas" className="transition-colors hover:text-[#f0a060]">
              Temas
            </a>
            <a
              href="#escuchar"
              className="transition-colors hover:text-[#f0a060]"
            >
              Escuchar
            </a>
            <a
              href="#historia"
              className="hidden transition-colors hover:text-[#f0a060] sm:inline"
            >
              Historia
            </a>
            <a
              href="#discos"
              className="transition-colors hover:text-[#f0a060]"
            >
              Discos
            </a>
            <a
              href="#contacto"
              className="transition-colors hover:text-[#f0a060]"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="relative z-10 flex-1">
        {/* HERO full-bleed photo */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-end sm:pb-20">
          <Image
            src="/photos/escenario.jpg"
            alt="Clavos Band — atmósfera de escenario"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0705]/90 via-[#0a0705]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705] via-[#0a0705]/40 to-[#0a0705]/30" />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <NailMark className="h-10 w-4" />
              <p className="hero-rise font-display text-sm tracking-[0.4em] text-[#f0a060]">
                {artist.lead}
              </p>
            </div>
            <h1 className="hero-rise hero-rise-delay-1 mt-3 max-w-[12ch] font-display text-[clamp(3.75rem,15vw,9rem)] leading-[0.85] tracking-wide text-[#f3ebe2] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              {artist.name.toUpperCase()}
            </h1>
            <p className="hero-rise hero-rise-delay-2 mt-5 max-w-md text-lg leading-relaxed text-[#d0c0b0] sm:text-xl">
              {artist.tagline} {artist.pitch}
            </p>
            <div className="hero-rise hero-rise-delay-3 mt-9 flex flex-wrap gap-3">
              <a href="#escuchar" className={ctaPrimary}>
                Escuchar ahora
              </a>
              <a href="#fotos" className={ctaOutline}>
                Ver fotos
              </a>
            </div>
          </div>
        </section>

        {/* FOTOS */}
        <section
          id="fotos"
          className="border-t border-[#d4642a]/30 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-sm tracking-[0.35em] text-[#f0a060]">
                  GALERÍA
                </p>
                <h2 className="mt-2 font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
                  Hierro, escenario y bajo
                </h2>
                <p className="mt-3 max-w-lg text-[#a09080]">
                  Identidad visual de Clavos Band: clavos, escenario y el oficio
                  del blues-rock. Más material en Instagram.
                </p>
              </div>
              <NailMark className="hidden h-12 w-5 sm:block" />
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {photos.map((photo, i) => (
                <figure
                  key={photo.src}
                  className={`group relative overflow-hidden rounded-sm border border-[#d4642a]/25 bg-[#120c08] ${
                    i === 0 ? "sm:col-span-2 sm:aspect-[21/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={i === 0 ? "100vw" : "50vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705]/85 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-4 font-display text-lg tracking-[0.2em] text-[#f3ebe2]">
                    <span className="size-1.5 rounded-full bg-[#d4642a]" />
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={artist.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaOutline}
              >
                Más fotos en Instagram
              </a>
            </div>
          </div>
        </section>

        {/* CLAVO STRIP */}
        <section className="relative overflow-hidden border-y border-[#d4642a]/25">
          <div className="absolute inset-0">
            <Image
              src="/photos/clavos.jpg"
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#0a0705]/70" />
          </div>
          <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-4 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
            <p className="max-w-xl font-display text-3xl tracking-wide text-[#f3ebe2] sm:text-4xl">
              Cada show se clava. Blues-rock crudo, hecho a martillo.
            </p>
            <a href="#temas" className={ctaPrimary}>
              Poner los temas
            </a>
          </div>
        </section>

        {/* TEMAS */}
        <section
          id="temas"
          className="px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <RivetRow />
            <h2 className="mt-4 font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              Temas para poner fuerte
            </h2>
            <p className="mt-3 max-w-lg text-[#a09080]">
              Selección del catálogo. Abrí y escuchá.
            </p>
            <ul className="mt-12">
              {artist.tracks.map((track, index) => (
                <li key={track.title}>
                  <a
                    href={track.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-[#d4642a]/25 py-5 transition-colors hover:border-[#d4642a] sm:gap-6"
                  >
                    <span className="font-display text-sm tracking-widest text-[#d4642a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-2xl tracking-wide text-[#f3ebe2] transition-colors group-hover:text-[#f0a060] sm:text-3xl">
                        {track.title}
                      </span>
                      <span className="mt-1 block text-sm text-[#a09080]">
                        {track.album} · {track.year}
                      </span>
                    </span>
                    <span className="font-display text-sm tracking-widest text-[#a09080] transition-colors group-hover:text-[#f0a060]">
                      PLAY
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ESCUCHAR */}
        <section
          id="escuchar"
          className="border-t border-[#d4642a]/25 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              Escuchar
            </h2>
            <p className="mt-3 max-w-lg text-[#a09080]">
              Plataformas y redes. Todo el hierro en un solo lugar.
            </p>
            <div className="mt-10">
              {artist.platforms.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 border-b border-[#d4642a]/30 py-5 transition-colors hover:border-[#d4642a]"
                >
                  <span className="font-display text-3xl tracking-wide text-[#f3ebe2] transition-colors group-hover:text-[#f0a060] sm:text-4xl">
                    {platform.label}
                  </span>
                  <span className="text-right text-sm text-[#a09080] transition-colors group-hover:text-[#f3ebe2]/cc">
                    {platform.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HISTORIA + BANDA with poster */}
        <section
          id="historia"
          className="border-t border-[#d4642a]/25 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-[#d4642a]/30">
              <Image
                src="/photos/poster.jpg"
                alt="Arte Clavos Band"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705]/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-sm tracking-[0.3em] text-[#f0a060]">
                DESDE 1992
              </p>
            </div>
            <div>
              <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
                Historia clavada
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#a09080]">
                {artist.bio.body}
              </p>
              <ol className="mt-10 space-y-0">
                {artist.milestones.slice(0, 5).map((item) => (
                  <li
                    key={item.year}
                    className="grid gap-1 border-b border-[#d4642a]/20 py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-6"
                  >
                    <span className="font-display text-lg tracking-wide text-[#f0a060]">
                      {item.year}
                    </span>
                    <div>
                      <p className="font-display text-xl tracking-wide text-[#f3ebe2]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-[#a09080]">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* BANDA */}
        <section
          id="banda"
          className="border-t border-[#d4642a]/25 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              {artist.bio.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#a09080]">
              {artist.bio.extended}
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              {artist.lineup.map((member) => (
                <li
                  key={member.name}
                  className="border border-[#d4642a]/25 bg-[#120c08]/80 p-6"
                >
                  <NailMark className="mb-4" />
                  <p className="font-display text-2xl tracking-wide text-[#f3ebe2]">
                    {member.name}
                  </p>
                  <p className="mt-2 text-sm tracking-wide text-[#f0a060]">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-[#a09080]">{member.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* VIVO */}
        <section id="vivo" className="relative min-h-[65svh] overflow-hidden">
          <Image
            src="/photos/bajo.jpg"
            alt="Bajo en vivo"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705] via-[#0a0705]/65 to-[#0a0705]/35" />
          <div className="relative z-10 mx-auto flex min-h-[65svh] max-w-5xl flex-col justify-end px-5 py-16 sm:px-8 sm:py-20">
            <p className="font-display text-sm tracking-[0.35em] text-[#f0a060]">
              EN VIVO
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-6xl">
              El escenario es el yunque
            </h2>
            <p className="mt-4 max-w-md text-lg text-[#d0c0b0]">
              De rockerías porteñas a Cosquín Rock. La banda se define en el
              show.
            </p>
          </div>
        </section>

        {/* DISCOS */}
        <section
          id="discos"
          className="border-t border-[#d4642a]/25 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              Discografía
            </h2>
            <p className="mt-3 max-w-lg text-[#a09080]">
              Del debut a lo nuevo — martillado disco a disco.
            </p>
            <ol className="mt-12">
              {artist.albums.map((album, index) => (
                <li
                  key={album.title}
                  className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-[#d4642a]/25 py-5 sm:gap-6"
                >
                  <span className="font-display text-sm tracking-widest text-[#d4642a]/b3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-2xl tracking-wide text-[#f3ebe2] sm:text-3xl">
                      {album.title}
                    </span>
                    <span className="mt-1 block text-sm text-[#a09080]">
                      {album.note}
                    </span>
                  </span>
                  <span className="shrink-0 font-display text-xl tracking-wide text-[#a09080]">
                    {album.year}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <a
                href={artist.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaPrimary}
              >
                Abrir en Spotify
              </a>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="relative overflow-hidden border-t border-[#d4642a]/25 px-5 py-20 sm:px-8 sm:py-28">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/photos/clavos.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <NailMark className="mx-auto mb-6 h-10 w-4" />
            <p className="font-display text-3xl leading-snug tracking-wide text-[#f3ebe2] sm:text-5xl">
              “{artist.quotes[0].text}”
            </p>
            <p className="mt-6 font-display text-sm tracking-[0.25em] text-[#f0a060]">
              — {artist.quotes[0].source}
            </p>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="border-t border-[#d4642a]/25 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              {artist.booking.headline}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#a09080]">
              {artist.booking.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={artist.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaPrimary}
              >
                @clavosband_clavito369
              </a>
              <a
                href={artist.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaOutline}
              >
                Spotify
              </a>
              <a
                href={artist.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaOutline}
              >
                YouTube
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d4642a]/25 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <NailMark className="mx-auto mb-4 h-12 w-5" />
            <p className="font-display text-5xl tracking-wide text-[#f3ebe2] sm:text-7xl">
              Seguí a Clavos Band
            </p>
            <p className="mx-auto mt-4 max-w-md text-[#a09080]">
              Fotos reales de shows y ensayos: Instagram del día a día.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={artist.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaPrimary}
              >
                Abrir Instagram
              </a>
              <a href="#fotos" className={ctaOutline}>
                Volver a la galería
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#d4642a]/25 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <NailMark className="mt-1" />
            <div>
              <p className="font-display text-xl tracking-[0.2em] text-[#f3ebe2]">
                CLAVOS BAND
              </p>
              <p className="mt-2 text-sm text-[#a09080]">
                Blues-rock · Buenos Aires · Desde 1992
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#a09080]">
            {artist.platforms.map((p) => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#f0a060]"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
