<template>
  <div>
    <div class="btn_container">
      <h1 class="title_header">
        <span class="title_span">Delivery</span> and <span class="title-span">Collection:</span>
      </h1>
      <v-container fluid>
        <v-radio-group v-model="radios">
          <v-radio value="Cheapest">
            <template v-slot:label>
              <div>Curbside collection abd delievry <strong class="success--text">(cheapest)</strong></div>
            </template>
          </v-radio>
          <v-radio value="1 Porter need for help">
            <template v-slot:label>
              <div>1 Porter to help carry in/out <strong class="primary--text">(I help)</strong></div>
            </template>
          </v-radio>
          <v-radio value="2 or more Carriers need for help">
            <template v-slot:label>
              <div>2 carriers to carry in/out <strong class="primary--text">(E.g. a moving task / most expensive)</strong></div>
            </template>
          </v-radio>
          <v-radio value="Heavy task as require Crane">
            <template v-slot:label>
              <div>The task requires a crane truck <strong class="primary--text">(E.g. boat transport)</strong></div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-container>
      <p class="p_red" v-if="isValid">Please select a catagory!</p>
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
      radios: '',
      isValid: false
    };
  },
  methods: {
    required,
    addData() {
      if (this.radios !== '') {
        this.$store.dispatch("TaddData5", this.radios);
        this.isValid = false

        this.$emit("nextForm");
      } else {
        this.isValid = true
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
.p_red {
    color: red;
    text-align: center;
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

@media (max-width: 600px) {
  .btn_wrapper {
    flex-direction: column;
  }
}
</style>