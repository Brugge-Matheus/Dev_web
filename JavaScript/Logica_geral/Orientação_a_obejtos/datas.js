// Datas - Em JavaScript nós temos funções pré definidas como por exemplo o Date()
// Documentação completa das propriedades no w3schools: https://www.w3schools.com/jsref/jsref_obj_date.asp
/*
let date = new Date() // Adicona a manipulação de data a uma variavel

// Dia do mês
 window.alert(date.getDate()) 

// Dia da semana (0 - domingo, 7 - sábado)
 window.alert(date.getDay())

// Ano atual
 window.alert(date.getFullYear())

//Horas atuais
 window.alert(date.getHours())
*/

//---------//

let date = new Date('10/19/2023') // Com parâmetros é possível definir datas personalizadas
let date2 = new Date('10/22/2023')

let diferenca = (date2.getTime() - date.getTime()) / (1000 * 3600 * 24); // Fazendo a diferença entre as duas datas
window.alert(diferenca)


