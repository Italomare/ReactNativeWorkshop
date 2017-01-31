import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCxNUhNML2uw_NCEGiSQCHBgAaux7E5cTU",
  authDomain: "reactnativeworkshop.firebaseapp.com",
  databaseURL: "https://reactnativeworkshop.firebaseio.com",
  storageBucket: "reactnativeworkshop.appspot.com",
  messagingSenderId: "659877549359"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


/**
 * Create a user based on the username
 *
 * @param username
 */
export function createUser(username) {
  return firebaseApp.database().ref(`users/${username}`).set({
    username,
    likes: {}
  });
}

/**
 * Retrieve users gif likes based on username
 *
 * @param username
 */
export function getLikes(username){
  return firebaseApp.database().ref(`users/${username}/likes`).once('value')
    .then((snapshot) => {
      return snapshot.val();
    });
}

/**
 * Like a gif for a user
 *
 * @param username
 * @param gif
 */
export function like(username, gif){
  return firebaseApp.database().ref(`users/${username}/likes/${gif.id}`).set(gif);
}
