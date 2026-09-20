import Link from "next/link"

const STYLES = `
  .page-title {
    position: relative;
  }
  .page-title::before {
    content: '';
    position: absolute;
    inset: 0;
    
    z-index: 1;
  }
  .page-title .auto-container {
    position: relative;
    z-index: 2;
  }
`;

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <section className="page-title text-center">
        <div className="bg-layer" style={{ backgroundImage: 'url(/images/road-hero.png)' }}></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>{breadcrumbTitle}</h1>
            <ul className="bread-crumb clearfix">
              <li><Link href="/">Accueil</Link></li>
              <li>{breadcrumbTitle}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
