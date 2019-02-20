<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './util/amfe-flexible.min.js'

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./util/reset.css";
@import "./util/base.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background: #07102F;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
