<template>
  <div>
    <div class="btn_container">
      <h1 class="title_header">
        Are you moving for <span class="title_span">work</span>?
      </h1>
      <div class="btn_wrapper">
        <button class="btn_primary" :class="{btn_style: activeBtn === 'Yes', red_border: isValid == true}" @click="changeBtn('Yes')">Yes</button>
        <button class="btn_primary" :class="{btn_style: activeBtn === 'No', red_border: isValid == true}" @click="changeBtn('No')">No</button>
      </div>
    </div>

    <div class="sub_btn display_flex_btn justify-space-between">
      <v-btn class="btn_size" color="primary" large @click="backOne"
        ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
      >
      <v-btn class="btn_size" color="primary" large @click="addData"
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
      isValid: false
    };
  },
  methods: {
    required,
    addData() {
      if (this.activeBtn !== '') {
        this.$store.dispatch("addData5", this.activeBtn);

        this.$emit("nextForm");
      } else {
        this.isValid = true
      }
    },
    changeBtn(i) {
        this.isValid = false
        this.activeBtn = i;
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
.btn_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.btn_wrapper {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
}
.btn_primary {
    padding: 20px 85px;
    margin: 10px 10px;
    font-size: 22px;
    border: #000083 1.2px solid;
    border-radius: 15px;
    color: #000083;
}
.btn_primary:hover {
    background: #d3e3f9;
    transition: .3s ease-out;
}
.btn_style {
    color: white;
    background: #3184f9;
    border: #3184f9 1.2px solid;
}
.btn_style:hover {
    color: white !important;
    background: #3184f9 !important;
    border: #3184f9 1.2px solid !important;
}
.red_border {
    border: red 1px solid;
}
</style>