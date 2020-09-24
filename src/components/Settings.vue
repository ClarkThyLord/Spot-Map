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
          <f7-list-item>
            <span>Dark Theme</span>
            <f7-toggle :checked="DarkTheme"></f7-toggle>
          </f7-list-item>

          <f7-list-input
            type="select"
            label="Theme"
            :value="Theme"
            placeholder="Please choose..."
          >
            <option value="auto">Auto</option>
            <option value="ios">IOS</option>
            <option value="md">Android</option>
            <option value="aurora">Aurora</option>
          </f7-list-input>

          <f7-list-input
            type="password"
            :value="GoogleMapsAPIKey"
            label="Goggle Maps API Key"
            placeholder="Goggle Maps API Key"
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
      Theme: "auto",
      DarkTheme: false,
      GoogleMapsAPIKey: "",
      PopupOpened: false,
    };
  },
};
</script>

<style>
</style>