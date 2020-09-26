<template>
  <f7-page :no-navbar="true" :no-toolbar="true">
    <div
      v-if="error"
      style="color: gray; opacity: 0.6"
      class="text-align-center justify-content-center align-content-center"
    >
      <f7-icon color="gray" size="256px" f7="wifi_exclamationmark"></f7-icon>
      <h1>Oh no, something went wrong!</h1>
    </div>

    <div v-else class="expand" id="Map">
      <div class="expand" ref="MapContent"></div>
    </div>

    <location-adder
      v-on:add="add_location"
      ref="LocationAdder"
    ></location-adder>
  </f7-page>
</template>

<script>
import gmapsInit from "../assets/js/gmaps";
import MarkerClusterer from "@googlemaps/markerclustererplus";

import LocationAdder from "../components/LocationAdder.vue";

export default {
  name: "Map",
  components: {
    LocationAdder,
  },
  data: function () {
    return {
      session: window.Session,
      error: false,
      markers: [],
      map: undefined,
      markerCluster: undefined,
    };
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      this.map = new google.maps.Map(this.$refs.MapContent, {
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      });

      geocoder.geocode({ address: "Tijuana" }, (results, status) => {
        if (status !== "OK" || !results[0]) {
          this.error = true;
          throw new Error(status);
        }

        this.map.setCenter(results[0].geometry.location);
        this.map.fitBounds(results[0].geometry.viewport);
      });

      this.markerCluster = new MarkerClusterer(this.map, this.markers, {
        imagePath: "./static/cluster/m",
      });

      const input = document.querySelector("#MapSearch input");
      const searchBox = new google.maps.places.SearchBox(input);
      this.map.addListener("bounds_changed", () => {
        searchBox.setBounds(this.map.getBounds());
      });

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        this.map.fitBounds(bounds);
      });

      this.map.addListener("click", (mapsMouseEvent) => {
        if (this.session.developer_mode) {
          this.$refs.LocationAdder.open(
            mapsMouseEvent.latLng.lat(),
            mapsMouseEvent.latLng.lng()
          );
        }
      });

      this.load_markers();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    save_markers: function () {
      let markers = [];
      this.markers.forEach((marker) => {
        markers.push({
          title: marker.title,
          lat: marker.position.lat(),
          lng: marker.position.lng(),
        });
      });
      this.session.set_markers(markers);
    },
    load_markers: function () {
      console.log(this.session.markers);
      this.session.markers.forEach((marker) => {
        console.log(marker);
        this.add_location(marker.title, marker.lat, marker.lng);
      });
    },
    add_location: function (name, lat, lng) {
      let marker = new google.maps.Marker({
        map: this.map,
        title: name,
        position: { lat: lat, lng: lng },
      });

      marker.addListener("dblclick", (event) => {
        this.remove_location(marker);
      });

      this.markerCluster.addMarker(marker);
      this.markers.push(marker);
      this.save_markers();
    },
    remove_location: function (marker) {
      let index = this.markers.indexOf(marker);
      if (index > -1) this.markers.splice(index, 1);
      this.markerCluster.removeMarker(marker);
      marker.setMap(null);
      this.save_markers();
    },
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
