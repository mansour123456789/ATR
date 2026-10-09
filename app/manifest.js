export default function manifest() {
  return {
    name: 'Association Tunisienne des Routes (ATR)',
    short_name: 'ATR',
    description: 'Site officiel de l\'Association Tunisienne des Routes (ATR) : réseau d\'expertise technique, sécurité routière et comités techniques en Tunisie.',
    start_url: '/',
    display: 'standalone',
    background_color: '#102b4e',
    theme_color: '#102b4e',
    icons: [
      {
        src: '/1000007112.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/1000007112.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
