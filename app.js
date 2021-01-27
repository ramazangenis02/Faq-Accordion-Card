let header = document.getElementsByClassName("header");
let answer = document.getElementsByClassName("answer");
let container = document.getElementsByClassName("container");
for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", toggle);

  function toggle() {
    header[i].classList.toggle("active");

    if (answer[i].style.display != "block") {
      answer[i].style.display = "block";
    } else {
      answer[i].style.display = "none";
    }
  }
}
