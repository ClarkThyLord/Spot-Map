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
      info: undefined,
      markerCluster: undefined,
      internalization: {
        english: {
          activity: "Activity",
          reports: "Report Rate",
          directions: "Get directions",
        },
        spanish: {
          activity: "Actividad",
          reports: "Tasa de Reportaje",
          directions: "Direcciones",
        },
      },
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

      let location = { address: "Tijuana" };
      if (
        this.$f7.views.main.router.currentRoute.query.lat != undefined &&
        this.$f7.views.main.router.currentRoute.query.lng != undefined
      ) {
        location = {
          location: {
            lat: parseFloat(this.$f7.views.main.router.currentRoute.query.lat),
            lng: parseFloat(this.$f7.views.main.router.currentRoute.query.lng),
          },
        };
      }

      geocoder.geocode(location, (results, status) => {
        if (status !== "OK" || !results[0]) {
          this.error = true;
          throw new Error(status);
        }

        this.map.setCenter(results[0].geometry.location);
        this.map.fitBounds(results[0].geometry.viewport);
      });

      this.info = new google.maps.InfoWindow();

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
          activity: marker.activity,
          reports: marker.reports,
        });
      });
      this.session.set_markers(markers);
    },
    load_markers: function () {
      this.session.markers.forEach((marker) => {
        this.add_location(
          marker.title,
          marker.lat,
          marker.lng,
          marker.activity,
          marker.reports
        );
      });
    },
    add_location: function (
      name,
      lat,
      lng,
      activity = undefined,
      reports = undefined
    ) {
      if (activity == undefined)
        activity = (
          Math.floor(Math.random() * Math.floor(10)) + Math.random()
        ).toFixed(2);
      if (reports == undefined)
        reports = Math.floor(Math.random() * Math.floor(75 * (activity / 10)));
      let marker = new google.maps.Marker({
        map: this.map,
        title: name,
        position: { lat: lat, lng: lng },
        activity: activity,
        reports: reports,
      });

      marker.addListener("click", () => {
        let url = "";
        let info_txt =
          "<b>" +
          name +
          "</b><br />" +
          this.internalization[this.session.language]["activity"] +
          ": <i>" +
          marker.activity +
          "</i><br />" +
          this.internalization[this.session.language]["reports"] +
          ": <i>" +
          marker.reports +
          "</i><br />";
        if (window.cordova.platformId == "browser")
          url = "http://maps.google.com/?q=" + lat + "," + lng;
        else if (window.cordova.platformId == "ios")
          url = "comgooglemaps://?q=" + lat + "," + lng;
        else if (window.cordova.platformId == "android")
          url = "geo:" + lat + "," + lng;
        info_txt +=
          '<a href="' +
          url +
          '" target="_blank">' +
          this.internalization[this.session.language]["directions"] +
          "...</a>";
        this.info.setContent(info_txt);
        this.info.open(this.map, marker);
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
