
function saludoInicial() {
    alert(`Bienvenido a Invert, un simulador de Plazo Fijo !`)
    let personaIngresada = prompt(`Ingrese su nombre por favor`)
    return personaIngresada
}

function solicitarDatos1(nombre) {
    let tiempo = parseInt(prompt(`Hola ${nombre}, a que plazo deseas simular la inversion? El minimo es 30 dias y el maximo 365 dias`))
    return tiempo

}

function solicitarDatos2() {

    let importe = parseInt(prompt(`Ingrese el importe que desea invertir en Plazo Fijo`))
    return importe
}

function solicitarDatos3() {

    let tasa = parseInt(prompt(`Ingrese TNA (Tasa Nominal Anual) para simulacion`))
    return tasa
}

function tnaMensual(parametro1) {
    interes = (((parametro1 / 12) / 100) / 30)
    return interes
}

function calculador(interes, importe, plazo) {
    let resultado = (interes * importe * plazo)
    return resultado

}

function saludoDespedida(nombre) {
    alert(`Hasta luego ${nombre} !!`)

}


let bandera = true
do {
    let nombre = saludoInicial()
    let plazo = solicitarDatos1(nombre)

    if (plazo >= 30 && plazo <= 365) {

        let importe = solicitarDatos2()
        let tasa = solicitarDatos3()
        let interes = tnaMensual(tasa)
        let resultado = calculador(interes, importe, plazo)

        console.log((`Por la inversion de $ ${importe} con una TNA %${tasa} a ${plazo} dias, el interes que percibiras es $ ${resultado.toFixed(2)}`))

        alert(`Por la inversion de $ ${importe} con una TNA %${tasa} a ${plazo} dias, el interes que percibiras es $ ${resultado.toFixed(2)}`)
    }


    else {
        (alert(`Ingrese un plazo entre 30 y 365 dias`))
    }
    let pregunta = prompt(`Deseas simular otro Plazo Fijo?
    "ESC" para no `)

    if (pregunta.toUpperCase() == "ESC") {
        bandera = false
        saludoDespedida(nombre)
    }
} while (bandera)