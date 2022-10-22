<template>
    <div>
      <!-- <h2>
          Start Date: {{ this.dates[0] || "null" }} --- End Date:{{
            this.dates[1] || "null"
          }}
        </h2> -->
      <v-date-picker @input="getDate" v-model="dates" range :min="this.nowDate" />
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        dates: ["2022-10-22", "2022-10-22"],
        nowDate: null,
      };
    },
  
    methods: {
      getNowDate() {
        this.nowDate = new Date().toISOString().split("T")[0];
      },
  
      getDate() {
        console.log(this.dates[0], "Start Date");
      //   console.log(this.dates[1], "End Date");
      },
    },
    mounted() {
      this.getNowDate();
    },
  };
  </script>