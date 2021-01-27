/* eslint-disable */
import { createStore } from "redux"
import reducers from '../reducers/reducer'
<<<<<<< HEAD
var store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
=======
var store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
>>>>>>> e502979bc1f05e16b75650e60af9cc1b78c3f6d5
export default store;

