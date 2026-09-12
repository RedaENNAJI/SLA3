import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoryPills({ active }: { active?: string }) {
  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/parcourir?categorie=${c.slug}`}
          className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm transition-colors ${
            active === c.slug
              ? "border-majorelle bg-majorelle text-white"
              : "border-line bg-card text-ink-soft hover:border-ink-faint"
          }`}
        >
          <span aria-hidden>{c.emoji}</span>
          {c.label}
        </Link>
      ))}
    </div>
  );
}
