<template>
  <f7-popup
    class="demo-popup"
    :opened="popupOpened"
    @popup:closed="popupOpened = false"
  >
    <f7-page>
      <f7-navbar title="Location Adder">
        <f7-nav-right>
          <f7-link popup-close>Close</f7-link>
        </f7-nav-right>
      </f7-navbar>

      <f7-block>
        <f7-list no-hairlines-md>
          <f7-list-input
            label="Name"
            type="text"
            placeholder="Location Name"
            :value="name"
            @input="name = $event.target.value"
            clear-button
          >
          </f7-list-input>

          <f7-row>
            <f7-col>
              <f7-list no-hairlines-md>
                <f7-list-input
                  label="Latitude"
                  type="text"
                  placeholder="Latitude"
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
                  label="Longitude"
                  type="text"
                  placeholder="Longitude"
                  :value="longitude"
                  @input="longitude = $event.target.value"
                  clear-button
                >
                </f7-list-input>
              </f7-list>
            </f7-col>
          </f7-row>

          <div style="display: flex; justify-content: center">
            <f7-button @click="add_location">ADD</f7-button>
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
      name: "",
      latitude: "",
      longitude: "",
      popupOpened: false,
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