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

              <h2 class="h2 hero-title">Support</h2>

              <p class="hero-text">
                If you have any issue or have any question just contact us <br>through Mail by just press below contact button
              </p>

              <button class="btn">
                <a href="mailto:Support@nettomove.com" target="_blank">Contact Us</a>
              </button>
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
      </article>
    </main>

    <the-footer></the-footer>

    <a href="#top" class="go-top active" aria-label="Go To Top" data-go-top>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  </div>
</template>

<script>
import TheFooter from "../../components/UI/TheFooter.vue";
import TheHeader from "../../components/UI/TheHeader.vue";

export default {
  components: { TheHeader, TheFooter },
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
};
</script>