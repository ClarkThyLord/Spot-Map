<template>
  <f7-page :no-navbar="true" :no-toolbar="true">
    <div
      v-if="error"
      style="color: gray; opacity: 0.6;"
      class="text-align-center justify-content-center align-content-center"
    >
      <f7-icon color="gray" size="256px" f7="wifi_exclamationmark"></f7-icon>
      <h1>Oh no, something went wrong!</h1>
    </div>

    <div v-else class="expand" id="Map">
      <div class="expand" ref="MapContent"></div>
    </div>
  </f7-page>
</template>

<script>
import gmapsInit from "../assets/js/gmaps";

export default {
  name: "Map",
  data: function () {
    return {
      error: false,
    };
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$refs.MapContent);

      geocoder.geocode({ address: "Tijuana" }, (results, status) => {
        if (status !== "OK" || !results[0]) {
          this.error = true;
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
.page {
  max-height: calc(100% - 64px);
}

.expand {
  width: 100%;
  height: 100%;
}
</style>
