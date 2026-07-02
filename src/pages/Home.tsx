import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Fullscreen looping background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Glassmorphic navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
        <span
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Cinos
        </span>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm text-foreground transition-colors hover:text-foreground"
          >
            Accueil
          </a>
          <Link
            to="/portfolio"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Portfolio
          </Link>
          <a
            href="#univers"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Univers
          </a>
          <a
            href="#journal"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Journal
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03]">
          Me contacter
        </button>
      </nav>

      {/* Hero section */}
      <section className="relative z-10 flex flex-col items-center px-6 pb-40 pt-32 py-[90px] text-center">
        <h1
          className="max-w-7xl animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Une <em className="not-italic text-muted-foreground">passion malgache</em>, un{" "}
          <em className="not-italic text-muted-foreground">univers sans limites.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Je m'appelle Cinos, développeur malgache passionné de technologie, de
          jeux vidéo, de manga et d'échecs. Ici, je partage mon parcours, mes
          créations et les univers qui nourrissent chacune de mes idées.
        </p>

        <button className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03]">
          Explorer mon univers
        </button>
      </section>
    </div>
  );
}

export default Home;
