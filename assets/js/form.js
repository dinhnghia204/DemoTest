'use strict';

// Function to submit the appointment form
function submitForm() {
  // Get the values from the appointment form
  var name = document.getElementById("appointmentForm").elements["name"].value;
  var email = document.getElementById("appointmentForm").elements["email"].value;
  var number = document.getElementById("appointmentForm").elements["number"].value;
  var date = document.getElementById("doctorAppointmentForm").elements["date"].value;

  // Get additional values from the doctor appointment form
  var city = document.getElementById("city").value;
  var district = document.getElementById("district").value;
  var specialty = document.getElementById("specialty").value;
  var doctor = document.getElementById("doctor").value;

  if (!name || !email || !number || !date || !city || !district || !specialty || !doctor) {
    alert("Vui lòng điền đủ thông tin trong form.");
    return;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Vui lòng nhập địa chỉ email hợp lệ");
    return;
  }

  // Display success message and email condition
  var successMessage = "Đặt lịch hẹn thành công!\nThông tin đặt lịch:\nHọ và tên: " + name +
                       "\nEmail: " + email +
                       "\nSố điện thoại: " + number +
                       "\nThành phố: " + city +
                       "\nQuận: " + district +
                       "\nChuyên Khoa: " + specialty +
                       "\nNha sĩ: " + doctor +
                       "\nNgày hẹn: " + date;
  alert(successMessage);
}

// Function to show doctor information based on the selected doctor
function showDoctorInfo(doctorId) {
  var doctorInfoContainer = document.getElementById("doctorInfoContainer");

  // Assuming you have predefined doctor information, you can update the doctorInfoContainer content accordingly
  switch (doctorId) {
    case "Nguyễn Văn A":
      doctorInfoContainer.innerHTML = "<p>Thông tin bác sĩ Nguyễn Văn A...</p>";
      break;
    case "Hoàng Văn B":
      doctorInfoContainer.innerHTML = "<p>Thông tin bác sĩ Hoàng Văn B...</p>";
      break;
    default:
      doctorInfoContainer.innerHTML = "<p>Không có thông tin bác sĩ cho lựa chọn này.</p>";
  }
}

// Event listener for doctor selection
document.querySelectorAll('#doctorAppointmentForm select[name="service"]').forEach(function(selectElement) {
  selectElement.addEventListener('change', function(event) {
    var selectedOption = event.target.value;
    showDoctorInfo(selectedOption);
  });
});
  
  
  /**
   * addEvent on element
   */
  
  const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  
  
  /**
   * navbar toggle
   */
  
  const navbar = document.querySelector("[data-navbar]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  const navbarToggler = document.querySelector("[data-nav-toggler]");
  
  const toggleNav = function () {
    navbar.classList.toggle("active");
    navbarToggler.classList.toggle("active");
  }
  
  addEventOnElem(navbarToggler, "click", toggleNav);
  
  const closeNav = function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  }
  
  addEventOnElem(navbarLinks, "click", closeNav);
  
  
  
  /**
   * header active
   */
  
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });