import { reactive } from 'vue';

const musics = {
  "death.mp3"                   : "Death",
  "door.mp3"                    : "Door",
  "key.mp3"                     : "Key",
  "living_mice.mp3"             : "Living Mice",
  "subwoofer_lullaby.mp3"       : "Subwoofer Lullaby",
  "dry_hands.mp3"               : "Dry Hands",
  "equinoxe.mp3"                : "Équinoxe",
  "haggstrom.mp3"               : "Haggstrom",
  "mice_on_venus.mp3"           : "Mice on Venus",
  "minecraft.mp3"               : "Minecraft",
  "oxygene.mp3"                 : "Oxygène",
  "wet_hands.mp3"               : "Wet Hands"
};

const music_files = [
  "death.mp3",
  "door.mp3",
  "key.mp3",
  "living_mice.mp3",
  "subwoofer_lullaby.mp3",
  "dry_hands.mp3",
  "equinoxe.mp3",
  "haggstrom.mp3",
  "mice_on_venus.mp3",
  "minecraft.mp3",
  "oxygene.mp3",
  "wet_hands.mp3"
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

    const music_file = state.music_files[rand_num];

    return {
      name: musics[music_file],
      path: "/musics/" + music_file,
    }
  }
  
  return {
    state,
    getRandomMusic,
  };
}
