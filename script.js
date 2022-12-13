function singin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "ramhamed" && password == "looper.123") {
    window.location.href = "index.html";
  } else if (password != "looper.123" && username != "ramhamed") {
    alert("error wrong pass and username");
  } else if (username != "ramhamed") {
    alert("error wrong username");
  } else if (password != "loopr.123") {
    alert("error wrong Pass");
  }
}
function darkMode() {
    document.body.style.background="gray";
    element.classList.toggle("light-mode");
 }
 function lightMode() {
  document.body.style.background="lime";
    element.classList.toggle("dark-mode");

 }

 function changeBackgroundColor() {
  var newColor = document.getElementById("colorPicker").value;
  document.body.style.background = newColor;
 }





 function myFunction() {
    document.getElementById("myForm").submit();

    if (uname == "ramhamed" && pasword == "looper.123") {
      window.location.href = "index.html";
    }
  }
  function changeprofile() {
    var newimage = document.getElementById("upload").files[0].name;
    document.getElementById("profilepic").src = newimage;
  }
  function addtolist() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");

    li.appendChild(
      document.createTextNode(document.getElementById("mhmd").value)
    );
    ul.appendChild(li);
  }