 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA4Y30-d15eYZ2n03tGKvF_4o-nVwq4cK8",
    authDomain: "lets-gtok-internship.firebaseapp.com",
    projectId: "lets-gtok-internship",
    storageBucket: "lets-gtok-internship.appspot.com",
    messagingSenderId: "973498021574",
    appId: "1:973498021574:web:b963ab0b19ea3398e089c7",
    measurementId: "G-867VSKRBV9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

usersRef.on("child_added", snap => {
    alert(snap.val().name);
    console.log(snap.Key);
});
// alert(usersRef);
// console.log(usersRef)
// var usrPosts = ["post1", "post2", "post3", "post4"];
// var ptr = 0;
// for(let post of usrPosts){
//     document.getElementById(post).children[1].innerHTML = usersRef[ptr];
//     ptr++;
// }



