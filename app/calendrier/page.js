'use client'
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function CalendrierPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));

    const events = [
        { id: 1, date: 5, title: 'Réunion CT 1', color: '#E89F16' },
        { id: 2, date: 14, title: 'Séminaire PIARC', color: '#1B5299' },
        { id: 3, date: 15, title: 'Séminaire PIARC', color: '#1B5299' },
        { id: 4, date: 22, title: 'Atelier Sécurité Routière', color: '#28a745' },
        { id: 5, date: 28, title: 'Assemblée Générale ATR', color: '#d9534f' }
    ];

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

    const renderCalendarDays = () => {
        const days = [];
        let delay = 0;
        
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="cal-cell empty-cell"></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayEvents = events.filter(e => e.date === i);
            const isToday = i === 16 && currentDate.getMonth() === 7 && currentDate.getFullYear() === 2026;
            
            // Animation delay for a cascading effect
            delay += 0.02;
            
            days.push(
                <div 
                    key={i} 
                    className={`cal-cell ${isToday ? 'is-today' : ''}`}
                    style={{ animationDelay: `${delay}s` }}
                >
                    <div className="cal-day-num">{i}</div>
                    <div className="cal-events">
                        {dayEvents.map(event => (
                            <div 
                                key={event.id} 
                                className="cal-event-badge"
                                style={{ backgroundColor: event.color }}
                            >
                                {event.title}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return days;
    };

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Calendrier des Événements">
            
            <style dangerouslySetInnerHTML={{__html: `
                .cal-wrapper {
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 25px 60px rgba(0,0,0,0.1);
                    border: 2px solid #f0f2f5;
                    overflow: hidden;
                    margin-bottom: 60px;
                }
                .cal-header {
                    background: #1B5299;
                    padding: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .cal-header h3 {
                    color: #fff;
                    margin: 0;
                    font-size: 32px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .cal-btn {
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: #fff;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .cal-btn:hover {
                    background: #E89F16;
                    color: #fff;
                    transform: scale(1.1);
                }
                .cal-grid-header {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    background: #f8f9fa;
                    border-bottom: 2px solid #eef2f6;
                }
                .cal-col-name {
                    text-align: center;
                    padding: 20px 0;
                    font-weight: 700;
                    color: #1B5299;
                    font-size: 16px;
                    text-transform: uppercase;
                }
                .cal-grid-body {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    background: #eef2f6;
                    gap: 1px;
                }
                
                /* Cell Animation */
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .cal-cell {
                    background: #ffffff;
                    min-height: 180px; /* BIGGER CELLS */
                    padding: 15px;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    animation: fadeInUp 0.6s ease forwards;
                    opacity: 0;
                }
                .cal-cell:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
                    z-index: 10;
                    border-radius: 10px;
                }
                .empty-cell {
                    background: #f8f9fa;
                    animation: none;
                    opacity: 1;
                }
                .empty-cell:hover {
                    transform: none;
                    box-shadow: none;
                    z-index: 1;
                }
                
                .cal-day-num {
                    font-size: 22px;
                    font-weight: 800;
                    color: #adb5bd;
                    text-align: right;
                    margin-bottom: 10px;
                    transition: color 0.3s;
                }
                .cal-cell:hover .cal-day-num {
                    color: #1B5299;
                }
                
                .is-today {
                    background: #f0f7ff;
                }
                .is-today .cal-day-num {
                    background: #E89F16;
                    color: #fff !important;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    float: right;
                    box-shadow: 0 5px 15px rgba(232, 159, 22, 0.4);
                }
                
                .cal-events {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    margin-top: auto; /* Push to bottom or stack naturally */
                    clear: both;
                }
                .cal-event-badge {
                    color: #fff;
                    padding: 10px 15px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: normal;
                    line-height: 1.4;
                }
                .cal-event-badge:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                }

                @media (max-width: 991px) {
                    .cal-cell { min-height: 120px; padding: 10px; }
                    .cal-event-badge { font-size: 11px; padding: 6px; }
                    .cal-header h3 { font-size: 24px; }
                    .cal-day-num { font-size: 18px; }
                }
                @media (max-width: 767px) {
                    .cal-col-name { font-size: 12px; padding: 10px 0; }
                    .cal-cell { min-height: 100px; }
                    .cal-event-badge { padding: 4px; font-size: 10px; }
                }
            `}} />

            <section className="section-padding pt-120 pb-120">
                <div className="auto-container">
                    
                    <div className="section_heading text-center mb_50">
                        <span className="section_heading_title_small">Agenda ATR</span>
                        <h2 className="section_heading_title_big" style={{ color: '#000' }}>Nos Prochains Événements</h2>
                    </div>

                    <div className="cal-wrapper">
                        <div className="cal-header">
                            <button className="cal-btn" onClick={prevMonth}><i className="fas fa-chevron-left"></i></button>
                            <h3>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
                            <button className="cal-btn" onClick={nextMonth}><i className="fas fa-chevron-right"></i></button>
                        </div>
                        
                        <div className="cal-grid-header">
                            <div className="cal-col-name">Lun</div>
                            <div className="cal-col-name">Mar</div>
                            <div className="cal-col-name">Mer</div>
                            <div className="cal-col-name">Jeu</div>
                            <div className="cal-col-name">Ven</div>
                            <div className="cal-col-name">Sam</div>
                            <div className="cal-col-name">Dim</div>
                        </div>
                        
                        <div className="cal-grid-body">
                            {renderCalendarDays()}
                        </div>
                    </div>
                    
                    <div className="text-center mt_40">
                        <p style={{ color: '#000', fontSize: '18px', fontWeight: '500', marginBottom: '25px' }}>
                            Vous souhaitez participer à nos événements et intégrer nos comités techniques ?
                        </p>
                        <Link href="/contact" className="btn-1">Devenir Membre<span></span></Link>
                    </div>

                </div>
            </section>
        </Layout>
    );
}
