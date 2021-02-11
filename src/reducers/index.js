import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Alja Gwiazd', duratino: '6:55' },
    { title: 'szalona', duratino: '4:34' },
    { title: 'Rudy sie zenie', duratino: '1:20' },
    { title: 'samba', duratino: '3:44' },
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
