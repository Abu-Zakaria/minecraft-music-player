<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  background: url('assets/background.webp');
  background-size: cover;
  height: 100vh;
}

.overlay {
  height: 100vh;
  z-index: 5;
  background: #000;
  opacity: 0.4;
}
</style>
