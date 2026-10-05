import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/bootstrap.css"
import "../public/assets/css/color.css"
import "../public/assets/css/style.css"
import "../public/assets/css/responsive.css"
import "../public/assets/css/modern-override.css"
import "../public/assets/css/about-atr.css"
import "../public/assets/css/domains-atr.css"
import "../public/assets/css/publication-card.css"
import "../public/assets/css/footer-atr.css"
import "../public/assets/css/legal-pages.css"
import "../public/assets/css/content-system.css"
import "../public/assets/css/atr-home.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { oswald, inter, poppins, playfair_display, rubik } from '@/lib/font'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata = {
    metadataBase: new URL('https://atr-tunisie.org'),
    title: {
        default: 'ATR | Association Tunisienne des Routes',
        template: '%s | ATR - Association Tunisienne des Routes',
    },
    description: 'Site officiel de l\'Association Tunisienne des Routes (ATR) : expertise technique, sécurité routière (Vision Zéro décès), comités techniques et coopération avec PIARC et le Ministère de l\'Équipement.',
    applicationName: 'Association Tunisienne des Routes',
    authors: [{ name: 'Association Tunisienne des Routes', url: 'https://atr-tunisie.org' }],
    generator: 'Next.js',
    keywords: [
        'Association Tunisienne des Routes',
        'ATR',
        'ATR Tunisie',
        'PIARC Tunisie',
        'Routes Tunisie',
        'Sécurité Routière Tunisie',
        'Vision Zéro décès',
        'Infrastructures Routières',
        'Ministère de l’Équipement et de l’Habitat',
        'Génie Civil Tunisie',
        'Chaussées Routières',
        'Ouvrages d’art Tunisie',
        'Glissements de terrain Tunisie',
        'Séminaire International PIARC 2026',
        'Comités Techniques Routiers'
    ],
    creator: 'Association Tunisienne des Routes',
    publisher: 'Association Tunisienne des Routes',
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    icons: {
        icon: [
            { url: '/1000007112.png', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' },
        ],
        shortcut: ['/1000007112.png'],
        apple: [
            { url: '/1000007112.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    openGraph: {
        title: 'ATR | Association Tunisienne des Routes',
        description: 'Site officiel de l\'Association Tunisienne des Routes (ATR) : expertise technique, sécurité routière, comités techniques et partenariats.',
        url: 'https://atr-tunisie.org',
        siteName: 'Association Tunisienne des Routes',
        images: [
            {
                url: '/1000007112.png',
                width: 800,
                height: 800,
                alt: 'Logo Officiel de l\'Association Tunisienne des Routes',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ATR | Association Tunisienne des Routes',
        description: 'Expertise technique, sécurité routière et comités techniques de l\'Association Tunisienne des Routes.',
        images: ['/1000007112.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Association Tunisienne des Routes',
    alternateName: 'ATR',
    url: 'https://atr-tunisie.org',
    logo: 'https://atr-tunisie.org/1000007112.png',
    image: 'https://atr-tunisie.org/1000007112.png',
    description: 'Organisation scientifique et technique fédérant les acteurs publics et privés du secteur routier en Tunisie.',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bureau 102, Imm. El Wifak, Centre Urbain Nord',
        addressLocality: 'Tunis',
        addressCountry: 'TN',
    },
    email: 'contact@atr-tunisie.org',
    sameAs: [
        'https://www.facebook.com/atroutes',
        'https://www.linkedin.com/company/association-tunisienne-des-routes/',
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${inter.variable} ${oswald.variable} ${playfair_display.variable} ${poppins.variable} ${rubik.variable}`}>
            <head>
                <link rel="icon" href="/1000007112.png" type="image/png" sizes="any" />
                <link rel="apple-touch-icon" href="/1000007112.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&family=Playfair+Display:wght@400;600&family=Poppins:wght@400;500;600;700&family=Rubik:wght@400;600&family=Tajawal:wght@400;500;700&display=swap" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    )
}
