<template>
  <div>
    <h1 class="title_header">
      Where exactly are you moving <span class="title_span">from</span>?
    </h1>

    <v-form @submit.prevent="addData" ref="form" lazy-validation>
      <v-col class="display_flex input_fields">
        <v-col class="input_gap">
          <v-text-field
            :rules="[required()]"
            color="primary"
            outlined
            label="Street Address"
            v-model.trim="streetAddress"
            required
          ></v-text-field>
        </v-col>
        <v-col class="input_gap">
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

      <v-col class="display_flex">
        <v-col class="input_gap">
          <v-text-field
            :rules="[required()]"
            color="primary"
            outlined
            label="City"
            v-model.trim="currentCity"
            required
          ></v-text-field>
        </v-col>
        <v-col class="input_gap">
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

      <div class="sub_btn display_flex_btn justify-space-between">
        <v-btn class="btn_size" color="primary" large disabled
          ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
        >
        <v-btn class="btn_size" color="primary" large type="submit"
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

.display_flex {
  display: flex;
  flex-direction: row;
}

.display_flex_btn {
  display: flex;
  flex-direction: row;
}

.btn_size {
  font-size: 14px !important;
}

.title_span {
  color: #3184f9;
}

.input_fields {
  margin-bottom: -43px;
}

@media (max-width: 700px) {
  .title_header {
    font-size: 26px;
  }
  .display_flex {
    flex-direction: column;
  }
  .input_fields {
    margin-bottom: -35px;
  }
  .display_flex_btn {
    flex-direction: column-reverse;
    gap: 20px;
  }
  .input_gap {
    margin-bottom: -20px;
  }
}
</style>