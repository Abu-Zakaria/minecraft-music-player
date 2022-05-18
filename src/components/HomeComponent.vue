<template>
  <div>
    <div id="home">
      <div class="player">
        <button type="button" class="play-btn" :class="{ 'playing': state.isPlaying }" @click="togglePlay">
          <img src="../assets/jukebox.webp" class="jukebox-img" alt="Play">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      isPlaying: false,
    });

    const togglePlay = () => {
      state.isPlaying = !state.isPlaying;
    }

    return {
      state,
      togglePlay,
    }
  },
}
</script>

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

.play-btn {
  background: transparent;
  border: 0;
  padding: 15px 18px;
  border-radius: 50%;
  cursor: pointer;
}

.play-btn.playing {
  animation-name: playingAnim;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  animation-timing-function: linear;
}

@keyframes playingAnim {
  from {
    box-shadow: 0 0 1px 2px rgba(115, 115, 115, 0.7);
    transform: rotateZ(0deg);
  }

  25% {
    transform: rotateZ(8deg);
  }

  75% {
    transform: rotateZ(-8deg);
  }

  to {
    box-shadow: 0 0 2px 25px rgba(115, 115, 115, 0);
    transform: rotateZ(0deg);
  }
}

</style>

