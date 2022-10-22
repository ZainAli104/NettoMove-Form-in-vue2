<template>
  <div>
    <h1 class="title_header">
      Where exactly are you moving <span class="title_span">from</span>?
    </h1>

    <v-form @submit.prevent="addData" ref="form" lazy-validation>
      <v-col class="d-flex input_fields">
        <v-col>
          <v-text-field
            :rules="[required()]"
            color="primary"
            outlined
            label="Street Address"
            v-model.trim="streetAddress"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            :rules="[required()]"
            color="primary"
            outlined
            label="Zip Code / Post Code"
            v-model.trim="zipCode"
            required
          ></v-text-field>
        </v-col>
      </v-col>

      <v-col class="d-flex">
        <v-col>
          <v-text-field
            :rules="[required()]"
            color="primary"
            outlined
            label="City"
            v-model.trim="currentCity"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            :rules="[required()]"
            color="primary"
            outlined
            label="Country"
            v-model.trim="currentCountry"
            required
          ></v-text-field>
        </v-col>
      </v-col>

      <div class="sub_btn d-flex justify-space-between">
        <v-btn color="primary" large disabled
          ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
        >
        <v-btn color="primary" large type="submit"
          >Continue <v-icon>mdi-arrow-right</v-icon></v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script>
import { required } from "../../utils/validators.js";

export default {
  props: ["num"],
  data() {
    return {
      streetAddress: "",
      zipCode: "",
      currentCity: "",
      currentCountry: "",
    };
  },
  methods: {
    required,
    addData() {
      if (this.$refs.form.validate()) {
        const data = {
          streetAddress: this.streetAddress,
          zipCode: this.zipCode,
          currentCity: this.currentCity,
          currentCountry: this.currentCountry
        }
        this.$store.dispatch('addData1', data);

        this.$emit("nextForm");
      }
    },
  },
};
</script>

<style>
.title_header {
  color: #000083;
}

.title_span {
  color: #3184f9;
}

.input_fields {
  margin-bottom: -43px;
}
</style>