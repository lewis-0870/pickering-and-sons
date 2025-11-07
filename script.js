// JS for modal pop out boxes in gallery section
// each individual modal needs its own code block
// Changes can be made to the id names to make them unique to each modal

const modal1 = document.getElementById("myModal1");
const btn1 = document.getElementById("myBtn1");
const span1 = document.getElementById("close1");

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

const modal2 = document.getElementById("myModal2");
const btn2 = document.getElementById("myBtn2");
const span2 = document.getElementById("close2");

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

const modal3 = document.getElementById("myModal3");
const btn3 = document.getElementById("myBtn3");
const span3 = document.getElementById("close3");

btn3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

const modal4 = document.getElementById("myModal4");
const btn4 = document.getElementById("myBtn4");
const span4 = document.getElementById("close4");

btn4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

// dark mode button

const darkModeBtn = document.getElementById("darkModeToggle");

darkModeBtn.addEventListener("click", function darkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("dark-navbar", isDarkMode);
});

// function phoneValidation() {
//   // Get the value of the input field with id="phone"
//   let x = document.getElementById("phone").value;
//   // If x is Not a Number or less than one or greater than 10
//   let text;
//   if (isNaN(x) || x < 1 || x > 10) {
//     text = "Input not valid";
//   } else {
//     text = "Input OK";
//   }

//   submitBtn.onclick = function() {
//     phoneValidation(x);
//   };
// }

