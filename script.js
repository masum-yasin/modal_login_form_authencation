const formOpenBtn = document.querySelector("#form-open")
 home = document.querySelector(".home")
 formContainer = document.querySelector(".form_container")
 formCloseBtn = document.querySelector(".form_close")
 signupBtn = document.querySelector("#signup")
 loginBtn = document.querySelector("#login")
 pwShowHide = document.querySelectorAll(".pw_hide")

 formOpenBtn.addEventListener("click", ()=> home.classList.add("show"))
 formCloseBtn.addEventListener("click", ()=> home.classList.remove("show"))
 pwShowHide.forEach(icon => {
   icon.addEventListener("click",()=>{
      let getPwInput = icon.parentElement.querySelector("input");
      if(getPwInput.type ==="password"){
         getPwInput.type ="text";
         icon.classList.replace("uil-eye-slash")
      }
      else{
         getPwInput.type ="password";
         icon.classList.replace("uil-eye","uil-eye-slash")
      }
   })
   
 })



 signupBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formContainer.classList.add("active");
 })
 loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active");
 })





// //  Sign up form registration
// const signUpForm = document.querySelector(".signup_form form");
// const loginForm = document.querySelector(".login_form form");

// // Function to store user credentials securely
// function storeCredentials(email, password) {
//     localStorage.setItem('userEmail', email);
//     localStorage.setItem('userPassword', password);
// }

// // Function to retrieve user credentials
// function retrieveCredentials() {
//     const email = localStorage.getItem('userEmail');
//     const password = localStorage.getItem('userPassword');
//     return { email, password };
// }

// // Function to check if user is logged in
// function isLoggedIn() {
//     return localStorage.getItem('userEmail') !== null;
// }

// // Event listener for sign-up form submission
// signUpForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(signUpForm);
//     const email = formData.get('email');
//     const password = formData.get('password');

//     // Store credentials securely
//     storeCredentials(email, password);

//     // Optionally, you can redirect the user to the home page after sign-up
//     window.location.href = '/home';
// });

// // Event listener for login form submission
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(loginForm);
//     const enteredEmail = formData.get('email');
//     const enteredPassword = formData.get('password');

//     // Retrieve stored credentials
//     const { email, password } = retrieveCredentials();

//     // Check if entered credentials match stored credentials
//     if (enteredEmail === email && enteredPassword === password) {
//         // User is logged in
//         // Redirect the user to the home page or perform any other action
//         window.location.href = '/home';
//     } else {
//         // Display error message or handle invalid credentials
//         console.error('Invalid credentials');
//     }
// });

// // Check if user is logged in on page load
// if (isLoggedIn()) {
//     // Redirect the user to the home page or perform any other action
//     window.location.href = '/home';
// }
