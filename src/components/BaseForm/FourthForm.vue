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
        rows="9"
        placeholder="E.g. contents of a 4-room household"
      ></v-textarea>

      <!-- CALCULATOR -->
      <template>
        <div>
          <v-dialog v-model="dialog" width="900">
            <template v-slot:activator="{ on, attrs }">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin: 20px 0px;
                "
              >
                <p style="font-size: 20px">
                  For more accurate quotes, calculate the volume here
                  <v-icon large>mdi-arrow-right</v-icon>
                </p>
                <v-btn x-large color="#63A2FA" dark v-bind="attrs" v-on="on">
                  <v-icon style="margin-right: 10px;">mdi-calculator</v-icon
                  >Volume Calculator</v-btn
                >
              </div>
            </template>

            <v-card style="height: 500px">
              <v-tabs v-model="tab" grow>
                <v-tab
                  v-for="item in items"
                  :key="item"
                  style="display: flex; flex-direction: column"
                >
                  <v-icon large v-text="item.icon" />
                  <h3>{{ item.name }}</h3>
                </v-tab>
              </v-tabs>

              <div style="height: 70%; overflow-y: scroll">
                <div v-if="tab === 0">
                  <div
                    v-for="(livingRoomItem, index) in livingRoomItems"
                    :key="livingRoomItem"
                    style="
                      background-color: #eaf3ff;
                      display: flex;
                      justify-content: space-between;
                      margin: 10px;
                      padding: 20px 10px;
                      border-radius: 5px;
                      color: #3184f9;
                    "
                  >
                    <div>
                      <h4>{{ livingRoomItem.name }}</h4>
                    </div>

                    <div style="display: flex; align-items: center">
                      <div @click="livingRoomDec(livingRoomItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-minus
                        </v-icon>
                      </div>
                      <span
                        style="
                          color: black;
                          border: 1px solid grey;
                          padding: 1px 8px;
                          margin: 0px 5px;
                          border-radius: 4px;
                        "
                        >{{ livingRoomItem.value }}</span
                      >
                      <div @click="livingRoomInc(livingRoomItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-plus
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="tab === 1">
                  <div
                    v-for="(diningRoomItem, index) in diningRoomItems"
                    :key="diningRoomItem"
                    style="
                      background-color: #eaf3ff;
                      display: flex;
                      justify-content: space-between;
                      margin: 10px;
                      padding: 20px 10px;
                      border-radius: 5px;
                      color: #3184f9;
                    "
                  >
                    <div>
                      <h4>{{ diningRoomItem.name }}</h4>
                    </div>

                    <div style="display: flex; align-items: center">
                      <div @click="diningRoomDec(diningRoomItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-minus
                        </v-icon>
                      </div>
                      <span
                        style="
                          color: black;
                          border: 1px solid grey;
                          padding: 1px 8px;
                          margin: 0px 5px;
                          border-radius: 4px;
                        "
                        >{{ diningRoomItem.value }}</span
                      >
                      <div @click="diningRoomInc(diningRoomItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-plus
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="tab === 2">
                  <div
                    v-for="(kitchenItem, index) in kitchenItems"
                    :key="kitchenItem"
                    style="
                      background-color: #eaf3ff;
                      display: flex;
                      justify-content: space-between;
                      margin: 10px;
                      padding: 20px 10px;
                      border-radius: 5px;
                      color: #3184f9;
                    "
                  >
                    <div>
                      <h4>{{ kitchenItem.name }}</h4>
                    </div>

                    <div style="display: flex; align-items: center">
                      <div @click="kitchenDec(kitchenItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-minus
                        </v-icon>
                      </div>
                      <span
                        style="
                          color: black;
                          border: 1px solid grey;
                          padding: 1px 8px;
                          margin: 0px 5px;
                          border-radius: 4px;
                        "
                        >{{ kitchenItem.value }}</span
                      >
                      <div @click="kitchenInc(kitchenItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-plus
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="tab === 3">
                  <div
                    v-for="(utilitiesItem, index) in utilitiesItems"
                    :key="utilitiesItem"
                    style="
                      background-color: #eaf3ff;
                      display: flex;
                      justify-content: space-between;
                      margin: 10px;
                      padding: 20px 10px;
                      border-radius: 5px;
                      color: #3184f9;
                    "
                  >
                    <div>
                      <h4>{{ utilitiesItem.name }}</h4>
                    </div>

                    <div style="display: flex; align-items: center">
                      <div @click="utilitiesDec(utilitiesItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-minus
                        </v-icon>
                      </div>
                      <span
                        style="
                          color: black;
                          border: 1px solid grey;
                          padding: 1px 8px;
                          margin: 0px 5px;
                          border-radius: 4px;
                        "
                        >{{ utilitiesItem.value }}</span
                      >
                      <div @click="utilitiesInc(utilitiesItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-plus
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="tab === 4">
                  <div
                    v-for="(bedRoomItem, index) in bedRoomItems"
                    :key="bedRoomItem"
                    style="
                      background-color: #eaf3ff;
                      display: flex;
                      justify-content: space-between;
                      margin: 10px;
                      padding: 20px 10px;
                      border-radius: 5px;
                      color: #3184f9;
                    "
                  >
                    <div>
                      <h4>{{ bedRoomItem.name }}</h4>
                    </div>

                    <div style="display: flex; align-items: center">
                      <div @click="bedRoomDec(bedRoomItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-minus
                        </v-icon>
                      </div>
                      <span
                        style="
                          color: black;
                          border: 1px solid grey;
                          padding: 1px 8px;
                          margin: 0px 5px;
                          border-radius: 4px;
                        "
                        >{{ bedRoomItem.value }}</span
                      >
                      <div @click="bedRoomInc(bedRoomItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-plus
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="tab === 5">
                  <div
                    v-for="(studyItem, index) in studyItems"
                    :key="studyItem"
                    style="
                      background-color: #eaf3ff;
                      display: flex;
                      justify-content: space-between;
                      margin: 10px;
                      padding: 20px 10px;
                      border-radius: 5px;
                      color: #3184f9;
                    "
                  >
                    <div>
                      <h4>{{ studyItem.name }}</h4>
                    </div>

                    <div style="display: flex; align-items: center">
                      <div @click="studyDec(studyItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-minus
                        </v-icon>
                      </div>
                      <span
                        style="
                          color: black;
                          border: 1px solid grey;
                          padding: 1px 8px;
                          margin: 0px 5px;
                          border-radius: 4px;
                        "
                        >{{ studyItem.value }}</span
                      >
                      <div @click="studyInc(studyItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-plus
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="tab === 6">
                  <div
                    v-for="(outDoorItem, index) in outDoorItems"
                    :key="outDoorItem"
                    style="
                      background-color: #eaf3ff;
                      display: flex;
                      justify-content: space-between;
                      margin: 10px;
                      padding: 20px 10px;
                      border-radius: 5px;
                      color: #3184f9;
                    "
                  >
                    <div>
                      <h4>{{ outDoorItem.name }}</h4>
                    </div>

                    <div style="display: flex; align-items: center">
                      <div @click="outDoorDec(outDoorItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-minus
                        </v-icon>
                      </div>
                      <span
                        style="
                          color: black;
                          border: 1px solid grey;
                          padding: 1px 8px;
                          margin: 0px 5px;
                          border-radius: 4px;
                        "
                        >{{ outDoorItem.value }}</span
                      >
                      <div @click="outDoorInc(outDoorItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-plus
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="tab === 7">
                  <div
                    v-for="(miscellItem, index) in miscellItems"
                    :key="miscellItem"
                    style="
                      background-color: #eaf3ff;
                      display: flex;
                      justify-content: space-between;
                      margin: 10px;
                      padding: 20px 10px;
                      border-radius: 5px;
                      color: #3184f9;
                    "
                  >
                    <div>
                      <h4>{{ miscellItem.name }}</h4>
                    </div>

                    <div style="display: flex; align-items: center">
                      <div @click="miscellDec(miscellItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-minus
                        </v-icon>
                      </div>
                      <span
                        style="
                          color: black;
                          border: 1px solid grey;
                          padding: 1px 8px;
                          margin: 0px 5px;
                          border-radius: 4px;
                        "
                        >{{ miscellItem.value }}</span
                      >
                      <div @click="miscellInc(miscellItem, index)">
                        <v-icon style="cursor: pointer" color="#3184F9">
                          mdi-plus
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <v-footer
                height="100"
                app
                bottom
                absolute
                padless
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <h2 style="font-size: 30px; margin-left: 20px; color: #000083">
                  Netto<span class="span_title">Move</span>
                </h2>
                <div style="display: flex; align-items: center">
                  <div style="display: flex; align-items: center">
                    <span
                      style="font-size: 34px; font-weight: bold; color: #3184f9"
                      >{{ parseFloat(this.meter).toFixed(1) }}</span
                    >
                    <span
                      style="font-size: 24px; font-weight: bold; color: #000083"
                      >m</span
                    >
                    <span style="margin-top: -10px; color: #000083">3</span>
                  </div>
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 52"
                    fit=""
                    height="50px"
                    width="50px"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      d="m1.5 50.5 23-49"
                      stroke="#C4C4C4"
                      stroke-linecap="square"
                    ></path>
                  </svg>
                  <div style="display: flex; align-items: center">
                    <span
                      style="font-size: 34px; font-weight: bold; color: #3184f9"
                      >{{ parseFloat(this.foot).toFixed(1) }}</span
                    >
                    <span
                      style="font-size: 24px; font-weight: bold; color: #000083"
                      >ft</span
                    >
                    <span style="margin-top: -10px; color: #000083">3</span>
                  </div>
                </div>
                <div style="margin-right: 20px">
                  <v-btn
                    x-large
                    dark
                    color="primary"
                    class="btn_size"
                    @click="saveCalculation()"
                  >
                    Save Calculation
                  </v-btn>
                </div>
              </v-footer>
            </v-card>
          </v-dialog>
        </div>
      </template>

      <div class="sub_btn display_flex_btn justify-space-between">
        <v-btn class="btn_size" color="primary" large @click="backOne"
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
      description: "",
      showCalculator: false,
      dialog: false,
      items: [
        { name: "Living room", icon: "mdi-sofa-outline" },
        { name: "Dining room", icon: "mdi-table-chair" },
        { name: "Kitchen", icon: "mdi-microwave" },
        { name: "Utilities", icon: "mdi-washing-machine" },
        { name: "Bedroom", icon: "mdi-bed-king-outline" },
        { name: "Study", icon: "mdi-chair-rolling" },
        { name: "Outdoor", icon: "mdi-bike" },
        { name: "Miscellaneous", icon: "mdi-dots-horizontal" },
      ],
      livingRoomItems: [
        {
          name: "2 seater couch",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "3 seater couch",
          meterValue: 1.5,
          footValue: 53.0,
          value: 0,
        },
        {
          name: "Armchair",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Chandelier",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Cabinet",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Coat rack",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Coffee table",
          meterValue: 0.4,
          footValue: 14.1,
          value: 0,
        },
        {
          name: "Corner couch",
          meterValue: 3.0,
          footValue: 105.9,
          value: 0,
        },
        {
          name: "DVD player",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Grandfather clock",
          meterValue: 0.6,
          footValue: 21.2,
          value: 0,
        },
        {
          name: "Large bookcase",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Love seat",
          meterValue: 0.8,
          footValue: 28.3,
          value: 0,
        },
        {
          name: "Painting",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Piano (upright)",
          meterValue: 1.2,
          footValue: 42.4,
          value: 0,
        },
        {
          name: "Playstation",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Pouffe",
          meterValue: 0.3,
          footValue: 10.6,
          value: 0,
        },
        {
          name: "Recliner",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Rug",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Small bookcase",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Stand lamp",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Stereo",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Tv",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Tv cabinet",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Wall clock",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Xbox",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
      ],
      diningRoomItems: [
        {
          name: "Buffet",
          meterValue: 1.2,
          footValue: 42.4,
          value: 0,
        },
        {
          name: "Dining table for 8",
          meterValue: 1.2,
          footValue: 42.4,
          value: 0,
        },
        {
          name: "Dining chair",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Dining table for 4",
          meterValue: 0.8,
          footValue: 28.3,
          value: 0,
        },
        {
          name: "Dining table for 6",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Display cabinet",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "High chair",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Sideboard",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Crockery cupboard",
          meterValue: 0.8,
          footValue: 28.3,
          value: 0,
        },
      ],
      kitchenItems: [
        {
          name: "AGA cooker",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Bin",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Coffee machine",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Crockery",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Cupboard",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Cutlery",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Dishwasher",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Freezer",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Fridge",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Kitchen stool",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Microwave",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Oven",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Pots and pans",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Stove",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Tea trolley",
          meterValue: 0.4,
          footValue: 14.1,
          value: 0,
        },
      ],
      utilitiesItems: [
        {
          name: "Broom",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Dryer",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Drying rack",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Ironing board",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Laundry basket",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Vacuum cleaner",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Washing machine",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
      ],
      bedRoomItems: [
        {
          name: "Bedside table",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Bunk bed",
          meterValue: 1.8,
          footValue: 63.6,
          value: 0,
        },
        {
          name: "Chest of drawers",
          meterValue: 0.6,
          footValue: 21.2,
          value: 0,
        },
        {
          name: "Cot",
          meterValue: 0.4,
          footValue: 14.1,
          value: 0,
        },
        {
          name: "Double bed + mattress",
          meterValue: 1.4,
          footValue: 49.4,
          value: 0,
        },
        {
          name: "Dressing table",
          meterValue: 0.8,
          footValue: 28.3,
          value: 0,
        },
        {
          name: "King bed + mattress",
          meterValue: 1.6,
          footValue: 56.5,
          value: 0,
        },
        {
          name: "Large mirror",
          meterValue: 0.3,
          footValue: 10.6,
          value: 0,
        },
        {
          name: "Lloyd loom chair",
          meterValue: 0.4,
          footValue: 14.1,
          value: 0,
        },
        {
          name: "Queen bed + mattress",
          meterValue: 1.8,
          footValue: 63.6,
          value: 0,
        },
        {
          name: "Rug",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Single bed + mattress",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Small mirror",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Tallboy",
          meterValue: 0.6,
          footValue: 21.2,
          value: 0,
        },
        {
          name: "Wardrobe 2 door",
          meterValue: 1.4,
          footValue: 49.4,
          value: 0,
        },
        {
          name: "Wardrobe 3 door",
          meterValue: 1.8,
          footValue: 63.6,
          value: 0,
        },
        {
          name: "Wardrobe 4 door",
          meterValue: 2.0,
          footValue: 70.6,
          value: 0,
        },
        {
          name: "Wardrobe single door",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
      ],
      studyItems: [
        {
          name: "Computer",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Desk",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Study chair",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Table lamp",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
      ],
      outDoorItems: [
        {
          name: "BBQ large",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "BBQ portable",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Bicycle",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Folding chair",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Hose pipe",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Ladder",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Lawn mower",
          meterValue: 0.4,
          footValue: 14.1,
          value: 0,
        },
        {
          name: "Outdoor table",
          meterValue: 0.8,
          footValue: 28.3,
          value: 0,
        },
        {
          name: "Plant",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Stackable chair",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Sun lounger",
          meterValue: 0.3,
          footValue: 10.6,
          value: 0,
        },
        {
          name: "Tools",
          meterValue: 0.5,
          footValue: 17.7,
          value: 0,
        },
        {
          name: "Trampoline",
          meterValue: 1.0,
          footValue: 35.3,
          value: 0,
        },
        {
          name: "Wheelbarrow",
          meterValue: 0.6,
          footValue: 21.2,
          value: 0,
        },
      ],
      miscellItems: [
        {
          name: "Gym equipment",
          meterValue: 0.6,
          footValue: 21.2,
          value: 0,
        },
        {
          name: "Small box",
          meterValue: 0.1,
          footValue: 1.8,
          value: 0,
        },
        {
          name: "Medium box",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Large box",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Pram",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Shoe rack",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Suitcase large",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Suitcase small",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
        {
          name: "Luggage",
          meterValue: 0.2,
          footValue: 7.1,
          value: 0,
        },
        {
          name: "Wine rack",
          meterValue: 0.1,
          footValue: 3.5,
          value: 0,
        },
      ],

      tab: 0,
      meter: 0.0,
      foot: 0.0,
    };
  },
  methods: {
    required,
    addData() {
      if (this.$refs.form.validate()) {
        const data = {
          description: this.description,
          meter: this.meter,
          foot: this.foot
        }

        this.$store.dispatch("addData4", data);

        this.$emit("nextForm");
      }
    },
    backOne() {
      this.$emit("backOne");
    },

    saveCalculation() {
      this.dialog = false;
      console.log(this.meter, "meter");
      console.log(this.foot, "foot");
    },

    livingRoomInc(item, index) {
      if (item.value >= 0) {
        this.meter = this.meter + item.meterValue;
        this.foot = this.foot + item.footValue;
        this.livingRoomItems[index].value++;
      }
    },
    livingRoomDec(item, index) {
      if (item.value != 0) {
        this.meter = this.meter - item.meterValue;
        this.foot = this.foot - item.footValue;
        this.livingRoomItems[index].value--;
      }
    },

    diningRoomInc(item, index) {
      if (item.value >= 0) {
        this.meter = this.meter + item.meterValue;
        this.foot = this.foot + item.footValue;
        this.diningRoomItems[index].value++;
      }
    },
    diningRoomDec(item, index) {
      if (item.value != 0) {
        this.meter = this.meter - item.meterValue;
        this.foot = this.foot - item.footValue;
        this.diningRoomItems[index].value--;
      }
    },

    kitchenInc(item, index) {
      if (item.value >= 0) {
        this.meter = this.meter + item.meterValue;
        this.foot = this.foot + item.footValue;
        this.kitchenItems[index].value++;
      }
    },
    kitchenDec(item, index) {
      if (item.value != 0) {
        this.meter = this.meter - item.meterValue;
        this.foot = this.foot - item.footValue;
        this.kitchenItems[index].value--;
      }
    },

    utilitiesInc(item, index) {
      if (item.value >= 0) {
        this.meter = this.meter + item.meterValue;
        this.foot = this.foot + item.footValue;
        this.utilitiesItems[index].value++;
      }
    },
    utilitiesDec(item, index) {
      if (item.value != 0) {
        this.meter = this.meter - item.meterValue;
        this.foot = this.foot - item.footValue;
        this.utilitiesItems[index].value--;
      }
    },

    bedRoomInc(item, index) {
      if (item.value >= 0) {
        this.meter = this.meter + item.meterValue;
        this.foot = this.foot + item.footValue;
        this.bedRoomItems[index].value++;
      }
    },
    bedRoomDec(item, index) {
      if (item.value != 0) {
        this.meter = this.meter - item.meterValue;
        this.foot = this.foot - item.footValue;
        this.bedRoomItems[index].value--;
      }
    },

    studyInc(item, index) {
      if (item.value >= 0) {
        this.meter = this.meter + item.meterValue;
        this.foot = this.foot + item.footValue;
        this.studyItems[index].value++;
      }
    },
    studyDec(item, index) {
      if (item.value != 0) {
        this.meter = this.meter - item.meterValue;
        this.foot = this.foot - item.footValue;
        this.studyItems[index].value--;
      }
    },

    outDoorInc(item, index) {
      if (item.value >= 0) {
        this.meter = this.meter + item.meterValue;
        this.foot = this.foot + item.footValue;
        this.outDoorItems[index].value++;
      }
    },
    outDoorDec(item, index) {
      if (item.value != 0) {
        this.meter = this.meter - item.meterValue;
        this.foot = this.foot - item.footValue;
        this.outDoorItems[index].value--;
      }
    },

    miscellInc(item, index) {
      if (item.value >= 0) {
        this.meter = this.meter + item.meterValue;
        this.foot = this.foot + item.footValue;
        this.miscellItems[index].value++;
      }
    },
    miscellDec(item, index) {
      if (item.value != 0) {
        this.meter = this.meter - item.meterValue;
        this.foot = this.foot - item.footValue;
        this.miscellItems[index].value--;
      }
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

.span_title {
  color: hsl(342, 100%, 50%);
}
</style>