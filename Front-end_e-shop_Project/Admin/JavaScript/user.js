function getUser() {
    var email = document.getElementById("staticEmail2").value;
    var password = document.getElementById("inputPassword2").value;
    var req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:3000/password/" + "?" + "email=" + email + "&" + "password=" + password, true);
    req.onload = function () {
      if (req.status == 200) {
        user = JSON.parse(req.response); 
        if (user.length == 1) {
            location.replace("main.html");

        }else{
           document.getElementById("pEmail").innerHTML = "Oops...Wronge Email or Password";           
        };
      } else {
        console.error("Problem loading user : " + req.status);
      }
    };
    req.send();
}

  
  