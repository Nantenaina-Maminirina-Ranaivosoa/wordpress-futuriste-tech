// Simulation des données que l'API WordPress renverrait
// Plus tard, tu remplaceras les return par des fetch('https://tonsite.com/wp-json/wp/v2/...')

export const getProjects = async () => {
  return [
    {
      id: 1,
      title: "Résidence Céleste",
      category: "Immobilier",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
      description: "Appartements haut de gamme avec domotique intégrée."
    },
    {
      id: 2,
      title: "Audit SEO Tech",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      description: "Optimisation technique et sémantique pour start-up SaaS."
    }
  ];
};

export const getSkills = async () => {
  return [
    { id: 1, name: "PHP", level: 90 },
    { id: 2, name: "React / Vite", level: 95 },
    { id: 3, name: "WordPress Headless", level: 85 },
    { id: 4, name: "CSS Pur", level: 100 },
  ];
};

export const getRealEstateProjects = async () => {
  return [
    {
      id: 101,
      title: "Penthouse Néo-Tokyo",
      location: "Shibuya, Tokyo",
      price: "2,500,000 €",
      tags: ["Domotique", "Vue Panoramique"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
    },
    {
      id: 102,
      title: "Villa Cyberpunk",
      location: "Los Angeles, CA",
      price: "4,200,000 €",
      tags: ["Architecture Brutaliste", "Piscine"],
      image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?auto=format&fit=crop&q=80"
    },
    {
      id: 103,
      title: "Loft Minimaliste",
      location: "Berlin, Allemagne",
      price: "950,000 €",
      tags: ["Durable", "Smart Home"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
    }
  ];
};

export const getServices = async () => {
  return [
    {
      id: 201,
      title: "Stratégie Digitale & Branding",
      icon: "M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z", // Path SVG simple (Isométrique)
      description: "Création d'identités de marque fortes adaptées au marché du luxe et de la tech."
    },
    {
      id: 202,
      title: "Développement React & Headless",
      icon: "M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z", // Path type "Code/Interface"
      description: "Sites ultra-performants, sécurisés et scalables utilisant les dernières technologies."
    },
    {
      id: 203,
      title: "SEO Technique & Data",
      icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z", // Path "Graphique Analytics"
      description: "Optimisation pour les moteurs de recherche basée sur la data et la structure sémantique."
    }
  ];
};