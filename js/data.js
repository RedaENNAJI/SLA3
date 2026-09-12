// Données de démonstration — à remplacer par de vraies données / une API plus tard.

const CATEGORIES = [
  { slug: "femme", label: "Vêtements femme", emoji: "👗" },
  { slug: "homme", label: "Vêtements homme", emoji: "👔" },
  { slug: "caftans", label: "Kaftans & tenues traditionnelles", emoji: "🧵" },
  { slug: "chaussures", label: "Chaussures", emoji: "👟" },
  { slug: "sacs", label: "Sacs & accessoires", emoji: "👜" },
  { slug: "enfants", label: "Enfants & bébé", emoji: "🧸" },
  { slug: "maison", label: "Maison & déco", emoji: "🏺" },
];

const CITIES = [
  "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger",
  "Agadir", "Meknès", "Oujda", "Kénitra", "Salé", "Tétouan",
];

const CONDITIONS = [
  "Neuf avec étiquette",
  "Neuf sans étiquette",
  "Très bon état",
  "Bon état",
  "Satisfaisant",
];

const PRODUCTS = [
  { id: "1", title: "Caftan brodé main, fil doré", price: 850, category: "caftans", city: "Fès", condition: "Très bon état", size: "38", seller: "Amina_F", sellerRating: 4.9, favorites: 34, description: "Caftan traditionnel brodé à la main, porté une seule fois pour un mariage. Tissu épais, tombe très bien.", patternSeed: 1, palette: "zellige" },
  { id: "2", title: "Baskets New Balance 530", price: 420, category: "chaussures", city: "Casablanca", condition: "Bon état", size: "42", seller: "Yassine.k", sellerRating: 4.7, favorites: 12, description: "Portées quelques mois, encore beaucoup de vie dedans. Boîte d'origine incluse.", patternSeed: 2, palette: "majorelle" },
  { id: "3", title: "Sac cabas cuir naturel", price: 320, category: "sacs", city: "Marrakech", condition: "Neuf sans étiquette", seller: "Soukaina.b", sellerRating: 5, favorites: 21, description: "Cuir de la médina de Marrakech, jamais utilisé, cadeau en double.", patternSeed: 3, palette: "fes" },
  { id: "4", title: "Djellaba homme laine d'hiver", price: 480, category: "homme", city: "Meknès", condition: "Très bon état", size: "L", seller: "Hamza_m", sellerRating: 4.6, favorites: 8, description: "Djellaba chaude en laine, parfaite pour l'hiver. Capuche doublée.", patternSeed: 4, palette: "majorelle" },
  { id: "5", title: "Robe d'été fleurie", price: 150, category: "femme", city: "Rabat", condition: "Bon état", size: "36", seller: "Nada.r", sellerRating: 4.8, favorites: 17, description: "Légère et fraîche, portée deux ou trois fois l'été dernier.", patternSeed: 5, palette: "zellige" },
  { id: "6", title: "Babouches cuir jaune", price: 180, category: "chaussures", city: "Fès", condition: "Neuf avec étiquette", size: "40", seller: "Amina_F", sellerRating: 4.9, favorites: 26, description: "Babouches artisanales, jamais portées, encore avec l'étiquette.", patternSeed: 6, palette: "fes" },
  { id: "7", title: "Ensemble bébé 0-6 mois (x5)", price: 200, category: "enfants", city: "Tanger", condition: "Très bon état", seller: "Khadija_t", sellerRating: 5, favorites: 9, description: "Lot de 5 pièces, taille naissance, laine et coton, bien entretenues.", patternSeed: 7, palette: "majorelle" },
  { id: "8", title: "Théière et plateau en laiton", price: 380, category: "maison", city: "Marrakech", condition: "Bon état", seller: "Reda.d", sellerRating: 4.5, favorites: 14, description: "Théière traditionnelle et son plateau gravé, quelques traces d'usage.", patternSeed: 8, palette: "zellige" },
  { id: "9", title: "Blazer tailleur bleu marine", price: 260, category: "femme", city: "Casablanca", condition: "Très bon état", size: "40", seller: "Salma.c", sellerRating: 4.7, favorites: 11, description: "Coupe cintrée, parfait pour le bureau. Pressing fait avant l'envoi.", patternSeed: 9, palette: "fes" },
  { id: "10", title: "Ceinture cuir tressé", price: 90, category: "sacs", city: "Agadir", condition: "Bon état", seller: "Omar.a", sellerRating: 4.4, favorites: 5, description: "Ceinture en cuir véritable, taille ajustable jusqu'à 95cm.", patternSeed: 10, palette: "majorelle" },
  { id: "11", title: "Takchita deux pièces", price: 1200, category: "caftans", city: "Salé", condition: "Très bon état", size: "40", seller: "Ghita_s", sellerRating: 5, favorites: 41, description: "Takchita de cérémonie, ceinture brodée assortie, nettoyée à sec.", patternSeed: 11, palette: "zellige" },
  { id: "12", title: "Sneakers enfant taille 28", price: 110, category: "enfants", city: "Oujda", condition: "Satisfaisant", size: "28", seller: "Fatima_o", sellerRating: 4.3, favorites: 3, description: "Un peu usées mais encore solides, semelles en bon état.", patternSeed: 12, palette: "fes" },
];

function getProductById(id) {
  return PRODUCTS.find((p) => String(p.id) === String(id));
}
