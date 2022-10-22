<template>
  <div>
    <h1 class="title_header">
      Describe <span class="title_span">what</span> you're moving.
    </h1>

    <v-form @submit.prevent="addData" ref="form" lazy-validation>
      <v-textarea
        class="text-area"
        :rules="[required()]"
        outlined
        label="Discription"
        v-model="description"
        placeholder="E.g. contents of a 4-room household"
      ></v-textarea>

      <div class="sub_btn d-flex justify-space-between">
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
        description: ''
    };
  },
  methods: {
    required,
    addData() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("addData4", this.description);

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
.text-area {
    margin-bottom: 20px;
    margin-top: 15px;
}
</style>