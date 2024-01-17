

function lg()
{
  var nme=document.getElementById("name").value;
  var pass=document.getElementById("pss").value;
  if (nme == "8849478730" && pass == "8849478730") {
    alert("You are Logged in successfully");
    window.location="dash.html";
  } else {
    alert("password is incorrect");
    window.location="index.html";
  }
}


function logout()
{
    if(confirm('Are you sure to Logout as Users ?')==true)
    {
      window.location='index.html'
    }
    else{
      window.location='dash.html'
    }
}