import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryPills from "@/components/CategoryPills";
import ProductCard from "@/components/ProductCard";
import { products, cities, categories, type Condition } from "@/lib/data";

const conditions: Condition[] = [
  "Neuf avec étiquette",
  "Neuf sans étiquette",
  "Très bon état",
  "Bon état",
  "Satisfaisant",
];

type SearchParams = {
  q?: string;
  categorie?: string;
  ville?: string;
  etat?: string;
};

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const { q, categorie, ville, etat } = params;

  const filtered = products.filter((p) => {
    if (categorie && p.category !== categorie) return false;
    if (ville && p.city !== ville) return false;
    if (etat && p.condition !== etat) return false;
    if (q && !p.title.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const activeCategory = categories.find((c) => c.slug === categorie);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h1 className="font-display text-3xl font-semibold text-ink">
          {activeCategory ? activeCategory.label : "Toutes les annonces"}
        </h1>
        <p className="mt-1 text-sm text-ink-faint">
          {filtered.length} article{filtered.length > 1 ? "s" : ""}
          {q ? ` pour « ${q} »` : ""}
        </p>

        <div className="mt-5">
          <CategoryPills active={categorie} />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Filters */}
          <form className="space-y-7" method="get">
            {q && <input type="hidden" name="q" value={q} />}
            {categorie && <input type="hidden" name="categorie" value={categorie} />}

            <div>
              <p className="mb-2 text-sm font-medium text-ink">Ville</p>
              <div className="space-y-1.5">
                {cities.slice(0, 6).map((c) => (
                  <label key={c} className="flex items-center gap-2 text-sm text-ink-soft">
                    <input
                      type="radio"
                      name="ville"
                      value={c}
                      defaultChecked={ville === c}
                      className="accent-majorelle"
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-ink">État</p>
              <div className="space-y-1.5">
                {conditions.map((c) => (
                  <label key={c} className="flex items-center gap-2 text-sm text-ink-soft">
                    <input
                      type="radio"
                      name="etat"
                      value={c}
                      defaultChecked={etat === c}
                      className="accent-majorelle"
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-ink py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              Filtrer
            </button>
            
              href="/parcourir"
              className="block text-center text-xs text-ink-faint hover:text-ink"
            >
              Réinitialiser
            </a>
          </form>

          {/* Results */}
          <div>
            {filtered.length === 0 ? (
              <div className="rounded-sm border border-dashed border-line py-16 text-center">
                <p className="text-ink">Aucune annonce ne correspond à ces filtres.</p>
                <a href="/parcourir" className="mt-2 inline-block text-sm text-majorelle hover:underline">
                  Voir toutes les annonces
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
