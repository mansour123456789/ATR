import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import HeroModern from "@/components/sections/home1/HeroModern"
import Cta from "@/components/sections/home1/Cta"
import Service from "@/components/sections/home1/Service"
import Team from "@/components/sections/home1/Team"
import Testmonial from "@/components/sections/home1/Testimonial"
import Blog from "@/components/sections/home1/Blog"
import Partner from "@/components/sections/home1/Partner"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <HeroModern />
                <About />
                <Blog />
                <Service />
                <Team />
                <Testmonial />
                <Cta />
                <Partner />
            </Layout>
        </>
    )
}