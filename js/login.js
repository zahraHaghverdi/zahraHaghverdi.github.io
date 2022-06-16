
var inputEmail = document.getElementById("inputEmail");
var spanErrorEmail = document.getElementById("spanErrorEmail");

var inputPasword = document.getElementById("inputPasword");
var spanErrorPasword = document.getElementById("spanErrorPasword");

var inputText = document.getElementById("inputText");
var spanErrorText = document.getElementById("spanErrorText");


var checkbox = document.getElementById("checkbox");

function userEmail() {
  if (inputEmail.value.length < 8) {
    spanErrorEmail.innerHTML = "حداقل کارکتر مدنظر 8 تا";
  }
  else{
    spanErrorEmail.innerHTML = "";
  }
}
function userPasword() {
  if (inputPasword.value.length < 6) {
    spanErrorPasword.innerHTML = "حداقل کارکتر مدنظر 6 تا";
  }
  else{
    spanErrorPasword.innerHTML = "";
  }
}
function userText() {
  if (inputText.value.length < 4) {
    spanErrorText.innerHTML = "حداقل کارکتر مدنظر4 تا";
  }  else if(inputText.value.length > 4) {
    spanErrorText.innerHTML = "حداقل کارکتر مدنظر4 تا";
  } 
  else{
    spanErrorText.innerHTML = "";
  }
}

function loginButtonTorget(event) {
    if (inputEmail.value == null || inputEmail.value == "" || 
     inputPasword.value== null || inputPasword.value == "" || 
     inputText.value==null || inputText.value==""){
        alert("فیلدها  نباید خالی باشد");
        event.preventDefault();
      }
       else{
        form.style.action = "login.html";
      }
}
function loginButton(event) {
    if (inputEmail.value == null || inputEmail.value == ""){
        alert("فیلد نباید خالی باشد");
        event.preventDefault();
      }
       else{
        form.style.action = "taeide-pasword.html";
      }
}
function loginButtonTaeid(event) {
    if (inputText.value == null || inputText.value == ""){
        alert("فیلد نباید خالی باشد");
        event.preventDefault();
      }
       else{
        form.style.action = "home.html";
      }
}


