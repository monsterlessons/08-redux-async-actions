import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';

export default combineReducers({
  tracks,
  playlists
});
