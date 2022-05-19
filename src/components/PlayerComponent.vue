<template>
  <div>
    <div id="player">
      <div class="player">
        <button type="button" class="play-btn" :class="{ 'playing': state.isPlaying, }" @click="togglePlay">
          <img src="../assets/jukebox.webp" class="jukebox-img" :class="{ 'beating': state.isPlaying }" alt="Play">
        </button>

        <div v-if="state.currentlyPlaying" class="music-status-wrapper mc-text text-white">
          <p>{{ state.currentlyPlaying }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import Musics from '../composables/musics.js';
import Player from '../composables/player.js';

export default {
  setup() {
    const state = reactive({
      isPlaying: false,
      currentlyPlaying: null,
    });

    const { getRandomMusic } = Musics();
    const { state: playerState, play, stop } = Player(() => {
        playRandomMusic();
    });

    const togglePlay = () => {
      state.isPlaying = !state.isPlaying;

      if(state.isPlaying) {
        if(!playerState.currentlyPlaying) {
          playRandomMusic();
        } else {
          play();
        }
      } else {
        stop();
      }
    }

    const playRandomMusic = () => {
      console.log("playing random")
      const music = getRandomMusic(state.currentlyPlaying);
      console.log("selected: ", music);

      play(music.path, music.name, (current_playing) => {
        state.currentlyPlaying = current_playing;
        console.log("Playing: ", state.currentlyPlaying);
      });
    }

    return {
      state,
      togglePlay,
    }
  },
}
</script>

<style scoped>
#player {
  z-index: 9;
  position: fixed;
  top: 35%;
  left: 40%;
  width: 20%;
}

@media screen and (max-width: 990px) {
  #player {
    left: 15%;
    width: 70%;
  }
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

.jukebox-img.beating {
  animation-name: beating;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
}

@keyframes playingAnim {
  from {
    box-shadow: 0 0 1px 0px rgba(115, 115, 115, 0.3);
  }

  35% {
    box-shadow: 0 0 1px 16px rgba(115, 115, 115, 0.3);
  }

  to {
    box-shadow: 0 0 2px 25px rgba(115, 115, 115, 0);
  }
}

@keyframes beating {
  0% {
    transform: scale(1);
  }

  12% {
    transform: scale(0.8);
  }

  25% {
    transform: scale(0.9);
  }

  33% {
    transform: scale(1.1);
  }

  37% {
    transform: scale(0.97);
  }

  50% {
    transform: scale(1);
  }
}

.music-status-wrapper {
  margin-top: 40px;
}

</style>

