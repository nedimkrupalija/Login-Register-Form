/* import { createConnection } from './skripte/mysql';

var connection = createConnection({
    host     : 'sql7.freemysqlhosting.net',
    user     : 'sql7582896',
    password : 'fV8vTc9vHL',
    port: 3306
 });



 connection.connect(function(err) {  
    if (err) throw err;  
    console.log("Connected!");  
  });  

 */

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add('form__message--' + type);
}


function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;

}


function clearInputError(inputElement) {

    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
       
        return true;
    }
    else {
        return false;
    }
}

function checkSamePassword(first, second){
    if(first===second) return true;
    return false;
}






document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");

    });

    /* loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //Login

        setFormMessage(loginForm, "error", "Pogresan username/password!");
    }); */

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener('blur', e => {
            if (e.target.id === 'signupUsername' && e.target.value.length < 5) {
                setInputError(inputElement, "Duzina mora biti bar 5 karaktera");
            }
            if (e.target.id === 'signupEmail' && !ValidateEmail(e.target)) {
                setInputError(inputElement, "Neispravan email!");
            }
            if (e.target.id === 'signupPassword' && e.target.value.length < 5) {
                setInputError(inputElement, "Duzina mora biti bar 5 karaktera");
            }
      
            if (e.target.id === 'signupConfirmPassword' && !checkSamePassword(document.getElementById("signupPassword").value,document.getElementById("signupConfirmPassword").value)) {
                setInputError(inputElement, "Unesite isti password!");
                
            }

        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


