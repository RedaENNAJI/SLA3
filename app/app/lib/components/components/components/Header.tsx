import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-ink">
          SLA3<span className="text-zellige">.</span>
        </Link>

        <form
          action="/parcourir"
          className="hidden flex-1 items-center gap-2 rounded-full border border-line bg-card px-4 py-2 sm:flex"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-ink-faint">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            name="q"
            type="text"
            placeholder="Chercher un caftan, des baskets, un sac..."
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          />
        </form>

        <nav className="ml-auto flex items-center gap-4 text-sm">
          <Link href="/connexion" className="hidden text-ink-soft hover:text-ink sm:inline">
            Se connecter
          </Link>
          <Link
            href="/vendre"
            className="rounded-full bg-majorelle px-4 py-2 font-medium text-white transition-colors hover:bg-majorelle-dark"
          >
            Vendre
          </Link>
        </nav>
      </div>
    </header>
  );
}
