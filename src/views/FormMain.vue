<template>
  <div id="main">
    <div>
      <h1 class="main_header">Netto<span>Move</span></h1>
      <div class="d-flex justify-space-between">
        <p class="header_p">Your Quote Request</p>
        <p class="header_p progress_title">{{ value }}% progress</p>
      </div>

      <div style="min-height: 40px; margin: 10px 30px">
        <v-progress-linear
          v-model="value"
          :active="show"
          :indeterminate="query"
          :query="false"
          color="#3184F9"
        ></v-progress-linear>
      </div>
    </div>

    <div class="container_sub">
        <first-form v-if="componentNum === 1" :num="componentNum" @nextForm="nextForm"></first-form>
        <second-form v-if="componentNum === 2"></second-form>

      <!-- <div class="sub_btn d-flex justify-space-between">
        <v-btn color="primary" large @click="backForm" :disabled="componentNum == 1"><v-icon>mdi-arrow-left</v-icon> Back</v-btn>
        <v-btn color="primary" large @click="nextForm" :disabled="componentNum == 7">Continue <v-icon>mdi-arrow-right</v-icon></v-btn>
      </div> -->
    </div>

  </div>
</template>

<script>
import FirstForm from '../components/BaseForm/FirstForm.vue';
import SecondForm from '../components/BaseForm/SecondForm.vue';

export default {
  name: "Form",
  components: {
    FirstForm,
    SecondForm
  },
  data() {
    return {
      componentNum: 1,
      value: 0,
      query: false,
      show: true,
    };
  },
  mounted() {
    this.queryAndIndeterminate();
  },
  methods: {
    queryAndIndeterminate() {
      this.query = false;
      this.show = true;
      this.value = 0;
    },
    nextForm() {
        this.componentNum++;
        this.value = this.value + 15;
    },
    backForm() {
        this.componentNum--;
    }
  },
};
</script>

<style>
#main {
  margin: 3rem 10%;
  max-width: 90%;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  font-family: sans-serif;
}

.main_header {
  margin: 0px 2rem;
  margin-top: 10px;
  color: #000083;
}

.main_header span {
  color: hsl(342, 100%, 50%);
}

.header_p {
  font-size: 18px;
  font-weight: bold;
  margin: 0px 2rem;
  margin-bottom: 0px !important;
  color: #000083;
}

.progress_title {
  margin-right: 33px;
  color: #898a8d;
  font-size: 16px;
  font-weight: 300 !important;
}

.container_sub {
  margin: 2rem;
}

.sub_btn {
    text-align: center;
}
</style>