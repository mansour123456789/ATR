'use client'
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home2/Cta"
import Testimonial from "@/components/sections/home1/Testimonial"

export default function Secretariat() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Secrétariat Général">
            <section className="section-padding pb-0 mb_100">
                <div className="auto-container">
                    <div className="row mb_50">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="mb_20" style={{color: '#1E4C81'}}>L'Organe Exécutif de l'ATR</h2>
                            <p className="fs_18">Le Secrétariat Général assure la coordination quotidienne des activités de l'association, la gestion des membres, et l'organisation matérielle des événements et des comités techniques.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
            <Cta />
        </Layout>
    )
}
