var campos = 1;

function agregarCampo(){
	campos = campos + 1;
	var NvoCampo= document.createElement("div");
	NvoCampo.id= "divcampo_"+(campos);
	NvoCampo.innerHTML= 
		"<table>" +
		"   <tr>" +
		"     <td nowrap='nowrap'>" +
		"        <input type='text' size='50' name='articu_" + campos + "' id='articu_" + campos + "'>" +
		"     </td>" +
		"     <td nowrap='nowrap'>" +
		"        <a href='JavaScript:quitarCampo(" + campos +");'> Quitar </a>" +
		"     </td>" +
		"   </tr>" +
		"</table>";
	var contenedor= document.getElementById("contenedorcampos");
    contenedor.appendChild(NvoCampo);
  }


function quitarCampo(iddiv){
  var eliminar = document.getElementById("divcampo_" + iddiv);
  var contenedor= document.getElementById("contenedorcampos");
  contenedor.removeChild(eliminar);
}