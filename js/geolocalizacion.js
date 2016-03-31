


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
		
    } 
}

function showPosition(position) {

	document.getElementById("latitud").value=position.coords.latitude;
	document.getElementById("longitud").value=position.coords.longitude;	
}
