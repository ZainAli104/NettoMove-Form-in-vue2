<template>
  <div>
    <header class="header" data-header>
      <div class="container">
        <div class="overlay" data-overlay></div>

        <h2 class="logo_pointer" @click="clickLogo">
          <h1 class="logo">NettoMove</h1>
        </h2>

        <nav class="navbar" data-navbar>
          <div class="navbar-top">
            <a href="#" class="logo">NettoMove</a>

            <button
              class="nav-close-btn"
              aria-label="Close Menu"
              data-nav-close-btn
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul class="navbar-list">
            <li class="navbar-item">
              <!-- <a href="#home" class="navbar-link" data-navbar-link>Home</a> -->
              <h2 class="navbar-link logo_pointer" @click="clickLogo">Home</h2>
            </li>

            <li class="navbar-item">
                <h2 class="navbar-link logo_pointer">About</h2>
            </li>

            <li class="navbar-item">
                <h2 class="navbar-link logo_pointer">Services</h2>
            </li>

            <li class="navbar-item">
                <h2 class="navbar-link logo_pointer">Contact Us</h2>
            </li>
          </ul>
        </nav>

        <h2 class="btn" style="cursor: pointer;" @click="startForm">
          <ion-icon
            name="chevron-forward-outline"
            aria-hidden="true"
          ></ion-icon>

          <span>Get A Quote</span>
        </h2>

        <button class="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
    </header>

    <main>
      <article>
        <!-- 
        - #HERO
      -->

        <section class="hero" id="home">
          <div class="container">
            <div class="hero-content">
              <p class="hero-subtitle">We Are Moving Helpers From Denmark</p>

              <h2 class="h2 hero-title">
                Your Moving Patner
              </h2>

              <p class="hero-text">
                Get 5 free quotes from moving companies and save up to 40% <br> Start now by fill simple form
              </p>

              <button class="btn" @click="startForm">Start</button>
            </div>

            <figure class="hero-banner">
              <img
                src="../../assets/img/mainPageImages/hero-banner.png"
                width="694"
                height="529"
                loading="lazy"
                alt="hero-banner"
                class="w-100 banner-animation"
              />
            </figure>
          </div>
        </section>

        <!-- 
        - #ABOUT
      -->

        <section class="section about" id="about">
          <div class="container">
            <figure class="about-banner">
              <img
                src="../../assets/img/mainPageImages/about-banner.png"
                width="700"
                height="532"
                loading="lazy"
                alt="about banner"
                class="w-100 banner-animation"
              />
            </figure>

            <div class="about-content">
              <h2 class="h2 section-title underline">Why Our Agency</h2>

              <p class="about-text">
                In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada
                magna. Nulla vel maximus risus. Donec volutpat metus lacinia
                risus accumsan, ac bibendum libero efficitur. Pellentesque nec
                nisi sit amet magna tempus hendrerit ut a odio.
              </p>

              <p class="about-text">
                Praesent rhoncus commodo tortor, id pulvinar nisl blandit at.
                Nulla facilisi. Quisque turpis ante, vehicula condimentum arcu.
              </p>

              <ul class="stats-list">
                <li class="stats-card">
                  <p class="h3 stats-title">9875</p>

                  <p class="stats-text">Satisfied Clients</p>
                </li>

                <li class="stats-card">
                  <p class="h3 stats-title">7894</p>

                  <p class="stats-text">Project Lunched</p>
                </li>

                <li class="stats-card">
                  <p class="h3 stats-title">65</p>

                  <p class="stats-text">Years Completed</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 
        - #SERVICE
      -->

        <section class="section service" id="services">
          <div class="container">
            <h2 class="h2 section-title underline">Our Speciallization</h2>

            <ul class="service-list">
              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <ion-icon name="telescope-outline"></ion-icon>
                  </div>

                  <h3 class="h3 title">Strategy & Research</h3>

                  <p class="text">
                    Mauris ut felis malesuada eros varius tristique a at orci.
                    Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                    venenatis ipsum, et porttitor.
                  </p>

                  <!-- <button class="card-btn" aria-label="Show More">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </button> -->
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <ion-icon name="desktop-outline"></ion-icon>
                  </div>

                  <h3 class="h3 title">Moving Solutions</h3>

                  <p class="text">
                    Mauris ut felis malesuada eros varius tristique a at orci.
                    Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                    venenatis ipsum, et porttitor.
                  </p>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <ion-icon name="globe-outline"></ion-icon>
                  </div>

                  <h3 class="h3 title">Transport Solution</h3>

                  <p class="text">
                    Mauris ut felis malesuada eros varius tristique a at orci.
                    Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                    venenatis ipsum, et porttitor.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- 
        - #FEATURES
      -->

        <section class="section features" id="features">
          <div class="container">
            <h2 class="h2 section-title underline">Our Features</h2>

            <ul class="features-list">
              <li>
                <div class="features-card">
                  <div class="icon">
                    <ion-icon name="bulb-outline"></ion-icon>
                  </div>

                  <div class="content">
                    <h3 class="h3 title">Idea & Analysis</h3>

                    <p class="text">
                      Praesent tincidunt congue est ut hendrerit. Pellentesque
                      et eros sit amet ipsum venenatis.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="features-card">
                  <div class="icon">
                    <ion-icon name="color-palette-outline"></ion-icon>
                  </div>

                  <div class="content">
                    <h3 class="h3 title">Designing</h3>

                    <p class="text">
                      Praesent tincidunt congue est ut hendrerit. Pellentesque
                      et eros sit amet ipsum venenatis.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <figure class="features-banner">
              <img
                src="../../assets/img/mainPageImages/feautres-banner.png"
                width="369"
                height="318"
                loading="lazy"
                alt="Features Banner"
                class="w-100 banner-animation"
              />
            </figure>

            <ul class="features-list">
              <li>
                <div class="features-card">
                  <div class="icon">
                    <ion-icon name="code-slash-outline"></ion-icon>
                  </div>

                  <div class="content">
                    <h3 class="h3 title">Development</h3>

                    <p class="text">
                      Praesent tincidunt congue est ut hendrerit. Pellentesque
                      et eros sit amet ipsum venenatis.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="features-card">
                  <div class="icon">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>

                  <div class="content">
                    <h3 class="h3 title">Testing & Lunching</h3>

                    <p class="text">
                      Praesent tincidunt congue est ut hendrerit. Pellentesque
                      et eros sit amet ipsum venenatis.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>

    <!-- 
    - #FOOTER
  -->

    <footer class="footer">
      <div class="footer-top section">
        <div class="container">
          <div class="footer-brand">
            <h2 class="logo">NettoMove</h2>

            <p class="text">
              Maecenas pellentesque placerat quam, in finibus nisl tincidunt
              sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
              felis.
            </p>

            <!-- <ul class="social-list">
              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
            </ul> -->
          </div>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Our links</p>
            </li>

            <li>
              <a href="#" class="footer-link">Home</a>
            </li>

            <li>
              <a href="#" class="footer-link">About Us</a>
            </li>

            <li>
              <a href="#" class="footer-link">Services</a>
            </li>

            <li>
              <a href="#" class="footer-link">Team</a>
            </li>

            <li>
              <a href="#" class="footer-link">Blog</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Our Services</p>
            </li>

            <li>
              <a href="#" class="footer-link">Strategy & Research</a>
            </li>

            <li>
              <a href="#" class="footer-link">Our Services</a>
            </li>

            <li>
              <a href="#" class="footer-link">Our Services</a>
            </li>

            <li>
              <a href="#" class="footer-link">Digital Marketing</a>
            </li>

            <li>
              <a href="#" class="footer-link">Our Services</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Other links</p>
            </li>

            <li>
              <a href="#" class="footer-link">FAQ</a>
            </li>

            <li>
              <a href="#" class="footer-link">Portfolio</a>
            </li>

            <li>
              <a href="#" class="footer-link">Privacy Policy</a>
            </li>

            <li>
              <a href="#" class="footer-link">Terms & Conditions</a>
            </li>

            <li>
              <a href="#" class="footer-link">Support</a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Contact Us</p>
            </li>

            <li class="footer-item">
              <div class="footer-item-icon">
                <ion-icon name="call"></ion-icon>
              </div>

              <div>
                <a href="tel:+2484214313" class="footer-item-link"
                  >+2484214313</a>
              </div>
            </li>

            <li class="footer-item">
              <div class="footer-item-icon">
                <ion-icon name="mail"></ion-icon>
              </div>

              <div>
                <a href="mailto:Support@nettomove.com" class="footer-item-link"
                  >Support@nettomove.com</a>
              </div>
            </li>

            <li class="footer-item">
              <div class="footer-item-icon">
                <ion-icon name="location"></ion-icon>
              </div>

              <address class="footer-item-link">
                Denmark, Mars
              </address>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    <!-- 
- #GO TO TOP
-->

    <a href="#top" class="go-top active" aria-label="Go To Top" data-go-top>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  mounted() {
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    const elemArr = [navCloseBtn, overlay, navOpenBtn];

    for (let i = 0; i < elemArr.length; i++) {
      elemArr[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
      });
    }

    /**
     * toggle navbar & overlay when click any navbar-link
     */

    const navbarLinks = document.querySelectorAll("[data-navbar-link]");

    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
      });
    }

    /**
     * header & go-top-btn active
     * when window scroll down to 400px
     */

    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");

    window.addEventListener("scroll", function () {
      if (window.scrollY >= 400) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
      }
    });
  },
  methods: {
    startForm() {
        this.$router.push('/form');
    },
    clickLogo() {
        this.$router.push('/')
    }
  }
};
</script>

<style scoped>
@import "../../assets/style/style.css";

.logo_pointer {
  cursor: pointer;
}
</style>
