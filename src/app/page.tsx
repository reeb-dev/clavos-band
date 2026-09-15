import Image from "next/image";
import { artist } from "@/data/artist";

function StageAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,#3a1a0c_0%,transparent_55%),radial-gradient(ellipse_50%_40%_at_20%_0%,#5a2810_0%,transparent_45%),radial-gradient(ellipse_40%_35%_at_85%_10%,#2a1408_0%,transparent_50%),linear-gradient(180deg,#0a0705_0%,#120c08_45%,#0a0705_100%)]" />
      <div className="beam-pulse absolute -top-[20%] left-1/2 h-[120%] w-[38%] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_40%,rgb(212_100_42_/_0.22)_50%,transparent_60%)] blur-xl" />
      <div className="beam-pulse absolute -top-[10%] left-[18%] h-[90%] w-[22%] rotate-[-12deg] bg-[linear-gradient(180deg,rgb(240_160_96_/_0.18),transparent_70%)] blur-md [animation-delay:1.5s]" />
      <div className="beam-pulse absolute -top-[10%] right-[14%] h-[85%] w-[20%] rotate-[14deg] bg-[linear-gradient(180deg,rgb(212_100_42_/_0.14),transparent_70%)] blur-md [animation-delay:3s]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0705] to-transparent" />
    </div>
  );
}

const ctaPrimary =
  "inline-flex h-12 items-center justify-center rounded-md bg-[#d4642a] px-7 text-base font-semibold tracking-wide text-[#1a0c06] transition-colors hover:bg-[#f0a060]";
const ctaOutline =
  "inline-flex h-12 items-center justify-center rounded-md border border-[#d4642a]/66 bg-transparent px-7 text-base tracking-wide text-[#f3ebe2] transition-colors hover:border-[#d4642a] hover:bg-[#d4642a]/1a hover:text-[#f0a060]";

