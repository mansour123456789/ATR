'use client'
import React, { useState } from 'react';

export default function Contact() {
    // State variables to store form input values
    const [formName, setFormName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [serviceType, setServiceType] = useState("option1"); // Default value for service type
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Event handlers to update state variables when input values change
    const handleFormNameChange = (event) => {
        setFormName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleServiceTypeChange = (event) => {
        setServiceType(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section className="pt_150 gray-bg p_relative">
            <div className="cform-1-shape-2"><img src="assets/images/shape/shape-8.png" alt="" /></div>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-7 p_relative">
                        <div className="cform-1-shape-1"><img src="assets/images/shape/shape-2.png" alt="" /></div>
                        <div className="section_heading mb_60">
                            <span className="section_heading_title_small">Contact Us</span>
                            <h2 className="section_heading_title_big mb_20">Request A Free Quote</h2>
                        </div>
                        <div className="form-1-wrap">
                            <form onSubmit={handleSubmit} id="contact-form">
                                <div className="row row-20 clearfix">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="form_name" value={formName} onChange={handleFormNameChange} placeholder="Your Name" required />
                                    </div>
                                    
                                    <div className="form-group col-md-6">
                                        <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Your Email" required />
                                    </div>
                            
                                    <div className="form-group col-md-12">
                                        <input type="text" name="phone" value={phone} onChange={handlePhoneChange} placeholder="Phone Number" required />
                                    </div>
                            
                                    <div className="form-group col-md-12">
                                        <input type="text" name="address" value={address} onChange={handleAddressChange} placeholder="Address" required />
                                    </div>
                            
                                    <div className="form-group col-md-12">
                                        <select className="selectmenu" id="nice-select" value={serviceType} onChange={handleServiceTypeChange}>
                                            <option value="option1">Services Type</option>
                                            <option value="option2">Equipment Install</option>
                                            <option value="option3">Drain Cleaning</option>
                                        </select>
                                    </div>
                            
                                    <div className="form-group col-md-6">
                                        <input type="date" name="date" value={date} onChange={handleDateChange} required />
                                    </div>
                            
                                    <div className="form-group col-md-6">
                                        <input type="time" name="time" value={time} onChange={handleTimeChange} required />
                                    </div>
                                    
                                    <div className="form-group col-md-12">
                                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                        <button className="btn-1" type="submit" data-loading-text="Please wait...">Submit Request <i className="flaticon-right-arrow-1"></i><span style={{ top: '-5.29688px', left: '21.9688px' }}></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="image"><img src="assets/images/resource/illustration-2.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
