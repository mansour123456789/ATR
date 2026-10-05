'use client'
import Layout from "@/components/layout/Layout"
import Team from "@/components/sections/home1/Team"
import { useLanguage } from "@/context/LanguageContext"

export default function TeamPage() {
    const { t } = useLanguage();
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.team', "Notre Équipe")}>
            <Team />
        </Layout>
    )
}