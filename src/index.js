import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const defaulState = {type:'', scoreX: 0, scoreO: 0};
const reducer = (state = defaulState, action) => {
  switch (action.type) {
    case 'xWin':
      return {...state, scoreX: state.scoreX+1};
    case 'oWin':
      return {...state, scoreO: state.scoreO+1};
    default: return state;
      break;
  }
};


const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
