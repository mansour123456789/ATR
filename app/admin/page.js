'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function StatCard({ icon, label, value, color, href }) {
  return (
    <Link href={href || '#'} style={{ textDecoration: 'none' }}>
      <div style={{
        background: '#fff', borderRadius: '16px', padding: '28px 24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)', cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s', border: `1px solid #f0f0f0`,
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'; }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={{ color: '#888', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>{label}</p>
            <p style={{ color: '#1a1a2e', fontSize: '36px', fontWeight: 800, margin: '8px 0 0' }}>{value ?? '—'}</p>
          </div>
          <div style={{ background: color + '20', borderRadius: '12px', padding: '14px', fontSize: '24px' }}>{icon}</div>
        </div>
      </div>
    </Link>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    async function fetchStats() {
      try {
        const [eventsRes, resRes] = await Promise.all([
          fetch('/api/events'),
          fetch('/api/reservations'),
        ]);
        const events = await eventsRes.json();
        const reservations = await resRes.json();

        setStats({
          totalEvents: events.length,
          activeEvents: events.filter(e => e.isActive).length,
          totalReservations: reservations.length,
          pending: reservations.filter(r => r.status === 'PENDING').length,
          confirmed: reservations.filter(r => r.status === 'CONFIRMED').length,
          cancelled: reservations.filter(r => r.status === 'CANCELLED').length,
          recentReservations: reservations.slice(0, 5),
          upcomingEvents: events.filter(e => new Date(e.date) > new Date()).slice(0, 3),
        });
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  useEffect(() => {
    const h = new Date().getHours();
    setTimeOfDay(h < 12 ? 'Bonjour' : h < 18 ? 'Bon après-midi' : 'Bonsoir');
  }, []);

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ color: '#1E4C81', fontSize: '28px', fontWeight: 800, margin: 0 }}>
          {timeOfDay} 👋
        </h1>
        <p style={{ color: '#888', fontSize: '15px', marginTop: '4px' }}>
          Voici un aperçu de l'activité de votre site ATR.
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: '#888' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>⏳</div>
          Chargement des statistiques...
        </div>
      ) : (
        <>
          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            <StatCard icon="📅" label="Total Événements" value={stats.totalEvents} color="#1E4C81" href="/admin/events" />
            <StatCard icon="✅" label="Événements Actifs" value={stats.activeEvents} color="#2ecc71" href="/admin/events" />
            <StatCard icon="🎫" label="Réservations" value={stats.totalReservations} color="#F69F1A" href="/admin/reservations" />
            <StatCard icon="⏳" label="En attente" value={stats.pending} color="#e67e22" href="/admin/reservations?status=PENDING" />
            <StatCard icon="✔️" label="Confirmées" value={stats.confirmed} color="#27ae60" href="/admin/reservations?status=CONFIRMED" />
            <StatCard icon="❌" label="Annulées" value={stats.cancelled} color="#e74c3c" href="/admin/reservations?status=CANCELLED" />
          </div>

          {/* Bottom row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

            {/* Recent reservations */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: '#1E4C81', fontSize: '17px', fontWeight: 700, margin: 0 }}>Dernières Réservations</h2>
                <Link href="/admin/reservations" style={{ color: '#F69F1A', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>Voir tout →</Link>
              </div>
              {stats.recentReservations.length === 0 ? (
                <p style={{ color: '#aaa', textAlign: 'center', padding: '20px 0' }}>Aucune réservation</p>
              ) : stats.recentReservations.map(r => (
                <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f5f5f5' }}>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, color: '#333', fontSize: '14px' }}>{r.name}</p>
                    <p style={{ margin: 0, color: '#888', fontSize: '12px' }}>{r.event?.title}</p>
                  </div>
                  <span style={{
                    padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
                    background: r.status === 'CONFIRMED' ? '#e6f9ee' : r.status === 'PENDING' ? '#fff8e6' : '#ffeaea',
                    color: r.status === 'CONFIRMED' ? '#27ae60' : r.status === 'PENDING' ? '#e67e22' : '#e74c3c',
                  }}>
                    {r.status === 'CONFIRMED' ? '✅ Confirmé' : r.status === 'PENDING' ? '⏳ En attente' : '❌ Annulé'}
                  </span>
                </div>
              ))}
            </div>

            {/* Upcoming events */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: '#1E4C81', fontSize: '17px', fontWeight: 700, margin: 0 }}>Prochains Événements</h2>
                <Link href="/admin/events" style={{ color: '#F69F1A', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>Gérer →</Link>
              </div>
              {stats.upcomingEvents.length === 0 ? (
                <p style={{ color: '#aaa', textAlign: 'center', padding: '20px 0' }}>Aucun événement à venir</p>
              ) : stats.upcomingEvents.map(e => (
                <div key={e.id} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid #f5f5f5', alignItems: 'center' }}>
                  <div style={{ background: '#f0f5fc', borderRadius: '10px', padding: '10px 12px', textAlign: 'center', minWidth: '50px' }}>
                    <p style={{ margin: 0, color: '#1E4C81', fontWeight: 800, fontSize: '18px' }}>{new Date(e.date).getDate()}</p>
                    <p style={{ margin: 0, color: '#888', fontSize: '10px', textTransform: 'uppercase' }}>
                      {new Date(e.date).toLocaleDateString('fr-FR', { month: 'short' })}
                    </p>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, color: '#333', fontSize: '14px' }}>{e.title}</p>
                    <p style={{ margin: 0, color: '#888', fontSize: '12px' }}>📍 {e.location}</p>
                    <p style={{ margin: 0, color: '#F69F1A', fontSize: '12px', fontWeight: 600 }}>🎫 {e._count?.reservations || 0} / {e.capacity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
