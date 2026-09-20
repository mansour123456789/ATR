'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const inputStyle = {
  width: '100%', padding: '12px 16px', border: '2px solid #e8edf5', borderRadius: '10px',
  fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
};

export default function EditTeamMember() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch(`/api/team/${id}`)
      .then(r => r.json())
      .then(data => setForm({ name: data.name, role: data.role, bio: data.bio || '', imageUrl: data.imageUrl || '', linkedin: data.linkedin || '', email: data.email || '', order: data.order, isActive: data.isActive }))
      .finally(() => setFetching(false));
  }, [id]);

  function set(field, value) { setForm(prev => ({ ...prev, [field]: value })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch(`/api/team/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) setError(data.error || 'Erreur lors de la mise à jour');
    else router.push('/admin/team');
  }

  if (fetching) return <div style={{ textAlign: 'center', padding: '60px', color: '#888' }}>⏳ Chargement...</div>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <Link href="/admin/team" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>← Retour</Link>
        <div>
          <h1 style={{ color: '#1E4C81', fontSize: '26px', fontWeight: 800, margin: 0 }}>✏️ Modifier le Membre</h1>
          <p style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>{form.name}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '30px', maxWidth: '900px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', padding: '36px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          {error && <div style={{ background: '#fff0f0', border: '1px solid #ffc9c9', borderRadius: '8px', padding: '12px 16px', color: '#c92a2a', fontSize: '14px', marginBottom: '20px' }}>⚠️ {error}</div>}
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Nom complet *</label>
                <input value={form.name} onChange={e => set('name', e.target.value)} required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Rôle / Titre *</label>
                <input value={form.role} onChange={e => set('role', e.target.value)} required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Biographie</label>
                <textarea value={form.bio} onChange={e => set('bio', e.target.value)} rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>URL Photo de profil</label>
                <input value={form.imageUrl} onChange={e => set('imageUrl', e.target.value)} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Email</label>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>LinkedIn (URL)</label>
                  <input value={form.linkedin} onChange={e => set('linkedin', e.target.value)} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Ordre d'affichage</label>
                  <input type="number" value={form.order} onChange={e => set('order', e.target.value)} min={0} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#1E4C81'} onBlur={e => e.target.style.borderColor = '#e8edf5'} />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: '#f8f9fb', borderRadius: '10px', width: '100%' }}>
                    <input type="checkbox" id="isActive" checked={form.isActive} onChange={e => set('isActive', e.target.checked)} style={{ width: '18px', height: '18px', accentColor: '#1E4C81' }} />
                    <label htmlFor="isActive" style={{ color: '#444', fontWeight: 600, fontSize: '14px', cursor: 'pointer', margin: 0 }}>Membre actif</label>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', paddingTop: '8px' }}>
                <button type="submit" disabled={loading} style={{
                  flex: 1, padding: '14px', background: loading ? '#8baed0' : '#1B5299', color: '#fff',
                  border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 20px rgba(27, 82, 153, 0.2)'
                }}>
                  {loading ? '⏳ Enregistrement...' : '💾 Enregistrer les modifications'}
                </button>
                <Link href="/admin/team" style={{ padding: '14px 24px', background: '#f0f0f0', color: '#555', borderRadius: '12px', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center' }}>Annuler</Link>
              </div>
            </div>
          </form>
        </div>

        {/* Live preview */}
        <div>
          <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', position: 'sticky', top: '20px' }}>
            <div style={{ background: form.isActive ? 'linear-gradient(135deg, #1B5299 0%, #2563eb 100%)' : 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)', padding: '30px 20px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 12px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '3px solid rgba(255,255,255,0.4)' }}>
                {form.imageUrl ? <img src={form.imageUrl} alt={form.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <i className="fas fa-user" style={{ fontSize: '32px', color: 'rgba(255,255,255,0.8)' }}></i>}
              </div>
              <h3 style={{ color: '#fff', margin: 0, fontSize: '18px', fontWeight: 700 }}>{form.name || 'Nom du membre'}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: '4px 0 0', fontSize: '13px' }}>{form.role || 'Rôle / Titre'}</p>
            </div>
            <div style={{ padding: '20px' }}>
              <p style={{ color: '#555', fontSize: '13px', lineHeight: 1.6 }}>{form.bio || 'La biographie apparaîtra ici...'}</p>
              {form.email && <p style={{ fontSize: '13px', color: '#666', marginTop: '12px' }}>✉️ {form.email}</p>}
              {form.linkedin && <p style={{ fontSize: '13px', color: '#1d4ed8', marginTop: '4px' }}>🔗 LinkedIn</p>}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <span style={{ background: '#eef2f6', color: '#888', padding: '6px 12px', borderRadius: '20px', fontSize: '12px' }}>👁️ Aperçu en temps réel</span>
          </div>
        </div>
      </div>
    </div>
  );
}
