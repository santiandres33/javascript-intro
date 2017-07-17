<<<<<<< HEAD
// $(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
//   // Event Listener
//   $('#roller button.add').on('click', function() { // Controlador
//     $('.dice').append('<div class="die">0</div>'); // Vista
//   });

//   // Event listener
//   $('#roller button.roll').on('click', function() { // Controlador
//     $('.die').each(function(index, dieHtml) { // Controlador
//       var value = Math.floor((Math.random()*6)+1); // Model
//       $(dieHtml).text(value); // Vista
//     });
//   });
// });

function Die(sides){
  this.sides  = sides
  this.value = 0
}


Die.prototype.roll = function(){
  this.value = Math.floor((Math.random()*this.sides)+1)
}

function View(){

}


View.prototype.changeDieValue = function(dieHtml, value){
  $(dieHtml).text(value)  
}


View.prototype.paintNewDice = function(event) { 
    $('.dice').append('<div class="die">0</div>') // Vista
}

function Controller(model, view){
  this.model = model
  this.view =  view
}

Controller.prototype.addCreateDieListener = function() {
  $('#roller button.add').on('click', this.view.paintNewDice)
}

Controller.prototype.addRollDieListener = function(){
  var controller = this
  $('#roller button.roll').on('click', function(event){
    $('.die').each(function(index, dieHtml) {
      console.log(this, controller)
      controller.model.roll()
      var newValue = controller.model.value
      controller.view.changeDieValue(dieHtml, newValue)
    })
  })
}

die = new Die(6)
var view = new View()
var controller = new Controller (die, view)
controller.addCreateDieListener()
controller.addRollDieListener()
// dieHtml =  $(".die").first()
// view.changeDieValue(dieHtml, die.value)
// die.roll
// controller.view
// controller.model





// Controller.prototype.listenCreateDie = function() {
//   $('#roller button.add').on('click', this.view.paintNewDice)
// }


// Controller.prototype.addValueToDice = function(index, dieHtml) { // Controlador
//       var value = Math.floor((Math.random()*6)+1); // Model
//       $(dieHtml).text(value); // Vista
//     }

// function Controller(model, view){
//   this.model = model
//   this.view = view
// }

// var play = new Controller (new Die(), new View())
// play = {model: {}, view: {}}
// play.listen_create_die()
// play.prototype.listen_create_die()

//controller con prototype

=======
$(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
  // Event Listener
  $('#roller button.add').on('click', function() { // Controlador
    $('.dice').append('<div class="die">0</div>') // Vista
  })

  // Event listener
  $('#roller button.roll').on('click', function() { // Controlador
    $('.die').each(function(index, dieHtml) { // Controlador
      var value = Math.floor((Math.random()*6)+1) // Model
      $(dieHtml).text(value) // Vista
    })
  })
})
>>>>>>> e3f3285054d5ff02089e1401d121a4d3313c20e1


function Die () {

}

function View() {

}


function Controller(model, view) {
  this.view = view
  this.model = model
}





var controller = new Controller(new Die(), new View())
