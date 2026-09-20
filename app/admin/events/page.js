'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => { fetchEvents(); }, []);

  async function fetchEvents() {
    setLoading(true);
    const res = await fetch('/api/events');
    const data = await res.json();
    setEvents(data);
    setLoading(false);
  }

  async function handleDelete(id, title) {
    if (!confirm(`Supprimer l'événement "${title}" et toutes ses réservations ?`)) return;
    await fetch(`/api/events/${id}`, { method: 'DELETE' });
    fetchEvents();
  }

  async function toggleActive(id, current) {
    await fetch(`/api/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isActive: !current }),
    });
    fetchEvents();
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
        <div>
          <h1 style={{ color: '#1E4C81', fontSize: '26px', fontWeight: 800, margin: 0 }}>📅 Événements</h1>
          <p style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>Gérer tous les événements ATR</p>
        </div>
        <Link href="/admin/events/new" style={{
          background: '#F69F1A', color: '#fff', padding: '12px 24px', borderRadius: '10px',
          textDecoration: 'none', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          ➕ Nouvel événement
        </Link>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#888' }}>⏳ Chargement...</div>
        ) : events.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#888' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📅</div>
            <p>Aucun événement. <Link href="/admin/events/new" style={{ color: '#F69F1A' }}>Créer le premier</Link></p>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f9fb' }}>
                {['Titre', 'Date', 'Lieu', 'Capacité', 'Réservations', 'Statut', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '16px', textAlign: 'left', color: '#555', fontSize: '13px', fontWeight: 600, borderBottom: '1px solid #eee' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} style={{ borderBottom: '1px solid #f5f5f5' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fafbff'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '16px' }}>
                    <p style={{ margin: 0, fontWeight: 600, color: '#1a1a2e', fontSize: '14px' }}>{event.title}</p>
                    <p style={{ margin: 0, color: '#aaa', fontSize: '12px', maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{event.description}</p>
                  </td>
                  <td style={{ padding: '16px', color: '#555', fontSize: '13px', whiteSpace: 'nowrap' }}>
                    {new Date(event.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '16px', color: '#555', fontSize: '13px' }}>📍 {event.location}</td>
                  <td style={{ padding: '16px', color: '#555', fontSize: '13px' }}>{event.capacity}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ background: '#f0f5fc', color: '#1E4C81', fontWeight: 700, fontSize: '13px', padding: '4px 12px', borderRadius: '20px' }}>
                      🎫 {event._count?.reservations || 0}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <button onClick={() => toggleActive(event.id, event.isActive)} style={{
                      padding: '4px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 700,
                      background: event.isActive ? '#e6f9ee' : '#ffeaea',
                      color: event.isActive ? '#27ae60' : '#e74c3c',
                    }}>
                      {event.isActive ? '✅ Actif' : '⏸ Inactif'}
                    </button>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link href={`/admin/events/${event.id}/edit`} style={{
                        padding: '6px 14px', background: '#f0f5fc', color: '#1E4C81', borderRadius: '8px',
                        textDecoration: 'none', fontSize: '13px', fontWeight: 600,
                      }}>✏️ Modifier</Link>
                      <button onClick={() => handleDelete(event.id, event.title)} style={{
                        padding: '6px 14px', background: '#ffeaea', color: '#e74c3c', border: 'none',
                        borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
                      }}>🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
