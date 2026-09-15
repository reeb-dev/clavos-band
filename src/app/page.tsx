import Image from "next/image";
import { artist } from "@/data/artist";

function NailMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/nail.svg"
      alt=""
      aria-hidden
      className={`h-8 w-3 opacity-90 ${className}`}
    />
  );
}

const ctaPrimary =
  "inline-flex h-12 items-center justify-center rounded-sm bg-[#e10600] px-7 text-base font-semibold tracking-wide text-white transition-colors hover:bg-[#ff3b30]";
const ctaOutline =
  "inline-flex h-12 items-center justify-center rounded-sm border border-white/35 bg-black/40 px-7 text-base tracking-wide text-white backdrop-blur-sm transition-colors hover:border-[#e10600] hover:bg-[#e10600]/20";

export default function Home() {
  return (
    <div
      className="relative flex min-h-full flex-col bg-[#050505] text-[#f5f5f5]"
      style={{ backgroundColor: "#050505", color: "#f5f5f5" }}
    >
      <header className="absolute inset-x-0 top-0 z-30 px-5 py-5 sm:px-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/photos/logo-clavos.jpg"
              alt="Clavos Band"
              width={48}
              height={48}
              className="rounded-sm border border-white/20 object-cover"
              priority
            />
            <span className="font-display text-lg tracking-[0.2em]">
              CLAVOS BAND
            </span>
          </a>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-[#9a9a9a]">
            <a href="#artista" className="hover:text-[#ff3b30]">
              Artista
            </a>
            <a href="#fotos" className="hover:text-[#ff3b30]">
              Fotos
            </a>
            <a href="#temas" className="hover:text-[#ff3b30]">
              Temas
            </a>
            <a href="#escuchar" className="hover:text-[#ff3b30]">
              Escuchar
            </a>
            <a href="#contacto" className="hidden hover:text-[#ff3b30] sm:inline">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* HERO — foto real en vivo */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:pb-20">
          <Image
            src="/photos/post1.jpg"
            alt="Clavito Actis en vivo con bajo"
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/25" />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <NailMark className="h-10 w-4" />
              <p className="hero-rise font-display text-sm tracking-[0.35em] text-[#ff3b30]">
                {artist.lead}
              </p>
            </div>
            <h1 className="hero-rise hero-rise-delay-1 mt-3 max-w-[12ch] font-display text-[clamp(3.75rem,15vw,9rem)] leading-[0.85] tracking-wide text-white">
              {artist.name.toUpperCase()}
            </h1>
            <p className="hero-rise hero-rise-delay-2 mt-5 max-w-md text-lg leading-relaxed text-[#d0d0d0] sm:text-xl">
              {artist.tagline} {artist.pitch}
            </p>
            <div className="hero-rise hero-rise-delay-3 mt-9 flex flex-wrap gap-3">
              <a href="#escuchar" className={ctaPrimary}>
                Escuchar
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

        {/* ARTISTA — retrato IG */}
        <section
          id="artista"
          className="border-t border-[#e10600]/35 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-sm border-2 border-[#e10600] bg-black">
              <Image
                src="/photos/post4.jpg"
                alt="Clavito Actis"
                fill
                className="object-cover object-top"
                sizes="(max-width:1024px) 90vw, 40vw"
                priority
              />
            </div>
            <div>
              <p className="font-display text-sm tracking-[0.35em] text-[#ff3b30]">
                EL ARTISTA
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                {artist.bio.headline}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#b0b0b0]">
                {artist.bio.body}
              </p>
              <p className="mt-4 leading-relaxed text-[#9a9a9a]">
                {artist.bio.extended}
              </p>
              <blockquote className="mt-8 border-l-4 border-[#e10600] pl-5">
                <p className="font-display text-2xl tracking-wide text-white sm:text-3xl">
                  “{artist.quotes[0].text}”
                </p>
                <footer className="mt-3 text-sm tracking-widest text-[#ff3b30]">
                  — {artist.quotes[0].source}
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FOTOS reales IG */}
        <section
          id="fotos"
          className="border-t border-[#e10600]/30 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-sm tracking-[0.35em] text-[#ff3b30]">
                  DESDE INSTAGRAM
                </p>
                <h2 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
                  Fotos del artista
                </h2>
                <p className="mt-3 max-w-lg text-[#9a9a9a]">
                  Material de @clavosband_clavito369 — escenario, estudio y
                  detrás de escena.
                </p>
              </div>
              <Image
                src="/photos/logo-clavos.jpg"
                alt=""
                width={56}
                height={56}
                className="hidden rounded-sm border border-[#e10600]/50 object-cover sm:block"
              />
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {artist.photos.map((photo, i) => (
                <figure
                  key={photo.src}
                  className={`group relative overflow-hidden rounded-sm border border-white/10 bg-black ${
                    i === 0
                      ? "aspect-[4/5] sm:col-span-2 sm:aspect-[16/10] lg:col-span-2"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={i === 0 ? "(max-width:1024px) 100vw, 66vw" : "33vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 p-4 font-display text-lg tracking-[0.2em] text-white">
                    <span className="mr-2 inline-block size-1.5 rounded-full bg-[#e10600]" />
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
                Ver más en Instagram
              </a>
            </div>
          </div>
        </section>

        {/* LOGO STRIP */}
        <section className="border-y border-[#e10600]/40 bg-[#e10600] px-5 py-10 sm:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <Image
                src="/photos/logo-clavos.jpg"
                alt="Logo Clavos Band"
                width={72}
                height={72}
                className="rounded-sm border-2 border-black object-cover"
              />
              <p className="font-display text-3xl tracking-wide text-black sm:text-4xl">
                Tres clavos. Una banda.
              </p>
            </div>
            <a
              href="#temas"
              className="inline-flex h-11 items-center rounded-sm bg-black px-6 font-semibold tracking-wide text-white hover:bg-[#1a1a1a]"
            >
              Poner los temas
            </a>
          </div>
        </section>

        {/* TEMAS */}
        <section id="temas" className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
              Temas
            </h2>
            <p className="mt-3 max-w-lg text-[#9a9a9a]">
              Selección del catálogo. Abrí y escuchá.
            </p>
            <ul className="mt-12">
              {artist.tracks.map((track, index) => (
                <li key={track.title}>
                  <a
                    href={track.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-white/10 py-5 hover:border-[#e10600] sm:gap-6"
                  >
                    <span className="font-display text-sm tracking-widest text-[#e10600]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-2xl tracking-wide text-white group-hover:text-[#ff3b30] sm:text-3xl">
                        {track.title}
                      </span>
                      <span className="mt-1 block text-sm text-[#9a9a9a]">
                        {track.album} · {track.year}
                      </span>
                    </span>
                    <span className="font-display text-sm tracking-widest text-[#9a9a9a] group-hover:text-[#ff3b30]">
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
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
              Escuchar
            </h2>
            <p className="mt-3 max-w-lg text-[#9a9a9a]">
              Las mismas redes del bio de Instagram.
            </p>
            <div className="mt-10">
              {artist.platforms.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 border-b border-white/10 py-5 hover:border-[#e10600]"
                >
                  <span className="font-display text-3xl tracking-wide text-white group-hover:text-[#ff3b30] sm:text-4xl">
                    {platform.label}
                  </span>
                  <span className="text-right text-sm text-[#9a9a9a]">
                    {platform.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HISTORIA */}
        <section className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
            <div>
              <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
                Historia
              </h2>
              <ol className="mt-10">
                {artist.milestones.map((item) => (
                  <li
                    key={item.year}
                    className="grid gap-1 border-b border-white/10 py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-6"
                  >
                    <span className="font-display text-lg tracking-wide text-[#ff3b30]">
                      {item.year}
                    </span>
                    <div>
                      <p className="font-display text-xl tracking-wide text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-[#9a9a9a]">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative min-h-[22rem] overflow-hidden rounded-sm border border-[#e10600]/50">
              <Image
                src="/photos/post8.jpg"
                alt="Clavito Actis en Warner Chappell"
                fill
                className="object-cover"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-sm tracking-[0.25em] text-[#ff3b30]">
                WARNER CHAPPELL
              </p>
            </div>
          </div>
        </section>

        {/* FORMACIÓN */}
        <section className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
              Formación
            </h2>
            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {artist.lineup.map((member) => (
                <li
                  key={member.name}
                  className="border border-white/10 bg-[#0c0c0c] p-6"
                >
                  <NailMark className="mb-4" />
                  <p className="font-display text-2xl tracking-wide text-white">
                    {member.name}
                  </p>
                  <p className="mt-2 text-sm text-[#ff3b30]">{member.role}</p>
                  <p className="mt-2 text-sm text-[#9a9a9a]">{member.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DISCOS */}
        <section
          id="discos"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
              Discografía
            </h2>
            <ol className="mt-12">
              {artist.albums.map((album, index) => (
                <li
                  key={album.title}
                  className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-white/10 py-5 sm:gap-6"
                >
                  <span className="font-display text-sm tracking-widest text-[#e10600]/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-2xl tracking-wide text-white sm:text-3xl">
                      {album.title}
                    </span>
                    <span className="mt-1 block text-sm text-[#9a9a9a]">
                      {album.note}
                    </span>
                  </span>
                  <span className="font-display text-xl tracking-wide text-[#9a9a9a]">
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

        {/* CONTACTO */}
        <section
          id="contacto"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl text-center">
            <Image
              src="/photos/logo-clavos.jpg"
              alt="Clavos Band"
              width={88}
              height={88}
              className="mx-auto rounded-sm border-2 border-[#e10600] object-cover"
            />
            <h2 className="mt-6 font-display text-4xl tracking-wide text-white sm:text-6xl">
              {artist.booking.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[#9a9a9a]">
              {artist.booking.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={artist.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaPrimary}
              >
                @clavosband_clavito369
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
      </main>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/photos/logo-clavos.jpg"
              alt=""
              width={40}
              height={40}
              className="rounded-sm object-cover"
            />
            <div>
              <p className="font-display tracking-[0.2em] text-white">
                CLAVOS BAND
              </p>
              <p className="text-sm text-[#9a9a9a]">
                Demo local · Blues-rock · Desde 1992
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#9a9a9a]">
            {artist.platforms.map((p) => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff3b30]"
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
