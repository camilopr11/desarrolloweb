//console

/**
 * Comentario en bloque
 */
console.log("Hola Mundo")

console.info("Info")

console.error("Error")

console.warn("Alerta")

let nombre = "Camilo"
let apellido = "Pastrana"
const edad = 19
var color = "blanco"
let altura
let esta_vivo = true

let nombre_completo1 = nombre+' '+apellido
let nombre_completo2 = `${nombre} ${apellido}`
console.log('Nombre Completo',nombre_completo1)
console.log('nombre_completo2', nombre_completo2)

if(edad > 18){
    let nombre = "otro nombre"
    var color = "otro color"
console.log("dentro de if",nombre,color)

//console.log(color)
}

console.log(nombre, color)


if(altura==undefined){
    console.log("Primera validacion")
}

altura=1.0
if(altura===1.0){
    console.log("segunda val")
}else{
    console.log("tercera val", altura)
}

let num1 = parseInt('1')
let num2 = parseFloat(true)
console.log(num1+num2)