 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos
var Santiago = {
  name: "santiago",
  height: "1.73",
  sport: "athletism"
}

var Felipe = {
  name: "felipe",
  height: "1.70",
  sport: "soccer"
}


// 1. Añadir propiedades a objetos

a1 = {
  name: 'fasd',
  age: 12
}

a2 = {
  name: 'afsdf',
  age: 324
}


var name = 'juan'

// Function Declaration
function name() {

}

// Function Expresssion
var name = function() {
  console.o
}




function addWinToAthletes(athletes, event) {
  athletes.forEach(function(athlete){
    athlete.win = function() {
      console.log(`${this.name} won the ${event}`)
    }
  })
}


addWinToAthletes([a1,a2], 'Tennis')



// 2. Voltea un String




// 3. Remueve numeros impares




// 4. Funcion constructora




// 5. Reflexion


/////// Pruebas //////////
var Athlete = {name: "", age: 0, sport: ""}
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
