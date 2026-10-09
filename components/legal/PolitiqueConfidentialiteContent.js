'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function PolitiqueConfidentialiteContent() {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  useEffect(() => {
    const pageTitle = language === 'ar' 
      ? 'سياسة الخصوصية' 
      : (language === 'en' ? 'Privacy Policy' : 'Politique de confidentialité');
    document.title = `${pageTitle} | ATR - Association Tunisienne des Routes`;
  }, [language]);

  return (
    <main className="atr-legal-page" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="auto-container">
        
        {/* HEADER BOX */}
        <header className="atr-legal-header-box">
          <div className="atr-legal-badge-top">
            <span aria-hidden="true">🛡️</span>
            {language === 'ar' 
              ? 'حماية المعطيات الشخصية والخصوصية' 
              : (language === 'en' ? 'Data Protection & Privacy Policy' : 'Protection des Données & Vie Privée')}
          </div>
          <h1>
            {language === 'ar' 
              ? 'سياسة الخصوصية وحماية المعطيات الشخصية' 
              : (language === 'en' ? 'Privacy Policy & Personal Data Protection' : 'Politique de Confidentialité & Protection des Données Personnelles')}
          </h1>
          <p className="atr-legal-lead">
            {language === 'ar'
              ? 'التزام الجمعية التونسية للطرقات (ATR) بالشفافية والأمان في معالجة المعطيات ذات الطابع الشخصي طبقا للتشريع التونسي والمعايير الدولية.'
              : (language === 'en'
                ? 'Commitment of the Tunisian Road Association (ATR) to transparency, security, and compliance in personal data processing in accordance with Tunisian law and international standards.'
                : 'Engagement de l’Association Tunisienne des Routes (ATR) en matière de transparence, de sécurité et de conformité du traitement des données à caractère personnel.')}
          </p>
          <div className="atr-legal-meta">
            <span>📅 {language === 'ar' ? 'آخر تحيين : أكتوبر 2026' : (language === 'en' ? 'Last updated: October 2026' : 'Dernière mise à jour : Octobre 2026')}</span>
            <span>•</span>
            <span>⚖️ {language === 'ar' ? 'القانون الأساسي عدد 63 لسنة 2004 ومعايير RGPD' : (language === 'en' ? 'Organic Law No. 2004-63 & GDPR Standards' : 'Loi n° 2004-63 & Standards RGPD')}</span>
          </div>
        </header>

        {/* SUMMARY CARD */}
        <section className="atr-legal-summary-card" aria-label="Engagements de confidentialité">
          <div className="atr-legal-summary-item">
            <span className="atr-legal-summary-label">
              {language === 'ar' ? 'المسؤول عن المعالجة' : (language === 'en' ? 'Data Controller' : 'Responsable du Traitement')}
            </span>
            <span className="atr-legal-summary-val">
              {language === 'ar' ? 'الجمعية التونسية للطرقات (ATR)' : 'Association Tunisienne des Routes (ATR)'}
            </span>
          </div>

          <div className="atr-legal-summary-item">
            <span className="atr-legal-summary-label">
              {language === 'ar' ? 'المرجعية القانونية' : (language === 'en' ? 'Legal Framework' : 'Cadre Réglementaire')}
            </span>
            <span className="atr-legal-summary-val">
              {language === 'ar' ? 'قانون 2004-63 / RGPD' : 'Loi n° 2004-63 / RGPD'}
            </span>
          </div>

          <div className="atr-legal-summary-item">
            <span className="atr-legal-summary-label">
              {language === 'ar' ? 'استخدام البيانات' : (language === 'en' ? 'Data Usage' : 'Usage des Données')}
            </span>
            <span className="atr-legal-summary-val">
              {language === 'ar' ? 'حصري لأنشطة ATR (بدون تفويت)' : 'Strictement interne (Zéro revente)'}
            </span>
          </div>

          <div className="atr-legal-summary-item">
            <span className="atr-legal-summary-label">
              {language === 'ar' ? 'المسؤول عن حماية البيانات' : (language === 'en' ? 'DPO Contact' : 'Délégué / Référent DPO')}
            </span>
            <span className="atr-legal-summary-val">
              contact@atr-tunisie.org
            </span>
          </div>
        </section>

        {/* SECTION 1: CHAMP D'APPLICATION */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">📋</div>
            <h2>
              {language === 'ar' 
                ? '1. نطاق التطبيق والالتزام العام' 
                : (language === 'en' ? '1. Scope of Application & Commitment' : '1. Champ d’application & Engagement général')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تنطبق هذه السياسة على كافة الخدمات الرقمية والاستمارات التفاعلية المتاحة عبر البوابة الرسمية للجمعية التونسية للطرقات (https://atr-tunisie.org)، بما في ذلك استمارات التواصل، وتأكيد الحضور في التظاهرات العلمية، وطلبات الانخراط ومتابعة منشورات الجمعية.'
              : (language === 'en'
                ? 'This Privacy Policy applies to all digital services and interactive forms provided on the official portal of the Tunisian Road Association (https://atr-tunisie.org), including contact forms, event attendance confirmations, membership requests, and technical publications.'
                : 'La présente politique s’applique à l’ensemble des services et formulaires interactifs proposés sur le portail officiel de l’Association Tunisienne des Routes (https://atr-tunisie.org), incluant les formulaires de prise de contact, de confirmation de présence aux séminaires et journées techniques, de demande d’adhésion et de consultation des publications.')}
          </p>
          <p>
            {language === 'ar'
              ? 'تلتزم الجمعية التونسية للطرقات بحماية كرامة وحرمة المعطيات الشخصية لكل زائر أو منخرط أو شريك، وضمان معالجتها بنزاهة وشفافية وطبقاً للأحكام التشريعية المعمول بها في الجمهورية التونسية.'
              : (language === 'en'
                ? 'ATR is firmly dedicated to safeguarding the confidentiality and integrity of all user data, ensuring ethical, transparent processing in full compliance with the laws of the Republic of Tunisia.'
                : 'L’ATR s’engage à traiter les données personnelles avec la plus stricte loyauté, dans la transparence et dans le respect absolu de la vie privée de ses membres, participants et visiteurs.')}
          </p>
        </article>

        {/* SECTION 2: DONNÉES COLLECTÉES */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">📂</div>
            <h2>
              {language === 'ar' 
                ? '2. طبيعة المعطيات الشخصية المجمعة' 
                : (language === 'en' ? '2. Categories of Collected Personal Data' : '2. Données à caractère personnel collectées')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تقتصر الجمعية على جمع المعطيات الضرورية حصرياً لتحقيق أغراضها المؤسساتية والفنية، وتشمل :'
              : (language === 'en'
                ? 'ATR limits collection strictly to personal information necessary for its statutory and professional purposes, including:'
                : 'L’ATR veille au principe de minimisation en ne collectant que les données strictement indispensables aux finalités poursuivies :')}
          </p>
          <ul>
            <li>
              <strong>{language === 'ar' ? 'استمارات الاتصال والاستفسار :' : (language === 'en' ? 'Contact & Inquiry Forms:' : 'Formulaires de contact :')}</strong>{' '}
              {language === 'ar' 
                ? 'الاسم، اللقب، عنوان البريد الإلكتروني، رقم الهاتف، المؤسسة أو جهة العمل، ونص الرسالة.' 
                : (language === 'en' 
                  ? 'Full name, professional email address, phone number, organization or affiliation, and message subject.' 
                  : 'Nom, prénom, adresse e-mail professionnelle, numéro de téléphone, organisme ou entreprise d’appartenance, contenu du message.')}
            </li>
            <li>
              <strong>{language === 'ar' ? 'التسجيل وتأكيد الحضور في الفعاليات والندوات :' : (language === 'en' ? 'Event & Seminar Registration:' : 'Inscriptions aux événements & séminaires :')}</strong>{' '}
              {language === 'ar' 
                ? 'الاسم واللقب، الصفة المهنية (مهندس، خبير، جامعي، مسير)، المؤسسة، وتفضيلات المشاركة.' 
                : (language === 'en' 
                  ? 'Full name, professional designation, institution, registration category, and attendance preferences.' 
                  : 'Nom, prénom, titre ou fonction professionnelle, établissement ou société, choix de session ou de journée technique.')}
            </li>
            <li>
              <strong>{language === 'ar' ? 'طلبات العضوية والانخراط في ATR :' : (language === 'en' ? 'Membership Inquiries:' : 'Demandes d’adhésion :')}</strong>{' '}
              {language === 'ar' 
                ? 'المعلومات المهنية التفصيلية، مجال الاختصاص (طرقات، جسور، سلامة مرورية، جيوتقنيك)، والعنوان المهني.' 
                : (language === 'en' 
                  ? 'Professional credentials, technical domain (pavements, bridges, road safety, geotechnics), and institutional affiliation.' 
                  : 'Parcours professionnel, spécialité technique (chaussées, ouvrages d’art, sécurité routière, géotechnique), coordonnées administratives.')}
            </li>
            <li>
              <strong>{language === 'ar' ? 'بيانات التصفح التقنية :' : (language === 'en' ? 'Technical Browsing Data:' : 'Données techniques de connexion :')}</strong>{' '}
              {language === 'ar' 
                ? 'عنوان IP مشفر لأغراض الحماية، تاريخ ووقت الاتصال، والمتصفح المستعمل دون أي ربط بمعرفات إشهارية خارجية.' 
                : (language === 'en' 
                  ? 'Anonymized IP address, server connection logs for security monitoring, browser type, and language preference.' 
                  : 'Adresse IP anonymisée, horodatage de connexion, journaux de sécurité serveur et préférence linguistique choisie.')}
            </li>
          </ul>
        </article>

        {/* SECTION 3: FINALITÉS & BASES LÉGALES */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🎯</div>
            <h2>
              {language === 'ar' 
                ? '3. الأهداف والمستند القانوني للمعالجة' 
                : (language === 'en' ? '3. Purposes & Legal Bases for Processing' : '3. Finalités & Bases légales des traitements')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تتم معالجة معطياتكم الشخصية لأهداف محددة ومشروعة مرتبطة حصراً بمهام الجمعية :'
              : (language === 'en'
                ? 'Your personal data is processed solely for specified and lawful purposes tied to ATR’s institutional activities:'
                : 'Les traitements opérés par l’Association Tunisienne des Routes répondent à des finalités explicites et légitimes :')}
          </p>
          <div className="atr-legal-info-list">
            <div className="atr-legal-info-row">
              <span className="atr-legal-info-k">{language === 'ar' ? 'إدارة التظاهرات :' : (language === 'en' ? 'Event Management:' : 'Gestion des événements :')}</span>
              <span className="atr-legal-info-v">
                {language === 'ar' 
                  ? 'تنظيم الجلسات العامة، المؤتمرات الدولية مع PIARC والندوات الفنية وتأكيد المشاركات.' 
                  : (language === 'en' 
                    ? 'Organizing General Assemblies, technical conferences with PIARC, participant badges, and logistic coordination.' 
                    : 'Organisation logistique des séminaires, congrès avec PIARC, journées techniques et édition des attestations de présence.')}
              </span>
            </div>
            <div className="atr-legal-info-row">
              <span className="atr-legal-info-k">{language === 'ar' ? 'التواصل المؤسساتي :' : (language === 'en' ? 'Institutional Dialogue:' : 'Relation membres :')}</span>
              <span className="atr-legal-info-v">
                {language === 'ar' 
                  ? 'الرد على الاستفسارات الفنية وإرسال مستجدات ومخرجات اللجان الوطنية الفنية للجمعية.' 
                  : (language === 'en' 
                    ? 'Responding to professional queries and distributing technical bulletins, conference proceedings, and committee updates.' 
                    : 'Traitement des demandes d’information, diffusion des actes de conférences, avis techniques et communications officielles.')}
              </span>
            </div>
            <div className="atr-legal-info-row">
              <span className="atr-legal-info-k">{language === 'ar' ? 'الأساس القانوني :' : (language === 'en' ? 'Legal Basis:' : 'Base légale :')}</span>
              <span className="atr-legal-info-v">
                {language === 'ar' 
                  ? 'الموافقة الصريحة للمستخدم عند إرسال الاستمارة، والمصلحة المشروعة للجمعية في تأمين علاقاتها المهنية.' 
                  : (language === 'en' 
                    ? 'Explicit consent upon form submission, and legitimate interest in administrative relations with association stakeholders.' 
                    : 'Consentement explicite de l’intéressé lors de la soumission des formulaires et intérêt légitime lié au fonctionnement associatif.')}
              </span>
            </div>
          </div>
        </article>

        {/* SECTION 4: DESTINATAIRES & NON-CESSION */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🤝</div>
            <h2>
              {language === 'ar' 
                ? '4. الجهات المخولة بالاطلاع وعدم التفويت في المعطيات' 
                : (language === 'en' ? '4. Data Recipients & Non-Commercialization' : '4. Destinataires & Non-commercialisation')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تعتبر المعطيات المجمعة سرية للغاية ولا يتاح الوصول إليها إلا لأعضاء الكتابة العامة والهيئة المديرة للجمعية المكلفين بإدارة الملف المعني.'
              : (language === 'en'
                ? 'All gathered data is held in strict confidence, accessible only to authorized members of the ATR General Secretariat and Executive Board responsible for administrative handling.'
                : 'Les données collectées sont strictement réservées à l’usage interne de l’Association Tunisienne des Routes. Seuls les membres habilités du Secrétariat Général et de la Direction y ont accès dans le cadre strict de leurs missions.')}
          </p>
          <p>
            <strong>
              {language === 'ar'
                ? 'تلتزم الجمعية التونسية للطرقات التزاما قاطعا بعدم بيع أو تأجير أو تفويت أو مشاركة أي معطى شخصي مع أي مؤسسة إعلانية أو تجارية أو جهة غير مرخص لها تحت أي ظرف كان.'
                : (language === 'en'
                  ? 'ATR formally pledges that no personal information will ever be sold, rented, leased, or disclosed to advertising brokers or unauthorized third parties under any circumstances.'
                  : 'L’Association Tunisienne des Routes s’interdit formellement de commercialiser, céder, louer ou transférer vos données personnelles à des tiers ou courtiers en données à des fins publicitaires ou spéculatives.')}
            </strong>
          </p>
        </article>

        {/* SECTION 5: DURÉE DE CONSERVATION */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">⏳</div>
            <h2>
              {language === 'ar' 
                ? '5. مدة الاحتفاظ بالمعطيات' 
                : (language === 'en' ? '5. Retention Periods' : '5. Durée de conservation des données')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'يتم الاحتفاظ بالمعطيات الشخصية للمدة الضرورية فقط لتحقيق الغاية التي جُمعت من أجلها :'
              : (language === 'en'
                ? 'Personal information is retained only for the duration necessary to fulfill the purposes for which it was gathered:'
                : 'Les données personnelles sont conservées pour une durée strictement proportionnée aux finalités opérationnelles et réglementaires :')}
          </p>
          <ul>
            <li>
              <strong>{language === 'ar' ? 'بيانات الاستفسارات والمراسلات :' : (language === 'en' ? 'Correspondence & Inquiries:' : 'Demandes de contact :')}</strong>{' '}
              {language === 'ar' 
                ? 'تُحفظ طيلة فترة معالجة الطلب، ولمدة أقصاها 3 سنوات بعد آخر تواصل مهني.' 
                : (language === 'en' 
                  ? 'Maintained during processing and archived up to 3 years following the last correspondence.' 
                  : 'Conservées pendant le traitement de la demande et archivées au maximum 3 ans après le dernier contact.')}
            </li>
            <li>
              <strong>{language === 'ar' ? 'سجلات الندوات والتظاهرات :' : (language === 'en' ? 'Events & Conference Records:' : 'Inscriptions aux événements :')}</strong>{' '}
              {language === 'ar' 
                ? 'تُحفظ لإصدار شهادات الحضور وإعداد التقرير الأدبي، ثم تُحفظ في الأرشيف المؤسساتي للجمعية.' 
                : (language === 'en' 
                  ? 'Retained until the logistical close of the event, attendance certificates issuance, and institutional reporting.' 
                  : 'Conservées jusqu’à la clôture administrative du séminaire et la délivrance des attestations techniques.')}
            </li>
            <li>
              <strong>{language === 'ar' ? 'ملفات المنخرطين والأعضاء :' : (language === 'en' ? 'Membership Records:' : 'Membres et adhérents :')}</strong>{' '}
              {language === 'ar' 
                ? 'تُحفظ طيلة فترة سريان العضوية والاشتراك السنوي وطبقاً للالتزامات القانونية والمحاسبية.' 
                : (language === 'en' 
                  ? 'Retained throughout the membership term and in compliance with statutory administrative requirements.' 
                  : 'Conservées pendant toute la durée de l’adhésion active et archivées selon les obligations associatives légales.')}
            </li>
          </ul>
        </article>

        {/* SECTION 6: SÉCURITÉ */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🔐</div>
            <h2>
              {language === 'ar' 
                ? '6. أمن وسلامة البنية التحتية للموقع' 
                : (language === 'en' ? '6. Technical Security & Safeguards' : '6. Sécurité technique & Confidentialité')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تعتمد الجمعية تدابير فنية وتنظيمية متقدمة لضمان حماية المعطيات من الضياع أو التغيير أو الدخول غير المصرح به :'
              : (language === 'en'
                ? 'ATR deploys advanced organizational and technical security measures to shield information against data loss, unauthorized access, or cyber alteration:'
                : 'L’Association Tunisienne des Routes met en œuvre les mesures techniques et organisationnelles requises pour prémunir les données contre toute intrusion non autorisée, altération ou perte :')}
          </p>
          <ul>
            <li>
              {language === 'ar'
                ? 'تشفير كامل لكافة الاتصالات والبيانات عبر بروتوكول HTTPS بشهادة أمان SSL/TLS موثقة.'
                : (language === 'en'
                  ? 'End-to-end transport layer encryption across all pages and form submissions via HTTPS / SSL-TLS.'
                  : 'Chiffrement systématique des flux de communication via le protocole sécurisé HTTPS / certificat SSL-TLS.')}
            </li>
            <li>
              {language === 'ar'
                ? 'استضافة على خوادم مخصصة ذات حماية متطورة من هجمات حجب الخدمة (anti-DDoS).'
                : (language === 'en'
                  ? 'Enterprise hosting infrastructure featuring automated intrusion detection and anti-DDoS firewalls.'
                  : 'Hébergement sur des serveurs sécurisés dotés de pare-feu applicatifs et de systèmes anti-DDoS.')}
            </li>
            <li>
              {language === 'ar'
                ? 'حصر الصلاحيات الإدارية في مسؤولي الجمعية المخولين مع استعمال كلمات عبور مشددة.'
                : (language === 'en'
                  ? 'Restricted administrative access granted exclusively to credentialed ATR officers.'
                  : 'Contrôle strict des accès aux consoles d’administration avec authentification robuste.')}
            </li>
          </ul>
        </article>

        {/* SECTION 7: VOS DROITS */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">⚖️</div>
            <h2>
              {language === 'ar' 
                ? '7. حقوقكم وكيفية ممارستها' 
                : (language === 'en' ? '7. Your Rights & How to Exercise Them' : '7. Vos droits & Modalités d’exercice')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'طبقاً للقانون الأساسي عدد 63 لسنة 2004 والمعايير الدولية لحماية المعطيات، يتمتع كل شخص بالحقوق التالية :'
              : (language === 'en'
                ? 'In accordance with Organic Law No. 2004-63 and international data protection principles, you are entitled to the following rights:'
                : 'Conformément à la Loi organique n° 2004-63 et aux standards de protection des données, vous disposez des droits suivants concernant vos données à caractère personnel :')}
          </p>
          <ul>
            <li>
              <strong>{language === 'ar' ? 'حق الاطلاع والوصول :' : (language === 'en' ? 'Right of Access:' : 'Droit d’accès :')}</strong>{' '}
              {language === 'ar' ? 'الحصول على نسخة من المعطيات المسجلة لديكم.' : (language === 'en' ? 'Obtain a copy of the personal data held about you.' : 'Obtenir la confirmation et la copie des données enregistrées vous concernant.')}
            </li>
            <li>
              <strong>{language === 'ar' ? 'حق التحيين والتصحيح :' : (language === 'en' ? 'Right to Rectification:' : 'Droit de rectification :')}</strong>{' '}
              {language === 'ar' ? 'تصحيح أي معطى غير دقيق أو استكمال البيانات الناقصة.' : (language === 'en' ? 'Request updates or corrections to any incomplete or inaccurate records.' : 'Demander la rectification des données inexactes ou incomplètes.')}
            </li>
            <li>
              <strong>{language === 'ar' ? 'حق المسح والإلغاء :' : (language === 'en' ? 'Right to Erasure:' : 'Droit à l’effacement :')}</strong>{' '}
              {language === 'ar' ? 'طلب حذف المعطيات الشخصية متى انتفت الحاجة إليها أو عند سحب الموافقة.' : (language === 'en' ? 'Request the deletion of personal data when no longer required.' : 'Demander la suppression de vos données (« droit à l’oubli »).')}
            </li>
            <li>
              <strong>{language === 'ar' ? 'حق الاعتراض :' : (language === 'en' ? 'Right to Object:' : 'Droit d’opposition :')}</strong>{' '}
              {language === 'ar' ? 'الاعتراض على استلام أي مراسلات إعلامية أو إخبارية من الجمعية في أي وقت.' : (language === 'en' ? 'Opt out of any institutional circulars or communications at any time.' : 'Vous opposer à tout moment à la réception des communications institutionnelles.')}
            </li>
          </ul>
          <p>
            {language === 'ar'
              ? 'لممارسة أي من هذه الحقوق، يرجى توجيه طلب كتابي يتضمن هويتكم إلى البريد الإلكتروني المخصص : '
              : (language === 'en'
                ? 'To exercise any of these statutory rights, please send a written request stating your identity to: '
                : 'Pour exercer l’un de ces droits, adressez simplement votre demande par courrier électronique à : ')}
            <a href="mailto:contact@atr-tunisie.org"><strong>contact@atr-tunisie.org</strong></a>.
          </p>
        </article>

        {/* SECTION 8: COOKIES */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🍪</div>
            <h2>
              {language === 'ar' 
                ? '8. ملفات تعريف الارتباط (Cookies)' 
                : (language === 'en' ? '8. Cookie Management' : '8. Gestion des Cookies & Traceurs')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'يستخدم موقعنا ملفات تعريف ارتباط فنية حصرياً تضمن استمرارية التصفح وتذكر اللغة المختارة (العربية، الفرنسية، الإنجليزية). نحن لا نستخدم أي ملفات تتبع تجارية أو إعلانية تابعة لأطراف خارجية.'
              : (language === 'en'
                ? 'Our portal employs only functional technical cookies required for session stability and language selection (Arabic, French, English). No third-party behavioral advertising or tracking cookies are used.'
                : 'Le site utilise exclusivement des cookies techniques nécessaires à la navigation et à la sauvegarde de la langue d’affichage. Aucun traceur publicitaire ou outil de monétisation de navigation n’est utilisé.')}
          </p>
        </article>

        {/* SECTION 9: AUTORITÉ DE CONTRÔLE */}
        <article className="atr-legal-card">
          <div className="atr-legal-card-header">
            <div className="atr-legal-card-icon" aria-hidden="true">🏛️</div>
            <h2>
              {language === 'ar' 
                ? '9. الهيئة الوطنية لحماية المعطيات الشخصية (INPDP)' 
                : (language === 'en' ? '9. Supervisory Authority (INPDP)' : '9. Autorité de contrôle (INPDP)')}
            </h2>
          </div>
          <p>
            {language === 'ar'
              ? 'تخضع معالجة المعطيات الشخصية في تونس لرقابة الهيئة الوطنية لحماية المعطيات الشخصية (INPDP). يحق للمستخدم التوجه إلى الهيئة في حال وجود أي نزاع لم يتم تسويته ودياً.'
              : (language === 'en'
                ? 'Personal data processing in Tunisia is supervised by the National Authority for Personal Data Protection (INPDP). Users have the right to lodge a complaint with INPDP if any concern is not satisfactorily resolved.'
                : 'En Tunisie, l’autorité indépendante de contrôle est l’Instance Nationale de Protection des Données Personnelles (INPDP). En cas de désaccord persistant non résolu à l’amiable, l’utilisateur conserve la faculté de saisir l’INPDP.')}
          </p>
        </article>

        {/* BOTTOM CTA CARD */}
        <aside className="atr-legal-cta-card">
          <div className="atr-legal-cta-text">
            <h3>
              {language === 'ar' 
                ? 'استفسار حول معالجة معطياتكم الشخصية ؟' 
                : (language === 'en' ? 'Questions regarding your personal data?' : 'Une question sur vos données personnelles ?')}
            </h3>
            <p>
              {language === 'ar'
                ? 'فريق الكتابة العامة للجمعية التونسية للطرقات مستعد لموافاتكم بكافة التوضيحات اللازمة.'
                : (language === 'en'
                  ? 'The ATR administrative team is available to assist you with any privacy questions or requests.'
                  : 'Le Secrétariat Général de l’Association Tunisienne des Routes répond à toutes vos demandes de confidentialité.')}
            </p>
          </div>
          <div className="atr-legal-cta-actions">
            <Link href="/contact" className="atr-legal-btn-primary">
              <span aria-hidden="true">✉️</span>
              {language === 'ar' ? 'الاتصال بالجمعية' : (language === 'en' ? 'Contact Secretariat' : 'Contacter l’ATR')}
            </Link>
            <Link href="/mentions-legales" className="atr-legal-btn-secondary">
              {language === 'ar' ? 'الإشعار القانوني' : (language === 'en' ? 'Legal Notice' : 'Mentions légales')}
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
