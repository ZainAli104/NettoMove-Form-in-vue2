<template>
  <div>
    <h1 class="title_header">
      Now we just need some extra details. <br />What's your
      <span class="title_span">name</span>?
    </h1>

    <v-form @submit.prevent="addData" ref="form" lazy-validation>
      <v-col class="flex_display">
        <v-text-field
          class="input_name"
          :rules="[required()]"
          color="primary"
          outlined
          label="Name"
          v-model.trim="name"
          required
        ></v-text-field>
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
      name: "",
    };
  },
  methods: {
    required,
    addData() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("addData7", this.name);

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
  text-align: center;
}
.title_span {
  color: #3184f9;
}
.flex_display {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input_name {
  max-width: 30rem;
}

@media (max-width: 500px) {
  .title_header {
    font-size: 23px;
  }
}
</style>