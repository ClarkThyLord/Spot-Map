<template>
  <f7-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="ShowPreloader"
    @infinite="load_history"
    :no-navbar="true"
    :no-toolbar="true"
  >
    <f7-block-title style="display: flex;">
      <span style="flex: 1;">
        <h1>History</h1>
      </span>
      <f7-link v-if="history.length > 0" href @click="clear_history">
        <h3>Clear History</h3>
      </f7-link>
    </f7-block-title>
    <f7-list media-list>
      <f7-list-item
        v-for="(location, index) in history"
        link
        @click="open_location"
        :title="location.title"
        :subtitle="location.timestamp"
        :text="location.address"
        :key="index"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      history: [],
      AllowInfinite: true,
      ShowPreloader: true,
    };
  },
  mounted: function () {
    for (let count = 0; count < 20; count++) {
      this.history.push({
        title: "Title placeholder",
        timestamp: "MM/DD/YYYY HH:MM:SS",
        address: "Very long adress placeholder",
      });
    }
  },
  methods: {
    clear_history: function () {
      this.history = [];
    },
    open_location: function () {
      console.log("opening location...");
    },
    load_history: function () {
      const self = this;
      if (!self.AllowInfinite) return;
      self.AllowInfinite = false;

      setTimeout(() => {
        if (self.history.length >= 200) {
          self.ShowPreloader = false;
          return;
        }

        for (let i = 1; i <= 20; i += 1) {
          this.history.push({
            title: "Title placeholder",
            timestamp: "MM/DD/YYYY HH:MM:SS",
            address: "Very long adress placeholder",
          });
        }

        self.AllowInfinite = true;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.page-content {
  padding: 0px !important;
}
</style>