<template>
  <f7-popup
    class="Settings"
    :opened="PopupOpened"
    @popup:closed="PopupOpened = false"
  >
    <f7-page>
      <f7-navbar title="Settings">
        <f7-nav-right>
          <f7-link popup-close>Close</f7-link>
        </f7-nav-right>
      </f7-navbar>

      <f7-block>
        <f7-list no-hairlines-md>
          <f7-list-input
            type="select"
            label="Theme"
            :value="session.theme"
            @input="theme_changed"
            placeholder="Please choose..."
          >
            <option value="auto">Auto</option>
            <option value="ios">IOS</option>
            <option value="md">Android</option>
            <option value="aurora">Aurora</option>
          </f7-list-input>

          <f7-list-item>
            <span>Dark Theme</span>
            <f7-toggle
              :value="session.dark_theme"
              @toggle:change="dark_theme_toggle"
            ></f7-toggle>
          </f7-list-item>

          <f7-list-input
            type="password"
            label="Goggle Maps API Key"
            placeholder="Goggle Maps API Key"
            :value="session.google_maps_api_key"
            @input="google_maps_api_key_changed"
            clear-button
          >
          </f7-list-input>
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
      PopupOpened: false,
    };
  },
  methods: {
    theme_changed: function (event) {
      this.session.theme = event.target.value;
      console.log(this.session.theme);
    },
    dark_theme_toggle: function (toggled) {
      this.session.dark_theme = toggled ? 1 : 0;
      console.log(this.session.dark_theme);
    },
    google_maps_api_key_changed: function (event) {
      this.session.google_maps_api_key = event.target.value;
      console.log(this.session.google_maps_api_key);
    },
  },
};
</script>

<style>
</style>