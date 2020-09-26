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
    <div v-if="session.logged_in">
      <f7-gauge
        type="circle"
        :value="gaugeValue"
        :size="250"
        border-color="red"
        :border-width="10"
        :value-text="`${gaugeValue * 100}%`"
        :value-font-size="41"
        value-text-color="red"
        :label-text="internalization[session.language]['reportrate']"
      ></f7-gauge>
    </div>
    <div v-else>
      <f7-gauge
        type="circle"
        :value="gaugeValue"
        :size="250"
        border-color="red"
        :border-width="10"
        :value-text="`${gaugeValue * 100}%`"
        :value-font-size="41"
        value-text-color="red"
        :label-text="internalization[session.language]['exporate']"
      ></f7-gauge>
    </div>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      gaugeValue: 0.5,
      session: window.Session,
      internalization: {
        english: {
          metrics: "Metrics",
          reportrate: "Report Rate",
          exporate: "Exposure Rate"
        },
        spanish: {
          metrics: "Métricas",
          reportrate: "Tasa de Reportaje",
          exporate: "Tasa de Riesgo"
        },
      },
    };
  },
};
</script>

<style>
</style>