export default function Home() {
  return (
    <div
      className="relative flex min-h-full flex-col"
      style={{ backgroundColor: "#0a0705", color: "#f3ebe2" }}
    >
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <a
            href="#top"
            className="font-display text-lg tracking-[0.18em] text-[#f3ebe2]/e6"
          >
            CLAVOS BAND
          </a>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-[#8a7a6c]">
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
              href="#vivo"
              className="hidden transition-colors hover:text-[#f0a060] md:inline"
            >
              En vivo
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

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24">
          <StageAtmosphere />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
            <p className="hero-rise font-display text-sm tracking-[0.35em] text-[#f0a060]">
              {artist.lead}
            </p>
            <h1 className="hero-rise hero-rise-delay-1 mt-3 max-w-[12ch] font-display text-[clamp(3.5rem,14vw,8.5rem)] leading-[0.9] tracking-wide text-[#f3ebe2]">
              {artist.name.toUpperCase()}
            </h1>
            <p className="hero-rise hero-rise-delay-2 mt-6 max-w-md text-lg leading-relaxed text-[#8a7a6c] sm:text-xl">
              {artist.tagline} {artist.pitch}
            </p>
            <div className="hero-rise hero-rise-delay-3 mt-10 flex flex-wrap gap-3">
              <a href="#escuchar" className={ctaPrimary}>
                Escuchar ahora
              </a>
              <a
                href={artist.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaOutline}
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* TEMAS */}
        <section
          id="temas"
          className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <p className="font-display text-sm tracking-[0.3em] text-[#f0a060]">
              DESTACADOS
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              Temas para poner fuerte
            </h2>
            <p className="mt-3 max-w-lg text-[#8a7a6c]">
              Una selección del catálogo. Tocá y abrí en la plataforma.
            </p>
            <ul className="mt-12">
              {artist.tracks.map((track, index) => (
                <li key={track.title}>
                  <a
                    href={track.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-[#d4642a]/20 py-5 transition-colors hover:border-[#d4642a]/60 sm:gap-6"
                  >
                    <span className="font-display text-sm tracking-widest text-[#d4642a]/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-2xl tracking-wide text-[#f3ebe2] transition-colors group-hover:text-[#f0a060] sm:text-3xl">
                        {track.title}
                      </span>
                      <span className="mt-1 block text-sm text-[#8a7a6c]">
                        {track.album} · {track.year}
                      </span>
                    </span>
                    <span className="font-display text-sm tracking-widest text-[#8a7a6c] transition-colors group-hover:text-[#f0a060]">
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
          className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              Escuchar
            </h2>
            <p className="mt-3 max-w-lg text-[#8a7a6c]">
              Música y redes en un solo lugar. Entrá directo a cada plataforma.
            </p>
            <div className="mt-10">
              {artist.platforms.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 border-b border-[#d4642a]/33 py-5 transition-colors hover:border-[#d4642a]"
                >
                  <span className="font-display text-3xl tracking-wide text-[#f3ebe2] transition-colors group-hover:text-[#f0a060] sm:text-4xl">
                    {platform.label}
                  </span>
                  <span className="text-right text-sm text-[#8a7a6c] transition-colors group-hover:text-[#f3ebe2]/cc">
                    {platform.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HISTORIA */}
        <section
          id="historia"
          className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              Historia
            </h2>
            <p className="mt-3 max-w-xl text-[#8a7a6c]">
              Más de tres décadas de blues-rock. Los hitos que marcaron el
              camino.
            </p>
            <ol className="mt-12 space-y-0">
              {artist.milestones.map((item) => (
                <li
                  key={item.year}
                  className="grid gap-2 border-b border-[#d4642a]/20 py-6 sm:grid-cols-[7rem_1fr] sm:gap-8"
                >
                  <span className="font-display text-xl tracking-wide text-[#f0a060]">
                    {item.year}
                  </span>
                  <div>
                    <p className="font-display text-2xl tracking-wide text-[#f3ebe2]">
                      {item.title}
                    </p>
                    <p className="mt-2 max-w-2xl text-[#8a7a6c]">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* BANDA */}
        <section
          id="banda"
          className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
                {artist.bio.headline}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#8a7a6c]">
                {artist.bio.body}
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-[#8a7a6c]">
                {artist.bio.extended}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl tracking-[0.2em] text-[#f0a060]">
                Formación
              </h3>
              <ul className="mt-6 space-y-5">
                {artist.lineup.map((member) => (
                  <li
                    key={member.name}
                    className="border-b border-[#d4642a]/26 pb-5"
                  >
                    <p className="font-display text-2xl tracking-wide text-[#f3ebe2]">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm text-[#f0a060]/90">
                      {member.role}
                    </p>
                    <p className="mt-1 text-sm text-[#8a7a6c]">{member.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EN VIVO — full bleed visual */}
        <section id="vivo" className="relative min-h-[70svh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=80"
            alt="Escenario de rock con luces cálidas"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705] via-[#0a0705]/70 to-[#0a0705]/40" />
          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-5xl flex-col justify-end px-5 py-16 sm:px-8 sm:py-24">
            <p className="font-display text-sm tracking-[0.3em] text-[#f0a060]">
              EN VIVO
            </p>
            <h2 className="mt-3 max-w-[14ch] font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-6xl">
              El escenario es el territorio
            </h2>
            <p className="mt-4 max-w-md text-lg text-[#cbb8a8]">
              De rockerías porteñas a Cosquín Rock. La banda vive en el show.
            </p>
          </div>
        </section>

        {/* SHOWS */}
        <section className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              Escenarios
            </h2>
            <p className="mt-3 max-w-lg text-[#8a7a6c]">
              Fechas nuevas se publican en Instagram. Acá, el mapa de donde
              late Clavos Band.
            </p>
            <ul className="mt-12">
              {artist.shows.map((show) => (
                <li
                  key={show.venue + show.date}
                  className="grid gap-1 border-b border-[#d4642a]/20 py-6 sm:grid-cols-[8rem_1fr_1fr] sm:items-baseline sm:gap-6"
                >
                  <span className="font-display text-sm tracking-widest text-[#f0a060]">
                    {show.date}
                  </span>
                  <div>
                    <p className="font-display text-2xl tracking-wide text-[#f3ebe2]">
                      {show.venue}
                    </p>
                    <p className="mt-1 text-sm text-[#8a7a6c]">{show.city}</p>
                  </div>
                  <p className="text-sm text-[#8a7a6c] sm:text-right">
                    {show.status}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href={artist.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaPrimary}
              >
                Ver fechas en Instagram
              </a>
            </div>
          </div>
        </section>

        {/* DISCOS */}
        <section
          id="discos"
          className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              Discografía
            </h2>
            <p className="mt-3 max-w-lg text-[#8a7a6c]">
              Del debut a lo nuevo. Una línea de tiempo del catálogo.
            </p>
            <ol className="mt-12">
              {artist.albums.map((album, index) => (
                <li
                  key={album.title}
                  className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-[#d4642a]/26 py-5 sm:gap-6"
                >
                  <span className="font-display text-sm tracking-widest text-[#d4642a]/b3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-2xl tracking-wide text-[#f3ebe2] sm:text-3xl">
                      {album.title}
                    </span>
                    <span className="mt-1 block text-sm text-[#8a7a6c]">
                      {album.note}
                    </span>
                  </span>
                  <span className="shrink-0 font-display text-xl tracking-wide text-[#8a7a6c]">
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
        <section className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
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
          className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-[#f3ebe2] sm:text-5xl">
              {artist.booking.headline}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#8a7a6c]">
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

        {/* CIERRE */}
        <section className="border-t border-[#d4642a]/26 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-display text-5xl tracking-wide text-[#f3ebe2] sm:text-7xl">
              Seguí a Clavos Band
            </p>
            <p className="mx-auto mt-4 max-w-md text-[#8a7a6c]">
              Novedades, shows y material nuevo en Instagram.
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
              <a href="#temas" className={ctaOutline}>
                Volver a los temas
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d4642a]/26 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-[#f3ebe2]">
              CLAVOS BAND
            </p>
            <p className="mt-2 text-sm text-[#8a7a6c]">
              Blues-rock · Buenos Aires · Desde 1992
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#8a7a6c]">
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
