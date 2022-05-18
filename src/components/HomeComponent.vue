<template>
  <div>
    <div id="home">
      <div class="player">
        <img src="../assets/jukebox.webp" class="jukebox-img" alt="Play">
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
  z-index: 9;
  position: fixed;
  top: 35%;
  left: 40%;
  width: 20%;
}

.blur {
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 4px;
}

.player {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  padding: 40px 0;
  height: 100%;
  width: 100%;
}

.jukebox-img {
  width: 40px;
  height: 40px;
}

</style>

