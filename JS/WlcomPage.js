document.getElementById("finalname").innerHTML = `Welcom ${JSON.parse(localStorage.getItem("finalname"))}`



var GotoLoginPage = document.getElementById("GotoLoginPage");
GotoLoginPage.addEventListener('click', () => {

    window.location.href = "index.html"

});
