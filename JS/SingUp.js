
var UserName = document.getElementById("UserName2");
var Mail = document.getElementById("mail2");
var Password = document.getElementById("password2");


var users = [];

if (localStorage.getItem("Users") != null) {
    users = JSON.parse(localStorage.getItem("Users"))

}

var AddButtonToLocalStorageButton = document.getElementById("AddUserToLocalStorage");
AddButtonToLocalStorageButton.addEventListener('click', function () {
    var adduser = {
        UserName: UserName.value,
        Mail: Mail.value,
        Password: Password.value,
    }

    if (checkUser(adduser)) {
        users.push(adduser);
        var ele = document.getElementById("Message")
        ele.classList.remove("d-none")
        UpdateLocalStorage();
        ele.innerHTML = "done";
    }
    else {
        var ele = document.getElementById("Message")
        ele.classList.remove("d-none")
        ele.innerHTML = "User is already exist";

        console.log(adduser);
        console.log(users);

    }
    removeData();

});


function checkUser(adduser) {
    for (var i = 0; i < users.length; i++) {

        console.log(users[i].UserName);
        if (users[i].UserName == adduser.UserName && users[i].Mail == adduser.Mail) {
            return false
        }

    }




    return true;
}






function UpdateLocalStorage() {
    localStorage.setItem("Users", JSON.stringify(users));

}

var Regex = {
    mail2: {
        rgxvalue: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        stats: false
    },
    password2: {
        rgxvalue: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        stats: false
    }
}


function ToggleAddBtn() {
    if (Regex.mail2.stats && Regex.password2.stats) {
        var Btn = document.getElementById("AddUserToLocalStorage")
        Btn.classList.remove("disabled");
        Btn.disabled = false
    }

}

function removeData() {
    UserName = ""
    Mail = "";
    Password = "";
}

function ValidateUserData(User) {



    if (Regex[User.id].rgxvalue.test(Mail.value)) {

        User.classList.remove("is-invalid")
        User.classList.add("is-valid")

        Regex[User.id].stats = true;

    }
    else {


    }

    if (Regex[User.id].rgxvalue.test(Password.value)) {
        console.log("match")

        User.classList.remove("is-invalid")
        User.classList.add("is-valid")
        Regex[User.id].stats = true;
    }
    else {

        console.log("notmatch")
    }

    ToggleAddBtn();
}





