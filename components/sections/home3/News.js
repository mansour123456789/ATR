import Link from 'next/link';
import React from 'react';

export default function News() {
    return (
        <section className="newsletter-1 style-two alt">
        <div className="auto-container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <h4 className="newsletter-1-title">Abonnez-vous à notre Newsletter</h4>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter-1-form">
                        <form>
                            <input type="email" placeholder="Votre adresse e-mail" />
                            <button className="btn-1">S'abonner <span></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

