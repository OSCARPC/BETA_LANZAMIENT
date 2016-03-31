
$('#formulario').submit(function() { 
 
	// recolecta los valores que inserto el usuario
	var latitud       = $("#latitud").val();
	var longitud      = $("#longitud").val();
	var datos 		  = $("#datos").val();
	var dni 		  = $("#dni").val();
	var celular 	  = $("#celular").val();
	var direccion     = $("#direccion").val();	
	var tipo 		  = $("#tipo").val();
	var observacion   = $("#observacion").val();

					
	   if(latitud==""){
			alert("Active su Ubicacion , para poder enviar su alerta");
			$.mobile.changePage("#principal");
		return false;
		}else if(longitud==""){
			alert("Active su Ubicacion , para poder enviar su alerta");
			$.mobile.changePage("#principal");
		}else if(datos==""){
			alert("Ingrese sus datos");
			return false;
		}else if(dni==""){
			alert("Ingrese su DNI");
			return false;
		}else if(celular==""){
			alert("Ingrese algun telefono");
			return false;	
			}
			
  	archivoValidacion = "http://190.117.115.217/obsregsc/web_service.php?jsoncallback=?"

	$.getJSON( archivoValidacion, { latitud:latitud ,longitud:longitud ,datos:datos ,dni:dni,celular:celular , direccion:direccion , tipo:tipo , observacion:observacion })
	.done(function(respuestaServer) {
		
		alert(respuestaServer.mensaje + "\nAlerta enviada: " + respuestaServer.hora + "\n" +respuestaServer.generador)
		
		if(respuestaServer.validacion == "ok"){
		 	/// si la validacion es correcta, muestra la pantalla "home"
			//$.mobile.changePage("#principal")
			window.location.href='index.html';
		}else{
		  /// ejecutar una conducta cuando la validacion falla
		}
  
	})
	return false;
})
function regresar(){
	$.mobile.changePage("#principal");
	getLocation();
	}
function solicitar(){
	$.mobile.changePage("#solicitar");
	getLocation();
	}