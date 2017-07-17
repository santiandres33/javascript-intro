$(document).ready(function() {
  // bindEvents()




// Event listener
$('#form-1').on('submit', function(e){
  e.preventDefault()

    // //Sacar la informacion
    // var formData = $(this).serialize()
    // // var title = $(this).find('input[name="title"]').val()
    // var url = this.action
    // //Ajax

    var form = this

    $.ajax({
      method: 'POST',
      url: form.action,
      // todo_content1 es el nombre la llave que debe ser igual al name del input 
      data: {
        todo_content1: form.todo_content1.value
      }
    }).done(function(response) {
      // Actualizar el DOM
      console.log(response)
      

       $('table').append(response)
       $('table').append( `
        <tr>
      <td> ${response.new_todo2.id} </td>
      <td> ${response.new_todo2.todo_content} </td>
      <td>      
       <ul>
         <li><a href="/todos/${response.new_todo2.id}/delete" class="delete">Delete</a></li>
         <li><a href="/todos/${response.new_todo2.id}/complete  " class="complete">Complete</a></li>
       </ul>    
       
     </td>
   </tr>`





        )

      // 1 interporlar en jason el html
      // 2 con parciales
      // 3 como usar handle bars 

      
    })

    // console.log('Que???')

  })






})


// function bindEvents() {
//   // Enlaza los eventos que agregan, remuevan y completan TODOS a los elmentos del DOM indicados
//   $('.delete-buton').on('click', delteTot)
//   $(form).on('submit', crateTodo)
// }

// function buildTodo(todoName) {
//   // Eso nos ta un pedazo del DOM
//   var todoTemplate = $.trim($('#todo_template').html());
//   // Creamos un elemento de jquery a partir del template
//   var $todo = $(todoTemplate);
//   // Modificamos el texto con el que nos pasen como argumento
//   $todo.find('h2').text(todoName);
//   // Devuelve el elemento de jquery para ser usado en otra parte.
//   return $todo;
// }

// Crea las funciones que añaden, remueven y completan TODOS.
