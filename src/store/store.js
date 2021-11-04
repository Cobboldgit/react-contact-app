import { createStore, compose, applyMiddleware } from "redux";
import {getFirebase, reduxFirebase, reduxReactFirebase} from "react-redux-firebase";
import {getFirestore, reduxFirestore} from "redux-firestore"
import thunk from "redux-thunk";
import firebase from "../firebase/Config";
import contactReducer from "../reducers/contactReducer";

const store = createStore(contactReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase),
    reduxReactFirebase(firebase)
));

export default store;
