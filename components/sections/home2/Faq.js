'use client'
import { useState } from 'react'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
  return (
    <section className="pb_130">
            <div className="faq-1-bg"></div>
            <div className="faq-1-shape-2" data-parallax='{"y": -50}'><img src="assets/images/shape/shape-3.png" alt="" /></div>
            <div className="auto-container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="image mb_20 p_relative"><img src="assets/images/resource/feature-image-4.jpg" alt="" /></div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="section_heading mb_90">
                            <span className="section_heading_title_small">Faq’s</span>
                            <h2 className="section_heading_title_big">Frequently Asked <br /> Questions</h2>
                        </div>
             <ul className="accordion-box alt">
             <li className="accordion block">
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                    <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus">
                        </span></div>Support in environmental enrichment programs</div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                            amet mattis commodo Nunc tempor amet massa diam mauris
                                            Risus sodales interdum.</div>
                                    </div>
                    </div>
                </li>
                <li className="accordion block">
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                    <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus">
                        </span></div>Assisting the animals with the veterinarian</div>
                                
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                            amet mattis commodo Nunc tempor amet massa diam mauris
                                            Risus sodales interdum.</div>
                                    </div>
                    </div>
                </li>
                <li className="accordion block active-block">
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                    <div className="icon-outer"><span className="far fa-plus"></span> <span className="far fa-minus">
                        </span></div>Construction of natural structures for animals</div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                                        <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet
                                            amet mattis commodo Nunc tempor amet massa diam mauris
                                            Risus sodales interdum.</div>
                                    </div>
                    </div>
                </li>
            </ul>
        </div>
        </div>
      </div>
    </section>
  );
};