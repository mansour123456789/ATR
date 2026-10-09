'use client'
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';

const fallbackEvents = [
  {
    id: 5,
    title: 'ASSEMBLÉE GÉNÉRALE – ASSOCIATION TUNISIENNE DES ROUTES (ATR)',
    description: 'L’Association Tunisienne des Routes (ATR) a le plaisir de vous convier à son Assemblée Générale. Votre présence est importante pour la vie de l’ATR et pour continuer à développer ensemble nos actions au service du secteur routier en Tunisie. Nous comptons sur votre présence !',
    location: 'Startup Village, Tunis',
    date: '2026-10-24T09:00:00',
    endDate: '2026-10-24T13:00:00',
    type: 'assembly',
    href: '/events',
  },
  {
    id: 1,
    title: "Concevoir et gérer les routes selon l'approche du système sûr",
    description: 'L’Association Tunisienne des Routes (ATR), en collaboration avec l’Association mondiale de la Route (PIARC), organise un grand séminaire international sous le thème : « La sécurité routière, la conception géométrique et l\'approche système sûr ».',
    location: 'Tunis, Tunisie',
    date: '2026-12-09T09:00:00',
    endDate: '2026-12-11T18:00:00',
    type: 'seminar',
    href: '/events/seminaire-piarc-2026',
  },
];

function classifyEvent(title = '') {
  const value = (title || '').toLowerCase();
  if (value.includes('assembl') || value.includes('عامة') || value.includes('general assembly')) return 'assembly';
  if (value.includes('atelier') || value.includes('journée technique') || value.includes('formation') || value.includes('workshop') || value.includes('ورشة')) return 'workshop';
  if (value.includes('séminaire') || value.includes('congrès') || value.includes('seminar') || value.includes('ندوة') || value.includes('système sûr') || value.includes('safe system') || value.includes('النظام الآمن') || value.includes('piarc')) return 'seminar';
  return 'committee';
}

function normalizeEvent(event) {
  let href = event.href;
  const idStr = String(event.id);
  if (!href) {
    if (idStr === '1' || idStr === 'seed-1') href = '/events/seminaire-piarc-2026';
    else if (idStr === '5' || idStr === 'seed-5') href = '/events';
    else if (idStr === '3' || idStr === 'seed-3') href = '/publications/securite-routiere-hss-chantiers';
    else if (idStr === '4' || idStr === 'seed-4') href = '/publications/glissements-de-terrain-resilience-infrastructures';
    else href = '/events';
  }
  return {
    ...event,
    date: event.date,
    endDate: event.endDate || event.date,
    type: event.type || classifyEvent(event.title),
    href,
  };
}

function getLocalizedCalendarEvent(event, t) {
  if (!event) return event;
  const idStr = String(event.id);
  const titleLower = (event.title || '').toLowerCase();

  if (idStr === '5' || idStr === 'seed-5' || titleLower.includes('assembl') || titleLower.includes('عامة')) {
    return {
      ...event,
      title: t('events.ev5_title', event.title),
      description: t('events.ev5_desc', event.description),
      location: t('events.ev5_location', event.location),
    };
  }
  if (idStr === '1' || idStr === 'seed-1' || titleLower.includes('système sûr') || titleLower.includes('safe system') || titleLower.includes('piarc') || (event.title && event.title.includes('النظام الآمن'))) {
    return {
      ...event,
      title: t('events.ev1_title', event.title),
      description: t('events.ev1_desc', event.description),
      location: t('events.ev1_location', event.location),
    };
  }
  if (idStr === '4' || idStr === 'seed-4' || titleLower.includes('glissement')) {
    return {
      ...event,
      title: t('events.ev4_title', event.title),
      description: t('events.ev4_desc', event.description),
      location: t('events.ev4_location', event.location),
    };
  }
  if (idStr === '3' || idStr === 'seed-3' || titleLower.includes('hss')) {
    return {
      ...event,
      title: t('events.ev3_title', event.title),
      description: t('events.ev3_desc', event.description),
      location: t('events.ev3_location', event.location),
    };
  }
  return event;
}

function dateKey(date) {
  const value = new Date(date);
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
}

