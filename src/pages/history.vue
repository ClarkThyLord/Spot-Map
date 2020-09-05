<template>
  <f7-page :page-content="false">
    <f7-block-title>History</f7-block-title>
    <f7-list media-list>
      <f7-list-item
        v-for="location in history"
        v-bind:key="location"
        link=""
        @click="open_location"
        :title="location.title"
        :subtitle="location.timestamp"
        :text="location.address"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      history: [],
    };
  },
  mounted: function () {
    for (let count = 0; count < 100; count++) {
      this.history.push({
        title: "Title placeholder",
        timestamp: "MM/DD/YYYY HH:MM:SS",
        address: "Very long adress placeholder",
      });
    }
  },
  methods: {
    open_location: function () {
      console.log("opening location...");
    },
  },
};
</script>

<style>
</style>