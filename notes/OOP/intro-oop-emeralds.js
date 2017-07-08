// Funciones

- Declaracion
- Invocacion
- Parametros
- Pueden ser llamadas recursivamente
- Funciones anonimas


// Function declaration

// rest y spread
function sum (a,b, ...rest) {
  console.log(rest)
  return a + b
}

// Esto no es valido
function(a,b) {
  return a + b
}

// Function Expression

var sum = function(a,b) {

}

function sum (a,b) {
  return a + b
}

// Funciones de alto nivel Higer order function


function things_to_eat(callback, food) {

}


// Un callback es una funcion que se pasa como argumento de otra funcion


// Scope
- Functional scope

function hola(name) {
  varsaludo = name + 'como estas'
  var chao = function() {
    var  bye = saludo + 'Hasta nunca'
  }
  return bye
}


- variables locale y globales

// This

- new
- call y apply
- sobre un objeto
- Default (Simple call)

// OOP
- Funciones constructoras
- Metodos
- Herencia
- Prototype chain


// Funcion constructora

function Student(name, age) {
  this.name = name
  this.age = age
}

Student.prototype.speak = function() {
  console.log(`Hola soy ${this.name}`)
}

// Prototype chain


ozu.speak()


juan = new Student('juan', 43)



// juan.speak()


function sum(n1, n2) {
  return n1 + n2
}


function multiply(callback, n1,n2, n3) {
  return callback(n1, n2) * n3
}

multiply(sum, 1,2,3) === 9

function myMap(fun, arr, num) {
  var result = []
  arr.forEach(function(element) {
    result.push(fun(element, num))
  })
  return result
}


myMap(function(element, num){
  return element * num
}, [1,2,3], 4)




