import React from "react";
import "../css/Style.css";

export default function About() {
 return (
    <div>
        

<section className="section about" id="about" aria-label="about">
<div className="container">

  <figure className="about-banner">
    <img src="./assets/images/about-banner-1.png"  loading="lazy" alt="about banner" style={{width: "100%", height: "100%"}}
      className="w-100"/>
      {/* width="470" height="538" */}
  </figure>

  <div className="about-content">

    <p className="section-subtitle">Giới thiệu</p>

    <h2 className="h2 section-title">Chúng tôi chăm sóc sức khỏe răng miệng cho bạn</h2>

    <p className="section-text section-text-1">
    Chào mừng Quý khách đến với Nha khoa thẩm mỹ <b>Zen Dental Clinic</b>.

     Tại đây, quý khách sẽ được trải nghiệm những dịch vụ cao cấp nhất với công nghệ vượt trội từ các quốc gia tiên tiến với đội ngũ bác sĩ và chuyên gia thẩm mỹ hàng đầu.<br />

     Chúng tôi luôn cung cấp những giải pháp toàn diện và tối ưu cho từng khách hàng thông qua 2 chuyên khoa mũi nhọn là Nha khoa tổng quát và Nha khoa thẩm mỹ. Các bác sĩ của Nha khoa tổng quát sẽ đảm bảo sức khỏe răng miệng tốt nhất cho bạn, trong khi các chuyên gia thiết kế nụ cười sẽ mang đến cho bạn phong cách hiện đại, sang trọng và cuốn hút nhất.<br />

     <h3>Giá trị cốt lõi:</h3>

     <b>Zen Dental Clinic</b> tập trung phát triển dựa trên 3 nền tảng cơ bản: Con người - Khách hàng - Công nghệ<br />

    <h3>Chính sách chất lượng:</h3>

     Chúng tôi cam kết trách nhiệm với khách hàng bằng sản phẩm uy tín, chất lượng, công nghệ hàng đầu và dịch vụ, lấy khách hàng làm trung tâm.
    </p>

    {/* <a href="#" className="btn">Read more</a> */}

  </div>

</div>
</section>


    </div>
 ); 
}