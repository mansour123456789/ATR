export const navigationItems = [
  { label: 'Accueil', href: '/' },
  {
    label: "Découvrir l'ATR",
    href: '/about-us',
    children: [
      { label: 'Qui sommes-nous ?', href: '/about-us' },
      { label: 'Notre Organisation', href: '/domaines' },
      { label: 'Nos Membres', href: '/team' },
    ],
  },
  {
    label: 'Nos Activités',
    href: '/events',
    children: [
      { label: 'Événements & Séminaires', href: '/events' },
      { label: 'Publications & Rapports', href: '/publications' },
      { label: 'Formation & Académie', href: '/formation' },
    ],
  },
  {
    label: 'Actualités & Agenda',
    href: '/actualites',
    children: [
      { label: 'Actualités', href: '/actualites' },
      { label: 'Agenda', href: '/calendrier' },
      { label: 'Communiqués', href: '/communiques' },
    ],
  },
  { label: 'Contacter', href: '/contact' },
];
