import Link from "next/link";
import TilePattern from "./TilePattern";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produit/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-line bg-card">
        <TilePattern
          seed={product.patternSeed}
          palette={product.palette}
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-sm bg-paper/90 px-2 py-1 text-xs font-medium text-ink-soft backdrop-blur-sm">
          {product.condition}
        </span>
      </div>
      <div className="mt-2 space-y-0.5">
        <p className="truncate text-sm text-ink">{product.title}</p>
        <div className="flex items-baseline justify-between">
          <p className="font-display text-lg font-semibold text-ink">
            {product.price} DH
          </p>
          {product.size && (
            <span className="text-xs text-ink-faint">Taille {product.size}</span>
          )}
        </div>
        <p className="text-xs text-ink-faint">{product.city}</p>
      </div>
    </Link>
  );
}
