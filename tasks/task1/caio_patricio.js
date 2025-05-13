let idadeMinima = 18;
let confirmar = true;
let nome, nomeDividido, idade, area, anime;
let linguagem;
let linguagemNome;

let preencher = confirm("Você deseja preencher o formulário?");

if (!preencher) {
  nome = "Caio Patricio";
  idade = "23";
  area = "Ciencia da computacao";
  anime = "Attack on titan";
  nomeDividido = nome.split(" ");
  linguagem = 1;
  linguagemNome = "Python";
} else {
  while (confirmar) {
    nome = prompt("Digite seu nome e sobrenome:");
    idade = prompt("Digite sua idade:");
    area = prompt("Digite sua área de interesse:");
    anime = prompt("Digite seu anime/filme/série favorito:");
    
    linguagem = parseInt(prompt(
      "Escolha uma linguagem de programação:\n1. Python\n2. Java\n3. C\nDigite o número correspondente:"
    ));

    let camposVazios = [];
    if (!nome || nome.trim().length < 3) camposVazios.push("Nome");
    if (!idade || idade.trim().length < 1) camposVazios.push("Idade");
    if (!area || area.trim().length < 3) camposVazios.push("Área");
    if (!anime || anime.trim().length < 3) camposVazios.push("Anime/filme/série");
    if (!linguagem || isNaN(linguagem) || linguagem < 1 || linguagem > 3) camposVazios.push("Linguagem");

    if (camposVazios.length > 0) {
      alert("Os seguintes campos estão incompletos ou inválidos: " + camposVazios.join(", "));
      confirmar = true; // Continua no while
    } else {
      confirmar = confirm("Você deseja preencher os dados novamente?");
    }
  }

  // Mostrar o código conforme linguagem escolhida
  switch (linguagem) {
    case 1:
      linguagemNome = "Python";
      alert('print("Olá!")');
      break;
    case 2:
      linguagemNome = "Java";
      alert(`class Main {
  public static void main(String[] args) {
    System.out.println("Olá!");
  }
}`);
      break;
    case 3:
      linguagemNome = "C";
      alert(`#include <stdio.h>
int main() {
  printf("Olá!\\n");
  return 0;
}`);
      break;
  }

  nomeDividido = nome ? nome.trim().split(" ") : ["[sem nome]", "[sem sobrenome]"];
}

// Função para verificar idade
function verificaIdade(idade) {
  if (isNaN(idade) || idade === "") {
    return false;
  } else if (idade >= idadeMinima) {
    return true;
  } else {
    return false;
  }
}

// Antes de verificar idade, transforma idade em número
idade = parseInt(idade);

// Mostrar o resumo dos dados
if (verificaIdade(idade)) {
  alert(
    "Nome: " + nomeDividido[0] +
    "\nSobrenome: " + (nomeDividido[1] || "[não informado]") +
    "\nIdade: " + idade +
    "\nÁrea de interesse: " + area +
    "\nAnime/filme/série favorito: " + anime +
    "\nLinguagem escolhida: " + linguagemNome
  );
} else {
  alert("Você é menor de idade!");
  alert(
    "Nome: " + nomeDividido[0] +
    "\nSobrenome: " + (nomeDividido[1] || "[não informado]") +
    "\nIdade: " + idade +
    "\nÁrea de interesse: " + area +
    "\nAnime/filme/série favorito: " + anime +
    "\nLinguagem escolhida: " + linguagemNome
  );
}