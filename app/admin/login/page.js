'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Layout from "@/components/layout/Layout";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || 'Erreur de connexion');
    } else {
      router.push('/admin');
      router.refresh();
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes floatAnim {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
          }
          .modern-contact-img {
              border-radius: 20px;
              width: 100%;
              box-shadow: 0 20px 50px rgba(27, 82, 153, 0.15);
              animation: floatAnim 6s ease-in-out infinite;
              border: 8px solid #fff;
          }
          .modern-form-wrapper {
              background: #ffffff;
              border-radius: 20px;
              padding: 50px;
              box-shadow: 0 15px 40px rgba(0,0,0,0.06);
              border: 1px solid #f0f2f5;
              max-width: 500px;
              margin: 0 auto;
          }
          .modern-input {
              width: 100%;
              height: 60px;
              padding: 15px 25px;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              background-color: #f8fafc;
              transition: all 0.3s ease;
              font-size: 15px;
              margin-bottom: 20px;
          }
          .modern-input:focus {
              border-color: #1B5299;
              background-color: #ffffff;
              box-shadow: 0 0 0 4px rgba(27,82,153,0.1);
              outline: none;
          }
          .modern-btn {
              width: 100%;
              height: 60px;
              border-radius: 12px;
              font-size: 16px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-top: 10px;
          }
      `}} />

      <div className="row align-items-center">
        <div className="col-lg-5 mb-5 mb-lg-0">
          <div className="image-box" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: '#E89F16', borderRadius: '50%', zIndex: 0, opacity: 0.2 }}></div>
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px', background: '#1B5299', borderRadius: '50%', zIndex: 0, opacity: 0.1 }}></div>
              
              <img src="/images/contact_office_modern.png" alt="Contact ATR" className="modern-contact-img" style={{ position: 'relative', zIndex: 1 }} />
          </div>
        </div>
                                  
        <div className="col-lg-7 pl-lg-5">
          <div className="inner-container p_relative">
            <div className="section_heading mb_40 text-center text-lg-start">
              <span className="section_heading_title_small">Accès Sécurisé</span>
              <h2 className="section_heading_title_big">Connexion Administrateur</h2>
              <p style={{ marginTop: '15px', color: '#666', fontSize: '16px' }}>Veuillez vous authentifier pour accéder au tableau de bord de gestion de l'ATR.</p>
            </div>

            <div className="modern-form-wrapper">
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ background: '#f0f5fc', borderRadius: '12px', padding: '16px 24px', display: 'inline-block', marginBottom: '16px' }}>
                  <img src="/1000007112.png" alt="ATR" style={{ height: '55px' }} />
                </div>
              </div>

              {error && (
                <div style={{ background: '#fff0f0', border: '1px solid #ffc9c9', borderRadius: '8px', padding: '12px 16px', color: '#c92a2a', fontSize: '14px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Adresse Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="admin@atr.org.tn"
                      required
                      className="modern-input"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Mot de passe</label>
                    <input
                      type="password"
                      value={form.password}
                      onChange={e => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      required
                      className="modern-input"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 message-btn">
                    <button className="btn-1 modern-btn" type="submit" disabled={loading} style={{ background: loading ? '#8baed0' : '' }}>
                      {loading ? '⏳ Connexion...' : '🔐 Se connecter'} <span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
