<template>
  <div id="app">
    <div class="iphone">
      <div class="iphone-top">
        <span class="camera"></span>
        <span class="sensor"></span>
        <span class="speaker"></span>
      </div>
      <div class="top-bar"></div>
      <div class="iphone-screen">
        <div class="heat-map">
          <div class="LCM" style="height: 700px">
          </div>
        </div>
        <div class="buttons">
          <span class="on-off"></span>
          <span class="sleep"></span>
          <span class="up"></span>
          <span class="down"></span>
        </div>
        <div class="bottom-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../scss/mobile.scss";
</style>
