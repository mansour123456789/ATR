
'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
export default function Error() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}  breadcrumbTitle="404 Error">
            <section className="error-section text-center">
            <div className="auto-container">
                <div className="content-box">
                    <div className="title-text">
                        <div className="vector-1"><img src="assets/images/shape/vector-1.png" alt="" /></div>
                        <div className="vector-2"><img src="assets/images/shape/vector-2.png" alt="" /></div>
                        <h2>404</h2>
                    </div>
                    <h3>Oops! That Page Can Not <br />be Found.</h3>
                    <div className="btn-box">
                        <Link href="/" className="btn-1"><i className="icon-55"></i> Back to Homepage <span></span></Link>
                    </div>
                </div>
            </div>
        </section>
  
            </Layout>
        </>
    )
}
