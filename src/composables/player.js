import { reactive } from 'vue';

export default (at_ended_callback) => {
  const state = reactive({
    audio: null,
    currentlyPlaying: null,
  })

  const play = (path = null, name = null, started_callback) => {
    if(path) {
      state.audio = new Audio(path);
      state.currentlyPlaying = name;
    }
    else
    {
      state.audio.play();
      return;
    }

    state.audio.addEventListener('canplay', () => {
      state.audio.play();
      started_callback(state.currentlyPlaying)
    })

    state.audio.addEventListener('canplaythrough', () => {
      state.audio.addEventListener('ended', () => {
        console.log("ended")
        at_ended_callback();
      });
    })
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
