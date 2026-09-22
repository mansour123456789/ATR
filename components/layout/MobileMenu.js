'use client'
import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "./navigation";
import { useLanguage } from "@/context/LanguageContext";

/* ── SVG Icons ── */
const IconChevron  = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.79 19.79 0 0 1 1 2.18 2 2 0 0 1 2.96 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconLocation = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

/* ── MobileItem ── */
function MobileItem({ item, itemKey, activeKey, onToggle, onNavigate }) {
  const hasChildren = item.children?.length > 0;
  const isOpen = activeKey === itemKey;

  return (
    <li className={`atr-mob-item${hasChildren ? " has-children" : ""}${isOpen ? " open" : ""}`}>
      <div className="atr-mob-row">
        <Link href={item.href} className="atr-mob-link" onClick={hasChildren ? (e) => e.preventDefault() : onNavigate}>
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            className={`atr-mob-toggle${isOpen ? " open" : ""}`}
            aria-label={`${isOpen ? "Fermer" : "Ouvrir"} ${item.label}`}
            onClick={() => onToggle(itemKey)}
          >
            <IconChevron />
          </button>
        )}
      </div>
      {hasChildren && (
        <ul className={`atr-mob-sub${isOpen ? " open" : ""}`}>
          {item.children.map((child, index) => (
            <li key={child.label}>
              <Link href={child.href} className="atr-mob-sub-link" onClick={onNavigate}>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/* ── MobileMenu ── */
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const [activeKey, setActiveKey] = useState("");
  const { language, changeLanguage } = useLanguage();

  const handleToggle = (key) => setActiveKey((cur) => cur === key ? "" : key);
  const handleNavigate = () => { setActiveKey(""); handleMobileMenu(); };

  const langs = [
    { code: 'fr', label: 'Français',  flag: 'fr' },
    { code: 'ar', label: 'العربية',   flag: 'tn' },
    { code: 'en', label: 'English',   flag: 'gb' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Overlay ── */
        .atr-mob-backdrop {
          display: none;
          position: fixed; inset: 0;
          background: rgba(10,20,40,.55);
          backdrop-filter: blur(3px);
          z-index: 9998;
        }
        .mobile-menu-visible .atr-mob-backdrop { display: block; }

        /* ── Drawer ── */
        .atr-mob-drawer {
          position: fixed; top: 0; left: 0;
          width: min(340px, 92vw);
          height: 100dvh;
          background: #0e1e35;
          z-index: 9999;
          display: flex; flex-direction: column;
          transform: translateX(-105%);
          transition: transform .35s cubic-bezier(.4,0,.2,1);
          box-shadow: 6px 0 40px rgba(0,0,0,.45);
          overflow: hidden;
        }
        .mobile-menu-visible .atr-mob-drawer { transform: translateX(0); }

        /* ── Header ── */
        .atr-mob-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: #0a1628;
          flex-shrink: 0;
        }
        .atr-mob-logo img { height: 56px; width: auto; display: block; }
        .atr-mob-close {
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.06);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; cursor: pointer;
          transition: background .2s, border-color .2s;
        }
        .atr-mob-close:hover { background: rgba(192,123,27,.25); border-color: #c07b1b; }

        /* ── Scrollable body ── */
        .atr-mob-body {
          flex: 1; overflow-y: auto;
          padding: 8px 0;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,.1) transparent;
        }

        /* ── Nav items ── */
        .atr-mob-nav { list-style: none; margin: 0; padding: 0; }

        .atr-mob-item { border-bottom: 1px solid rgba(255,255,255,.06); }

        .atr-mob-row {
          display: flex; align-items: center;
          padding: 0 20px;
        }

        .atr-mob-link {
          flex: 1;
          display: block;
          padding: 15px 0;
          color: rgba(255,255,255,.82);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color .2s;
        }
        .atr-mob-item.open .atr-mob-link,
        .atr-mob-link:hover { color: #f0a830; }

        .atr-mob-toggle {
          width: 32px; height: 32px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.05);
          border-radius: 6px;
          color: rgba(255,255,255,.6);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all .25s;
          flex-shrink: 0;
        }
        .atr-mob-toggle svg { transition: transform .3s; }
        .atr-mob-toggle.open { background: rgba(192,123,27,.2); border-color: #c07b1b; color: #f0a830; }
        .atr-mob-toggle.open svg { transform: rotate(90deg); }

        /* ── Submenu ── */
        .atr-mob-sub {
          list-style: none; margin: 0; padding: 0;
          background: rgba(0,0,0,.25);
          max-height: 0; overflow: hidden;
          transition: max-height .35s cubic-bezier(.4,0,.2,1);
        }
        .atr-mob-sub.open { max-height: 400px; }

        .atr-mob-sub li { border-top: 1px solid rgba(255,255,255,.04); }
        .atr-mob-sub-link {
          display: block;
          padding: 12px 20px 12px 32px;
          color: rgba(255,255,255,.6);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          transition: color .2s, padding-left .2s;
        }
        .atr-mob-sub-link::before {
          content: '';
          position: absolute; left: 20px; top: 50%;
          transform: translateY(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #c07b1b;
          opacity: 0;
          transition: opacity .2s;
        }
        .atr-mob-sub-link:hover { color: #f0a830; padding-left: 36px; }
        .atr-mob-sub-link:hover::before { opacity: 1; }

        /* ── Language switcher ── */
        .atr-mob-lang {
          display: flex; gap: 8px;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255,255,255,.06);
        }
        .atr-mob-lang-flag {
          width: 26px; height: 18px;
          object-fit: cover;
          border-radius: 3px;
          display: block;
          flex-shrink: 0;
          box-shadow: 0 1px 3px rgba(0,0,0,.4);
        }
        .atr-mob-lang-name {
          font-size: 11px;
          font-weight: 700;
          margin-top: 4px;
          display: block;
          letter-spacing: .05em;
        }
        .atr-mob-lang-btn {
          flex: 1;
          padding: 10px 6px;
          border: 1px solid rgba(255,255,255,.12);
          background: transparent;
          border-radius: 8px;
          color: rgba(255,255,255,.55);
          font-size: 12px; font-weight: 700;
          cursor: pointer;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
          transition: all .2s;
        }
        .atr-mob-lang-btn.active,
        .atr-mob-lang-btn:hover {
          background: rgba(192,123,27,.2);
          border-color: #c07b1b;
          color: #f0a830;
        }

        /* ── Contact ── */
        .atr-mob-contact {
          padding: 16px 20px;
          border-top: 1px solid rgba(255,255,255,.08);
          flex-shrink: 0;
        }
        .atr-mob-contact-title {
          font-size: 10px; font-weight: 800;
          letter-spacing: .12em; text-transform: uppercase;
          color: #c07b1b; margin-bottom: 12px;
        }
        .atr-mob-contact-row {
          display: flex; align-items: flex-start; gap: 10px;
          margin-bottom: 10px;
          color: rgba(255,255,255,.55);
          font-size: 12.5px; line-height: 1.5;
          text-decoration: none;
        }
        .atr-mob-contact-row svg { flex-shrink: 0; margin-top: 2px; }
        .atr-mob-contact-row:hover { color: #f0a830; }

        /* ── Social ── */
        .atr-mob-social {
          display: flex; gap: 10px;
          padding: 14px 20px;
          border-top: 1px solid rgba(255,255,255,.06);
          flex-shrink: 0;
        }
        .atr-mob-social a {
          width: 36px; height: 36px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.55);
          text-decoration: none;
          transition: all .2s;
        }
        .atr-mob-social a:hover { background: rgba(192,123,27,.2); border-color: #c07b1b; color: #f0a830; }

        /* ── CTA join ── */
        .atr-mob-cta {
          padding: 14px 20px 20px;
          flex-shrink: 0;
        }
        .atr-mob-cta a {
          display: block;
          padding: 13px;
          background: #c07b1b;
          color: #fff;
          text-align: center;
          font-size: 13px; font-weight: 800;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: .05em;
          transition: background .2s;
        }
        .atr-mob-cta a:hover { background: #dc9222; }
      ` }} />

      {/* Backdrop */}
      <div className="atr-mob-backdrop" onClick={handleMobileMenu} />

      {/* Drawer — toujours LTR pour que la nav reste stable en arabe */}
      <div className="atr-mob-drawer" dir="ltr" role="dialog" aria-modal="true" aria-label="Menu de navigation">

        {/* Header */}
        <div className="atr-mob-head">
          <Link href="/" className="atr-mob-logo" onClick={handleNavigate}>
            <img src="/1000007112.png" alt="ATR Logo" />
          </Link>
          <button type="button" className="atr-mob-close" onClick={handleMobileMenu} aria-label="Fermer le menu">
            <IconClose />
          </button>
        </div>

        {/* Body scrollable */}
        <div className="atr-mob-body">
          {/* Language switcher avec vrais drapeaux */}
          <div className="atr-mob-lang">
            {langs.map(({ code, label, flag }) => (
              <button
                key={code}
                type="button"
                className={`atr-mob-lang-btn${language === code ? " active" : ""}`}
                onClick={() => changeLanguage(code)}
                title={label}
              >
                <img
                  src={`https://flagcdn.com/w40/${flag}.png`}
                  alt={label}
                  className="atr-mob-lang-flag"
                />
                <span className="atr-mob-lang-name">{code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <ul className="atr-mob-nav">
            {navigationItems.map((item, index) => (
              <MobileItem
                key={item.label}
                item={item}
                itemKey={String(index)}
                activeKey={activeKey}
                onToggle={handleToggle}
                onNavigate={handleNavigate}
              />
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="atr-mob-contact">
          <p className="atr-mob-contact-title">Contact ATR</p>
          <div className="atr-mob-contact-row">
            <IconLocation /><span>Bureau 102, Imm. El Wifak, Centre Urbain Nord, Tunis</span>
          </div>
          <Link href="tel:+21671234567" className="atr-mob-contact-row">
            <IconPhone /><span>+216 71 234 567</span>
          </Link>
          <Link href="mailto:contact@atr.org.tn" className="atr-mob-contact-row">
            <IconMail /><span>contact@atr.org.tn</span>
          </Link>
        </div>

        {/* Social */}
        <div className="atr-mob-social">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconLinkedIn /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook /></a>
        </div>

        {/* CTA */}
        <div className="atr-mob-cta">
          <Link href="/contact" onClick={handleNavigate}>Nous Rejoindre →</Link>
        </div>
      </div>

      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
}
