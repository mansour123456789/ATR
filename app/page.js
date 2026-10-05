import Layout from "@/components/layout/Layout"
import InstitutionalHome from "@/components/home/InstitutionalHome"

export const metadata = {
    title: 'Accueil | Association Tunisienne des Routes',
    description: 'Site officiel de l\'Association Tunisienne des Routes (ATR) : réseau d\'expertise technique, sécurité routière, comités nationaux et coopération avec PIARC.',
    openGraph: {
        title: 'ATR | Association Tunisienne des Routes',
        description: 'Expertise technique et échanges professionnels pour les infrastructures routières en Tunisie.',
        images: ['/1000007112.png'],
        type: 'website',
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