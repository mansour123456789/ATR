'use client'
import { useEffect } from "react";
import Layout from "@/components/layout/Layout"
import Team from "@/components/sections/home1/Team"
import { useLanguage } from "@/context/LanguageContext"

export default function TeamPage() {
    const { t, language } = useLanguage();

    useEffect(() => {
        const teamTitle = t('breadcrumb.team', "Notre Équipe");
        document.title = `${teamTitle} | ATR - Association Tunisienne des Routes`;
    }, [language, t]);

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.team', "Notre Équipe")}>
            <Team />
        </Layout>
    )
}