
$(document).ready(function(){

  	$('#add').on('click', addTask); /*usamos el selector #add que al hacer click desencadena la función*/ 

     
	function addTask(){

  		var  newToDo= $('#newtask').val(); /*creamos una variable que guarda el valor de la nueva tarea ingresada*/
    	$('#listTask').append('<li>' + newToDo + '</li>'); /* tenemos la lista "ul" como contenedor vacío 
                                                       con el id #listTask, con el método append creamos un "li"
                                                        que se agrega la final del elemento, este "li" contiene  el valor
                                                       de la variable declarada recién */
    	$('#newtask').val("");/*luego de agregar el elemento deja vacío el campo otra vez.*/
  	}
});  	
