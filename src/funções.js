let value = 21;

let limI = 18;
let limS = 50;

// > < >= <=
// == Compara o valor
// != Verifica se é diferente
// === Compara o tipo e o valor

function verifyAge(age) {
  const valorComparacao = age >= limI && age <= limS;
  if (valorComparacao) {
    console.log("maior de idade");
  }
  return valorComparacao;
}

let teste = verifyAge(40);
// console.log('valorteste:',teste)

function presentation(nome, surname, position) {
  let presentationComplete = nome + " " + surname + "\n" + position;
  return presentationComplete;
}

const presentationComplete = presentation("David", "Freitas", "dev");


