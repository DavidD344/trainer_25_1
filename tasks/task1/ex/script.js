function showForm() {
  const isMocked = confirm("Você esta com preguiça?");
  let nome = "David";
  let surName = "Freitas";
  let age = "";
  let area = "";
  let midia = "HXH";

  if (!isMocked) {
    nome = prompt("Qual o seu nome?");
    surName = prompt("Qual o seu sobrenome?");
    age = prompt("Qual a sua idade?");
    area = prompt("Qual a sua areaa de interesse?");
    midia = prompt("Qual o seu Anime/Filme/Serie preferido?");
  }

  let message = "criança";
  if (age.length < 3) {
    message = "adulto";
  }
  const limitForEmpty = 3

  const ageMin = age.length < limitForEmpty ? 1 : 0 
  const areaMin  =area.length < limitForEmpty ? 1 : 0
  const numberOfEmptyInputs = areaMin + ageMin
  
  console.log("tamanho", numberOfEmptyInputs);
  alert(
    `Eu sou ${message} ${
      age >= 18 ? "adulto" : "criança"
    } é: ${nome} ${surName} tenho ${age} anos.\n\nMInha area de interesse é ${area} e minha midia favorita é ${midia}`
  );

  console.log("stay in llop variable", stayInLoop);

  return confirm("Voce deseja preencher o formulario novamente?");
}

let stayInLoop = true;
while (stayInLoop) {
  const userWantStayInLoop = showForm();
  stayInLoop = userWantStayInLoop;
}

// let tes= 0
// while (tes < 10) {
//     tes = tes + 1
//     console.log(tes)
// }

// Pegar os dados do usuário
//Retorana n mensagem bonitinha
// Estrutura repetição
