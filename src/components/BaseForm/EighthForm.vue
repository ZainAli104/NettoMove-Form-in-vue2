<template>
  <div>
    <h1 class="title_header">
      Finally, what is your <span class="title_span"> email address</span> and <br><span class="title_span">phone number</span>?
    </h1>

    <v-form @submit.prevent="addData" ref="form" lazy-validation>
      <v-col class="flex_display">
        <v-text-field
          class="input_name"
          :rules="[required()]"
          color="primary"
          outlined
          label="Email"
          v-model.trim="email"
          required
        ></v-text-field>

        <v-text-field
          class="input_name"
          :rules="[required()]"
          color="primary"
          outlined
          label="Phone Number"
          v-model.trim="phoneNumber"
          required
        ></v-text-field>
      </v-col>

      <p class="p_text">By submitting this form, you are requesting TriGlobal B.V. to bring you into contact with up to 5 suppliers of Moving Services. Your data will only be transferred to these suppliers, who will contact you via e-mail, telephone or text. For more information, read our Privacy Policy.</p>

      <div class="sub_btn display_flex_btn justify-space-between">
        <v-btn class="btn_size" color="primary" large @click="backOne"
          ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
        >
        <v-btn class="btn_size" color="primary" large type="submit"
          >Get quotes <v-icon>mdi-arrow-right</v-icon></v-btn
        >
      </div>
    </v-form>
  </div>
</template>
      
<script>
import { required } from "../../utils/validators.js";
import { companies } from '../../plugins/firebase';
import { getDocs } from '@firebase/firestore';
import dayjs from "dayjs";

export default {
  props: ["num"],
  data() {
    return {
      email: "",
      phoneNumber: "",
      filterEmails: null,
      userData: null
    };
  },
  async mounted() {
    this.userData = this.$store.getters.dataUser

    var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
    dayjs.extend(isSameOrBefore);

    const snapshot = await getDocs(companies)
      const data = [];
      snapshot.docs.map((e) => {
        data.push({ id: e.id, ...e.data() });
      });
      
      const filterData = data.filter((school) => {
        const date = new Date(1970, 0, 1);
        date.setSeconds(
          school.contracts[school.contracts.length - 1].end_date.seconds
        );
        const current = new Date();
        current.setHours(0, 0, 0, 0);
        return dayjs(current).isSameOrBefore(dayjs(date));
      });

      this.filterEmails = filterData
  },
  methods: {
    required,
    async addData() {
      if (this.$refs.form.validate()) {
        const data = {
          email: this.email,
          phoneNumber: this.phoneNumber
        }
        this.$store.dispatch("addData8", data);
        this.filterEmails.forEach((mail) => {
            this.formSend(mail.email)
        })
        this.$emit("nextForm");
      }
    },
    async formSend(e_mail) {
      if (this.$refs.form.validate()) {        
        const sender = "https://formsubmit.co/ajax/" + e_mail
        await fetch(sender, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: this.userData.name,
            email: this.email,
            Subject: 'New Request for Moving',
            ...this.userData
          }),
        }).then((res) => {
          if (res.status === 200) {
            console.log('ok')
            this.$refs.form.reset();
          } else {
            this.alert = "Something went wrong! Please try again later";
          }
        });
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
  margin-top: -20px;
  text-align: center;
}
.title_span {
  color: #3184f9;
}
.flex_display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input_name {
  max-width: 30rem;
  min-width: 70%;
}
.p_text {
    font-size: 13px;
    margin-bottom: 30px;
    text-align: center;
    color: #616161;
}

@media (max-width: 600px) {
  .title_header {
    font-size: 23px;
  }
}
</style>