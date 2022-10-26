
function saludoInicial(){
    alert(`Bienvenido a Invert !
Un simulador de Plazo Fijo`)
}
saludoInicial()

// array
const cotizaciones = []

// Funcion constructora de plazo fijo
class plazoFijo {
    constructor(id, monto, plazo, tasa, interes){

        this.id = id
        this.monto = monto
        this.plazo = plazo
        this.tasa = tasa 
        this.interes = interes
    }
    mostrarData(){
        console.log(`Simulacion Nª ${this.id}: Por $${this.monto}a ${this.plazo} con la TNA%${this.tasa} recibiras un interes de $${this.interes} `)
    }
}

// Construccion de opcion 1 

function nuevoPlazoFijo(array){
    
    let montoIngresado = parseInt(prompt(`Ingrese el importe que desea invertir en Plazo Fijo`))
    let plazoIngresado = parseInt(prompt(`A que plazo deseas simular la inversion?`))
    let tasaIngresada = parseInt(prompt(`Ingrese TNA (Tasa Nominal Anual) para simulacion`))
    let interesParcial = tnaMensual(tasaIngresada)
    let interesFinal = calculador(montoIngresado, plazoIngresado, interesParcial)
    

    let plazoFijoCreado = new plazoFijo(array.length+1, montoIngresado, plazoIngresado, tasaIngresada, interesFinal)
    console.log(plazoFijoCreado)
    array.push(plazoFijoCreado)

    console.log(array)
}

// funciones para nuevo plazo fijo:
function tnaMensual(parametro1) {
    let interes = (((parametro1 / 12) / 100) / 30)
    return interes
}

function calculador(interes, importe, plazo) {
    let resultado = (interes * importe * plazo)
    return resultado.toFixed(2)
}

// Construccion de opcion 2
function cotizacionesRealizadas(array){
    for(let opcion of array){
        console.log(`Simulacion Nª ${opcion.id}: Por $${opcion.monto} a ${opcion.plazo} dias con una TNA %${opcion.tasa} recibiras un interes de $${opcion.interes} `)
    }
}

// Construccion de opcion 3 
function ordenarMayorMenor(array) {
    console.log(array.sort((a,b) => (b.monto - a.monto)))
}

// Construccion de opcion 4

function eliminarCotizacion(array){
    console.log("A partir del catálogo ingrese el id del libro a eliminar")
    for(let elem of array){
        console.log(`Simulacion Nª ${elem.id}: Por $${elem.monto} a ${elem.plazo} dias con una TNA %${elem.tasa} recibiras un interes de $${elem.interes} `)
    }
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))
    
    let indices = array.map(ubicacion => ubicacion.id)
    console.log(indices)
    
    let indice = indices.indexOf(idEliminar)
    console.log(indice)
    
    array.splice(indice, 1)
    console.log(array)
}

// Menu
function preguntarOpcion(){
    let opcion = parseInt( prompt(`Ingrese el numero de opcion que desean realizar:
        1 - Realizar una nueva simulacion de Plazo Fijo
        2 - Ver cotizaciones
        3 - Filtrar cotizaciones de mayor a menor monto
        4 - Eliminar cotizaciones
        0 - Salir
    `)) 
    menu(opcion)
}

function menu (opcionSeleccionada) {
    switch(opcionSeleccionada){
    
        case 0:
            salir = true
            alert(`Gracias por visitarnos !`)

        break
        case 1: nuevoPlazoFijo(cotizaciones)

        break
        case 2: cotizacionesRealizadas(cotizaciones)

        break
        case 3: ordenarMayorMenor(cotizaciones)

        break
        case 4: eliminarCotizacion(cotizaciones)

        break
        default:
            alert(`Ingrese una opcion correcta`)

        }
}
let salir = false
while (salir!= true){
    preguntarOpcion()
}
