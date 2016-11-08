// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore } from 'redux';

function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
  console.log('subscribe', store.getState());
})

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });
