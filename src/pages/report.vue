<template>
  <f7-page style="display: flex; justify-content: center;" :no-navbar="true" :no-toolbar="true">
    <f7-block-title style="display: flex;">
      <span style="flex: 1;">
        <h1>Report COVID-19</h1>
      </span>
    </f7-block-title>

    <f7-list no-hairlines-md style="max-width: 480px;">
      <f7-list-input v-if="user.type == 'business' || true" label="Number Of Cases">
        <f7-range slot="input" :min="1" :max="100" :step="1" :value="cases" :label="true"></f7-range>
      </f7-list-input>

      <f7-list-input
        label="Start Of Symptoms"
        type="datepicker"
        placeholder="Please choose..."
        @calendar:change="(values) => start_of_symptoms = values"
      ></f7-list-input>

      <f7-list-item
        smart-select
        title="Symptoms"
        :smart-select-params="{openIn: 'popup', searchbar: true, searchbarPlaceholder: 'Search symptoms'}"
      >
        <select name="symptom" multiple>
          <option value="0">Fever or chills</option>
          <option value="1">Cough</option>
          <option value="2">Shortness of breath or difficulty breathing</option>
          <option value="3">Fatigue</option>
          <option value="4">Muscle or body aches</option>
          <option value="5">Headache</option>
          <option value="6">New loss of taste or smell</option>
          <option value="7">Sore throat</option>
          <option value="8">Congestion or runny nose</option>
          <option value="9">Nausea or vomiting</option>
          <option value="10">Diarrhea</option>
          <option value="11">Trouble breathing</option>
          <option value="12">Persistent pain or pressure in the chest</option>
          <option value="13">New confusion</option>
          <option value="14">Inability to wake or stay awake</option>
          <option value="15">Bluish lips or face</option>
        </select>
      </f7-list-item>
    </f7-list>

    <div style="display: flex; justify-content: center;">
      <f7-button @click="report">Report</f7-button>
      <f7-button @click="clear">Cancel</f7-button>
    </div>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      cases: 1,
      start_of_symptoms: "",
      user: window.user,
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