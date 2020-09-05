<template>
  <f7-panel left>
    <div class="sidebar-content">
      <div class="logo-space">
        <img src="~/static/Spot-Map.logo.png" class="logo" />
      </div>

      <f7-list class="sidebar-items">
        <f7-list-item title="Map" link="/" panel-close></f7-list-item>
        <f7-list-item title="History" link="/history/" panel-close></f7-list-item>
        <f7-list-item title="Alert COVID" link="/alert/" panel-close></f7-list-item>
        <f7-list-item title="Generate QR" link="/generate/" panel-close></f7-list-item>
      </f7-list>

      <div class="sidebar-info">
        <f7-link style="margin-bottom: 5px;" link="/sign-in/" panel-close>Business? Sign-in here</f7-link>
        <br />
        <f7-link href="https://github.com/ClarkThyLord/Spot-Map#about" external target="_blank">
          <f7-icon f7="info_circle"></f7-icon>
        </f7-link>
        <f7-link href="https://github.com/ClarkThyLord/Spot-Map/issues" external target="_blank">
          <f7-icon f7="question_circle"></f7-icon>
        </f7-link>
        <f7-link href="https://github.com/ClarkThyLord/Spot-Map" external target="_blank">
          <f7-icon f7="logo_github"></f7-icon>
        </f7-link>
      </div>
    </div>
  </f7-panel>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.logo-space {
  margin: 15px;
  text-align: center;
}

.logo-space .logo {
  height: 40px;
  height: 40px;
  border-radius: 50%;
}

.sidebar-items {
  flex: 1;
  margin-top: 0;
}

.sidebar-info {
  margin: 15px;
  text-align: center;
}
</style>