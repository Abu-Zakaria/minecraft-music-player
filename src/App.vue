<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <PlayerComponent />
  </div>
</template>

<script>
import PlayerComponent from "./components/PlayerComponent.vue";

export default {
  name: "App",
  components: {
    PlayerComponent,
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

.mc-text {
  font-family: "Minecraft";
  letter-spacing: 2px;
  font-weight: bold;
}

.text-white {
  color: #fff;
}
</style>
