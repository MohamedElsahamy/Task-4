var checkbutton = document.getElementById("LoginButton");

var usernameasf;
var usersfromlocalstorage = JSON.parse(localStorage.getItem("Users"))
checkbutton.addEventListener('click', () => {

    usernameasf = document.getElementById("UserName").value
    var pass = document.getElementById("password").value

    var check = true;
    for (var i = 0; i < usersfromlocalstorage.length; i++) {
        if (usersfromlocalstorage[i].Mail == usernameasf && usersfromlocalstorage[i].Password == pass) {
            localStorage.setItem("finalname", JSON.stringify(usersfromlocalstorage[i].UserName));
            var ele = document.getElementById("Message")
            ele.classList.remove("d-none")
            ele.innerHTML = "Done"


            window.location.href = "WlcomPage.html"
            check = false;
            document.getElementById("Name").innerHTML = `${usersfromlocalstorage[i].UserName}`
            GetName();

        }



    }

    if (check) {
        document.getElementById("Message").classList.add("d-none")
        var ele = document.getElementById("Message")
        ele.classList.remove("d-none")
    }
});


function GetName() {
    for (var i = 0; i < usersfromlocalstorage.length; i++) {
        if (usernameasf == usersfromlocalstorage[i].UserName) {


        }
    }

}