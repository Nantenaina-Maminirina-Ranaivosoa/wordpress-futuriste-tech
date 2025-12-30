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