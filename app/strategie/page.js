'use client'
import Layout from "@/components/layout/Layout"
import Service from "@/components/sections/home3/Service"
import Funfact from "@/components/sections/home3/Funfact"
import Cta from "@/components/sections/home1/Cta"

export default function Strategie() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Plan Stratégique">
            <div className="pb_100">
                <Service />
            </div>
            <Funfact />
            <Cta />
        </Layout>
    )
}
