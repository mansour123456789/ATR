'use client';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  const isLogin = pathname === '/admin/login';

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Espace Administrateur">
      <section style={{ backgroundColor: '#f4f7fb', minHeight: '80vh', padding: '40px 0' }}>
        <div style={{ width: '90%', margin: '0 auto', maxWidth: '1800px' }}>
          {!isLogin ? (
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
              
              <style dangerouslySetInnerHTML={{__html: `
                .admin-sidebar {
                  width: 280px;
                  height: calc(100vh - 120px);
                  background: rgba(255, 255, 255, 0.95);
                  backdrop-filter: blur(20px);
                  -webkit-backdrop-filter: blur(20px);
                  border: 1px solid rgba(230, 235, 241, 0.8);
                  border-radius: 24px;
                  padding: 32px 24px;
                  box-shadow: 0 15px 35px rgba(27, 82, 153, 0.05), 0 5px 15px rgba(0, 0, 0, 0.02);
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  position: sticky;
                  top: 40px;
                  flex-shrink: 0;
                  overflow-y: auto;
                }
                .admin-sidebar-header {
                  padding-bottom: 24px;
                  margin-bottom: 12px;
                  border-bottom: 1px solid rgba(230, 235, 241, 0.8);
                  display: flex;
                  align-items: center;
                  gap: 12px;
                }
                .admin-sidebar-logo {
                  width: 44px;
                  height: 44px;
                  background: #1B5299;
                  border-radius: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  box-shadow: 0 8px 16px rgba(27, 82, 153, 0.2);
                }
                .admin-nav-link {
                  padding: 14px 18px;
                  border-radius: 14px;
                  font-weight: 600;
                  text-decoration: none;
                  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                  display: flex;
                  align-items: center;
                  gap: 14px;
                  font-size: 15px;
                  color: #475569;
                  border: 1px solid transparent;
                }
                .admin-nav-link svg {
                  width: 20px;
                  height: 20px;
                  stroke-width: 2px;
                  transition: all 0.25s ease;
                }
                .admin-nav-link:hover {
                  background: #f8fafc;
                  color: #1B5299;
                  border-color: #e2e8f0;
                  transform: translateX(4px);
                }
                .admin-nav-link.active {
                  background: #1B5299;
                  color: #fff;
                  border-color: #1B5299;
                  box-shadow: 0 8px 20px rgba(27, 82, 153, 0.25);
                }
                .admin-nav-link.active svg {
                  stroke: #fff;
                }
                .admin-logout-btn {
                  margin-top: auto;
                  padding: 14px 18px;
                  border-radius: 14px;
                  background: #fff;
                  color: #ef4444;
                  border: 1px solid #fee2e2;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.25s ease;
                  display: flex;
                  align-items: center;
                  gap: 14px;
                  font-size: 15px;
                  width: 100%;
                }
                .admin-logout-btn svg {
                  width: 20px;
                  height: 20px;
                  stroke-width: 2px;
                }
                .admin-logout-btn:hover {
                  background: #fef2f2;
                  border-color: #fca5a5;
                  transform: translateY(-2px);
                  box-shadow: 0 8px 16px rgba(239, 68, 68, 0.1);
                }
                .admin-content-area {
                  flex: 1;
                  min-width: 0;
                }
                @media (max-width: 991px) {
                  .admin-sidebar {
                    width: 100%;
                    position: static;
                    flex-direction: row;
                    flex-wrap: wrap;
                  }
                }
              `}}/>

              <div className="admin-sidebar">
                <div className="admin-sidebar-header">
                  <div className="admin-sidebar-logo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: '#1e293b', fontSize: '16px', fontWeight: 800, margin: 0, letterSpacing: '-0.3px' }}>Administration</h4>
                    <p style={{ color: '#64748b', fontSize: '12px', margin: '2px 0 0', fontWeight: 500 }}>Espace Manager ATR</p>
                  </div>
                </div>

                <Link href="/admin" className={`admin-nav-link ${pathname === '/admin' ? 'active' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
                  Tableau de bord
                </Link>
                <Link href="/admin/events" className={`admin-nav-link ${pathname.includes('/events') ? 'active' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Événements
                </Link>
                <Link href="/admin/reservations" className={`admin-nav-link ${pathname.includes('/reservations') ? 'active' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
                  Réservations
                </Link>
                <Link href="/admin/team" className={`admin-nav-link ${pathname.includes('/team') ? 'active' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Équipe ATR
                </Link>
                
                <button onClick={handleLogout} className="admin-logout-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                  Déconnexion
                </button>
              </div>

              <div className="admin-content-area">
                {children}
              </div>

            </div>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </section>
    </Layout>
  );
}
