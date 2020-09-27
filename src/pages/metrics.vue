<template>
  <f7-page class="text-align-center">
    <f7-block-title style="display: flex">
      <span style="flex: 1">
        <h1>
          {{ session.business_name }}
          {{ internalization[session.language]["metrics"] }}
        </h1>
      </span>
    </f7-block-title>
    <div>
      <div v-if="session.logged_in">
        
      <f7-gauge
        type="circle"
        :value="activity"
        value-text="30%"
        value-text-color="green"
        border-color="lightgreen"
        :label-text="internalization[session.language]['activity']"
      ></f7-gauge>
      <br />
      </div>
      <f7-gauge
        type="circle"
        :value="gaugeValue"
        :size="250"
        border-color="red"
        :border-width="10"
        :value-text="`${gaugeValue * 100}%`"
        :value-font-size="41"
        value-text-color="red"
        :label-text="
          session.logged_in
            ? internalization[session.language]['reportrate']
            : internalization[session.language]['exporate']
        "
      ></f7-gauge>
      <br />
    </div>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      session: window.Session,
      internalization: {
        english: {
          metrics: "Metrics",
          reportrate: "Report Rate",
          exporate: "Exposure Rate",
          activity: "Activity"
        },
        spanish: {
          metrics: "Métricas",
          reportrate: "Tasa de Reportaje",
          exporate: "Tasa de Riesgo",
          activity: "Actividad"
        },
      },
    };
  },
  computed: {
    gaugeValue: function () {
      if (this.session.logged_in) {
        for (let m = 0; m < this.session.markers.length; m++) {
          if (this.session.markers[m]["title"] == this.session.business_name) {
            return this.session.markers[m]["reports"] / 100;
            break;
          }
        }
      } else return this.session.exposure.toFixed(2);
    },
    activity: function () {
      for (let m = 0; m < this.session.markers.length; m++) {
        if (this.session.markers[m]["title"] == this.session.business_name) {
          return this.session.markers[m]["activity"] / 100;
          break;
        }
      }
      return 0.0;
    }
  },
};
</script>

<style>
</style>