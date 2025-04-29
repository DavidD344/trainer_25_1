export function cleanJail(jailId) {
  if (jailId > 20) {
    // Simula uma  verificação de o ID existir no banco de dados
    console.log("Jaula inexistente");
    return false;
  } else {
    console.log("Jaula limpa");
    return true;
  }
}
