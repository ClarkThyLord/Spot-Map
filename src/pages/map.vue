<template>
  <f7-page :page-content="false">
    <iframe>
      <div id="Map"></div>
    </iframe>
  </f7-page>
</template>

<script>
import gmapsInit from '../assets/js/gmaps';

export default {
  name: 'Map',
  async mounted(){
    try{
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({address: 'Tijuana'}, (results, status) => {
        if (status !== 'OK' || !results[0]){
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

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#Map {
  width: 100vw;
  height: 100vh;
}
</style>
