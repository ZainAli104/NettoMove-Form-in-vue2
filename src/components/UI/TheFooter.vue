<template>
  <footer class="footer">
    <div class="footer-top section">
      <div class="container">
        <div class="footer-brand">
          <h2 class="logo">NettoMove</h2>

          <p class="text">
            Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed.
            Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
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
            <a href="#" class="footer-link" @click="clickLogo">Home</a>
          </li>

          <li>
            <a href="#" @click="aboutPage" class="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" @click="contactPage" class="footer-link">Contact Us</a>
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
              <a href="tel:+2484214313" class="footer-item-link">+2484214313</a>
            </div>
          </li>

          <li class="footer-item">
            <div class="footer-item-icon">
              <ion-icon name="mail"></ion-icon>
            </div>

            <div>
              <a href="mailto:Support@nettomove.com" class="footer-item-link"
                >Support@nettomove.com</a
              >
            </div>
          </li>

          <li class="footer-item">
            <div class="footer-item-icon">
              <ion-icon name="location"></ion-icon>
            </div>

            <address class="footer-item-link">Denmark, Mars</address>
          </li>
        </ul>
      </div>
    </div>
  </footer>
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