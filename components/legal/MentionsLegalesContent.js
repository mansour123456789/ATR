'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function MentionsLegalesContent() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    const pageTitle = language === 'ar' 
      ? 'الإشعار القانوني' 
      : (language === 'en' ? 'Legal Notice' : 'Mentions légales');
    document.title = `${pageTitle} | ATR - Association Tunisienne des Routes`;
  }, [language]);

  return (
    <main className="atr-legal-page" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="auto-container">
        
        {/* HEADER BOX */}
        <header className="atr-legal-header-box">
          <div className="atr-legal-badge-top">
            <span aria-hidden="true">⚖️</span>
            {language === 'ar' 
              ? 'الإطار القانوني والمؤسساتي' 
              : (language === 'en' ? 'Legal & Institutional Framework' : 'Cadre Juridique & Institutionnel')}
          </div>
          <h1>
            {language === 'ar' 
              ? 'الإشعار القانوني والبيانات الرسمية' 
              : (language === 'en' ? 'Legal Notice & Terms of Use' : 'Mentions Légales & Informations Réglementaires')}
          </h1>
          <p className="atr-legal-lead">
            {language === 'ar'
              ? 'البيانات القانونية الرسمية المتعلقة بالجمعية التونسية للطرقات (ATR)، جهة النشر، الاستضافة وحماية حقوق الملكية الفكرية والمعطيات الشخصية.'
              : (language === 'en'
                ? 'Official legal disclosures regarding the Tunisian Road Association (ATR), publisher identity, technical hosting, intellectual property, and data protection.'
                : 'Informations juridiques et réglementaires relatives à l’Association Tunisienne des Routes (ATR), à l’édition du site, à l’hébergement technique et à la protection des droits d’auteur.')}
          </p>
          <div className="atr-legal-meta">
            <span>📅 {language === 'ar' ? 'آخر تحيين : أكتوبر 2026' : (language === 'en' ? 'Last updated: October 2026' : 'Dernière mise à jour : Octobre 2026')}</span>
            <span>•</span>
            <span>📍 {language === 'ar' ? 'الجمهورية التونسية' : (language === 'en' ? 'Republic of Tunisia' : 'République Tunisienne')}</span>
          </div>
        </header>

        {/* SECTION 1: ÉDITEUR */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🏛️</div>
            <h2>
              {language === 'ar' 
                ? '1. جهة النشر وإدارة الموقع' 
                : (language === 'en' ? '1. Website Publisher & Management' : '1. Éditeur du site & Direction de la publication')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'يتم إصدار وإدارة هذا الموقع الرسمي من قبل الجمعية التونسية للطرقات (ATR)، وهي جمعية علمية وفنية خاضعة للتشريع التونسي المنظم للجمعيات.'
              : (language === 'en'
                ? 'This official website is published and maintained by the Tunisian Road Association (ATR), a scientific and technical association governed by Tunisian legislation.'
                : 'Le site officiel https://atr-tunisie.org est édité par l’Association Tunisienne des Routes (ATR), organisation scientifique et technique d’intérêt public régie par les dispositions de la législation tunisienne en vigueur.')}
          </p>
          <div className="atr-legal-info-list">
            <div className="atr-legal-info-row">
              <span className="atr-legal-info-k">{language === 'ar' ? 'التسمية الرسمية :' : (language === 'en' ? 'Official Name:' : 'Dénomination :')}</span>
              <span className="atr-legal-info-v"><strong>{language === 'ar' ? 'الجمعية التونسية للطرقات (ATR)' : 'Association Tunisienne des Routes (ATR)'}</strong></span>
            </div>
            <div className="atr-legal-info-row">
              <span className="atr-legal-info-k">{language === 'ar' ? 'المقر الاجتماعي :' : (language === 'en' ? 'Head Office:' : 'Siège social :')}</span>
              <span className="atr-legal-info-v">
                {language === 'ar' 
                  ? 'شقة عدد 2، الطابق الثاني، مدرج « ب »، المركب العقاري فضاء تونس مونبليزير، نهج 8002، تونس 1002' 
                  : (language === 'en'
                    ? 'Apt. No. 2, 2nd Floor, Block "B", Espace Tunis Montplaisir Complex, Rue 8002, Tunis 1002, Tunisia'
                    : 'App n°2, 2ème étage, bloc « B » du complexe immobilier Espace Tunis Montplaisir, rue 8002, Tunis 1002, Tunisie')}
              </span>
            </div>
            <div className="atr-legal-info-row">
              <span className="atr-legal-info-k">{language === 'ar' ? 'البريد الإلكتروني :' : (language === 'en' ? 'Official Email:' : 'Courriel officiel :')}</span>
              <span className="atr-legal-info-v"><a href="mailto:contact@atr-tunisie.org">contact@atr-tunisie.org</a></span>
            </div>
            <div className="atr-legal-info-row">
              <span className="atr-legal-info-k">{language === 'ar' ? 'مدير النشر :' : (language === 'en' ? 'Publishing Director:' : 'Direction de la publication :')}</span>
              <span className="atr-legal-info-v">{language === 'ar' ? 'رئيس الجمعية التونسية للطرقات' : (language === 'en' ? 'The President of the Tunisian Road Association' : 'Le Président de l’Association Tunisienne des Routes')}</span>
            </div>
          </div>
        </article>

        {/* SECTION 2: STATUT & MISSION */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">📜</div>
            <h2>
              {language === 'ar' 
                ? '2. النظام القانوني والمهام المؤسساتية' 
                : (language === 'en' ? '2. Legal Status & Institutional Mission' : '2. Statut juridique & Mission institutionnelle')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تأسست الجمعية التونسية للطرقات وفق مقتضيات المرسوم عدد 88 لسنة 2011 المؤرخ في 24 سبتمبر 2011 المتعلق بتنظيم الجمعيات في الجمهورية التونسية. وهي تجمع علمي غير ربحي يهدف إلى :'
              : (language === 'en'
                ? 'The Tunisian Road Association was formed under Decree-Law No. 2011-88 of September 24, 2011 on associations in Tunisia. It is a non-profit scientific and professional body aiming to:'
                : 'L’Association Tunisienne des Routes (ATR) est régie par les dispositions du Décret-loi n° 2011-88 du 24 septembre 2011 portant organisation des associations en République Tunisienne. Association à but non lucratif et d’intérêt technique public, elle a pour vocation de :')}
          </p>
          <ul>
            <li>
              {language === 'ar'
                ? 'توحيد كفاءات وخبرات قطاع الطرقات والبنية التحتية من القطاعين العام والخاص ومؤسسات البحث العلمي.'
                : (language === 'en'
                  ? 'Bring together expertise and stakeholders from public and private sectors, academic institutions, and construction enterprises.'
                  : 'Fédérer les compétences et acteurs des secteurs public et privé, des bureaux d’études, des laboratoires et des universités autour des infrastructures routières.')}
            </li>
            <li>
              {language === 'ar'
                ? 'تعزيز المعايير الفنية للسلامة المرورية وفق مبدأ « النظام الآمن » وتطوير البنية التحتية المقاومة للتغيرات المناخية.'
                : (language === 'en'
                  ? 'Advance technical safety standards following the "Safe System" approach and build climate-resilient road infrastructure.'
                  : 'Promouvoir les meilleures pratiques de conception, de gestion d’actifs et de sécurité routière (Vision Zéro décès, Route qui pardonne).')}
            </li>
            <li>
              {language === 'ar'
                ? 'تمثيل الجمهورية التونسية بصفتها العضو الوطني الرسمي لدى الجمعية العالمية للطرق (PIARC) منذ نشأتها.'
                : (language === 'en'
                  ? 'Represent Tunisia as the official First National Member of the World Road Association (PIARC).'
                  : 'Représenter la Tunisie en tant que Premier Membre National auprès de l’Association mondiale de la Route (PIARC), fondée en 1909.')}
            </li>
          </ul>
        </article>

        {/* SECTION 3: HÉBERGEMENT & SÉCURITÉ */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🌐</div>
            <h2>
              {language === 'ar' 
                ? '3. الاستضافة الفنية وأمن المنصة' 
                : (language === 'en' ? '3. Technical Hosting & Security' : '3. Hébergement technique & Sécurité')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تتم استضافة البوابة الرسمية للجمعية التونسية للطرقات ضمن بنية تحتية سحابية مؤمنة ومطابقة لأعلى معايير السلامة الرقمية ومحمية ببروتوكولات التشفير والمراقبة المستمرة.'
              : (language === 'en'
                ? 'The official ATR portal is hosted on secure cloud infrastructure meeting high digital security standards with 24/7 monitoring.'
                : 'L’hébergement et l’infrastructure technique du portail atr-tunisie.org sont assurés au sein d’une infrastructure cloud hautement sécurisée avec surveillance continue.')}
          </p>
          <div className="atr-legal-info-list">
            <div className="atr-legal-info-row">
              <span className="atr-legal-info-k">{language === 'ar' ? 'التأمين والتشفير :' : (language === 'en' ? 'Encryption & Security:' : 'Protocole de sécurité :')}</span>
              <span className="atr-legal-info-v">HTTPS / Chiffrement SSL-TLS 256 bits avec surveillance anti-DDoS</span>
            </div>
          </div>
        </article>

        {/* SECTION 4: PROPRIÉTÉ INTELLECTUELLE */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🛡️</div>
            <h2>
              {language === 'ar' 
                ? '4. الملكية الفكرية وحقوق التأليف' 
                : (language === 'en' ? '4. Intellectual Property & Copyright' : '4. Propriété intellectuelle & Droits réservés')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تعتبر كافة مكونات هذا الموقع (النصوص، شعارات ATR، الرسوم البيانية، التقارير الفنية، الصور، الفيديوهات والتصميمات الرقمية) ملكية حصرية للجمعية التونسية للطرقات أو شركائها الرسميين (خاصة الجمعية العالمية للطرق PIARC ووزارة التجهيز والإسكان).'
              : (language === 'en'
                ? 'All components of this website (texts, ATR logos, technical reports, seminar proceedings, photographs, graphic charter, and software elements) are protected under national and international intellectual property laws.'
                : 'L’ensemble des contenus présents sur le site https://atr-tunisie.org (textes, logos, photographies, rapports techniques, actes de séminaires, infographies, vidéos et éléments graphiques) est protégé par les dispositions du Code de la propriété intellectuelle et les conventions internationales en vigueur.')}
          </p>
          <p>
            {language === 'ar'
              ? 'يُمنع منعا باتا أي نسخ أو استنساخ أو تعديل أو استخدام تجاري لأي عنصر دون موافقة كتابية صريحة ومسبقة من الهيئة المديرة للجمعية التونسية للطرقات.'
              : (language === 'en'
                ? 'Any unauthorized reproduction, modification, distribution, or commercial use, in whole or in part, without prior written approval from the ATR Executive Board, is strictly prohibited.'
                : 'Toute reproduction, représentation, diffusion, adaptation ou exploitation, totale ou partielle, de l’un quelconque de ces éléments sans autorisation écrite préalable et expresse de l’Association Tunisienne des Routes est strictement prohibée et constitue une contrefaçon susceptible d’engager la responsabilité civile et pénale de son auteur.')}
          </p>
        </article>

        {/* SECTION 5: DONNÉES PERSONNELLES */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🔒</div>
            <h2>
              {language === 'ar' 
                ? '5. حماية المعطيات الشخصية والسرية' 
                : (language === 'en' ? '5. Personal Data Protection & Privacy' : '5. Protection des données personnelles & Confidentialité')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تلتزم الجمعية التونسية للطرقات بحماية خصوصية مستعملي الموقع وفق مقتضيات القانون الأساسي عدد 63 لسنة 2004 المؤرخ في 27 جويلية 2004 المتعلق بحماية المعطيات ذات الطابع الشخصي والمعايير الدولية المعمول بها (RGPD).'
              : (language === 'en'
                ? 'The Tunisian Road Association is committed to protecting user privacy pursuant to Organic Law No. 2004-63 of July 27, 2004 regarding personal data protection, as well as international privacy standards (GDPR).'
                : 'L’Association Tunisienne des Routes s’engage à préserver la confidentialité des données personnelles collectées conformément à la Loi organique n° 2004-63 du 27 juillet 2004 portant sur la protection des données à caractère personnel en Tunisie, et dans le respect des standards internationaux (RGPD).')}
          </p>
          <p>
            {language === 'ar'
              ? 'تُستعمل البيانات المقدمة طوعا (الاسم، اللقب، البريد الإلكتروني، رقم الهاتف، والمؤسسة) حصريا لمعالجة طلبات الاتصال، وتأكيد الحضور في الأنشطة والندوات، وإدارة ملفات العضوية، ولا يتم تفويتها أو بيعها لأي جهة خارجية.'
              : (language === 'en'
                ? 'Information voluntarily provided through contact forms, membership requests, or event registration is processed exclusively for administrative management and institutional correspondence. No personal data is sold or transferred to third parties.'
                : 'Les données communiquées via les formulaires de contact, de demande d’adhésion ou d’inscription aux événements de l’ATR sont strictement réservées au traitement administratif et à la communication institutionnelle. Aucune donnée n’est cédée ou commercialisée à des tiers.')}
          </p>
          <p>
            {language === 'ar'
              ? 'يمتلك كل مستخدم حق الاطلاع على معطياته الشخصية وتحيينها أو طلب حذفها، عبر مراسلة كتابية على العنوان : '
              : (language === 'en'
                ? 'You have the right to access, rectify, or request deletion of your personal data at any time by contacting: '
                : 'Vous disposez d’un droit d’accès, de rectification et d’opposition concernant les informations vous concernant. Pour exercer ce droit, veuillez adresser votre demande par courriel à : ')}
            <a href="mailto:contact@atr-tunisie.org"><strong>contact@atr-tunisie.org</strong></a>.
          </p>
        </article>

        {/* SECTION 6: COOKIES */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🍪</div>
            <h2>
              {language === 'ar' 
                ? '6. ملفات تعريف الارتباط (Cookies)' 
                : (language === 'en' ? '6. Cookie Policy' : '6. Politique relative aux Cookies')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'يقتصر استخدام الموقع على ملفات تعريف ارتباط فنية ضرورية لتأمين جلسة التصفح وحفظ تفضيلات اللغة (العربية، الفرنسية، الإنجليزية). لا يحتوي الموقع على ملفات تتبع إعلانية أو تجارية متطفلة.'
              : (language === 'en'
                ? 'This portal utilizes strictly necessary technical cookies to ensure smooth browsing security and memorize language preferences (Arabic, French, English). No intrusive advertising or profiling trackers are deployed.'
                : 'Le site atr-tunisie.org utilise exclusivement des cookies techniques et de session strictement indispensables au fonctionnement optimal de la plateforme (sécurisation de la navigation, mémorisation du choix de langue). Aucun cookie publicitaire ou traceur de ciblage commercial n’est implanté.')}
          </p>
        </article>

        {/* SECTION 7: RESPONSABILITÉ & LIENS */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🔗</div>
            <h2>
              {language === 'ar' 
                ? '7. حدود المسؤولية والروابط الخارجية' 
                : (language === 'en' ? '7. Limitation of Liability & External Links' : '7. Limites de responsabilité & Liens hypertextes')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تبذل الجمعية أقصى العناية لضمان دقة وتحديث كافة المعطيات الفنية والأخبار الصادرة. غير أنها لا تتحمل المسؤولية عن أي أخطاء أو انقطاع غير متوقع في الخدمة أو عن محتوى المواقع الخارجية المرتبطة (مثل موقع PIARC أو موقع وزارة التجهيز والإسكان).'
              : (language === 'en'
                ? 'While ATR endeavors to guarantee accuracy and timeliness of all published information, it cannot be held liable for inadvertent inaccuracies, technical interruptions, or the contents of linked third-party websites (such as PIARC or the Ministry of Equipment).'
                : 'L’ATR s’efforce de vérifier l’exactitude des informations scientifiques, techniques et institutionnelles diffusées sur son portail. Toutefois, elle ne saurait être tenue responsable d’éventuelles inexactitudes, omissions ou interruptions de service, ni du contenu des sites tiers accessibles par des liens hypertextes.')}
          </p>
        </article>

        {/* SECTION 8: DROIT APPLICABLE */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">⚖️</div>
            <h2>
              {language === 'ar' 
                ? '8. القانون المنطبق والاختصاص القضائي' 
                : (language === 'en' ? '8. Governing Law & Jurisdiction' : '8. Droit applicable & Juridiction compétente')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'يخضع هذا الإشعار القانوني وموقع الجمعية للقوانين الجاري بها العمل في الجمهورية التونسية. وتختص محاكم تونس العاصمة بالنظر في أي نزاع قد ينشأ عن استخدام هذا الموقع.'
              : (language === 'en'
                ? 'This legal notice and use of this website are governed by the laws of the Republic of Tunisia. Any disputes relating thereto shall be submitted to the exclusive jurisdiction of the competent courts of Tunis.'
                : 'Les présentes mentions légales sont soumises à la législation de la République Tunisienne. En cas de litige relatif à l’interprétation ou à l’exécution des présentes, et à défaut de règlement amiable, compétence expresse et exclusive est attribuée aux juridictions compétentes de Tunis.')}
          </p>
        </article>

        {/* BOTTOM CTA CARD */}
        <aside className="atr-legal-cta-card">
          <div className="atr-legal-cta-text">
            <h3>
              {language === 'ar' 
                ? 'هل لديكم استفسار إداري أو فني ؟' 
                : (language === 'en' ? 'Have a legal or administrative question?' : 'Une question juridique ou administrative ?')}
            </h3>
            <p>
              {language === 'ar'
                ? 'الكتابة العامة للجمعية التونسية للطرقات على ذمتكم للإجابة على جميع الاستفسارات وطلبات الانخراط والشراكة.'
                : (language === 'en'
                  ? 'The ATR General Secretariat is at your disposal for any inquiries, membership details, and institutional partnerships.'
                  : 'Le Secrétariat Général de l’Association Tunisienne des Routes reste à votre disposition pour toute précision.')}
            </p>
          </div>
          <div className="atr-legal-cta-actions">
            <Link href="/contact" className="atr-legal-btn-primary">
              <span aria-hidden="true">✉️</span>
              {language === 'ar' ? 'الاتصال بالكتابة العامة' : (language === 'en' ? 'Contact Secretariat' : 'Contacter le Secrétariat')}
            </Link>
            <Link href="/politique-confidentialite" className="atr-legal-btn-secondary">
              {language === 'ar' ? 'سياسة الخصوصية' : (language === 'en' ? 'Privacy Policy' : 'Politique de confidentialité')}
            </Link>
            <Link href="/plan-du-site" className="atr-legal-btn-secondary">
              {language === 'ar' ? 'مخطط الموقع' : (language === 'en' ? 'Sitemap' : 'Plan du site')}
            </Link>
          </div>
        </aside>

      </div>
    </main>
  );
}
