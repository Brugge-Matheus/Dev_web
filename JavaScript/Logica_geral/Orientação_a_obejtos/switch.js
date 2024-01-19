// É uma estrutura de controle em js que permite executar ações diferentes com base em diferentes condições

let profession = "fiscal";

switch (profession) { // Variavel que deseja fazer as condicoes
  case "fiscal": // Nome da condição
    console.log("Camisa VERDE"); // Execução dela
    break; // Serve para encerrar esta condição

  case "bombeiro":
    console.log("Camisa VERMELHA");
    break;

  case "policial":
    console.log("Camisa AZUL");
    break;

  default: // Caso nenhuma das alterantivas seja validada
    console.log("Camisa PRETA");
    break;
}
