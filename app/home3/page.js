'use client'
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Blog from "@/components/sections/home3/Blog"
import Chooseus from "@/components/sections/home3/Chooseus"
import Cta from "@/components/sections/home3/Cta"
import Funfact from "@/components/sections/home3/Funfact"
import Partner from "@/components/sections/home1/Partner"
import News from "@/components/sections/home3/News"
import Service from "@/components/sections/home3/Service"
import Testmonial from "@/components/sections/home3/Testmonial"

export default function Home3() {
    return (
        <Layout headerStyle={3} footerStyle={3}>
            <Banner />
            <Service />
            <About />
            <Funfact />
            <Chooseus />
            <Testmonial />
            <Cta />
            <News />
            <Blog />
            <Partner />
        </Layout>
    )
}
