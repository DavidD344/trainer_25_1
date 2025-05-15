const container = document.querySelector(".container");

function addPeople({ nome }) {
  const novoElemento = document.createElement("p");
  // container.append(novoElemento) para inicio da lista
  novoElemento.classList.add("user_list");
  novoElemento.textContent = nome;
  console.log(novoElemento.textContent);
  return novoElemento;
}

function insertPeopleInList({ nome }) {
  container.appendChild(addPeople({ nome: nome }));
}
console.log("testando");

const elementosByClassname = document.getElementsByClassName("user_list");

// elementosByClassname;
// container.removeChild(elementosByClassname[0])
// elementosByClassname[0].remove();

container.appendChild(addPeople({ nome: "Pedro" }));

Array.from(elementosByClassname).map((el, index) => {
  el.textContent = index + 1 + "-" + el.textContent;
  console.log("2", el.textContent);
});

console.log(elementosByClassname);

// final da lista

// click	Clique do mouse
// mouseover	Mouse passou por cima
// mouseout	Mouse saiu de cima
// keydown	Tecla pressionada
// keyup	Tecla solta
// submit	Envio de formulário
// input	Campo de texto sendo alterado
// change	Campo alterado e desfocado
// dblclick	Clique duplo