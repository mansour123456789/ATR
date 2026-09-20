'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchMembers(); }, []);

  async function fetchMembers() {
    const res = await fetch('/api/team');
    const data = await res.json();
    setMembers(data);
    setLoading(false);
  }

  async function toggleActive(id, current) {
    await fetch(`/api/team/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isActive: !current }),
    });
    fetchMembers();
  }

  async function deleteMember(id, name) {
    if (!confirm(`Supprimer "${name}" ?`)) return;
    await fetch(`/api/team/${id}`, { method: 'DELETE' });
    fetchMembers();
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ color: '#1E4C81', fontSize: '28px', fontWeight: 800, margin: 0 }}>👥 Équipe</h1>
          <p style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>{members.length} membre{members.length !== 1 ? 's' : ''} au total</p>
        </div>
        <Link href="/admin/team/new" style={{
          background: '#1B5299', color: '#fff', padding: '14px 28px', borderRadius: '12px',
          textDecoration: 'none', fontWeight: 700, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px',
          boxShadow: '0 8px 20px rgba(27, 82, 153, 0.25)', transition: 'all 0.3s'
        }}>
          <i className="fas fa-user-plus"></i> Ajouter un membre
        </Link>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '80px', color: '#888' }}>⏳ Chargement...</div>
      ) : members.length === 0 ? (
        <div style={{ background: '#fff', borderRadius: '20px', padding: '80px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>👤</div>
          <h3 style={{ color: '#1E4C81', marginBottom: '10px' }}>Aucun membre pour l'instant</h3>
          <p style={{ color: '#888', marginBottom: '30px' }}>Ajoutez les membres de votre équipe pour les afficher sur le site.</p>
          <Link href="/admin/team/new" style={{
            background: '#F69F1A', color: '#fff', padding: '14px 28px', borderRadius: '12px',
            textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px'
          }}>
            <i className="fas fa-user-plus"></i> Ajouter le premier membre
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {members.map(member => (
            <div key={member.id} style={{
              background: '#fff', borderRadius: '20px', overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.2s, box-shadow 0.2s',
              border: member.isActive ? '1px solid #e8f0fb' : '1px solid #fee2e2',
              opacity: member.isActive ? 1 : 0.75,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}
            >
              {/* Card header */}
              <div style={{ background: member.isActive ? 'linear-gradient(135deg, #1B5299 0%, #2563eb 100%)' : 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)', padding: '30px 20px', textAlign: 'center' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 12px',
                  background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden', border: '3px solid rgba(255,255,255,0.4)'
                }}>
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <i className="fas fa-user" style={{ fontSize: '32px', color: 'rgba(255,255,255,0.8)' }}></i>
                  )}
                </div>
                <h3 style={{ color: '#fff', margin: 0, fontSize: '18px', fontWeight: 700 }}>{member.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: '4px 0 0', fontSize: '13px' }}>{member.role}</p>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px' }}>
                {member.bio && <p style={{ color: '#555', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{member.bio}</p>}
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {member.email && <span style={{ fontSize: '12px', background: '#eef2f6', padding: '4px 10px', borderRadius: '20px', color: '#444' }}>✉️ {member.email}</span>}
                  {member.linkedin && <span style={{ fontSize: '12px', background: '#dbeafe', padding: '4px 10px', borderRadius: '20px', color: '#1d4ed8' }}>in LinkedIn</span>}
                  <span style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '20px', background: member.isActive ? '#dcfce7' : '#fee2e2', color: member.isActive ? '#16a34a' : '#dc2626' }}>
                    {member.isActive ? '✅ Actif' : '❌ Inactif'}
                  </span>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Link href={`/admin/team/${member.id}/edit`} style={{
                    flex: 1, padding: '10px', background: '#f4f7fb', color: '#1E4C81', borderRadius: '10px',
                    textDecoration: 'none', fontWeight: 600, fontSize: '13px', textAlign: 'center', display: 'block'
                  }}>✏️ Modifier</Link>
                  <button onClick={() => toggleActive(member.id, member.isActive)} style={{
                    padding: '10px 14px', background: member.isActive ? '#fff3e0' : '#dcfce7',
                    color: member.isActive ? '#e67e22' : '#16a34a', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', fontWeight: 600
                  }}>
                    {member.isActive ? '⏸️' : '▶️'}
                  </button>
                  <button onClick={() => deleteMember(member.id, member.name)} style={{
                    padding: '10px 14px', background: '#fff0f0', color: '#e74c3c',
                    border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '13px'
                  }}>🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
