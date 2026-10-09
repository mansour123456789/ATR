import Layout from "@/components/layout/Layout"
import InstitutionalHome from "@/components/home/InstitutionalHome"

export const metadata = {
    title: {
        absolute: 'ATR - Association Tunisienne des Routes | Site Officiel',
    },
    description: 'Site officiel de l\'Association Tunisienne des Routes (ATR). Réseau d\'expertise technique, sécurité routière (Vision Zéro), infrastructures routières, comités techniques nationaux et membre de PIARC en Tunisie.',
    keywords: [
        'ATR',
        'ATR Tunisie',
        'Association Tunisienne des Routes',
        'الجمعية التونسية للطرقات',
        'Tunisian Roads Association',
        'PIARC Tunisie',
        'Routes Tunisie',
        'Sécurité Routière Tunisie',
        'Vision Zéro décès',
        'Infrastructures Routières Tunisie',
        'Ministère de l’Équipement Tunisie',
        'Génie Civil Tunisie',
        'Chaussées Routières'
    ],
    alternates: {
        canonical: 'https://atr-tunisie.org',
    },
    openGraph: {
        title: 'ATR - Association Tunisienne des Routes | Site Officiel',
        description: 'Site officiel de l\'Association Tunisienne des Routes (ATR). Réseau d\'expertise technique, sécurité routière et comités techniques.',
        url: 'https://atr-tunisie.org',
        siteName: 'ATR - Association Tunisienne des Routes',
        images: [
            {
                url: '/1000007112.png',
                width: 800,
                height: 800,
                alt: 'Logo Officiel ATR - Association Tunisienne des Routes',
            },
        ],
        locale: 'fr_TN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ATR - Association Tunisienne des Routes | Site Officiel',
        description: 'Site officiel de l\'Association Tunisienne des Routes (ATR).',
        images: ['/1000007112.png'],
    },
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <InstitutionalHome />
            </Layout>
        </>
    )
}