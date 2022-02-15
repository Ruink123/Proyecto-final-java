var salario = 0
var edad 
var edad_c = 0;
var hijo = 0;
var recargos = 0 ;
var total = 0;
var salir=0;
var eleccion
var nombre
do {
    alert("Bienvenido")
    nombre = prompt ("Ingrese su primer nombre")
    edad = prompt("por favor ingrese su edad")
    if (edad >=18) {
        salario = prompt("ingrese su salario actual")
            if(edad>=18 && edad<=24){
            recargos = salario * 0.10
            console.log("Tiene de recsrgos acgual: "+recargos)
            }
            else if(edad>=25 && edad<=49){
            recargos = salario * 0.20
            console.log("Tiene de recsrgos acgual: "+recargos)
            }
            else {
            recargos= salario * 0.30
            console.log("Tiene de recargos actual: "+recargos)
            }
        eleccion = prompt("¿Tiene esposa actualmente? 1.si 2.no")
            switch (eleccion) {
                case '1':
                    edad_c = prompt("¿Cuantos años tiene tu esposa?")
                        if (edad_c>=18 && edad_c<=24) {
                            recargos = ((salario*0.10)+recargos)
                            console.log("Tiene de recsrgos acgual: "+recargos)
                        }
                        else if (edad_c>=25 && edad_c <=49) {
                            recargos = ((salario*0.20)+recargos)
                            console.log("Tiene de recsrgos acgual: "+recargos)
                        }
                        else{
                            recargos= ((salario*0.30)+recargos)
                            console.log("Tiene de recsrgos acgual: "+recargos)
                        }
                    break;
                
                default:
                    break;
            }
        eleccion = prompt("¿tiene hijos actualmente? 1.si 2.no")
            switch (eleccion) {
                case '1':
                    hijo = prompt("¿Cuantos hijos quiere asegurar?")
                        recargos= ((hijo * 0.20)*salario)+recargos
                            console.log("Tiene de recsrgos acgual: "+recargos)
                        total = (recargos+salario)
                        console.log("en total tienes" + total)
                    break;
                
                default:
                    total = (recargos+salario)
                        console.log("en total tienes" + total)
                    break;
            }
            
            alert("Su nombre es: " + nombre)
            alert("Su recargo total es de: " + recargos)
            total = parseInt(recargos) + parseInt(salario);
            alert ("Su total seria: " +total)
    }
    else {
        alert("no eres mayor de edad")
        eleccion = prompt("¿Quiere continuar? 1.si 2.no")
        switch (eleccion) {
            case '1':
                salir =0
                break;
            
            case '2':
                salir = 1
                break;
            default:
                alert("Por favor seleccione bien")
                break;
        }
    }
    eleccion = prompt("¿Quiere continuar? 1.si 2.no")
        switch (eleccion) {
            case '1':
                salir =0
                break;
            
            case '2':
                salir = 1
                break;
            default:
                alert("Por favor seleccione bien")
                break;
        }
    
} while (salir==0);