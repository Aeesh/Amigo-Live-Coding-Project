email = document.getElementById("email");
var password = document.getElementById("password").value;
var message = document.getElementById("message");
document.getElementById("btn").addEventListener("click", function() {
  if (email.value != ""){
    const check = confirm("Continue to login as " + email.value);
    if (check == false)
    {
      alert("Redirecting to Login page");
    }
    else
    {
      // window.location.assign("online link.html", 500)
      window.location.href = "https://amigos-ui-contribution.netlify.app/ui-contribution/ui-translated/contents/confirm";
      alert(`Redirecting ${email.value} to Dashboard: `)
    }
  }
  else{
    alert("User name or Password incorrect")
  }
});
