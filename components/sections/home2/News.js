import React from 'react';
import Link from 'next/link';
export default function News() {
  return (
    <section className="newsletter-1">
    <div className="auto-container">
        <div className="newsletter-1-bg">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <h4 className="newsletter-1-title">Subscribe To Our Newsletter</h4>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter-1-form">
                        <form>
                            <input type="email" placeholder="e-mail address" />
                            <button className="btn-1">Subscribe Now <span></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

