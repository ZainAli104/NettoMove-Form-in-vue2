<template>
  <div>
    <div class="container_center">
      <h1 class="title_header">
        What should the item be <span class="title_span">picked up</span>?
      </h1>
      <p>Select date which will best for you.</p>
    </div>
    <v-date-picker
      class="calender"
      @input="getDate"
      v-model="pickUpDate"
      :min="this.nowDate"
    />

    <p class="p_red" v-if="isValid">Please select a date!</p>

    <div class="sub_btn display_flex_btn justify-space-between">
      <v-btn class="btn_size" color="primary" large @click="backOne"
        ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
      >
      <v-btn class="btn_size" color="primary" large @click="setData"
        >Continue <v-icon>mdi-arrow-right</v-icon></v-btn
      >
    </div>
  </div>
</template>
    
    <script>
export default {
  props: ["num"],
  data() {
    return {
      pickUpDate: "",
      nowDate: null,
      isValid: false
    };
  },
  methods: {
    getNowDate() {
      this.nowDate = new Date().toISOString().split("T")[0];
    },
    getDate() {
      // console.log(this.pickUpDate, "Start Date");
    },
    setData() {
      if (this.pickUpDate !== '') {
        this.$store.dispatch("TaddData6", this.pickUpDate);
        this.isValid = false;

        this.$emit("nextForm");
      } else {
        this.isValid = true;
      }
    },
    backOne() {
      this.$emit("backOne");
    },
  },
  mounted() {
    this.getNowDate();
  },
};
</script>

<style scoped>
.container_center {
  margin-top: -40px;
  text-align: center;
}
.calender {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.p_red {
    color: red;
    text-align: center;
}
</style>