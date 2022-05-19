import { reactive } from 'vue';

export default () => {
  const state = reactive({
    audio: null,
    currentlyPlaying: null,
  })

  const play = (path = null, name = null) => {
    if(path) {
      state.audio = new Audio(path);
      state.currentlyPlaying = name;
    }

    state.audio.play();
  }

  const stop = () => {
    if(!state.currentlyPlaying) {
      return null;
    }

    console.log("pausing...")
    state.audio.pause();
  }

  return {
    state,
    play,
    stop,
  };
}
