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
};
</script>