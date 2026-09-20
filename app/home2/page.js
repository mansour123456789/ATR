'use client'
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Chooseus from "@/components/sections/home2/Chooseus"
import Contact from "@/components/sections/home2/Contact"
import Cta from "@/components/sections/home2/Cta"
import Faq from "@/components/sections/home2/Faq"
import Feature from "@/components/sections/home2/Feature"
import Funfact from "@/components/sections/home2/Funfact"
import Gallery from "@/components/sections/home2/Gallery"
import News from "@/components/sections/home2/News"
import Product from "@/components/sections/home2/Product"
import Work from "@/components/sections/home2/Work"

export default function Home2() {
    return (
        <Layout headerStyle={2} footerStyle={2}>
            <Banner />
            <Feature />
            <About />
            <Work />
            <Gallery />
            <Faq />
            <Funfact />
            <Chooseus />
            <Product />
            <Cta />
            <Contact />
            <News />
            <Blog />
        </Layout>
    )
}
