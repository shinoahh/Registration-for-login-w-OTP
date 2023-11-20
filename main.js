let random = Math.random()*1000000;
let otp = Math.ceil(random);
// Where OTP will generate 

let userName = document.querySelector(".user");
let password = document.querySelector(".pass");
let confirmPassword = document.querySelector(".confirmPass");
let inputOtp = document.querySelector(".otp");
let signIn = document.querySelector(".signin");
let logIn = document.querySelector(".login");
//components from html

signIn.addEventListener("click", ()=>{
  
  if(userName.value != "" && password != "" && password.value == confirmPassword.value){
    alert("account successfully created");
    console.log(userName.value);
    console.log(password.value);
  };
  
  if(userName.value == "" || password.value == "" || confirmPassword == ""){
    alert("username or password is empty");
  }else if(password.value != confirmPassword.value){
    alert("confirm password didn't match");
  }
});
//click function happen in signup

let passLogin = document.querySelector(".passLogin");
let userLogin = document.querySelector(".userLogin");

const logInClick = logIn.addEventListener("click",()=>{
  
  if(userName.value == "" || password.value == ""){
    alert("username or password is empty ");
  };
  
  if (otp == inputOtp.value && userLogin.value == userName.value && passLogin.value == password.value) {
    alert("OTP verified");
    alert("Account successfully login");
  };
  
  if(inputOtp.value == ""){
    alert("Empty OTP");
  };
  
  if(otp != inputOtp.value){
    alert("OTP didn't match");
  };
  
  if(passLogin.value != password.value){
    alert("incorrect password");
  }
});
//click function happen in login

inputOtp.addEventListener("click", ()=>{
  console.log(otp);
  alert(otp);
//otp checker
},{once : true});
//otp will only appear once 

let login = document.querySelector(".loginLink");
let main = document.querySelector(".main");
let loginMain = document.querySelector(".loginMain");
//html attributes needed for a transition 

login.addEventListener("click", ()=>{
  main.style.display = "none";
  loginMain.style.visibility = "visible";
  loginMain.style.display = "inline-flex";
});
//transition from signin to login

let createAccount = document.querySelector(".createAccount");

createAccount.addEventListener("click", ()=>{
  loginMain.style.display = "none";
  main.style.display = "inline-flex";
  main.style.visibility = "visible";
  loginContent.style.display = "none";
});

let loginContent = document.querySelector(".loginContent");

logIn.addEventListener("click", ()=>{
  
  if (otp == inputOtp.value && userLogin.value == userName.value && passLogin.value == password.value) {
    main.style.display = "none";
  loginMain.style.display = "none";
  loginContent.style.visibility = "visible";
  loginContent.style.display = "inline-flex";
  };
});

let logout = document.querySelector(".logout");

logout.addEventListener("click", ()=>{
  main.style.display = "inline-flex";
  loginMain.style.display = "none";
  loginMain.style.visibility = "hidden";
  loginContent.style.display = "none";
  
  userName.value = "";
  password.value = "";
  confirmPassword.value = "";
  inputOtp.value = "";
  userLogin.value = "";
  passLogin.value = "";
});