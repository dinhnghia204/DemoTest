import React from "react";
import "../css/Style.css";  

export default function Dentist() {
    return ( 
        <div>
            <section className="section doctor" aria-label="doctor" id="doctor">
                <div className="container">
                    <p className="section-subtitle text-center">Nha Sĩ</p>
                    <h2 className="h2 section-title text-center">Các nha sĩ chuyên môn hàng đầu</h2>

                    <ul className="has-scrollbar">
                        {['doctor-1', 'doctor-2', 'doctor-3', 'doctor-4'].map((doctor, index) => (
                            <li className="scrollbar-item" key={index}>
                                <div className="doctor-card">
                                    <div className="card-banner img-holder" style={{ '--width': '460', '--height': '500' }}>
                                        <img src={`./assets/images/${doctor}.png`} width="460" height="500" loading="lazy" alt={`Doctor ${index + 1}`} className="img-cover" />
                                    </div>

                                    <h3 className="h3">
                                        <a href="#" className="card-title">Mr.{String.fromCharCode(65 + index)}</a>
                                    </h3>

                                    <p className="card-subtitle">Dentist</p>
                                    <a href="form.html" className="btn" aria-label={`Đặt lịch hẹn với Mr.${String.fromCharCode(65 + index)}`}>Đặt lịch hẹn</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
