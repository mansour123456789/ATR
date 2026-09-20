'use client'
import Layout from "@/components/layout/Layout"
import Chooseus from "@/components/sections/home1/Chooseus"
import Testmonial from "@/components/sections/home1/Testimonial"
import Cta from "@/components/sections/home1/Cta"

export default function PourquoiAtr() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pourquoi l'ATR ?">
            <div className="pt_100 pb_100">
                <Chooseus />
            </div>
            <Testmonial />
            <Cta />
        </Layout>
    )
}
