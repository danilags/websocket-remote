var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyDSkBIEZuyNQi8HYlqcG7Z1jS5m2lvqHX4",
    authDomain: "mychatting-6fa19.firebaseapp.com",
    databaseURL: "https://mychatting-6fa19.firebaseio.com",
    projectId: "mychatting-6fa19",
    storageBucket: "mychatting-6fa19.appspot.com",
    messagingSenderId: "355712741917"
  };
firebase.initializeApp(config);

function writeUserData(userId, name, email) {
  firebase.database().ref('users/2').set({
    username: name,
    email: email
  });
}
writeUserData("2", "Agus", "agus@gmail.com")
