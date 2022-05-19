import { reactive } from 'vue';

const musics = {
  "/musics/death.mp3"                   : "Death",
  "/musics/door.mp3"                    : "Door",
  "/musics/key.mp3"                     : "Key",
  "/musics/living_mice.mp3"             : "Living Mice",
  "/musics/subwoofer_lullaby.mp3"       : "Subwoofer Lullaby",
};

const music_files = [
  "/musics/death.mp3",
  "/musics/door.mp3",
  "/musics/key.mp3",
  "/musics/living_mice.mp3",
  "/musics/subwoofer_lullaby.mp3",
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

    if(musics[state.music_files[rand_num]] === prev)
    {
      return getRandomMusic(prev);
    }

    const path = state.music_files[rand_num];

    return {
      name: musics[path],
      path,
    }
  }
  
  return {
    state,
    getRandomMusic,
  };
}
