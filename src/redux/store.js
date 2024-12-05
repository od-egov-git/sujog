// src/redux/store.js
import { createStore, combineReducers } from "redux";
import localizationReducer from "./reducers/localizationReducer";

const rootReducer = combineReducers({
  localization: localizationReducer,
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
