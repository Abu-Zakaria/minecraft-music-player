import { reactive } from 'vue';

const musics = {
  "/musics/death.mp3"           : "Death",
  "/musics/door.mp3"            : "Door",
  "/musics/key.mp3"             : "Key",
  "/musics/living_mice.mp3"     : "Living Mice",
  "/musics/lullaaby.mp3"        : "Lullaby",
};

const music_files = [
  "/musics/death.mp3",
  "/musics/door.mp3",
  "/musics/key.mp3",
  "/musics/living_mice.mp3",
  "/musics/lullaaby.mp3",
];

export default () => {
  const state = reactive({
      music_files,
  })


  const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  };

  const getRandomMusic = (prev = null) => {
    const rand_num = getRandomNumberBetween(0, state.music_files.length - 1);

    if(rand_num === prev)
    {
      getRandomMusic(prev);
      return;
    }

    const path = state.music_files[rand_num];

    return {
      music_name: musics[path],
      path,
    }
  }
  
  return {
    state,
    getRandomMusic,
  };
}
