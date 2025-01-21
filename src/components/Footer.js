import React from "react";
import "../css/Style.css";

export default function Footer() {
    const addresses = [
        "99 Tân Mai, Tòa MANDARIN GARDEN, Quận Hoàng Mai, Hà Nội",
        "37 Vũ Phạm Hàm, Yên Hòa, Cầu Giấy, Hà Nội",
        "212 Đường Hồ Tùng Mậu, Mỹ Đình, Bắc Từ Liêm, Hà Nội"
    ];

    const services = [
        "Rút tủy", "Chỉnh hình", "Tính thẩm mĩ", "Vệ sinh răng miệng", "Tư vấn trực tiếp", "Kiểm tra răng miệng"
    ];

    const socialLinks = [
        { name: "Facebook", icon: "logo-facebook", href: "#" },
        { name: "Instagram", icon: "logo-instagram", href: "#" },
        { name: "Twitter", icon: "logo-twitter", href: "#" }
    ];

    const otherLinks = [
        "Trang chủ", "Giới thiệu", "Dịch vụ", //"Project", "Our Team", "Latest Blog"
    ];

    return (
        <div>
            <footer className="footer" id="footer" style={{ backgroundImage: "url('assets/images/BG.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

                <div className="footer-top section">
                    <div className="container">

                        <div className="footer-brand">
                        <li><p className="footer-list-title">Địa chỉ</p></li>
                            {addresses.map((address, index) => (
                                <li className="footer-item" key={index}>
                                    <div className="item-icon">
                                        <ion-icon name="location-outline"></ion-icon>
                                    </div>
                                    <address className="item-text">{address}</address>
                                </li>
                            ))}
                            <br/>

                            <div className="schedule">
                                <div className="schedule-icon">
                                    <ion-icon name="time-outline"></ion-icon>
                                </div>
                                <span className="span">
                                    Thứ Hai - Chủ Nhật:<br />
                                    9:00 AM - 10:00 PM
                                </span>
                            </div>
                        </div>

                        <ul className="footer-list">
                            <li><p className="footer-list-title">Đường dẫn</p></li>
                            {otherLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="footer-link">
                                        <ion-icon name="add-outline"></ion-icon>
                                        <span className="span">{link}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <ul className="footer-list">
                            <li><p className="footer-list-title">Các dịch vụ</p></li>
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="footer-link">
                                        <ion-icon name="add-outline"></ion-icon>
                                        <span className="span">{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <ul className="footer-list">
                            <li><p className="footer-list-title">Liên hệ </p></li>

                            <li className="footer-item">
                                <div className="item-icon">
                                    <ion-icon name="call-outline"></ion-icon>
                                </div>
                                <a href="tel:+84949341139" className="footer-link">+84949341139 +84906229660</a>
                            </li>

                            <li className="footer-item">
                                <div className="item-icon">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </div>
                                <a href="mailto:help@example.com" className="footer-link">dongbq.dentist@gmail.com</a>
                            </li>
                            <br/>

                            <ul className="social-list">
                                {socialLinks.map((social, index) => (
                                    <li key={index}>
                                        <a href={social.href} className="social-link" aria-label={`Follow us on ${social.name}`}>
                                            <ion-icon name={social.icon}></ion-icon>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