function downloadCalendar(event) {
  const start = new Date(event.date).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const end = new Date(event.endDate || event.date).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const content = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ATR//Agenda//FR', 'BEGIN:VEVENT', `UID:${event.id}@atr-tunisie.org`, `DTSTAMP:${start}`, `DTSTART:${start}`, `DTEND:${end}`, `SUMMARY:${event.title}`, `LOCATION:${event.location}`, `DESCRIPTION:${event.description}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

export default function CalendrierPage() {
  const { t, language } = useLanguage();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [events, setEvents] = useState(fallbackEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeType, setActiveType] = useState('all');
  const [view, setView] = useState('calendar');
  const [loading, setLoading] = useState(true);

  const dateLocale = language === 'ar' ? 'ar-TN' : (language === 'en' ? 'en-US' : 'fr-FR');

  const monthNames = [
    t('calendrier.months.0', 'Janvier'),
    t('calendrier.months.1', 'Février'),
    t('calendrier.months.2', 'Mars'),
    t('calendrier.months.3', 'Avril'),
    t('calendrier.months.4', 'Mai'),
    t('calendrier.months.5', 'Juin'),
    t('calendrier.months.6', 'Juillet'),
    t('calendrier.months.7', 'Août'),
    t('calendrier.months.8', 'Septembre'),
    t('calendrier.months.9', 'Octobre'),
    t('calendrier.months.10', 'Novembre'),
    t('calendrier.months.11', 'Décembre'),
  ];

  const weekDays = [
    t('calendrier.weekdays.0', 'Lun'),
    t('calendrier.weekdays.1', 'Mar'),
    t('calendrier.weekdays.2', 'Mer'),
    t('calendrier.weekdays.3', 'Jeu'),
    t('calendrier.weekdays.4', 'Ven'),
    t('calendrier.weekdays.5', 'Sam'),
    t('calendrier.weekdays.6', 'Dim'),
  ];

  const typeConfig = {
    committee: { label: t('calendrier.type_committee', 'Comité technique'), color: '#1B5299' },
    seminar: { label: t('calendrier.type_seminar', 'Séminaire / congrès'), color: '#C07B1B' },
    workshop: { label: t('calendrier.type_workshop', 'Atelier'), color: '#2E8B57' },
    assembly: { label: t('calendrier.type_assembly', 'Assemblée générale'), color: '#7A4E9A' },
  };

  function formatDate(date, options = {}) {
    return new Intl.DateTimeFormat(dateLocale, { day: '2-digit', month: 'long', year: 'numeric', ...options }).format(new Date(date));
  }

  function formatTime(date) {
    return new Intl.DateTimeFormat(dateLocale, { hour: '2-digit', minute: '2-digit' }).format(new Date(date));
  }

  function formatEventDates(event) {
    if (!event) return '';
    const startStr = formatDate(event.date);
    if (event.endDate && dateKey(event.endDate) !== dateKey(event.date)) {
      const endStr = formatDate(event.endDate);
      return `${startStr} – ${endStr}`;
    }
    return startStr;
  }

  useEffect(() => {
    setView(window.matchMedia('(max-width: 767px)').matches ? 'list' : 'calendar');
    fetch('/api/events?active=true')
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('API unavailable')))
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          const filteredData = data.filter((item) => {
            const id = Number(item.id);
            const title = (item.title || '').toLowerCase();
            return id === 5 || id === 1 || title.includes('assembl') || title.includes('système sûr') || title.includes('piarc') || title.includes('general assembly');
          });

          const merged = fallbackEvents.map((fb) => {
            const apiItem = filteredData.find((d) => d.id === fb.id || String(d.id) === String(fb.id));
            return apiItem ? { ...fb, ...apiItem, endDate: fb.endDate || apiItem.endDate || apiItem.date, href: fb.href, type: fb.type } : fb;
          });

          setEvents(merged.map(normalizeEvent));
        } else {
          setEvents(fallbackEvents.map(normalizeEvent));
        }
      })
      .catch(() => setEvents(fallbackEvents.map(normalizeEvent)))
      .finally(() => setLoading(false));
  }, []);

  const localizedEvents = useMemo(() => {
    return events.map((event) => getLocalizedCalendarEvent(event, t));
  }, [events, t]);

  const visibleEvents = useMemo(() => activeType === 'all' ? localizedEvents : localizedEvents.filter((event) => event.type === activeType), [activeType, localizedEvents]);
  const listEvents = useMemo(() => {
    return [...visibleEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [visibleEvents]);
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const currentMonthEvents = visibleEvents.filter((event) => {
    const start = new Date(event.date);
    const end = new Date(event.endDate || event.date);
    return start <= new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59) && end >= currentDate;
  });
  const upcomingEvents = [...visibleEvents].filter((event) => new Date(event.endDate || event.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 6);

  const eventsForDay = (day) => currentMonthEvents.filter((event) => {
    const key = dateKey(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    return key >= dateKey(event.date) && key <= dateKey(event.endDate || event.date);
  });

  const changeMonth = (offset) => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  const goToday = () => setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrumb.calendar', "Calendrier des Événements")}>
      <main className="atr-calendar-page">
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-calendar-page{background:#F8FAFC;padding:75px 0 95px;color:#17233D}
          .atr-calendar-page .auto-container{max-width:1220px}
          .atr-calendar-intro{margin-bottom:32px}
          .atr-calendar-intro h1{color:#102B54;font-size:clamp(32px,4.5vw,42px);margin:8px 0 16px;font-weight:700;line-height:1.2}
          .atr-calendar-intro p{color:#334155;max-width:720px;line-height:1.72;font-size:17px}
          .atr-calendar-toolbar{display:flex;align-items:center;justify-content:space-between;gap:18px;background:#102B54;padding:22px 28px;border-radius:16px 16px 0 0}
          .atr-calendar-month{color:#FFFFFF;font-size:24px;min-width:210px;text-align:center;margin:0;font-weight:700}
          .atr-calendar-nav,.atr-calendar-views{display:flex;align-items:center;gap:10px}
          .atr-calendar-btn,.atr-calendar-tab,.atr-calendar-today{border:1px solid rgba(255,255,255,.3);background:transparent;color:#FFFFFF;border-radius:8px;padding:10px 16px;cursor:pointer;font-weight:700;font-size:14px;transition:all .25s ease}
          .atr-calendar-btn{width:42px;height:42px;padding:0;display:grid;place-items:center}
          .atr-calendar-today,.atr-calendar-tab.active{background:#C07B1B;border-color:#C07B1B}
          .atr-calendar-views{padding:14px 24px;background:#FFFFFF;border:1px solid #DFE6EE;border-top:0}
          .atr-calendar-tab{color:#1B5299;border-color:#CBD7E4}
          .atr-calendar-legend{display:flex;flex-wrap:wrap;align-items:center;gap:16px;padding:18px 24px;background:#FFFFFF;border:1px solid #DFE6EE;border-top:0}
          .atr-calendar-legend label{color:#334155;font-size:13.5px;font-weight:700}
          .atr-calendar-legend button{border:0;background:none;color:#475569;cursor:pointer;display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600}
          .atr-calendar-legend button.active{color:#102B54;font-weight:700}
          .atr-calendar-dot{width:9px;height:9px;border-radius:50%;display:inline-block}
          .atr-calendar-layout{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:24px;margin-top:24px}
          .atr-calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:#DCE4EC;border:1px solid #DCE4EC;border-radius:12px;overflow:hidden}
          .atr-calendar-weekday{background:#EEF5FB;color:#102B54;text-align:center;font-size:12.5px;font-weight:700;padding:14px 4px;text-transform:uppercase;letter-spacing:.05em}
          .atr-calendar-cell{position:relative;min-height:145px;padding:12px 10px;background:#FFFFFF}
          .atr-calendar-cell.empty{background:#F8FAFC}
          .atr-calendar-cell.past{background:#F3F5F7}
          .atr-calendar-cell.past .atr-calendar-number{color:#94A3B8}
          .atr-calendar-number{display:grid;place-items:center;width:30px;height:30px;color:#334155;font-weight:700;font-size:14px;border-radius:50%;margin-bottom:10px}
          .atr-calendar-number.today{border:2px solid #C07B1B;color:#102B54;background:rgba(192,123,27,.1)}
          .atr-calendar-event{display:flex;align-items:center;gap:6px;width:100%;border:0;background:none;text-align:left;padding:6px 4px;color:#102B54;font-size:12.5px;font-weight:700;cursor:pointer;border-radius:4px;transition:background .2s}
          .atr-calendar-event:hover{background:rgba(27,82,153,.08)}
          .atr-calendar-event strong{width:8px;height:8px;border-radius:50%;flex:none}
          .atr-calendar-event span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
          .atr-calendar-popover{position:absolute;z-index:10;left:10px;top:48px;width:255px;padding:16px;background:#FFFFFF;border:1px solid #DFE6EE;border-top:3px solid #C07B1B;border-radius:10px;box-shadow:0 12px 30px rgba(16,43,84,.18)}
          .atr-calendar-popover h4{color:#102B54;font-size:15px;line-height:1.35;margin:0 0 8px;font-weight:700}
          .atr-calendar-popover p{color:#334155;font-size:13px;line-height:1.5;margin:4px 0}
          .atr-calendar-popover a{display:inline-block;margin-top:8px;color:#1B5299;font-size:13px;font-weight:700}
          .atr-calendar-side{background:#FFFFFF;border:1px solid #DFE6EE;border-radius:16px;padding:24px;height:max-content;box-shadow:0 8px 24px rgba(16,43,84,.04)}
          .atr-calendar-side h2{color:#102B54;font-size:21px;margin:0 0 18px;font-weight:700}
          .atr-calendar-mini{border-left:3px solid #C07B1B;padding:12px 14px;margin-bottom:14px;background:#F8FAFC;border-radius:0 8px 8px 0}
          .atr-calendar-mini time{color:#C07B1B;font-size:12.5px;font-weight:700}
          .atr-calendar-mini h3{color:#102B54;font-size:15px;line-height:1.35;margin:5px 0;font-weight:700}
          .atr-calendar-mini p{color:#475569;font-size:13px;margin:0}
          .atr-calendar-type{display:inline-block;margin-top:8px;padding:4px 8px;color:#FFFFFF;border-radius:4px;font-size:11px;font-weight:700}
          .atr-calendar-list{display:grid;gap:16px}
          .atr-calendar-list-card{display:grid;grid-template-columns:125px 1fr;gap:0;background:#FFFFFF;border:1px solid #DFE6EE;border-radius:14px;overflow:hidden;box-shadow:0 8px 22px rgba(16,43,84,.05)}
          .atr-calendar-list-date{display:flex;flex-direction:column;align-items:center;justify-content:center;background:#102B54;color:#FFFFFF;padding:18px}
          .atr-calendar-list-date strong{font-size:26px;font-weight:800}
          .atr-calendar-list-date span{font-size:12.5px;font-weight:600}
          .atr-calendar-list-body{padding:20px 24px}
          .atr-calendar-list-body h3{color:#102B54;font-size:19px;margin:0 0 8px;font-weight:700}
          .atr-calendar-list-body p{color:#475569;font-size:14px;margin:4px 0;line-height:1.55}
          .atr-calendar-detail{position:fixed;inset:0;z-index:10000;background:rgba(10,27,50,.65);backdrop-filter:blur(4px);display:grid;place-items:center;padding:20px}
          .atr-calendar-detail-card{position:relative;max-width:620px;width:100%;max-height:90vh;overflow:auto;background:#FFFFFF;border-radius:18px;padding:36px;box-shadow:0 25px 60px rgba(0,0,0,.25)}
          .atr-calendar-detail-card h2{color:#102B54;margin:15px 0 12px;font-size:24px;font-weight:700}
          .atr-calendar-detail-card p{color:#334155;line-height:1.7;font-size:15px}
          .atr-calendar-close{position:absolute;right:16px;top:14px;border:0;background:none;font-size:26px;color:#64748B;cursor:pointer}
          .atr-calendar-ics{display:inline-flex;padding:12px 18px;border-radius:8px;border:0;background:#1B5299;color:#FFFFFF;font-weight:700;font-size:14px;cursor:pointer;margin-top:14px;transition:all .3s ease}
          .atr-calendar-ics:hover{background:#C07B1B}
          .atr-calendar-cta{margin-top:60px;padding:42px 48px;background:#102B54;border-radius:16px;text-align:center;color:#FFFFFF;box-shadow:0 12px 32px rgba(16,43,84,.15)}
          .atr-calendar-cta h2{margin:0 0 10px;color:#FFFFFF;font-size:clamp(22px,2.8vw,28px);font-weight:700}
          .atr-calendar-cta p{color:#E2E8F0;margin:0 0 20px;font-size:15.5px;line-height:1.65}
          .atr-calendar-cta a{display:inline-block;padding:13px 24px;background:#C07B1B;color:#FFFFFF;border-radius:10px;text-decoration:none;font-weight:700;font-size:14.5px;transition:all .3s ease}
          .atr-calendar-cta a:hover{background:#D98E28;transform:translateY(-2px)}
          @media(max-width:991px){.atr-calendar-layout{grid-template-columns:1fr}.atr-calendar-side{order:2}}
          @media(max-width:767px){.atr-calendar-page{padding:48px 0 65px}.atr-calendar-intro h1{font-size:32px}.atr-calendar-toolbar{flex-wrap:wrap;justify-content:center;padding:16px}.atr-calendar-month{order:-1;width:100%;font-size:22px}.atr-calendar-cell{min-height:82px;padding:8px 5px}.atr-calendar-weekday{font-size:10px;padding:10px 2px}.atr-calendar-number{width:34px;height:34px;margin:0 auto 5px}.atr-calendar-event{justify-content:center;padding:5px}.atr-calendar-event span{display:none}.atr-calendar-popover{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(290px,calc(100vw - 40px))}.atr-calendar-list-card{grid-template-columns:86px 1fr}.atr-calendar-detail-card{padding:25px 20px}.atr-calendar-views{justify-content:center}.atr-calendar-views .atr-calendar-tab{flex:1}.atr-calendar-legend{gap:8px 12px}}
        `}} />
        <div className="auto-container">
          <header className="atr-calendar-intro">
            <p className="section_heading_title_small">{t('calendrier.kicker', "Agenda ATR")}</p>
            <h1>{t('calendrier.title', "Calendrier des Événements")}</h1>
            <p>{t('calendrier.intro', "Retrouvez les réunions, séminaires et ateliers de l'ATR avec leurs horaires, lieux et informations pratiques.")}</p>
          </header>

          <div className="atr-calendar-toolbar">
            <div className="atr-calendar-nav">
              <button className="atr-calendar-btn" onClick={() => changeMonth(-1)} aria-label="Mois précédent">{t('calendrier.prev_month', '‹')}</button>
              <button className="atr-calendar-today" onClick={goToday}>{t('calendrier.today', "Aujourd'hui")}</button>
              <button className="atr-calendar-btn" onClick={() => changeMonth(1)} aria-label="Mois suivant">{t('calendrier.next_month', '›')}</button>
            </div>
            <h2 className="atr-calendar-month">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <div className="atr-calendar-views">
              <button className={`atr-calendar-tab ${view === 'calendar' ? 'active' : ''}`} onClick={() => setView('calendar')}>{t('calendrier.view_calendar', 'Vue Calendrier')}</button>
              <button className={`atr-calendar-tab ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>{t('calendrier.view_list', 'Vue Liste')}</button>
            </div>
          </div>

          <div className="atr-calendar-legend">
            <label>{t('calendrier.filter_label', 'Filtrer :')}</label>
            <button className={activeType === 'all' ? 'active' : ''} onClick={() => setActiveType('all')}>
              {t('calendrier.all_events', 'Tous')} ({events.length})
            </button>
            {Object.entries(typeConfig).filter(([key]) => events.some(e => e.type === key)).map(([key, config]) => (
              <button className={activeType === key ? 'active' : ''} key={key} onClick={() => setActiveType(key)}>
                <span className="atr-calendar-dot" style={{ background: config.color }} />
                {config.label}
              </button>
            ))}
          </div>

          {loading && <p style={{ color: '#68778c', marginTop: 18 }}>{t('calendrier.updating', "Actualisation de l'agenda…")}</p>}

          <div className="atr-calendar-layout">
            <section>
              {view === 'calendar' ? (
                <div className="atr-calendar-grid">
                  <>
                    {weekDays.map((day) => <div className="atr-calendar-weekday" key={day}>{day}</div>)}
                    {Array.from({ length: startOffset }).map((_, index) => <div className="atr-calendar-cell empty" key={`empty-${index}`} />)}
                    {Array.from({ length: daysInMonth }, (_, index) => {
                      const day = index + 1;
                      const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                      const dayEvents = eventsForDay(day);
                      const isPast = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                      const isToday = dateKey(cellDate) === dateKey(today);
                      return (
                        <div className={`atr-calendar-cell ${isPast ? 'past' : ''}`} key={day}>
                          <div className={`atr-calendar-number ${isToday ? 'today' : ''}`}>{day}</div>
                          {dayEvents.map((event) => (
                            <button className="atr-calendar-event" key={event.id} onClick={() => setSelectedEvent(event)}>
                              <strong style={{ background: typeConfig[event.type]?.color || '#1B5299' }} />
                              <span>{event.title}</span>
                            </button>
                          ))}
                          {dayEvents.map((event) => selectedEvent?.id === event.id ? (
                            <div className="atr-calendar-popover" key={`popover-${event.id}`}>
                              <h4>{event.title}</h4>
                              <p>{formatEventDates(event)}</p>
                              <p>{event.location}</p>
                              <Link href={event.href}>{t('calendrier.see_details', "Voir les détails →")}</Link>
                            </div>
                          ) : null)}
                        </div>
                      );
                    })}
                  </>
                </div>
              ) : (
                <div className="atr-calendar-list">
                  {listEvents.length ? listEvents.map((event) => {
                    const eventDate = new Date(event.date);
                    const eventEndDate = event.endDate ? new Date(event.endDate) : eventDate;
                    const isMultiDay = dateKey(eventEndDate) !== dateKey(eventDate);
                    const dayLabel = isMultiDay ? `${String(eventDate.getDate()).padStart(2, '0')}-${String(eventEndDate.getDate()).padStart(2, '0')}` : String(eventDate.getDate()).padStart(2, '0');
                    return (
                      <article className="atr-calendar-list-card" key={event.id}>
                        <div className="atr-calendar-list-date">
                          <strong style={{ fontSize: isMultiDay ? '21px' : '26px', letterSpacing: isMultiDay ? '-0.5px' : 'normal' }}>{dayLabel}</strong>
                          <span>{monthNames[eventDate.getMonth()]}</span>
                        </div>
                        <div className="atr-calendar-list-body">
                          <span className="atr-calendar-type" style={{ background: typeConfig[event.type]?.color || '#1B5299' }}>{typeConfig[event.type]?.label}</span>
                          <h3>{event.title}</h3>
                          <p>{event.location}</p>
                          <button className="atr-calendar-ics" onClick={() => setSelectedEvent(event)}>{t('calendrier.see_card', "Voir la fiche →")}</button>
                        </div>
                      </article>
                    );
                  }) : <p>{t('calendrier.no_month_events', "Aucun événement disponible avec ce filtre.")}</p>}
                </div>
              )}
            </section>

            <aside className="atr-calendar-side">
              <h2>{t('calendrier.upcoming_title', "Prochains événements")}</h2>
              {upcomingEvents.length ? upcomingEvents.map((event) => (
                <article className="atr-calendar-mini" key={event.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedEvent(event)}>
                  <time>{formatDate(event.date)}</time>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                  <span className="atr-calendar-type" style={{ background: typeConfig[event.type]?.color || '#1B5299' }}>{typeConfig[event.type]?.label}</span>
                </article>
              )) : <p style={{ color: '#68778c' }}>{t('calendrier.no_upcoming', "Aucun événement à venir n'est publié.")}</p>}
            </aside>
          </div>

          <section className="atr-calendar-cta">
            <h2>{t('calendrier.cta_title', "Participez aux travaux de l'ATR")}</h2>
            <p>{t('calendrier.cta_text', "Les comités techniques et les assemblées sont réservés aux membres de l'association.")}</p>
            <Link href="/contact">{t('calendrier.cta_btn', "Devenir Membre →")}</Link>
          </section>
        </div>

        {selectedEvent && (
          <div className="atr-calendar-detail" onClick={(event) => { if (event.target === event.currentTarget) setSelectedEvent(null); }}>
            <article className="atr-calendar-detail-card">
              <button className="atr-calendar-close" onClick={() => setSelectedEvent(null)} aria-label="Fermer">×</button>
              <span className="atr-calendar-type" style={{ background: typeConfig[selectedEvent.type]?.color || '#1B5299' }}>{typeConfig[selectedEvent.type]?.label}</span>
              <h2>{selectedEvent.title}</h2>
              <p><strong>{formatEventDates(selectedEvent)}</strong></p>
              <p><strong>{t('calendrier.location_label', 'Lieu :')}</strong> {selectedEvent.location}</p>
              <p>{selectedEvent.description}</p>
              {selectedEvent.href && (
                <div style={{ marginTop: '16px', marginBottom: '8px' }}>
                  <Link href={selectedEvent.href} style={{ color: '#1B5299', fontWeight: 700, fontSize: '14.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>{t('calendrier.see_details', "Voir les détails et inscription →")}</span>
                  </Link>
                </div>
              )}
            </article>
          </div>
        )}
      </main>
    </Layout>
  );
}
