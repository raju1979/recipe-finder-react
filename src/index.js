import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './reducers';

import "./styles/styles.css";
import 'font-awesome/css/font-awesome.css'
import App from './components/App';

import {favoriteRecipes} from './actions';

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('Store::',store.getState());
})

// store.dispatch(favoriteRecipes({"name":"kari pakoda"}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
    document.getElementById('root')
)
