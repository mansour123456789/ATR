'use client'
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Blog from "@/components/sections/home1/Blog"
import Chooseus from "@/components/sections/home1/Chooseus"
import Cta from "@/components/sections/home1/Cta"
import Feature from "@/components/sections/home1/Feature"
import Partner from "@/components/sections/home1/Partner"
import Portfolio from "@/components/sections/home1/Portfolio"
import Service from "@/components/sections/home1/Service"
import Team from "@/components/sections/home1/Team"
import Testmonial from "@/components/sections/home1/Testimonial"

export default function Home1() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <Banner />
            <Feature />
            <About />
            <Service />
            <Chooseus />
            <Team />
            <Portfolio />
            <Testmonial />
            <Cta />
            <Partner />
            <Blog />
        </Layout>
    )
}
