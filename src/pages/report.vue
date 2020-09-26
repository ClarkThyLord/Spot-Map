<template>
  <f7-page
    style="display: flex; justify-content: center"
    :no-navbar="true"
    :no-toolbar="true"
  >
    <f7-block-title style="display: flex">
      <span style="flex: 1">
        <h1>
          {{ internalization[session.language]["report"] }}
          <span v-if="session.logged_in">
            {{ internalization[session.language]["at"] }}
            {{ session.business_name }}</span
          >
        </h1>
      </span>
    </f7-block-title>

    <f7-list no-hairlines-md style="max-width: 480px">
      <f7-list-input v-if="session.logged_in" label="Number Of Cases">
        <f7-range
          slot="input"
          :min="1"
          :max="100"
          :step="1"
          :value="cases"
          :label="true"
        ></f7-range>
      </f7-list-input>

      <f7-list-input
        type="datepicker"
        :label="internalization[session.language]['start']"
        @calendar:change="(values) => (start_of_symptoms = values)"
      ></f7-list-input>

      <f7-list-item
        smart-select
        :title="internalization[session.language]['symp']"
        :smart-select-params="{
          openIn: 'popup',
          searchbar: true,
          searchbarPlaceholder: internalization[session.language]['symps'],
        }"
      >
        <select name="symptom" multiple>
          <option value="0">
            {{ internalization[session.language]["0"] }}
          </option>
          <option value="1">
            {{ internalization[session.language]["1"] }}
          </option>
          <option value="2">
            {{ internalization[session.language]["2"] }}
          </option>
          <option value="3">
            {{ internalization[session.language]["3"] }}
          </option>
          <option value="4">
            {{ internalization[session.language]["4"] }}
          </option>
          <option value="5">
            {{ internalization[session.language]["5"] }}
          </option>
          <option value="6">
            {{ internalization[session.language]["6"] }}
          </option>
          <option value="7">
            {{ internalization[session.language]["7"] }}
          </option>
          <option value="8">
            {{ internalization[session.language]["8"] }}
          </option>
          <option value="9">
            {{ internalization[session.language]["9"] }}
          </option>
          <option value="10">
            {{ internalization[session.language]["10"] }}
          </option>
          <option value="11">
            {{ internalization[session.language]["11"] }}
          </option>
          <option value="12">
            {{ internalization[session.language]["12"] }}
          </option>
          <option value="13">
            {{ internalization[session.language]["13"] }}
          </option>
          <option value="14">
            {{ internalization[session.language]["14"] }}
          </option>
          <option value="15">
            {{ internalization[session.language]["15"] }}
          </option>
        </select>
      </f7-list-item>
    </f7-list>

    <div style="display: flex; justify-content: center">
      <f7-button @click="report">Report</f7-button>
      <!-- <f7-button @click="clear">Cancel</f7-button> -->
    </div>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      cases: 1,
      start_of_cases: "",
      session: window.Session,
      internalization: {
        english: {
          report: "Report COVID-19",
          at: "At",
          start: "Start Of Symptoms",
          symp: "Symptoms",
          symps: "Search symptoms",
          0: "Fever or chills",
          1: "Cough",
          2: "Shortness of breath or difficulty breathing",
          3: "Fatigue",
          4: "Muscle or body aches",
          5: "Headache",
          6: "New loss of taste or smell",
          7: "Sore throat",
          8: "Congestion or runny nose",
          9: "Nausea or vomiting",
          10: "Diarrhea",
          11: "Trouble breathing",
          12: "Persistent pain or pressure in the chest",
          13: "New confusion",
          14: "Inability to wake or stay awake",
          15: "Bluish lips or face",
        },
        spanish: {
          report: "Reportar COVID-19",
          at: "En",
          start: "Fecha De Inicio De Síntomas",
          symp: "Síntomas",
          symps: "Buscar síntomas",
          0: "Fiebre o escalofríos",
          1: "Tos",
          2: "Falta de aire o dificultad para respirar.",
          3: "Fatiga",
          4: "Dolores musculares o corporales",
          5: "Dolor de cabeza",
          6: "Nueva pérdida del gusto u olfato",
          7: "Dolor de garganta",
          8: "Congestión o secreción nasal.",
          9: "Náuseas o vómitos",
          10: "Diarrea",
          11: "Dificultad para respirar",
          12: "Dolor o presión persistente en el pecho",
          13: "Nueva confusión",
          14: "Incapacidad para despertar o mantenerse despierto",
          15: "Labios o cara azulados",
        },
      },
    };
  },
  methods: {
    clear: function () {
      this.casese = 1;
      this.dates = [];
      this.symptoms = [];
    },
    report: function () {
      console.log(this.$refs.date);
      console.log(
        this.cases,
        this.start_of_symptoms,
        this.$f7.smartSelect.get(".smart-select").getValue()
      );

      // TODO Send report to server

      this.clear();
    },
  },
};
</script>

<style>
</style>