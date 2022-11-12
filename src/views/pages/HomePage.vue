<template>
  <div>
    <the-header></the-header>

    <main>
      <article>
        <!-- 
        - #HERO
      -->

        <section class="hero" id="home">
          <div class="container">
            <div class="hero-content">
              <p class="hero-subtitle">We Are Moving Helpers From Denmark</p>

              <h2 class="h2 hero-title">Your Moving Patner</h2>

              <p class="hero-text">
                Get 5 free quotes from moving companies and save up to 40%
                <br />
                Start now by fill simple form
              </p>

              <button class="btn btn_2" @click="startForm">Moving Form</button>
              <button class="btn btn_2 btn_3" @click="tForm">Transportation Form</button>
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
              <h2 class="h2 section-title underline">Why Our Site</h2>

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

    <the-footer></the-footer>

    <a href="#top" class="go-top active" aria-label="Go To Top" data-go-top>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  </div>
</template>

<script>
import TheHeader from '../../components/UI/TheHeader.vue';
import TheFooter from '../../components/UI/TheFooter.vue';
export default {
  components: { TheHeader, TheFooter },
  name: "homepage",
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
      this.$router.push("/form");
    },
    clickLogo() {
      this.$router.push("/");
    },
    aboutPage() {
      this.$router.push("/about");
    },
    tForm() {
      this.$router.push('/transportation-form')
    }
  },
};
</script>

<style>
@import "../../assets/style/style.css";

.logo_pointer {
  cursor: pointer;
}
.btn_2 {
  display: inline !important;
}
.btn_3 {
  margin-left: 50px;
}

@media (max-width: 1000px) {
  .btn_3 {
    display: block !important;
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
