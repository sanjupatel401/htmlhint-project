

var vemail = false;
var vname = false;
var vpass = false;

const error= document.querySelector(".error");
const Nameerror= document.querySelector(".e1");
const emailerror= document.querySelector(".e2");
const passworderror= document.querySelector(".e3");



// __________________________________________________   NAME VALIDATION    ___________________________________________________________


var name = document.getElementById("Name").addEventListener('blur', () => {
    let regex = /^[a-zA-Z_]{2,25}$/;
    let str = name.value;
    if (regex.test(str)) {
        // console.log('Name is a valid');
        Nameerror.classList.remove("error");
        vname = true;
    }
    else if (str.length<1) {
        alert("Name can't leave empty")
    }
        
    else {
        // console.log('Name is not valid' );
        Nameerror.classList.add("error");
        vname = false;
    };
});





// __________________________________________________   EMAIL VALIDATION    ___________________________________________________________

var email = document.getElementById("Email");
email.addEventListener('blur', () => {
    let regex = /^[A-Za-z0-9_]{3,15}@[a-zA-Z]{3,8}[.]{1,2}[a-zA-Z]{2,5}$/;
    let str = email.value;
    if (regex.test(str)) {
        vemail = true;
        emailerror.classList.remove("error");
    }

    else if (str.length<1) {
        alert("Eamil can't leave empty")
    }
        
    else {
        vemail = false;
        emailerror.classList.add("error");
    }
})





// __________________________________________________   PASSWORD VALIDATION    ___________________________________________________________

var password = document.getElementById("Password");
password.addEventListener('blur', () => {


    let regex = /^[a-zA-Z0-9@$]{6,}$/gm;

    let str = password.value;

    if (regex.test(str)) {
        vpass = true;
        console.log('pass is valid');
        passworderror.classList.remove("error");
    }

    else if (str.length<1) {
        alert(" Password can not leave empty")
    }
    else {
        vpass = false
        console.log('pass is not valid');
        passworderror.classList.add("error");
    }
})



// __________________________________________________   LOGIN BUTTON   JS  ___________________________________________________________

document.querySelector("button").addEventListener('click', () => {
    if (vname && vemail && vpass) {
        swal("THANK YOU!", "your form is submited!", );

        
    }
    else if (name || password || email .length < 1) {
        alert('fill the name,email or password');
    } 
   
    
    
    else{
        
        alert("plz recheck your email & password");
    }
})



// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^     LOGIN  FORM VALIDATION COMPLITE  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
















