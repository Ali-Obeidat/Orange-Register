let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let emailREQ = document.getElementById("emailREQ");
let mobileREQ = document.getElementById("mobileREQ");
let passwordREQ = document.getElementById("passwordREQ");
let password = document.getElementById("password");
let chAgree = document.getElementById("chAgree");
let signUp = document.querySelector(".next1");
let AgreeMasg = document.querySelector(".Agree");
let regexEmail = /^[a-z0-9._-]+@(gmail|yahoo).com$/;
let regexMobile = /^[0][7][7][0-9]{7}$/;
let regexPass = /^[A-Z]{6,18}$/i;

signUp.addEventListener("click", function (e) {
  if (email.value === "") {
    emailREQ.innerHTML = `/The email field is required/`;
  } else {
    if (email.value.match(regexEmail)) {
      emailREQ.innerText = "true";
    } else {
      emailREQ.innerText = "/The email should be like Eg/ ";
    }
  }
  if (mobile.value === "") {
    mobileREQ.innerHTML = `/The mobile field is required/`;
  } else {
    if (mobile.value.match(regexMobile)) {
      mobileREQ.innerText = "valid";
    } else {
      mobileREQ.innerText = "The mobile should be start with 077 and valid  ";
    }
  }
  if (password.value === "") {
    passwordREQ.innerHTML = `/The password field is required/`;
  } else {
    if (password.value.match(regexPass)) {
      passwordREQ.innerHTML = "The password is true";
    } else {
      passwordREQ.innerText = `/The password mast have 6-8 character/`;
    }
  }
  try {
    if (!chAgree.checked) {
      throw `/The checkbox should be checked/`;
    } else {
      throw ``;
    }
  } catch (err) {
    AgreeMasg.innerHTML = err;
  }
  e.preventDefault();
});

