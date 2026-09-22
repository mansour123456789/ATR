'use client'
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const typeConfig = {
  committee: { label: 'Comité technique', color: '#1B5299' },
  seminar: { label: 'Séminaire / congrès', color: '#C07B1B' },
  workshop: { label: 'Atelier', color: '#2E8B57' },
  assembly: { label: 'Assemblée générale', color: '#7A4E9A' },
};

const fallbackEvents = [
  { id: 'seed-1', title: 'Séminaire PIARC Tunis 2026', description: 'Séminaire international sur la sécurité routière organisé en collaboration avec la PIARC.', location: 'Centre de Conférences, Tunis', date: '2026-03-15T09:00:00', endDate: '2026-03-15T17:00:00', type: 'seminar', href: '/events/seminaire-piarc-2026' },
  { id: 'seed-2', title: "Journée Technique sur les Ouvrages d'Art", description: 'Formation sur la conception et la maintenance des ouvrages d’art en Tunisie.', location: "École Nationale d'Ingénieurs de Tunis (ENIT)", date: '2026-05-20T08:30:00', endDate: '2026-05-20T16:30:00', type: 'workshop', href: '/events' },
];

function classifyEvent(title = '') {
  const value = title.toLowerCase();
  if (value.includes('assembl')) return 'assembly';
  if (value.includes('atelier') || value.includes('journée technique') || value.includes('formation')) return 'workshop';
  if (value.includes('séminaire') || value.includes('congrès')) return 'seminar';
  return 'committee';
}

function normalizeEvent(event) {
  return { ...event, date: event.date, endDate: event.endDate || event.date, type: event.type || classifyEvent(event.title), href: event.href || `/blog-details?id=${event.id}` };
}

function dateKey(date) {
  const value = new Date(date);
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
}

function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', ...options }).format(new Date(date));
}

function formatTime(date) {
  return new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(new Date(date));
}

