let nomes = ["Matheus", "Carlos", "Cleber"]

console.table(nomes)

let eliminados = nomes.splice(0,3, "Pedro", "Jonas")
console.table(nomes)
console.log(eliminados)