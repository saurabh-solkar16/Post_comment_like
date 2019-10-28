import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Allreducers from './components/reducers/allreducers'
import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import post from './components/posts';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var mystate={
    value:6,
    username:""
}


var posts={
    email:"",
    description:"",
    likes:0,
    comments:[]
}
function postsreducer (state = posts, action) {
    switch (action.type) {
    case 'add':
      return { value: state.value + 1 }
 
    default:
      return state
    }
  }


function counter (state = mystate, action) {
    switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
    }
  }



  var x1= combineReducers({counter:counter,posts:posts})
  let store = createStore(x1)


console.log(store.getState())










ReactDOM.render(<Provider store={store}><div className="container"><App /></div></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
