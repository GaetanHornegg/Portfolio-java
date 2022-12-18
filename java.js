const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const paragraphs = document.querySelectorAll("p");
const button2 = document.querySelector("button2");
const div1 = document.querySelector(".div1")



button2.addEventListener("click", function() {
    body.classList.toggle("body")
})

div1.style.color = "#000000"

const button3 = document.querySelector("button3");
const list = document.querySelector("#list");

button3.addEventListener("click", function() {
   const li = document.createElement("li");
   const text = document.createTextNode("(ಠ_ಠ)");

   li.append(text);
   list.append(li);
   
})

const button4 = document.querySelector("btn4")
const paragraphs2 = document.querySelectorAll("p-aprop")

button4.addEventListener("click",function() {
    for (let i = 0; i < 1; i++) {
    paragraphs2[i].classList.toggle("animationErreurJaune");
}
})





