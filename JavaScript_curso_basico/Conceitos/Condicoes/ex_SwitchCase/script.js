 //  Exemplo switch

//  let avaliacao = 50

//  switch(avaliacao){
//      case  1:
//          console.log('Resultado ruim')
//          break

//      case 2:
//          console.log('Resultado insuficiente')
//          break

//      case 3:
//          console.log('reultado positivo')
//          break

//      case 4:
//          console.log('Resultado bom')
//         break

//      case 5:
//          console.log('Resultado excelente')
//         break

//     default:
//          console.log('Avaliação inválida')
//          break
//  }

// Exemplo 2

// let valor = true

// switch(valor){
//     case 10:
//         console.log('O valor é 10')
//         break

//     case true:
//         console.log('O valor é verdadeiro')
// }


// exempllo 3

// let valor = 10

// switch(true){
//     case (valor < 10):
//         console.log('Valor inferior a 10')
//         break

//     case (valor > 10):
//         console.log('Valor superior que 10')
//         break

//     default:
//         console.log('Valor igual de 10')
// }


// exemplo 4

// let nome = "cleber"

// switch(nome){
//     case "João":
//     case "Joaquim":
//     case "jonas":
//     case "Jhefferson":
//         console.log('Os nomes começam com a letra J ')
//         break
//     case "matheus":
//         console.log("Este belo nome começa com a letra M")
//         break

//     default:
//         console.log("Este nome não começa nem com M nem com J")
// }



// exemplo 5



let paises = ["Brasil", "Alemanha", "Portugal"]
let país = "Turquia" 

switch (true){
    case(país == 'Brasil'):
        console.log(`Voce mora no ${paises[0]}`)
        break

    case(país == 'Portugal'):
        console.log(`Voce mora no ${paises[2]}`)
        break
    
    case(país == 'Alemanha'):
        console.log(`Voce mora no ${paises[1]}`)
        break

    default:
        console.log('Você não mora em nenhum país da nossa lista, ou digitou o nome dele errado, sinto muito')
}