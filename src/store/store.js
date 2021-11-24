import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import {
  getFirebase,
  reduxReactFirebase,
  firebaseReducer,
} from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../firebase/Config";
import contactReducer from "../reducers/contactReducer";

const Reducer = combineReducers({
  contactReducer,
  firebaseReducer,
});

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase),
    reduxReactFirebase(firebase)
  )
);

export default store;
