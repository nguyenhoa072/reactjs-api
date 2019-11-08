import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC_igOJMnzY-PXLGYJpCP2IhoY7TqHA2Hk",
  authDomain: "hoant-74fb4.firebaseapp.com",
  databaseURL: "https://hoant-74fb4.firebaseio.com",
  projectId: "hoant-74fb4",
  storageBucket: "hoant-74fb4.appspot.com",
  messagingSenderId: "256408849779",
  appId: "1:256408849779:web:d947a6f9a7816052"
};

// export const firebaseConcent =  firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.firebase = app.auth();
  }
}

export default Firebase;