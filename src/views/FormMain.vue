<template>
  <div id="main">
    <div>
      <h1 class="main_header" @click="mainPage">Netto<span>Move</span></h1>
      <div class="d-flex justify-space-between">
        <p class="header_p">Your Quote Request</p>
        <p class="header_p progress_title" v-if="componentNum !== 9">{{ value }}% progress</p>
      </div>

      <div style="min-height: 40px; margin: 10px 30px" v-if="componentNum !== 9">
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
      <keep-alive>
        <first-form v-if="componentNum === 1" :num="componentNum" @nextForm="nextForm"></first-form>
        <second-form v-if="componentNum === 2" :num="componentNum" @nextForm="nextForm" @backOne="backForm"></second-form>
        <third-form v-if="componentNum === 3" :num="componentNum" @nextForm="nextForm" @backOne="backForm"></third-form>
        <fourth-form v-if="componentNum === 4" :num="componentNum" @nextForm="nextForm" @backOne="backForm"></fourth-form>
        <fifth-form v-if="componentNum === 5" :num="componentNum" @nextForm="nextForm" @backOne="backForm"></fifth-form>
        <sixth-form v-if="componentNum === 6" :num="componentNum" @nextForm="nextForm" @backOne="backForm"></sixth-form>
        <seventh-form v-if="componentNum === 7" :num="componentNum" @nextForm="nextForm" @backOne="backForm"></seventh-form>
        <eighth-form v-if="componentNum === 8" :num="componentNum" @nextForm="nextForm" @backOne="backForm"></eighth-form>
        <last-form  v-if="componentNum === 9"></last-form>

      <!-- <div class="sub_btn d-flex justify-space-between">
        <v-btn color="primary" large @click="backForm" :disabled="componentNum == 1"><v-icon>mdi-arrow-left</v-icon> Back</v-btn>
        <v-btn color="primary" large @click="nextForm" :disabled="componentNum == 7">Continue <v-icon>mdi-arrow-right</v-icon></v-btn>
      </div> -->
      </keep-alive>
    </div>

  </div>
</template>

<script>
import FirstForm from '../components/BaseForm/FirstForm.vue';
import SecondForm from '../components/BaseForm/SecondForm.vue';
import ThirdForm from '../components/BaseForm/ThirdForm.vue';
import FourthForm from '../components/BaseForm/FourthForm.vue';
import FifthForm from '../components/BaseForm/FifthForm.vue';
import SixthForm from '../components/BaseForm/SixthForm.vue';
import SeventhForm from '../components/BaseForm/SeventhForm.vue';
import EighthForm from '../components/BaseForm/EighthForm.vue';
import LastForm from '../components/BaseForm/LastForm.vue';

export default {
  name: "Form",
  components: {
    FirstForm,
    SecondForm,
    ThirdForm,
    FourthForm,
    FifthForm,
    SixthForm,
    SeventhForm,
    EighthForm,
    LastForm
},
  data() {
    return {
      componentNum: 1,
      value: 0,
      query: false,
      show: true,
      counterback: 0
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
        if (this.counterback === 0) {
          this.value = this.value + 15;
        } else {
          this.counterback--;
        }
    },
    backForm() {
        this.componentNum--;
        this.counterback++;
    },
    mainPage() {
      this.$router.push('/');
    }
  },
};
</script>

<style>
#main {
  margin: 2rem 10%;
  max-width: 90%;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  font-family: sans-serif;
  background: #fafafa;
}

.main_header {
  margin: 0px 2rem;
  margin-top: 10px;
  color: #000083;
  cursor: pointer;
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