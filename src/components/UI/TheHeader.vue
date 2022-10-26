<template>
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
            <h2 class="navbar-link logo_pointer" @click="aboutPage">About</h2>
          </li>

          <!-- <li class="navbar-item">
            <h2 class="navbar-link logo_pointer">Services</h2>
          </li> -->

          <li class="navbar-item">
            <h2 class="navbar-link logo_pointer" @click="contactPage">Contact Us</h2>
          </li>
        </ul>
      </nav>

      <h2 class="btn" style="cursor: pointer" @click="startForm">
        <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>

        <span>Get A Quote</span>
      </h2>

      <button class="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </div>
  </header>
</template>

<script>
export default {
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
    contactPage() {
      this.$router.push('/contact');
    }
  },
};
</script>