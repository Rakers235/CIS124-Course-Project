function checkForm() {
    var areFormErros = false;
    var errorMsg = "<ul>";
    var errorDiv = document.getElementById("formErrors");

    var fname = document.getElementById("fullName");
    var emailAddr = document.getElementById("emailAddr");
    var phone = document.getElementById("phoneNumber");
    var birthday = document.getElementById("birthday");
    var comque = document.getElementById("comque");
    var pass1 = document.getElementById("passwd1");
    var pass2 = document.getElementById("passwd2");

    //Check if fields are empty
    if (fname.value.length == 0) {
        errorMsg += "<li>Missing Full Name.</li>";
        fname.classList.add("error");
        areFormErros = true;
    } else {
        fname.classList.remove("error");
    }
    if (emailAddr.value.length == 0) {
        errorMsg += "<li>Missing Email.</li>";
        emailAddr.classList.add("error");
        areFormErros = true;
    } else {
        emailAddr.classList.remove("error");
    }
    if (phone.value.length == 0) {
        errorMsg += "<li>Missing Phone Number.</li>";
        phone.classList.add("error");
        areFormErros = true;
    } else {
        phone.classList.remove("error");
    }
    if (birthday.value.length == 0) {
        errorMsg += "<li>Missing Birthday.</li>";
        birthday.classList.add("error");
        areFormErros = true;
    } else {
        birthday.classList.remove("error");
    }
    if (comque.value.length == 0) {
        errorMsg += "<li>Missing Comments and Questions.</li>";
        comque.classList.add("error");
        areFormErros = true;
    } else {
        comque.classList.remove("error");
    }
    if (pass1.value.length == 0) {
        errorMsg += "<li>Missing Password.</li>";
        pass1.classList.add("error");
        areFormErros = true;
    } else {
        pass1.classList.remove("error");
    }
    if (pass2.value.length == 0) {
        errorMsg += "<li>Missing Password Validation.</li>";
        pass2.classList.add("error");
        areFormErros = true;
    } else {
        pass2.classList.remove("error");
    }

    //Check if fields match requirements
    //Full name range 1-50
    //Whitelisted email addres domains students.ccsnh.edu ccsnh.edu gmail.com
    //Telephone format (###) ###-####

    if (fname.value.length <= 1 || fname.value.length > 50) {
        errorMsg += "<li>Name must be between 1 and 50 in length.</li>";
        fname.classList.add("error");
        areFormErros = true;
    } else {
        fname.classList.remove("error");
    }

    //emails
    if (!((/@gmail.com$/i.test(emailAddr.value)) || (/@ccsnh.edu$/i.test(emailAddr.value)) || (/@students.ccsnh.edu$/i.test(emailAddr.value)))) {
        errorMsg += "<li>Invalid email.</li>";
        emailAddr.classList.add("error");
        areFormErros = true;
    } else {
        emailAddr.classList.remove("error");
    }

    if (/([0-9]{3}) [0-9]{3}-[0-9]{4}/.test(phone.value)) {
        errorMsg += "<li>Phone number must follow format: (###) ###-####</li>";
        phone.classList.add("error");
        areFormErros = true;
    } else {
        phone.classList.remove("error");
    }

    //Make sure both password fields are equal
    if (pass1.value !== pass2.value) {
        errorMsg += "<li>Passwords do not match.</li>"
        pass1.classList.add("error");
        pass2.classList.add("error");
        areFormErros = true;
    } else {
        pass1.classList.remove("error");
        pass2.classList.remove("error");
    }

    //No if else needed here
    errorMsg += "</ul>"
    errorDiv.innerHTML = errorMsg;

    return areFormErros;
}

document.getElementById("submit")
    .addEventListener("click", function (event) {
        if (checkForm()) {
            event.preventDefault();
        }
        // ;)
    });
