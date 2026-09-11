(function(){
  var footer=document.querySelector('[data-vista-footer]');
  if(!footer) return;
  footer.innerHTML=`
    <div class="vista-footer-inner">
      <div class="vista-footer-grid">
        <div class="vista-footer-brand">
          <a class="vista-footer-logo" href="index.html" aria-label="Vista Clinics home">
            <img class="vista-footer-mark" src="download.gif" alt="" aria-hidden="true">
            <span><strong>VISTA</strong><small>CLINICS</small></span>
          </a>
          <p>Specialist cardiology, gastroenterology and hepatology care with focused diagnostics in Moosapet, Hyderabad.</p>
          <div class="vista-footer-contact">
            <span>3rd floor, Sri Nilayam, Shiva Sai Colony,<br>Sevalal Nagar, Moosapet, Hyderabad 500018</span>
            <a href="tel:09030014422">090300 14422</a>
          </div>
        </div>
        <div>
          <h3 class="vista-footer-heading">About Vista</h3>
          <ul class="vista-footer-links">
            <li><a href="index.html">Overview</a></li>
            <li><a href="doctors.html">Our Doctors</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 class="vista-footer-heading">Our Care</h3>
          <ul class="vista-footer-links">
            <li><a href="cardiology.html">Cardiology</a></li>
            <li><a href="gastroenterology.html">Gastroenterology</a></li>
            <li><a href="diagnostics.html">Diagnostics</a></li>
            <li><a href="book-consultation.html">Book Appointment</a></li>
          </ul>
        </div>
        <div>
          <h3 class="vista-footer-heading">Patient Info</h3>
          <ul class="vista-footer-links">
            <li><a href="diagnostics.html">Diagnostic Services</a></li>
            <li><a href="cardiology.html">Cardiac Tests</a></li>
            <li><a href="gastroenterology.html">GI Procedures</a></li>
            <li><a href="reviews.html">Patient Reviews</a></li>
          </ul>
        </div>
        <div>
          <h3 class="vista-footer-heading">Visit Vista</h3>
          <ul class="vista-footer-links">
            <li><a href="contact.html">Location & Directions</a></li>
            <li><a href="contact.html">Clinic Contact</a></li>
            <li><a href="book-consultation.html">Consultation</a></li>
            <li><a href="doctors.html">Find a Doctor</a></li>
          </ul>
        </div>
      </div>
      <div class="vista-footer-bottom">
        <span>© 2026 Vista Clinics. All rights reserved.</span>
        <div class="vista-footer-status"><i aria-hidden="true"></i><strong>Clinic information available</strong></div>
        <div class="vista-footer-legal"><a href="contact.html">Contact</a><a href="reviews.html">Reviews</a></div>
      </div>
    </div>`;

  if(document.head && !document.getElementById('vista-home-dark-specialties')){
    var style=document.createElement('style');
    style.id='vista-home-dark-specialties';
    style.textContent='@media (prefers-color-scheme: dark){body[data-page="home"] .specialty-row{background:#17212b;border-color:#34414e!important}body[data-page="home"] .specialty-item{background:#17212b!important;border-color:#34414e!important;box-shadow:none!important}body[data-page="home"] .specialty-item:hover{background:#1d2a35!important;border-color:#4a6474!important}body[data-page="home"] .specialty-item h3{color:#f4f7fa!important}body[data-page="home"] .specialty-item p{color:#b8c4cd!important}body[data-page="home"] .specialty-item>b{background:#f4f7fa!important;color:#17212b!important}body[data-page="home"] .specialty-item:hover>b{background:#1769aa!important;color:#fff!important}}html[data-theme="dark"] .nav a,html[data-theme="dark"] .nav-group-trigger{color:#e6eef3!important}html[data-theme="dark"] .nav a:hover,html[data-theme="dark"] .nav a.active,html[data-theme="dark"] .nav-group-trigger:hover,html[data-theme="dark"] .nav-group-trigger.active{color:#74c4ee!important}html[data-theme="dark"] .nav-group-menu{background:#16222c!important;border-color:#3a4b58!important;box-shadow:0 14px 35px rgba(0,0,0,.35)!important}html[data-theme="dark"] .nav-group-menu a{color:#e6eef3!important}html[data-theme="dark"] .nav-group-menu a:hover{background:#20313d!important;color:#8ed1f5!important}html[data-theme="dark"] body[data-page="home"] .specialty-row{background:#fff!important;border:0!important}html[data-theme="dark"] body[data-page="home"] .specialty-item{background-color:#fff!important;color:#18252d!important;border:1px solid #dfe8ec!important;border-right:0!important;box-shadow:0 5px 20px rgba(25,55,70,.06)!important}html[data-theme="dark"] body[data-page="home"] .specialty-item:last-child{border-right:1px solid #dfe8ec!important}html[data-theme="dark"] body[data-page="home"] .specialty-item:hover{background:#fff!important;border-color:#a9c8db!important;box-shadow:0 12px 30px rgba(25,55,70,.10)!important}html[data-theme="dark"] body[data-page="home"] .specialty-item h3{color:#18252d!important}html[data-theme="dark"] body[data-page="home"] .specialty-item p{color:#52636d!important}html[data-theme="dark"] body[data-page="home"] .specialty-item>b{background:#1769aa!important;color:#fff!important}html[data-theme="dark"] body[data-page="home"] .specialty-item:hover>b{background:#2387c7!important;color:#fff!important}body[data-page="home"] .specialty-row{border:0!important;gap:18px!important}body[data-page="home"] .specialty-item{border-right:0!important}body[data-page="home"] .specialty-item:last-child{border-right:1px solid #dfe8ec!important}@media(max-width:900px){body[data-page="home"] .specialty-item{border-right:0!important;border-bottom:0!important}body[data-page="home"] .specialty-item:last-child{border-right:0!important;border-bottom:1px solid #dfe8ec!important}}';
    document.head.appendChild(style);
  }
})();