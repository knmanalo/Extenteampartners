// Initialize Firebase with your configuration
var firebaseConfig = {
      apiKey: "AIzaSyBvi0SlOG89VkMfmWFP94sVLHBn7TUXzIw",
	  authDomain: "partners-d11b9.firebaseapp.com",
      databaseURL: "https://partners-d11b9-default-rtdb.firebaseio.com",
      projectId: "partners-d11b9",
      storageBucket: "partners-d11b9.appspot.com",
      messagingSenderId: "826315710700",
      appId: "1:826315710700:web:b3c151c623680605cbc5c9"
};
firebase.initializeApp(firebaseConfig);

function login() {
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to the appropriate dashboard page after successful login
      var user = userCredential.user;
      if (user.email === "aircoms@extenteampartners.com") {
        window.location.href = "aircommunities.html";
      } else if (user.email === "aspace@extenteampartners.com") {
        window.location.href = "aspace.html";
	  } else if (user.email === "alexanderfi@extenteampartners.com") {
        window.location.href = "alexanderforrestinvestments.html";
      }
    })
    .catch((error) => {
      // Handle sign-in errors
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
}


document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    login();
  }
});
