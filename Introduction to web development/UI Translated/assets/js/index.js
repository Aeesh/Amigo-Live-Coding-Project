email = document.getElementById("email");
var password = document.getElementById("password").value;
var message = document.getElementById("message");
document.getElementById("btn").addEventListener("click", function() {
  if (email.value == "unclebigbay@gmail.com"){
    const check = confirm("Continue to login as " + email.value);
    if (check == false)
    {
      alert("Redirecting to Login page");
    }
    else
    {
      // window.location.assign("online link.html", 500)
      window.location.href = "https://amigo-ui-translate.netlify.app", 500;
      alert(`Redirecting ${email.value} to Dashboard: `)
    }
  }
  else{
    alert("User name or Password incorrect")
  }
});
