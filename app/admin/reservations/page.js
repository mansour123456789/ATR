'use client';
import { useEffect, useState } from 'react';

const STATUS_CONFIG = {
  PENDING: { label: '⏳ En attente', bg: '#fff8e6', color: '#e67e22' },
  CONFIRMED: { label: '✅ Confirmé', bg: '#e6f9ee', color: '#27ae60' },
  CANCELLED: { label: '❌ Annulé', bg: '#ffeaea', color: '#e74c3c' },
};

export default function AdminReservations() {
  const [reservations, setReservations] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterEvent, setFilterEvent] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [actionLoading, setActionLoading] = useState(null);

  useEffect(() => {
    fetch('/api/events').then(r => r.json()).then(setEvents);
    fetchReservations();
  }, []);

  async function fetchReservations() {
    setLoading(true);
    const params = new URLSearchParams();
    if (filterEvent) params.set('eventId', filterEvent);
    if (filterStatus) params.set('status', filterStatus);
    const res = await fetch(`/api/reservations?${params}`);
    const data = await res.json();
    setReservations(data);
    setLoading(false);
  }

  useEffect(() => { fetchReservations(); }, [filterEvent, filterStatus]);

  async function updateStatus(id, status) {
    setActionLoading(id + status);
    await fetch(`/api/reservations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    setActionLoading(null);
    fetchReservations();
  }

  async function handleDelete(id) {
    if (!confirm('Supprimer cette réservation définitivement ?')) return;
    await fetch(`/api/reservations/${id}`, { method: 'DELETE' });
    fetchReservations();
  }

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ color: '#1E4C81', fontSize: '26px', fontWeight: 800, margin: 0 }}>🎫 Réservations</h1>
        <p style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>Gérer et confirmer les réservations des participants</p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <select value={filterEvent} onChange={e => setFilterEvent(e.target.value)} style={{
          padding: '10px 16px', borderRadius: '10px', border: '2px solid #e8edf5', fontSize: '14px', outline: 'none', background: '#fff', cursor: 'pointer',
        }}>
          <option value="">📅 Tous les événements</option>
          {events.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
        </select>

        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{
          padding: '10px 16px', borderRadius: '10px', border: '2px solid #e8edf5', fontSize: '14px', outline: 'none', background: '#fff', cursor: 'pointer',
        }}>
          <option value="">🔍 Tous les statuts</option>
          <option value="PENDING">⏳ En attente</option>
          <option value="CONFIRMED">✅ Confirmé</option>
          <option value="CANCELLED">❌ Annulé</option>
        </select>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '14px' }}>
          Total: <strong style={{ color: '#1E4C81' }}>{reservations.length}</strong> réservation(s)
        </div>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#888' }}>⏳ Chargement...</div>
        ) : reservations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#888' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎫</div>
            <p>Aucune réservation trouvée</p>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f9fb' }}>
                {['Participant', 'Événement', 'Contact', 'Message', 'Date', 'Statut', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '16px', textAlign: 'left', color: '#555', fontSize: '13px', fontWeight: 600, borderBottom: '1px solid #eee' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reservations.map(r => {
                const sc = STATUS_CONFIG[r.status];
                return (
                  <tr key={r.id} style={{ borderBottom: '1px solid #f5f5f5' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#fafbff'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '16px' }}>
                      <p style={{ margin: 0, fontWeight: 700, color: '#1a1a2e', fontSize: '14px' }}>{r.name}</p>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <p style={{ margin: 0, color: '#555', fontSize: '13px', maxWidth: '160px' }}>{r.event?.title}</p>
                      <p style={{ margin: 0, color: '#aaa', fontSize: '12px' }}>
                        {r.event?.date && new Date(r.event.date).toLocaleDateString('fr-FR')}
                      </p>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <p style={{ margin: 0, color: '#555', fontSize: '13px' }}>📧 {r.email}</p>
                      {r.phone && <p style={{ margin: 0, color: '#888', fontSize: '12px' }}>📞 {r.phone}</p>}
                    </td>
                    <td style={{ padding: '16px', maxWidth: '150px' }}>
                      <p style={{ margin: 0, color: '#888', fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {r.message || '—'}
                      </p>
                    </td>
                    <td style={{ padding: '16px', color: '#888', fontSize: '12px', whiteSpace: 'nowrap' }}>
                      {new Date(r.createdAt).toLocaleDateString('fr-FR')}
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, background: sc.bg, color: sc.color }}>
                        {sc.label}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {r.status !== 'CONFIRMED' && (
                          <button disabled={actionLoading === r.id + 'CONFIRMED'} onClick={() => updateStatus(r.id, 'CONFIRMED')} style={{
                            padding: '5px 12px', background: '#e6f9ee', color: '#27ae60', border: 'none',
                            borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 700,
                          }}>✅ Confirmer</button>
                        )}
                        {r.status !== 'CANCELLED' && (
                          <button disabled={actionLoading === r.id + 'CANCELLED'} onClick={() => updateStatus(r.id, 'CANCELLED')} style={{
                            padding: '5px 12px', background: '#ffeaea', color: '#e74c3c', border: 'none',
                            borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 700,
                          }}>❌ Annuler</button>
                        )}
                        <button onClick={() => handleDelete(r.id)} style={{
                          padding: '5px 10px', background: '#f5f5f5', color: '#888', border: 'none',
                          borderRadius: '8px', cursor: 'pointer', fontSize: '12px',
                        }}>🗑️</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
