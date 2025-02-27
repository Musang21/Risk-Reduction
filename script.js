/* open/close password */

let password = document.getElementById("password");
let eyeclose = document.querySelector(".ri-eye-off-line")
let eyeopen = document.querySelector(".ri-eye-line");

eyeclose.addEventListener("click", () => {
    password.type = "text";
    eyeopen.classList.remove("close");
    eyeclose.classList.add("close");
})

eyeopen.addEventListener("click", () => {
    password.type = "password";
    eyeopen.classList.add("close");
    eyeclose.classList.remove("close");
})

/* open/close password */

/* inavlid/correct username/password */

function checkLogin(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    var correctUsername = "admin";
    var correctPassword = "admin";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "dashboard.html"; //
    } else {
        errorMessage.textContent = "Mali ang username or password mo boss";
        errorMessage.style.color = "red";
    }
}

/* invalid/correct username/password */

/* navigation bar */

function baranimation(bar) {
  bar.classList.toggle("change");
}

/* navigation bar */

/* navugation menu */

function openmenu(){
            if(openlink.style.maxHeight == "0px")
            {
                openlink.style.maxHeight = "350px";
            }
            else{
                openlink.style.maxHeight = "0px";
            }
        }

/* navigation menu */

/* alert notification */


/* alert notification */
