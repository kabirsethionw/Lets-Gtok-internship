 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA4Y30-d15eYZ2n03tGKvF_4o-nVwq4cK8",
    authDomain: "lets-gtok-internship.firebaseapp.com",
    databaseURL: "https://lets-gtok-internship-default-rtdb.firebaseio.com",
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

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  alert("Please view desktop version.");
}
//GET
var ptr = 0;
var messageText = ["#box1 #post1", "#box1 #post2", "#box2 #post1", "#box2 #post2"]
usersRef.on("child_added", snap => {
  if(ptr>3) return;
  let post = document.querySelector(messageText[ptr])
  post.children[1].innerHTML = snap.val().message;
  let usrname = post.children[2].getElementsByTagName("strong")[0];
  usrname.innerHTML = "@" + snap.val().name.replace(/\s/g,"_");
  let email = document.createTextNode(snap.val().email)
  post.children[2].appendChild(email);
  
  console.log(snap.val());
  ptr++;
});

//POST
document.getElementById("post-message").addEventListener("click", function(){
  var data = {}
  for(let i = 1; i < 8; i += 3){
    let key = document.getElementById("contact-form").children[i].getAttribute("name");
    let value = document.getElementById("contact-form").children[i].value;
    data[key] = value;
  }
  console.log(data)

  usersRef.push(data, function(){
    console.log("Saving data...");
  }).then(res => {
    console.log("address key = " + res.key) ;
    alert("Data saved U+2713")
  });
  
});

