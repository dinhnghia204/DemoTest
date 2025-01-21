import React from "react";
import "../css/Style.css";

export default function Hero() {
  return (
    <div>
      {/* <!-- - #HERO - --> */}
      <section
        className="section hero"
        id="home"
        style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')", width: "100%", height: "90vh" }}
        aria-label="hero"
      >
        <div className="container">
          <div className="hero-content">
            <p className="section-subtitle">Chào mừng đến với ZEN.</p>
            <h1 className="h1 hero-title">Chúng tôi có dịch vụ nha khoa tốt nhất.</h1>
            <p className="hero-text"></p>
            <a href="#doctor" className="btn">
              Đặt lịch hẹn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
