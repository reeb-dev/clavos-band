import { Button } from "@/components/ui/button";
import { artist } from "@/data/artist";
import { cn } from "@/lib/utils";

function StageAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,#3a1a0c_0%,transparent_55%),radial-gradient(ellipse_50%_40%_at_20%_0%,#5a2810_0%,transparent_45%),radial-gradient(ellipse_40%_35%_at_85%_10%,#2a1408_0%,transparent_50%),linear-gradient(180deg,#0a0705_0%,#120c08_45%,#0a0705_100%)]" />
      <div className="beam-pulse absolute -top-[20%] left-1/2 h-[120%] w-[38%] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_40%,rgb(212_100_42_/_0.22)_50%,transparent_60%)] blur-2xl" />
      <div className="beam-pulse absolute -top-[10%] left-[18%] h-[90%] w-[22%] rotate-[-12deg] bg-[linear-gradient(180deg,rgb(240_160_96_/_0.18),transparent_70%)] blur-xl [animation-delay:1.5s]" />
      <div className="beam-pulse absolute -top-[10%] right-[14%] h-[85%] w-[20%] rotate-[14deg] bg-[linear-gradient(180deg,rgb(212_100_42_/_0.14),transparent_70%)] blur-xl [animation-delay:3s]" />
      <div
        className="grain-shift absolute -inset-[10%] opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

function PlatformLink({
  label,
  description,
  href,
}: {
  label: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-baseline justify-between gap-6 border-b border-ember/20 py-5 transition-colors hover:border-ember/60"
    >
      <span className="font-display text-3xl tracking-wide text-foreground transition-colors group-hover:text-ember-glow sm:text-4xl">
        {label}
      </span>
      <span className="text-right text-sm text-smoke transition-colors group-hover:text-foreground/80">
        {description}
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <a
            href="#top"
            className="font-display text-lg tracking-[0.18em] text-foreground/90"
          >
            CLAVOS BAND
          </a>
          <div className="flex items-center gap-4 text-sm text-smoke">
            <a href="#escuchar" className="transition-colors hover:text-ember-glow">
              Escuchar
            </a>
            <a href="#banda" className="hidden transition-colors hover:text-ember-glow sm:inline">
              La banda
            </a>
            <a href="#discos" className="transition-colors hover:text-ember-glow">
              Discos
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex-1">
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24">
          <StageAtmosphere />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
            <p className="hero-rise font-display text-sm tracking-[0.35em] text-ember-glow">
              {artist.lead}
            </p>
            <h1 className="hero-rise hero-rise-delay-1 mt-3 max-w-[12ch] font-display text-[clamp(3.5rem,14vw,8.5rem)] leading-[0.9] tracking-wide text-foreground">
              {artist.name.toUpperCase()}
            </h1>
            <p className="hero-rise hero-rise-delay-2 mt-6 max-w-md text-lg leading-relaxed text-smoke sm:text-xl">
              {artist.tagline} {artist.pitch}
            </p>
            <div className="hero-rise hero-rise-delay-3 mt-10 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<a href="#escuchar" />}
                className={cn(
                  "h-12 rounded-md px-7 text-base font-semibold tracking-wide",
                  "bg-ember text-primary-foreground hover:bg-ember-glow"
                )}
              >
                Escuchar
              </Button>
              <Button
                nativeButton={false}
                render={
                  <a
                    href={artist.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                className="h-12 rounded-md border-ember/40 bg-transparent px-7 text-base tracking-wide text-foreground hover:border-ember hover:bg-ember/10 hover:text-ember-glow"
              >
                Instagram
              </Button>
            </div>
          </div>
        </section>

        <section
          id="escuchar"
          className="reveal-section border-t border-ember/15 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              Escuchar
            </h2>
            <p className="mt-3 max-w-lg text-smoke">
              Música y redes en un solo lugar. Entrá directo a cada plataforma.
            </p>
            <div className="mt-10">
              {artist.platforms.map((platform) => (
                <PlatformLink
                  key={platform.id}
                  label={platform.label}
                  description={platform.description}
                  href={platform.href}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="banda"
          className="reveal-section border-t border-ember/15 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
                {artist.bio.headline}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
                {artist.bio.body}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl tracking-[0.2em] text-ember-glow">
                Formación
              </h3>
              <ul className="mt-6 space-y-4">
                {artist.lineup.map((member) => (
                  <li key={member.name} className="border-b border-ember/15 pb-4">
                    <p className="font-display text-2xl tracking-wide text-foreground">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm text-smoke">{member.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="discos"
          className="reveal-section border-t border-ember/15 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              Discografía
            </h2>
            <p className="mt-3 max-w-lg text-smoke">
              Una selección del catálogo. Más discos y singles en Spotify.
            </p>
            <ol className="mt-12">
              {artist.albums.map((album, index) => (
                <li
                  key={album.title}
                  className="flex items-baseline justify-between gap-4 border-b border-ember/15 py-5"
                >
                  <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                    <span className="font-display text-sm tracking-widest text-ember/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
                      {album.title}
                    </span>
                  </div>
                  <span className="shrink-0 font-display text-xl tracking-wide text-smoke">
                    {album.year}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={artist.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="h-11 rounded-md bg-ember px-6 text-base font-semibold text-primary-foreground hover:bg-ember-glow"
              >
                Abrir en Spotify
              </Button>
            </div>
          </div>
        </section>

        <section className="reveal-section border-t border-ember/15 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Seguí a Clavos Band
            </p>
            <p className="mx-auto mt-4 max-w-md text-smoke">
              Novedades, shows y material nuevo en Instagram.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={artist.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="h-12 rounded-md bg-ember px-7 text-base font-semibold text-primary-foreground hover:bg-ember-glow"
              >
                @clavosband_clavito369
              </Button>
              <Button
                nativeButton={false}
                render={
                  <a
                    href={artist.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                className="h-12 rounded-md border-ember/40 bg-transparent px-7 text-base tracking-wide hover:border-ember hover:bg-ember/10 hover:text-ember-glow"
              >
                Spotify
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ember/15 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-smoke sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display tracking-[0.2em] text-foreground/70">
            CLAVOS BAND
          </p>
          <p>Blues-rock · Buenos Aires · Desde 1992</p>
        </div>
      </footer>
    </div>
  );
}
