<template>
  <div>
    <h1 class="title_header">
      <span class="title_span">What</span> are you moving?
    </h1>

    <div class="container_box">
        <div class="sub_box" @click="selectBox('1')">
            <img src="../../assets/img/icons/icons8-home.svg" alt="icon">
            <p>Complete <br>Household</p>
        </div>
        <div class="sub_box">
            <img src="../../assets/img/icons/icons8-kitchen-room-50.png" alt="icon"/>
            <p>Part of<br> household</p>
        </div>
        <div class="sub_box">
            <img src="../../assets/img/icons/icons8-lounge-50.png" alt="icon">
            <p>Few pieces of <br>Ferniture</p>
        </div>
        <div class="sub_box">
            <img src="../../assets/img/icons/icons8-boxes-64.png" alt="icon">
            <p>Some boxes or <br>luaggage</p>
        </div>
    </div>

    <div class="sub_btn d-flex justify-space-between">
      <v-btn color="primary" large @click="backOne"
        ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
      >
      <v-btn color="primary" large @click="submit"
        >Continue <v-icon>mdi-arrow-right</v-icon></v-btn
      >
    </div>
  </div>
</template>
    
<script>
import { required } from "../../utils/validators.js";

export default {
  props: ["num"],
  data() {
    return {
      city: "",
      country: "",
    };
  },
  methods: {
    required,
    addData() {
      if (this.$refs.form.validate()) {
        const data = {
          city: this.city,
          country: this.country,
        };
        this.$store.dispatch("addData2", data);

        this.$emit("nextForm");
      }
    },
    backOne() {
      this.$emit("backOne");
    },
  },
};
</script>
    
<style scoped>
.title_header {
  color: #000083;
}
.title_span {
  color: #3184f9;
}
.input_fields {
  margin-bottom: -43px;
}
.container_box {
    margin: 15px 10px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-around;
    margin-bottom: 50px;
}
.sub_box {
    padding: 9px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: #000083 2px solid;
    border-radius: 15px;
    cursor: pointer;
}
.sub_box img {
    margin-bottom: 10px;
    width: 66px;
}
</style>