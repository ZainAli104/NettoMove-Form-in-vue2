<template>
  <div>
    <h1 class="title_header">
      Where are you moving <span class="title_span">to</span>?
    </h1>

    <v-form @submit.prevent="addData" ref="form" lazy-validation>
      <v-col class="display_flex">
        <v-col class="input_gap">
          <v-text-field
            :rules="[required()]"
            color="primary"
            outlined
            label="City"
            v-model.trim="city"
            required
          ></v-text-field>
        </v-col>
        <v-col class="input_gap">
          <v-text-field
            :rules="[required()]"
            color="primary"
            outlined
            label="Country"
            v-model.trim="country"
            required
          ></v-text-field>
        </v-col>
      </v-col>

      <div class="sub_btn display_flex_btn justify-space-between">
        <v-btn color="primary" large @click="backOne"
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
        this.$emit('backOne');
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
</style>