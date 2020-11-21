let logIn         = document.querySelector(".log-in")
    signUp        = document.querySelector(".sign-up")
    open          = document.querySelector(".hamburger")
    mobileLogin   = document.querySelector(".top-nav2 .sign .log-in")
    mobileSignUp  = document.querySelector(".top-nav2 .sign .sign-up");

function login(){
  let overlay = document.querySelector(".overlay").classList.add("opacity");
  let details = document.querySelector(".login");
  details.classList.add("clear");
  details.style.display = "block";
}
function signIn(){
  let overlay = document.querySelector(".overlay").classList.add("opacity");
  let details = document.querySelector(".signin");
  details.classList.add("clear");
  details.style.display = "block";
}
function closeNav(){
  document.querySelector(".overlay").classList.remove("opacity2");
  document.querySelector(".side-nav").style.width= "0%";
  document.querySelector(".side-nav").classList.remove("view");
  document.querySelector(".side-nav").style.display= "none";
}
function mobileLoginFunc(){
  login();
 closeNav()
}
function mobileSignUpFunc(){
  signIn();
 closeNav()
}
logIn.addEventListener("click", login);
signUp.addEventListener("click", signIn);
document.querySelector(".close").addEventListener("click", closeNav)

document.querySelector(".submit-login").addEventListener("click", function(){
  document.querySelector(".overlay").classList.remove("opacity");
  document.querySelector(".login").style.display = "none";
})
document.querySelector(".submit-signup").addEventListener("click", function(){
  document.querySelector(".overlay").classList.remove("opacity");
  document.querySelector(".signin").style.display = "none";
})
open.addEventListener("click", function(){
  document.querySelector(".overlay").classList.add("opacity2");
  document.querySelector(".side-nav").style.width= "50%";
  document.querySelector(".side-nav").classList.add("view");
  document.querySelector(".side-nav").style.display= "block"
})
mobileLogin.addEventListener("click", mobileLoginFunc);
mobileSignUp.addEventListener("click", mobileSignUpFunc);
