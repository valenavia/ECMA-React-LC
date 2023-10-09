//ejercicio 1
const miNombre = "Valentina";
let miEdad = 27;
//console.log(miNombre + " " + miEdad);

//ejercicio 2
const saludo = `Hola, mi nombre es ${miNombre} y tengo ${miEdad} años`;
//console.log(saludo);

//ejercicio 3
const suma = (a,b) => a+b;
//console.log(suma(2,2));

//ejercicio 4
const numeros = [5, 6, 7, 8];
const numerosX2 = numeros.map(numero => numero*2);
//console.log(numeros);
//console.log(numerosX2);

//ejercicio 5
const numerosPares = numeros.filter(numero => numero % 2 === 0);
//console.log(numerosPares);

//ejercicio 6
const sumaArr = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
//console.log(sumaArr);

//ejercicio 7
const numeros2 = [1, 2, 3, 4];
const todosLosNumeros = [...numeros,...numeros2];
//console.log(todosLosNumeros);

//ejercicio 8 
const pelicula = {titulo: "Encanto", genero: "Musical", anioEstreno: 2019};
const {titulo, genero, anioEstreno} = pelicula;
//console.log(titulo);

//ejercicio 9
const infoPeli = (pelicula) => `La película "${pelicula.titulo}" es de género ${pelicula.genero} y se estrenó en el año ${pelicula.anioEstreno}.`;
//console.log(infoPeli(pelicula));

//ejercicio 10
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, curso){
        super(nombre, edad);
        this.curso = curso;
    }
}

const estudiante = new Estudiante("Hermione", 16, "Defensa contra las artes oscuras");
const infoEstudiante = `El alumno ${estudiante.nombre} tiene ${estudiante.edad} años y está estudiando ${estudiante.curso}`;
//console.log(infoEstudiante);

//ejercicios 11 y 12 - lo hice con GPT porque no entendía cómo funcionaba, ahora creo que si. 

/*const elevarAlCuadrado = require('./modulo');

async function main() {
  try {
    const resultado = await elevarAlCuadrado(5);
    console.log(`El resultado es: ${resultado}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}*/

//main();

//ejercicio 13 y 14

function numPositivo(num) {
    try {
      if (num > 0) {
        return num;
      } else {
        throw new Error("El número es negativo");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

const resultado = numPositivo(5);
localStorage.setItem("numPositivo", resultado);

//ejercicio 15

const boton = document.getElementById("boton");

document.addEventListener("DOMContentLoaded", () => {
boton.addEventListener("click", () => {

    const nombreUsuario = document.getElementById("nombre").value;
    const edadUsuario = document.getElementById("edad").value;

    localStorage.setItem("nombreUsuario", nombreUsuario);
    localStorage.setItem("edadUsuario", edadUsuario);
    alert(`Hola ${nombreUsuario}, de ${edadUsuario} años, bienvenido a mi Newsletter!`);
});
});

  