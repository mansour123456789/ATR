'use client'
import Layout from "@/components/layout/Layout"
import Partner from "@/components/sections/home1/Partner"
import Testmonial from "@/components/sections/home1/Testimonial"
import Cta from "@/components/sections/home1/Cta"
import Link from "next/link"

export default function Membres() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Répertoire des Membres">
            <section className="section-padding pb-0">
                <div className="auto-container">
                    <div className="row mb_50">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="mb_20" style={{color: '#1E4C81'}}>Le Réseau d'Excellence Routière</h2>
                            <p className="fs_18">L'ATR fédère les acteurs majeurs du secteur : ministères, grandes entreprises de BTP, bureaux d'études, laboratoires et universités.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Partner />
            
            <Testmonial />
            <Cta />
        </Layout>
    )
}
