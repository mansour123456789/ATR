'use client'
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

const STYLES = `
  .page-title {
    position: relative;
  }
  .page-title .bg-layer::before {
    background: linear-gradient(
      105deg,
      rgba(10,31,57,.95) 0%,
      rgba(10,31,57,.75) 50%,
      rgba(10,31,57,.30) 100%
    ) !important;
    opacity: 1 !important;
  }
  .page-title .auto-container {
    position: relative;
    z-index: 2;
  }
  body[dir="rtl"] .page-title .bread-crumb,
  .page-title[dir="rtl"] .bread-crumb {
    direction: rtl !important;
  }
  body[dir="rtl"] .page-title .bread-crumb li,
  .page-title[dir="rtl"] .bread-crumb li {
    float: none !important;
    display: inline-block !important;
    padding-right: 0 !important;
    margin-right: 0 !important;
    padding-left: 20px !important;
    margin-left: 8px !important;
  }
  body[dir="rtl"] .page-title .bread-crumb li:last-child,
  .page-title[dir="rtl"] .bread-crumb li:last-child {
    padding-left: 0 !important;
    margin-left: 0 !important;
    padding-right: 0 !important;
    margin-right: 0 !important;
  }
  body[dir="rtl"] .page-title .bread-crumb li:before,
  .page-title[dir="rtl"] .bread-crumb li:before {
    content: '\\e938' !important;
    font-family: 'icomoon' !important;
    font-size: 11px !important;
    right: auto !important;
    left: 0px !important;
    top: 2px !important;
    transform: none !important;
  }
  body[dir="rtl"] .page-title .bread-crumb li:last-child:before,
  .page-title[dir="rtl"] .bread-crumb li:last-child:before {
    display: none !important;
  }
`;

export default function Breadcrumb({ breadcrumbTitle, titleKey }) {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  const displayTitle = titleKey ? t(titleKey, breadcrumbTitle) : (breadcrumbTitle ? t(`breadcrumb.${breadcrumbTitle}`, breadcrumbTitle) : '');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <section className="page-title text-center" dir={isRtl ? "rtl" : "ltr"}>
        <div className="bg-layer" style={{ backgroundImage: 'url(/images/road-hero.png)' }}></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>{displayTitle}</h1>
            <ul className="bread-crumb clearfix">
              <li><Link href="/">{t('common.home', 'Accueil')}</Link></li>
              <li>{displayTitle}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
