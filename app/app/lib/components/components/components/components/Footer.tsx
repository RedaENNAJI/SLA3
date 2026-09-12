export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-ink">SLA3</p>
            <p className="mt-2 max-w-[20ch] text-sm text-ink-faint">
              La seconde main, à la marocaine.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-ink">SLA3</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-faint">
              <li>Comment ça marche</li>
              <li>Protection acheteur</li>
              <li>Frais et paiements</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-ink">Assistance</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-faint">
              <li>Centre d&apos;aide</li>
              <li>Signaler une annonce</li>
              <li>Nous contacter</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-ink">Villes</p>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-faint">
              <li>Casablanca</li>
              <li>Rabat</li>
              <li>Marrakech</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-ink-faint">
          © {new Date().getFullYear()} SLA3 — Projet de démonstration, non affilié à Vinted.
        </p>
      </div>
    </footer>
  );
}
