export const navigationItems = [
  { key: 'menu.home', label: 'Accueil', href: '/' },
  {
    key: 'menu.discover_atr',
    label: "Découvrir l'ATR",
    href: '/about-us',
    children: [
      { key: 'menu.who_we_are', label: 'Qui sommes-nous ?', href: '/about-us' },
      { key: 'menu.organization', label: 'Notre Organisation', href: '/domaines' },
      { key: 'menu.our_members', label: 'Nos Membres', href: '/team' },
    ],
  },
  {
    key: 'menu.our_activities',
    label: 'Nos Activités',
    href: '/events',
    children: [
      { key: 'menu.events', label: 'Événements & Séminaires', href: '/events' },
      { key: 'menu.publications', label: 'Publications & Rapports', href: '/publications' },
      { key: 'menu.training', label: 'Formation & Académie', href: '/formation' },
    ],
  },
  {
    key: 'menu.news_agenda',
    label: 'Actualités & Agenda',
    href: '/actualites',
    children: [
      { key: 'menu.news', label: 'Actualités', href: '/actualites' },
      { key: 'menu.agenda', label: 'Agenda', href: '/calendrier' },
      { key: 'menu.press', label: 'Communiqués', href: '/communiques' },
    ],
  },
  { key: 'menu.contact', label: 'Contacter', href: '/contact' },
];
