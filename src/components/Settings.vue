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
            label="Language"
            :value="session.language"
            @input="session.set_language($event.target.value)"
            placeholder="Please choose..."
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </f7-list-input>

          <f7-list-input
            type="select"
            label="Theme"
            :value="session.theme"
            @input="set_theme"
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
              :checked="session.dark_theme == 1 ? true : false"
              @toggle:change="session.set_dark_theme($event ? 1 : 0)"
            ></f7-toggle>
          </f7-list-item>

          <f7-list-item>
            <span>Developer Mode</span>
            <f7-toggle
              :value="session.developer_mode"
              :checked="session.developer_mode == 1 ? true : false"
              @toggle:change="session.set_developer_mode($event ? 1 : 0)"
            ></f7-toggle>
          </f7-list-item>

          <f7-list-input
            type="password"
            label="Goggle Maps API Key"
            placeholder="Goggle Maps API Key"
            :value="session.google_maps_api_key"
            @input="set_google_maps_api_key"
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
      PopupOpened: false,
      session: window.Session,
    };
  },
  methods: {
    set_theme: function (event) {
      this.session.set_theme(event.target.value);
      window.location.href = '.';
    },
    set_google_maps_api_key: function (event) {
      this.session.set_google_maps_api_key(event.target.value);
      window.location.href = '.';
    }
  }
};
</script>

<style>
</style>