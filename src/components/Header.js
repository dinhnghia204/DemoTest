import React from "react";
// import "../css/Header.css";
import "../css/Style.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <ul className="contact-list">
              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:dongbq.dentist@gmail.com" className="contact-link">
                  dongbq.dentist@gmail.com
                </a>
              </li>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+84949341139" className="contact-link">
                  +84949341139; +84906229660
                </a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-bottom" data-header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
          <div className="container">
            <a className="navbar-brand" href="#home">
            <img src="/assets/brand/zendentalcliniclogo1.png" alt="logo" width="80" height="auto" />
            </a>
            <nav className="navbar container" data-navbar>
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Trang chính
                  </a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#footer" className="navbar-link" data-nav-link>
                    Liên hệ
                  </a>
                </li>
              </ul>
            </nav>

            <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
              <ion-icon name="menu-sharp" aria-hidden="true" className="menu-icon"></ion-icon>
              <ion-icon name="close-sharp" aria-hidden="true" className="close-icon"></ion-icon>
            </button>
          </div>
        </div>
      </header>

      
  <script src="./assets/js/script.js" defer></script>

  
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}
