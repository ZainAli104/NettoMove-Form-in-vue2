<template>
  <div>
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';

export default {
  name: 'homemain',
  components: { HomePage },
  methods: {
    startForm() {
      this.$router.push("/form");
    },
  },
};
</script>