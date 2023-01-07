const divs = document.querySelector(".div1");
const selectedElement = document.querySelector("#res");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const out2 = document.querySelector("#out2");
const outSideClick = document.getElementsByTagName("html");

const input = document.querySelector("#text");
const myBtn = document.querySelector("#myBtn");
myBtn.disabled = true;

divs.addEventListener("click", (e) => {
  e.stopPropagation();
  const getAttr = e.target.getAttribute("div-name");
  selectedElement.textContent = getAttr;
});

btn1.addEventListener("click", function (e) {
  e.stopPropagation();
  selectedElement.innerHTML = "Button 1 was clicked";
});

btn2.addEventListener("click", function (e) {
  e.stopPropagation();
  selectedElement.innerHTML = "Button 2 was clicked";
});

outSideClick[0].addEventListener("click", function (e) {
  e.stopPropagation();
  selectedElement.innerHTML = "";
});

input.addEventListener("input", (event) => {
  if (event.target.value === "") {
    myBtn.disabled = true;
    out2.textContent = "String is empty"
    return;
  }
  for (const letter of event.target.value) {
    if (letter >= "A" && letter <= "Z" || letter >= "А" && letter <= "Я") {
      myBtn.disabled = true;
      out2.textContent = "It`s forbidden to enter capital letters"
      return;
    }
  }
  myBtn.disabled = false;
});

myBtn.addEventListener("click", () => {
  out2.textContent = input.value;
  input.value = "";
  myBtn.disabled = true;
});
