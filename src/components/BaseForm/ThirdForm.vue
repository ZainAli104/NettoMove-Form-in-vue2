<template>
  <div>
    <h1 class="title_header">
      <span class="title_span">What</span> are you moving?
    </h1>

    <div class="container_box">
        <div class="sub_box" :class="{sub_activeBox: activeBtn === 'Complete Household'}" @click="changeBox('Complete Household')">
            <img src="../../assets/img/icons/icons8-home.svg" alt="icon">
            <p>Complete <br>Household</p>
        </div>
        <div class="sub_box" :class="{sub_activeBox: activeBtn === 'Part of household'}" @click="changeBox('Part of household')">
            <img src="../../assets/img/icons/icons8-kitchen-room-50.png" alt="icon"/>
            <p>Part of<br> household</p>
        </div>
        <div class="sub_box" :class="{sub_activeBox: activeBtn === 'Few pieces of Ferniture'}" @click="changeBox('Few pieces of Ferniture')">
            <img src="../../assets/img/icons/icons8-lounge-50.png" alt="icon">
            <p>Few pieces of <br>Ferniture</p>
        </div>
        <div class="sub_box" :class="{sub_activeBox: activeBtn === 'Some boxes or luaggage'}" @click="changeBox('Some boxes or luaggage')">
            <img src="../../assets/img/icons/icons8-boxes-64.png" alt="icon">
            <p>Some boxes or <br>luaggage</p>
        </div>
    </div>
    <p class="p_text" v-if="showValidation">Please Select one catagory!</p>

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
      activeBtn: '',
      showValidation: false
    };
  },
  methods: {
    required,
    submit() {
      if (this.activeBtn !== '') {
          this.showValidation = false
        this.$store.dispatch("addData3", this.activeBtn);

        this.$emit("nextForm");
      } else {
        this.showValidation = true
      }
    },
    backOne() {
      this.$emit("backOne");
    },
    changeBox(i) {
        this.activeBtn = i;
    }
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
    color: #000083;
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
.sub_activeBox {
    background: #3184f9;
    border: #3184f9 2px solid;
    color: white;
    transform: translateY(-12px);
    transition: .3s ease-out;
}
.p_text {
    color: red;
    margin-top: -15px;
}
</style>