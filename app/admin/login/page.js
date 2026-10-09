'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [readOnlyEmail, setReadOnlyEmail] = useState(true);
  const [readOnlyPass, setReadOnlyPass] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Force empty fields on initial mount
  useEffect(() => {
    setForm({ email: '', password: '' });
  }, []);

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
              color: #172b45;
          }
          .modern-input:focus {
              border-color: #1B5299;
              background-color: #ffffff;
              box-shadow: 0 0 0 4px rgba(27,82,153,0.1);
              outline: none;
          }
          .modern-input:-webkit-autofill,
          .modern-input:-webkit-autofill:hover, 
          .modern-input:-webkit-autofill:focus, 
          .modern-input:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0 1000px #f8fafc inset !important;
              -webkit-text-fill-color: #172b45 !important;
              transition: background-color 5000s ease-in-out 0s;
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

              <form onSubmit={handleSubmit} autoComplete="off">
                {/* Dummy inputs to prevent browser autofill interception */}
                <input type="text" name="prevent_autofill_user" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                <input type="password" name="prevent_autofill_pwd" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Adresse Email</label>
                    <input
                      type="email"
                      name="atr_admin_user_account"
                      id="atr_admin_user_account"
                      value={form.email}
                      readOnly={readOnlyEmail}
                      onFocus={() => setReadOnlyEmail(false)}
                      onClick={() => setReadOnlyEmail(false)}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="Entrez votre adresse email"
                      autoComplete="off"
                      required
                      className="modern-input"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label style={{ display: 'block', color: '#444', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>Mot de passe</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="atr_admin_user_secret"
                        id="atr_admin_user_secret"
                        value={form.password}
                        readOnly={readOnlyPass}
                        onFocus={() => setReadOnlyPass(false)}
                        onClick={() => setReadOnlyPass(false)}
                        onChange={e => setForm({ ...form, password: e.target.value })}
                        placeholder="Entrez votre mot de passe"
                        autoComplete="new-password"
                        required
                        className="modern-input"
                        style={{ paddingRight: '50px' }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '18px',
                          top: '18px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '18px',
                          color: '#64748b',
                          padding: '0',
                          lineHeight: '1',
                          outline: 'none',
                        }}
                        title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                        aria-label="Afficher ou masquer le mot de passe"
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
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
