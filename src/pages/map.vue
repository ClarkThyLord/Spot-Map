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
        imagePath:
          "./static/cluster/m",
      });

      const input = document.querySelector("#MapSearch input");
      const searchBox = new google.maps.places.SearchBox(input);
      this.map.addListener("bounds_changed", () => {
        searchBox.setBounds(this.map.getBounds());
      });

      // let markers = [];
      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }
        // Clear out the old markers.
        // markers.forEach((marker) => {
        //   marker.setMap(null);
        // });
        // markers = [];
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          // const icon = {
          //   url: place.icon,
          //   size: new google.maps.Size(71, 71),
          //   origin: new google.maps.Point(0, 0),
          //   anchor: new google.maps.Point(17, 34),
          //   scaledSize: new google.maps.Size(25, 25),
          // };
          // // Create a marker for each place.
          // markers.push(
          //   new google.maps.Marker({
          //     this.map,
          //     icon,
          //     title: place.name,
          //     position: place.geometry.location,
          //   })
          // );

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        this.map.fitBounds(bounds);
      });

      let infoWindow;
      this.map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        if (infoWindow) infoWindow.close();

        // Create a new InfoWindow.
        // console.log(mapsMouseEvent.latLng);
        // console.log(mapsMouseEvent.latLng.lat, mapsMouseEvent.latLng.lng);
        // console.log(this);
        this.$refs.LocationAdder.open(
          mapsMouseEvent.latLng.lat(),
          mapsMouseEvent.latLng.lng()
        );
        // infoWindow = new google.maps.InfoWindow({
        //   position: mapsMouseEvent.latLng,
        // });
        // infoWindow.setContent(mapsMouseEvent.latLng.toString());
        // infoWindow.open(this.map);
      });
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    add_location: function (name, lat, lng) {
      let marker = new google.maps.Marker({
        map: this.map,
        title: name,
        position: { lat: lat, lng: lng },
      });
      this.markerCluster.addMarker(marker);
      this.markers.push(marker);
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
