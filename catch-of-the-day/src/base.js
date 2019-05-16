import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2BijWNZSgWqtC95GWYOv_oc6peU-eHwo",
  authDomain: "catch-of-the-day-13684.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-13684.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

//This is a named export
export { firebaseApp };

//this is a default export
export default base;
