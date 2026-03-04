const creatfooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-container">
        <!-- footer about -->
        <div class="footer-about">
          <div class="footer-logo">
            <span class="logo-text">Uber</span>
          </div>
          <p id="footer-paragraph">
            Premium ride-hailing service. Fast, safe, and reliable
            transportation at your fingertips.
          </p>

          <div class="social-icons">
            <a href="#" aria-label="Facebook" class="social-icon">
              <i class="fa-brands fa-square-facebook"></i
            ></a>
            <a href="#" aria-label="Twitter" class="social-icon">
              <i class="fa-brands fa-square-x-twitter"></i
            ></a>
            <a href="#" aria-label="Instagram" class="social-icon"
              ><i class="fa-brands fa-square-instagram"></i
            ></a>
            <a href="#" aria-label="LinkedIn" class="social-icon">
              <i class="fa-brands fa-square-linkedin"></i
            ></a>
          </div>
        </div>
        <!-- footer links -->
        <div class="footer-links">
          <h4 id="footerLinks">Quick Links</h4>
          <ul>
            <li><a href="#" id="footerCars">Cars</a></li>
            <li><a href="#" id="footerScooters">Scooters</a></li>
            <li><a href="#" id="footerReservation">Reservation</a></li>
            <li><a href="#" id="footerAbout">About Us</a></li>
            <li><a href="#" id="footerContact">Contact</a></li>
          </ul>
        </div>
        <!-- footer support -->
        <div class="footer-support">
          <h4 id="support">Support</h4>
          <ul>
            <li><a href="#" id="h-center">Help Center</a></li>
            <li><a href="#" id="safety">Safety</a></li>
            <li><a href="#" id="terms">Terms of Service</a></li>
            <li><a href="#" id="policy">Privacy Policy</a></li>
            <li><a href="#" id="access">Accessibility</a></li>
          </ul>
        </div>
        <!-- footer contact -->
        <div class="footer-contact">
          <h4 id="footercontact">Contact</h4>
          <ul>
            <li>📧 BELAL@.com</li>
            <li>📞 01146783266</li>
            <li id="loc">📍 NEW CAIRO</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Uber</p>
      </div>
    `
}

creatfooter();