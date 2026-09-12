import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryPills from "@/components/CategoryPills";
import ProductCard from "@/components/ProductCard";
import TilePattern from "@/components/TilePattern";
import { products } from "@/lib/data";

const heroTiles = products.slice(0, 5);

const steps = [
  {
    n: "1",
    title: "Dépose ta sla3",
    body: "Prends quelques photos, fixe ton prix en dirhams, publie en moins de deux minutes.",
  },
  {
    n: "2",
    title: "Discute et vends",
    body: "Réponds aux questions dans la messagerie, accepte une offre ou négocie.",
  },
  {
    n: "3",
    title: "Remets en main propre ou envoie",
    body: "Rendez-vous dans ta ville ou expédie via un point relais partenaire.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Ta garde-robe a
                <br />
                encore de la valeur.
              </h1>
              <p className="mt-5 max-w-[42ch] text-lg text-ink-soft">
                Achète, vends et troque des vêtements et objets de seconde main
                partout au Maroc. Simple, local, en dirhams.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/vendre"
                  className="rounded-full bg-zellige px-6 py-3 font-medium text-white transition-colors hover:bg-zellige-dark"
                >
                  Vendre ta première pièce
                </Link>
                <Link
                  href="/parcourir"
                  className="rounded-full border border-ink px-6 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Parcourir les annonces
                </Link>
              </div>
              <p className="mt-6 text-sm text-ink-faint">
                +12 400 annonces actives · Casablanca, Rabat, Marrakech, Fès et 20
                autres villes
              </p>
            </div>

            {/* Mosaic of tile-pattern "photos" */}
            <div className="grid h-[420px] grid-cols-6 grid-rows-6 gap-2">
              <div className="col-span-4 row-span-4 overflow-hidden rounded-sm">
                <TilePattern seed={heroTiles[0].patternSeed} palette={heroTiles[0].palette} className="h-full w-full" />
              </div>
              <div className="col-span-2 row-span-3 overflow-hidden rounded-sm">
                <TilePattern seed={heroTiles[1].patternSeed} palette={heroTiles[1].palette} className="h-full w-full" />
              </div>
              <div className="col-span-2 row-span-3 overflow-hidden rounded-sm">
                <TilePattern seed={heroTiles[2].patternSeed} palette={heroTiles[2].palette} className="h-full w-full" />
              </div>
              <div className="col-span-3 row-span-2 overflow-hidden rounded-sm">
                <TilePattern seed={heroTiles[3].patternSeed} palette={heroTiles[3].palette} className="h-full w-full" />
              </div>
              <div className="col-span-3 row-span-2 overflow-hidden rounded-sm">
                <TilePattern seed={heroTiles[4].patternSeed} palette={heroTiles[4].palette} className="h-full w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <CategoryPills />
        </section>

        {/* Featured products */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Dernières pépites
            </h2>
            <Link href="/parcourir" className="text-sm text-majorelle hover:underline">
              Tout voir →
            </Link>
          </div>
