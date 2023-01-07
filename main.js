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

btn1.addEventListener("click", (e) => {
  e.stopPropagation();
  selectedElement.innerHTML = "Button 1 was clicked";
});

btn2.addEventListener("click", (e) => {
  e.stopPropagation();
  selectedElement.innerHTML = "Button 2 was clicked";
});

outSideClick[0].addEventListener("click", (e) => {
  selectedElement.innerHTML = "";
});

input.addEventListener("input", function (e) {
  if(e.target.value !== '') {
    myBtn.disabled = false;
  }
  const characters = e.target.value.split("");
  const filtered = characters.filter((c) => !(c >= "A" && c <= "Z" || c >= "А" && c <= "Я"));
  e.target.value = filtered.join("");
});

myBtn.addEventListener("click", () => {
  out2.textContent = input.value;
  input.value = "";
  myBtn.disabled = true;
});
