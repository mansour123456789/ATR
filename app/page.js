import Layout from "@/components/layout/Layout"
import InstitutionalHome from "@/components/home/InstitutionalHome"

export const metadata = {
    title: 'ATR | Association Tunisienne des Routes',
    description: 'Association Tunisienne des Routes : expertise technique, sécurité routière et coopération avec le Ministère de l’Équipement et PIARC.',
    openGraph: {
        title: 'ATR | Association Tunisienne des Routes',
        description: 'Expertise technique et échanges professionnels pour les infrastructures routières en Tunisie.',
        images: ['/images/atr-hero-modern.png'],
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