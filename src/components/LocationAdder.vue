<template>
  <f7-popup
    class="location-adder"
    :opened="popupOpened"
    @popup:closed="popupOpened = false"
  >
    <f7-page>
      <f7-navbar :title="internalization[session.language]['locadd']">
        <f7-nav-right>
          <f7-link popup-close>{{
            internalization[session.language]["close"]
          }}</f7-link>
        </f7-nav-right>
      </f7-navbar>

      <f7-block>
        <f7-list no-hairlines-md>
          <f7-list-input
            type="text"
            :label="internalization[session.language]['locname']"
            :placeholder="internalization[session.language]['locname']"
            :value="name"
            @input="name = $event.target.value"
            clear-button
          >
          </f7-list-input>

          <f7-row>
            <f7-col>
              <f7-list no-hairlines-md>
                <f7-list-input
                  type="text"
                  :label="internalization[session.language]['lat']"
                  :placeholder="internalization[session.language]['lat']"
                  :value="latitude"
                  @input="latitude = $event.target.value"
                  clear-button
                >
                </f7-list-input>
              </f7-list>
            </f7-col>
            <f7-col>
              <f7-list no-hairlines-md>
                <f7-list-input
                  type="text"
                  :label="internalization[session.language]['lng']"
                  :placeholder="internalization[session.language]['lng']"
                  :value="longitude"
                  @input="longitude = $event.target.value"
                  clear-button
                >
                </f7-list-input>
              </f7-list>
            </f7-col>
          </f7-row>

          <div style="display: flex; justify-content: center">
            <f7-button @click="add_location">{{ internalization[session.language]["add"] }}</f7-button>
          </div>
        </f7-list>
      </f7-block>
    </f7-page>
  </f7-popup>
</template>

<script>
export default {
  data() {
    return {
      session: window.Session,
      name: "",
      latitude: "",
      longitude: "",
      popupOpened: false,
      internalization: {
        english: {
          locadd: "Location Adder",
          close: "Close",
          locname: "Location Name",
          lat: "Latitude",
          lng: "Longitude",
          add: "ADD",
        },
        spanish: {
          locadd: "Agregar Ubicación",
          close: "Cerrar",
          locname: "Nombre de Ubicación",
          lat: "Latitud",
          lng: "Longitud",
          add: "AGREGAR",
        },
      },
    };
  },
  methods: {
    open: function (latitude, longitude) {
      this.name = "";
      this.latitude = latitude;
      this.longitude = longitude;
      this.popupOpened = true;
    },
    add_location: function () {
      this.$emit("add", this.name, this.latitude, this.longitude);
      this.popupOpened = false;
    },
  },
};
</script>

<style>
</style>