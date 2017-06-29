
$(document).ready(function(){

  	$('#add').on('click', addTask); /*usamos el selector #add que al hacer click desencadena la función*/ 
    $('.listTask').on('change', '.completed', completeTask);
    $('.listTask').on('click', '.deleted', deleteTask);
     
	function addTask(){

  		var  newToDo= $('#newtask').val(); /*creamos una variable que guarda el valor de la nueva tarea ingresada*/
    	$('#listTask').append('<li><p><input type = "checkbox" id="check" checked="checked" class = "completed">' + newToDo + '<i class="fa fa-trash deleted"></i></</p>'); /* tenemos la lista "ul" como contenedor vacío 
                                                                                                             con el id #listTask, con el método append creamos un "li"
                                                                                                     que se agrega la final del elemento, este "li" contiene  el valor
                                                                                                     de la variable declarada recién */

    	$('#newtask').val("");/*luego de agregar el elemento deja vacío el campo otra vez.*/

  	}

  	function deleteTask(){
  		$(this).parent().remove();

  	}

  	function completeTask(){
  		$(this).parent().addClass('done'); 
  	}


});  	
