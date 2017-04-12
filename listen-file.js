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

var database = firebase.database();

var starCountRef = firebase.database().ref('users/2');
starCountRef.on('value', function(snapshot) {
  console.log("get realtime data : ",snapshot.val());
});
