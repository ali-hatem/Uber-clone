const creatnav = ()=> {
    let header = document.querySelector('.header');

    header.innerHTML= `
    <input type="checkbox" id="check" hidden />
    <div class="icon">
        <label for="check"><i class="fa-solid fa-bars"></i></label>
      </div>
      <nav class="navbar">
        <div class="logo">
          <span class="ride">Uber</span>
        </div>

        <ul class="nav-links">
          <li><a id="home-l" href="index.html">Home</a></li>
          <li><a id="cars" href="cars.html">Cars</a></li>
          <li><a id="scooter" href="scooter.html">Scooters</a></li>
          <li><a id="about" href="about.html">About</a></li>
          <li><a id="contact" href="contact.html">Contact</a></li>
        </ul>

        <div class="nav-right">
          <a href="reservation.html" class="book-btn" id="book">Book a Ride</a>
          <a href="login.html" class="login" id="uname">Log in</a>
          <button onclick="setLang('en')">EN</button>
          <button onclick="setLang('ar')">AR</button>
          <label for="dark-mode" class="toggle-btn">🌙</label>
        </div>
      </nav>
    `

}

creatnav();