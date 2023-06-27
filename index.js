const input = document.getElementById("input");
const text = document.querySelector(".text");
const todobox = document.querySelector(".todobox");
const fa = document.querySelector(".fa-regular");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    main(input.value);
    input.value = "";
  }
});

const main = (item) => {
  let liitems = document.createElement("li");
  liitems.innerHTML = `
  <span class="text">${item}</span>
  <i class="fa-sharp fa-regular fa-circle-xmark"></i>
  
  `;

  todobox.appendChild(liitems);

  liitems.i.addEventListener('click',()=>{
    liitems = "";
  })

};
