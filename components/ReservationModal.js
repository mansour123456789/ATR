'use client';
import { useState } from 'react';

export default function ReservationModal({ event, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function set(field, value) { setForm(prev => ({ ...prev, [field]: value })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: event.id, ...form }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || 'Une erreur est survenue');
    } else {
      setSuccess(true);
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px', border: '2px solid #e8edf5', borderRadius: '10px',
    fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', transition: 'border-color 0.2s',
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
      backdropFilter: 'blur(4px)',
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '520px',
        boxShadow: '0 30px 80px rgba(0,0,0,0.3)', overflow: 'hidden',
        animation: 'slideUp 0.3s ease',
      }}>
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1E4C81, #2a6ab5)', padding: '28px 32px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ color: '#fff', margin: 0, fontSize: '20px', fontWeight: 700 }}>🎫 S'inscrire à l'événement</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: '6px 0 0', fontSize: '14px' }}>{event.title}</p>
              <p style={{ color: '#F69F1A', margin: '4px 0 0', fontSize: '13px' }}>
                📅 {new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', margin: '4px 0 0', fontSize: '13px' }}>📍 {event.location}</p>
            </div>
            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 32px 32px' }}>
          {success ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ color: '#1E4C81', fontSize: '20px', fontWeight: 700, margin: '0 0 12px' }}>Demande envoyée !</h3>
              <p style={{ color: '#555', lineHeight: '1.7', margin: '0 0 24px' }}>
                Votre demande d'inscription a été soumise avec succès.<br />
                Vous recevrez un <strong>email de confirmation</strong> à <strong>{form.email}</strong> une fois votre réservation approuvée par l'administrateur.
              </p>
              <button onClick={onClose} style={{ background: '#1E4C81', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 32px', cursor: 'pointer', fontWeight: 700, fontSize: '15px' }}>
                Fermer
              </button>
            </div>
          ) : (
            <>
              {error && (
                <div style={{ background: '#fff0f0', border: '1px solid #ffc9c9', borderRadius: '8px', padding: '12px 16px', color: '#c92a2a', fontSize: '14px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '13px', marginBottom: '6px' }}>Nom complet *</label>
                      <input value={form.name} onChange={e => set('name', e.target.value)} required
                        placeholder="Votre nom" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '13px', marginBottom: '6px' }}>Téléphone</label>
                      <input value={form.phone} onChange={e => set('phone', e.target.value)}
                        placeholder="+216 XX XXX XXX" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '13px', marginBottom: '6px' }}>Adresse email *</label>
                    <input type="email" value={form.email} onChange={e => set('email', e.target.value)} required
                      placeholder="votre@email.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '13px', marginBottom: '6px' }}>Message (optionnel)</label>
                    <textarea value={form.message} onChange={e => set('message', e.target.value)} rows={3}
                      placeholder="Questions ou informations supplémentaires..."
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                  </div>

                  <div style={{ background: '#f0f5fc', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ️</span>
                    <p style={{ margin: 0, color: '#555', fontSize: '13px', lineHeight: '1.6' }}>
                      Votre inscription sera examinée par notre équipe. Vous recevrez un email de confirmation à l'adresse fournie.
                    </p>
                  </div>

                  <button type="submit" disabled={loading} style={{
                    width: '100%', padding: '14px', background: loading ? '#8baed0' : '#1E4C81',
                    color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                  }}>
                    {loading ? '⏳ Envoi en cours...' : '🎫 Confirmer ma réservation'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
