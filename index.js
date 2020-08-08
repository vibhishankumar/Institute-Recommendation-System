//var database = firbase
/**
     * Handles the sign up button press.
     */


   function handleSignUp() {
       var email = document.getElementById('email').value;
       var password = document.getElementById('password').value;
       var namkeliye = document.getElementById('yourname').value;
     /*  
           if(namkeliye.length=="")
               {
                   //var myRef = firebase.database().ref().push();
                    //var key = myRef.key();
                
                   alert('enter you name');
                   return;
               }
  */
          if (email.length < 4) 
          {
            alert('Please enter an email address.');
            return;
          }

          if (password.length < 4) {
            alert('Please enter a password.');
            return;
          }
       
//progress bar
         var elem = document.getElementById("myBar");   
              var width = 1;
              var id = setInterval(frame, 10);
              function frame() {
                if (width >= 100) {
                  clearInterval(id);
                } else {
                  width++; 
                  elem.style.width = width + '%'; 
                }
              }
            // end of progressbar
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
         console.log(user); 
          // storing data in real time database
           // var myRef = firebase.database().ref().push();
            //var key = myRef.key();
          
        window.location.href="index.html";
      })
      .catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;
     
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password')
        {
          alert('The password is too weak.');
        }  
      else 
        {
            alert(errorMessage);
            
        }
        console.log(error);
	
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }


// login button

function login(){
    var email = document.getElementById('emaillogin').value;
    var password = document.getElementById('passwordlogin').value;
    
    if(email.length==""){
        alert('enter your email');
        return;
    }
    if(password.length==""){
        alert('enter your password');
        return;
    }
    // progressbar
       var elem = document.getElementById("myBar");   
              var width = 1;
              var id = setInterval(frame, 10);
              function frame() {
                if (width >= 100) {
                  clearInterval(id);
                } else {
                  width++; 
                  elem.style.width = width + '%'; 
                }
              }
            // end of progressbar
            
    // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(measuser){
            console.log(measuser);

            window.location.href = "index.html";

        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
              return;
          } 
        else {
            alert(errorMessage);
          }
          console.log(error);
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      //sssdocument.getElementById('quickstart-sign-in').disabled = true;
function out()
{
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
                    window.location.href = "login.html";
}).catch(function(error) {
  // An error happened.
});
}





    