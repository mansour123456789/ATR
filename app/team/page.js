'use client'
import Layout from "@/components/layout/Layout"
import Team from "@/components/sections/home1/Team"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Notre Équipe">
                <Team />
            </Layout>
        </>
    )
}