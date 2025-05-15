function addPeople({ nome }) {
  const novoElemento = document.createElement("p");
  // container.append(novoElemento) para inicio da lista
  novoElemento.classList.add("user_list");
  novoElemento.textContent = nome;
  console.log(novoElemento.textContent)
  return novoElemento;
}

console.log("testando");
const container = document.querySelector(".container");

const elementosByClassname = document.getElementsByClassName("user_list");

elementosByClassname;
// container.removeChild(elementosByClassname[0])
elementosByClassname[0].remove();

container.appendChild(addPeople({nome:'Pedro'}))

Array.from(elementosByClassname).map((el, index) => {
  el.textContent = index + 1 + "-" + el.textContent;
  console.log("2", el.textContent);
});


console.log(elementosByClassname);



// final da lista

