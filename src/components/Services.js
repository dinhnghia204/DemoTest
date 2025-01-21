import React from "react";
import "../css/Style.css";

export default function Services() { 
    return ( 
        <div>
      {/*       
      <!-- 
        - #SERVICE
      --> */}

      <section class="section service" id="service" aria-label="service">
        <div class="container">

          <p class="section-subtitle text-center">Dịch Vụ</p>

          <h2 class="h2 section-title text-center">Dịch Vụ Của Chúng Tôi</h2>

          <ul class="service-list">

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-1.png" width="100" height="100" loading="lazy"
                    alt="service icon" class="w-100"/>
                </div>

                <div>
                  <h3 class="h3 card-title">Rút tuỷ</h3>
                   {/* <!-- Root Canal --> */}

                  <p class="card-text">
                  Chúng tôi chuyên rút tủy răng khi cần thiết, giúp giảm đau và bảo vệ răng khỏi viêm nhiễm.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-2.png" width="100" height="100" loading="lazy"
                    alt="service icon" class="w-100"/>
                </div>

                <div>
                  <h3 class="h3 card-title">Chỉnh hình </h3>
                  {/* <!-- Alignment Teeth --> */}

                  <p class="card-text">
                  Chỉnh hình răng miệng giúp cải thiện cấu trúc và chức năng răng.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-3.png" width="100" height="100" loading="lazy"
                    alt="service icon" class="w-100"/>
                </div>

                <div>
                  <h3 class="h3 card-title">Tính thẩm mĩ</h3>
                 {/*  <!-- Cosmetic Teeth --> */}

                  <p class="card-text">
                  Chúng tôi cung cấp các giải pháp thẩm mỹ như niềng răng, bọc sứ, giúp bạn có nụ cười hoàn hảo.
                  </p>
                </div>

              </div>
            </li>

            <li class="service-banner">
              <figure>
                <img src="./assets/images/service-banner.png" width="409" height="467" loading="lazy"
                  alt="service banner" class="w-100"/>
              </figure>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-4.png" width="100" height="100" loading="lazy"
                    alt="service icon" class="w-100"/>
                </div>

                <div>
                  <h3 class="h3 card-title">Vệ sinh răng miệng</h3>
                  {/* <!-- Oral Hygiene --> */}

                  <p class="card-text">
                  Dịch vụ vệ sinh răng miệng định kỳ giúp ngăn ngừa bệnh lý và duy trì sức khỏe răng miệng. 
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-5.png" width="100" height="100" loading="lazy"
                    alt="service icon" class="w-100"/>
                </div>

                <div>
                  <h3 class="h3 card-title">Tư vấn trực tiếp</h3>
                  {/* <!-- Live Advisory --> */}

                  <p class="card-text">
                  Đội ngũ bác sĩ luôn sẵn sàng tư vấn trực tiếp để giải đáp mọi thắc mắc. 
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-6.png" width="100" height="100" loading="lazy"
                    alt="service icon" class="w-100"/>
                </div>

                <div>
                  <h3 class="h3 card-title">Kiểm tra răng miệng</h3>
                  {/* <!-- Cavity Inspection --> */}

                  <p class="card-text">
                  Kiểm tra răng miệng định kỳ giúp phát hiện sớm vấn đề và bảo vệ nụ cười lâu dài.
                  </p>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
        </div>
    );
}