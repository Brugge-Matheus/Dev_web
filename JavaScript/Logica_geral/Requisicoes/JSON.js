// Com o parse podemos tranformar uma estrutura de JSON em um JSON verdadeiro

const Person = JSON.parse('{"nome": "Matheus", "lastName": "Brugge"}')
console.log(Person);