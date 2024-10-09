localStorage.setItem("eye", "invisible");

let user = "admin1202";
let password = "admin";

let form = document.getElementById("form");
let userValue = document.getElementById("user");
let passwordValue = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userValue.value === user && passwordValue.value === password) {
    document.getElementById("form").style.display = "none"
    document.getElementsByTagName("body")[0].classList.replace("bg-[url('./home.images/preview.png')]", "bg-[#161616]")
    document.getElementById("loaded").style.display = "flex"
    setTimeout(() => {
      window.open("https://nurfinance-eta.vercel.app/", "_blank");
      document.getElementById("form").style.display = "flex"
      document.getElementsByTagName("body")[0].classList.replace("bg-[#161616]", "bg-[url('./home.images/preview.png')]")
      document.getElementById("loaded").style.display = "none"
    }, 2000)
  } else if (!userValue.value && !passwordValue.value) {
    showAlert("Password or username is not filled");
  } else {
    showAlert("Check your username or password again");
  }
});

function showAlert(message) {
  let alert = document.getElementById("alert");
  let cencel = document.getElementById("cencel");
  let txt = document.getElementById("data");

  alert.style.display = "flex";
  txt.innerText = message;

  cencel.addEventListener("click", (e) => {
    e.preventDefault()
    alert.style.display = "none";
  });
}

function hide(eye) {
  let txt = localStorage.getItem(eye);
  if (txt == "none") {
    document.getElementById(eye).style.display = "flex";
    document.getElementById("password").setAttribute("type", "password");
    localStorage.setItem(eye, "flex");
  } else {
    document.getElementById(eye).style.display = "none";
    document.getElementById("password").setAttribute("type", "text");
    localStorage.setItem(eye, "none");
  }
}

function inrto() {
  let second = document.getElementById("form");
  let third = document.getElementById("loaded");

  window.addEventListener("DOMContentLoaded", () => {
    loader.style.display = "flex"
    second.style.display = "none";
    setTimeout(() => {
    loader.style.display = "none"
    second.style.display = "flex";
    }, 1000);
  });
}

inrto();