function downloadCalendar(event) {
  const start = new Date(event.date).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const end = new Date(event.endDate || event.date).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const content = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ATR//Agenda//FR', 'BEGIN:VEVENT', `UID:${event.id}@atr.org.tn`, `DTSTAMP:${start}`, `DTSTART:${start}`, `DTEND:${end}`, `SUMMARY:${event.title}`, `LOCATION:${event.location}`, `DESCRIPTION:${event.description}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

export default function CalendrierPage() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [events, setEvents] = useState(fallbackEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeType, setActiveType] = useState('all');
  const [view, setView] = useState('calendar');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setView(window.matchMedia('(max-width: 767px)').matches ? 'list' : 'calendar');
    fetch('/api/events?active=true')
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('API unavailable')))
      .then((data) => { if (Array.isArray(data) && data.length) setEvents(data.map(normalizeEvent)); })
      .catch(() => setEvents(fallbackEvents.map(normalizeEvent)))
      .finally(() => setLoading(false));
  }, []);

  const visibleEvents = useMemo(() => activeType === 'all' ? events : events.filter((event) => event.type === activeType), [activeType, events]);
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const currentMonthEvents = visibleEvents.filter((event) => {
    const start = new Date(event.date);
    const end = new Date(event.endDate || event.date);
    return start <= new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59) && end >= currentDate;
  });
  const upcomingEvents = [...visibleEvents].filter((event) => new Date(event.endDate || event.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 4);

  const eventsForDay = (day) => currentMonthEvents.filter((event) => {
    const key = dateKey(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    return key >= dateKey(event.date) && key <= dateKey(event.endDate || event.date);
  });

  const changeMonth = (offset) => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  const goToday = () => setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Calendrier des Événements">
      <main className="atr-calendar-page">
        <style dangerouslySetInnerHTML={{ __html: `
          .atr-calendar-page{background:#f5f7fa;padding:70px 0 95px;color:#17233d}.atr-calendar-page .auto-container{max-width:1220px}.atr-calendar-intro{margin-bottom:30px}.atr-calendar-intro h1{color:#102b54;font-size:42px;margin:8px 0}.atr-calendar-intro p{color:#536175;max-width:700px;line-height:1.7}.atr-calendar-toolbar{display:flex;align-items:center;justify-content:space-between;gap:18px;background:#102b54;padding:20px 24px;border-radius:14px 14px 0 0}.atr-calendar-month{color:#fff;font-size:25px;min-width:210px;text-align:center;margin:0}.atr-calendar-nav,.atr-calendar-views{display:flex;align-items:center;gap:8px}.atr-calendar-btn,.atr-calendar-tab,.atr-calendar-today{border:1px solid rgba(255,255,255,.3);background:transparent;color:#fff;border-radius:6px;padding:10px 13px;cursor:pointer;font-weight:700}.atr-calendar-btn{width:42px;height:42px;padding:0}.atr-calendar-today,.atr-calendar-tab.active{background:#C07B1B;border-color:#C07B1B}.atr-calendar-views{padding:14px 20px;background:#fff;border:1px solid #dfe6ee;border-top:0}.atr-calendar-tab{color:#174f86;border-color:#cbd7e4}.atr-calendar-legend{display:flex;flex-wrap:wrap;align-items:center;gap:15px;padding:19px 22px;background:#fff;border:1px solid #e1e7ee;border-top:0}.atr-calendar-legend label{color:#536175;font-size:13px;font-weight:700}.atr-calendar-legend button{border:0;background:none;color:#536175;cursor:pointer;display:inline-flex;align-items:center;gap:6px}.atr-calendar-legend button.active{color:#102b54}.atr-calendar-dot{width:9px;height:9px;border-radius:50%;display:inline-block}.atr-calendar-layout{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:24px;margin-top:24px}.atr-calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:#dce4ec;border:1px solid #dce4ec}.atr-calendar-weekday{background:#edf2f6;color:#174f86;text-align:center;font-size:12px;font-weight:800;padding:13px 4px;text-transform:uppercase}.atr-calendar-cell{position:relative;min-height:145px;padding:12px 10px;background:#fff}.atr-calendar-cell.empty{background:#f8fafc}.atr-calendar-cell.past{background:#f3f5f7}.atr-calendar-cell.past .atr-calendar-number{color:#aab4c0}.atr-calendar-number{display:grid;place-items:center;width:30px;height:30px;color:#536175;font-weight:800;border-radius:50%;margin-bottom:10px}.atr-calendar-number.today{border:2px solid #C07B1B;color:#102b54}.atr-calendar-event{display:flex;align-items:center;gap:5px;width:100%;border:0;background:none;text-align:left;padding:5px 2px;color:#102b54;font-size:12px;font-weight:700;cursor:pointer}.atr-calendar-event strong{width:8px;height:8px;border-radius:50%;flex:none}.atr-calendar-event span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.atr-calendar-popover{position:absolute;z-index:10;left:10px;top:48px;width:245px;padding:15px;background:#fff;border:1px solid #dce4ec;border-top:3px solid #C07B1B;border-radius:8px;box-shadow:0 12px 28px rgba(16,43,84,.18)}.atr-calendar-popover h4{color:#102b54;font-size:15px;line-height:1.35;margin:0 0 8px}.atr-calendar-popover p{color:#536175;font-size:12px;line-height:1.5;margin:4px 0}.atr-calendar-popover a{display:inline-block;margin-top:8px;color:#174f86;font-size:12px;font-weight:800}.atr-calendar-side{background:#fff;border:1px solid #dfe6ee;border-radius:14px;padding:22px;height:max-content}.atr-calendar-side h2{color:#102b54;font-size:22px;margin:0 0 18px}.atr-calendar-mini{border-left:3px solid #C07B1B;padding:12px 12px;margin-bottom:13px;background:#fbfcfd}.atr-calendar-mini time{color:#C07B1B;font-size:12px;font-weight:800}.atr-calendar-mini h3{color:#102b54;font-size:15px;line-height:1.35;margin:5px 0}.atr-calendar-mini p{color:#68778c;font-size:12px;margin:0}.atr-calendar-type{display:inline-block;margin-top:8px;padding:4px 7px;color:#fff;border-radius:4px;font-size:10px;font-weight:800}.atr-calendar-list{display:grid;gap:14px}.atr-calendar-list-card{display:grid;grid-template-columns:120px 1fr;gap:0;background:#fff;border:1px solid #dfe6ee;border-radius:12px;overflow:hidden}.atr-calendar-list-date{display:flex;flex-direction:column;align-items:center;justify-content:center;background:#102b54;color:#fff;padding:16px}.atr-calendar-list-date strong{font-size:25px}.atr-calendar-list-date span{font-size:12px}.atr-calendar-list-body{padding:17px}.atr-calendar-list-body h3{color:#102b54;font-size:18px;margin:0 0 7px}.atr-calendar-list-body p{color:#68778c;font-size:13px;margin:4px 0;line-height:1.5}.atr-calendar-detail{position:fixed;inset:0;z-index:10000;background:rgba(10,27,50,.6);display:grid;place-items:center;padding:20px}.atr-calendar-detail-card{position:relative;max-width:620px;width:100%;max-height:90vh;overflow:auto;background:#fff;border-radius:16px;padding:32px}.atr-calendar-detail-card h2{color:#102b54;margin:15px 0 12px}.atr-calendar-detail-card p{color:#536175;line-height:1.7}.atr-calendar-close{position:absolute;right:15px;top:12px;border:0;background:none;font-size:25px;color:#68778c;cursor:pointer}.atr-calendar-ics{display:inline-flex;padding:12px 17px;border-radius:7px;border:0;background:#1B5299;color:#fff;font-weight:800;cursor:pointer;margin-top:13px}.atr-calendar-cta{margin-top:60px;padding:42px;background:#102b54;border-radius:14px;text-align:center;color:#fff}.atr-calendar-cta h2{margin:0 0 10px}.atr-calendar-cta p{color:#d5dfeb;margin:0 0 20px}.atr-calendar-cta a{display:inline-block;padding:12px 20px;background:#C07B1B;color:#fff;border-radius:7px;text-decoration:none;font-weight:800}@media(max-width:991px){.atr-calendar-layout{grid-template-columns:1fr}.atr-calendar-side{order:2}}@media(max-width:767px){.atr-calendar-page{padding:48px 0 65px}.atr-calendar-intro h1{font-size:32px}.atr-calendar-toolbar{flex-wrap:wrap;justify-content:center;padding:16px}.atr-calendar-month{order:-1;width:100%;font-size:22px}.atr-calendar-cell{min-height:82px;padding:8px 5px}.atr-calendar-weekday{font-size:10px;padding:10px 2px}.atr-calendar-number{width:34px;height:34px;margin:0 auto 5px}.atr-calendar-event{justify-content:center;padding:5px}.atr-calendar-event span{display:none}.atr-calendar-popover{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(290px,calc(100vw - 40px))}.atr-calendar-list-card{grid-template-columns:86px 1fr}.atr-calendar-detail-card{padding:25px 20px}.atr-calendar-views{justify-content:center}.atr-calendar-views .atr-calendar-tab{flex:1}.atr-calendar-legend{gap:8px 12px}}
        `}} />
        <div className="auto-container">
          <header className="atr-calendar-intro"><p className="section_heading_title_small">Agenda ATR</p><h1>Calendrier des Événements</h1><p>Retrouvez les réunions, séminaires et ateliers de l'ATR avec leurs horaires, lieux et informations pratiques.</p></header>
          <div className="atr-calendar-toolbar">
            <div className="atr-calendar-nav"><button className="atr-calendar-btn" onClick={() => changeMonth(-1)} aria-label="Mois précédent">‹</button><button className="atr-calendar-today" onClick={goToday}>Aujourd'hui</button><button className="atr-calendar-btn" onClick={() => changeMonth(1)} aria-label="Mois suivant">›</button></div>
            <h2 className="atr-calendar-month">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <div className="atr-calendar-views"><button className={`atr-calendar-tab ${view === 'calendar' ? 'active' : ''}`} onClick={() => setView('calendar')}>Vue Calendrier</button><button className={`atr-calendar-tab ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>Vue Liste</button></div>
          </div>
          <div className="atr-calendar-legend"><label>Filtrer :</label><button className={activeType === 'all' ? 'active' : ''} onClick={() => setActiveType('all')}>Tous ({events.length})</button>{Object.entries(typeConfig).map(([key, config]) => <button className={activeType === key ? 'active' : ''} key={key} onClick={() => setActiveType(key)}><span className="atr-calendar-dot" style={{ background: config.color }} />{config.label}</button>)}</div>
          {loading && <p style={{ color: '#68778c', marginTop: 18 }}>Actualisation de l'agenda…</p>}
          <div className="atr-calendar-layout">
            <section>
              {view === 'calendar' ? <div className="atr-calendar-grid"><>{weekDays.map((day) => <div className="atr-calendar-weekday" key={day}>{day}</div>)}{Array.from({ length: startOffset }).map((_, index) => <div className="atr-calendar-cell empty" key={`empty-${index}`} />)}{Array.from({ length: daysInMonth }, (_, index) => { const day = index + 1; const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day); const dayEvents = eventsForDay(day); const isPast = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate()); const isToday = dateKey(cellDate) === dateKey(today); return <div className={`atr-calendar-cell ${isPast ? 'past' : ''}`} key={day}><div className={`atr-calendar-number ${isToday ? 'today' : ''}`}>{day}</div>{dayEvents.map((event) => <button className="atr-calendar-event" key={event.id} onClick={() => setSelectedEvent(event)}><strong style={{ background: typeConfig[event.type].color }} /><span>{event.title}</span></button>)}{dayEvents.map((event) => selectedEvent?.id === event.id ? <div className="atr-calendar-popover" key={`popover-${event.id}`}><h4>{event.title}</h4><p>{formatDate(event.date)} · {formatTime(event.date)}</p><p>{event.location}</p><Link href={event.href}>Voir les détails →</Link></div> : null)}</div>; })}</></div> : <div className="atr-calendar-list">{currentMonthEvents.length ? currentMonthEvents.map((event) => <article className="atr-calendar-list-card" key={event.id}><div className="atr-calendar-list-date"><strong>{new Date(event.date).getDate()}</strong><span>{monthNames[new Date(event.date).getMonth()]}</span></div><div className="atr-calendar-list-body"><span className="atr-calendar-type" style={{ background: typeConfig[event.type].color }}>{typeConfig[event.type].label}</span><h3>{event.title}</h3><p>⌚ {formatTime(event.date)} · {event.location}</p><button className="atr-calendar-ics" onClick={() => setSelectedEvent(event)}>Voir la fiche →</button></div></article>) : <p>Aucun événement pour ce mois avec ce filtre.</p>}</div>}
            </section>
            <aside className="atr-calendar-side"><h2>Prochains événements</h2>{upcomingEvents.length ? upcomingEvents.map((event) => <article className="atr-calendar-mini" key={event.id}><time>{formatDate(event.date)}</time><h3>{event.title}</h3><p>{event.location}</p><span className="atr-calendar-type" style={{ background: typeConfig[event.type].color }}>{typeConfig[event.type].label}</span></article>) : <p style={{ color: '#68778c' }}>Aucun événement à venir n'est publié.</p>}</aside>
          </div>
          <section className="atr-calendar-cta"><h2>Participez aux travaux de l'ATR</h2><p>Les comités techniques et les assemblées sont réservés aux membres de l'association.</p><Link href="/contact">Devenir Membre →</Link></section>
        </div>
        {selectedEvent && <div className="atr-calendar-detail" onClick={(event) => { if (event.target === event.currentTarget) setSelectedEvent(null); }}><article className="atr-calendar-detail-card"><button className="atr-calendar-close" onClick={() => setSelectedEvent(null)} aria-label="Fermer">×</button><span className="atr-calendar-type" style={{ background: typeConfig[selectedEvent.type].color }}>{typeConfig[selectedEvent.type].label}</span><h2>{selectedEvent.title}</h2><p><strong>{formatDate(selectedEvent.date)}</strong> · {formatTime(selectedEvent.date)}</p><p><strong>Lieu :</strong> {selectedEvent.location}</p><p>{selectedEvent.description}</p><button className="atr-calendar-ics" onClick={() => downloadCalendar(selectedEvent)}>Ajouter à mon calendrier (.ics)</button></article></div>}
      </main>
    </Layout>
  );
}
