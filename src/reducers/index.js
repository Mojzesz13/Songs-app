import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Aleja Gwiazd', duration: '6:55' },
    { title: 'Szalona', duration: '4:34' },
    { title: 'Rudy sie zenie', duration: '1:20' },
    { title: 'Szambo', duration: '3:44' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
