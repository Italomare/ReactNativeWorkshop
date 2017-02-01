import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWuB5XLygcYHgPfgmvK9cqTXgQoF9gM3c",
  authDomain: "react-native-workshop-toronto.firebaseapp.com",
  databaseURL: "https://react-native-workshop-toronto.firebaseio.com",
  storageBucket: "react-native-workshop-toronto.appspot.com",
  messagingSenderId: "1060807346956"
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
