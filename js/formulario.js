/* https://cdn.jsdelivr.net/gh/davidgm17/Formulario@7a1decb6/json/formulario.json */


/* variables globales utilizadas*/
var formElement = null;
var respuestasCorrectas = [];/* lista con las respuestas descargadas del jason*/
var nota = 0;


/* ********************************************************************* */
            /* función principal que controla el programa*/

/* ***********************************************************************/
window.onload = function(){	
    /*CORREGIR al apretar el botón*/
	formElement=document.getElementById('corregir');
	formElement.onclick=function(){
		inicializar();
		if (comprobar()){
			corregirTexto(0);
			corregirTexto(1);
			corregirSelect(2);
			corregirSelect(3);
			corregirMultiple(4);
			corregirMultiple(5);
			corregirCheckbox(0);
			corregirCheckbox(1);
			corregirRadio(8);
			corregirRadio(9);
			presentarNota();
		}
		return false;
	}
	/* Función para reestablecer todas las preguntas*/
	nuevoExamen = document.getElementById('reestablecer');
	nuevoExamen.onclick = function(){
		reestablecer();
	}
	/* fichero json que está en el servidor rawgit*/
	var url = "https://cdn.jsdelivr.net/gh/davidgm17/Formulario@7a1decb6/json/formulario.json";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			/* función personalizada que gestiona la respuesta a la petición de fichero*/
			gestionarJson(this.responseText); 
		}
	}
	xhttp.open("GET", url, true); //url del fichero
	xhttp.send();
}

/* ***************************************************************************** */
					/* Cargamos los datos del jason en el html*/

/* **********************************************************************************/

function gestionarJson(dadesJson){
	var object = JSON.parse(dadesJson);		/* introducimos el documento jason como si fuera un objeto para poder trabajar con él*/
	var numPreguntas =object.question.length;
	
	
/*pregunta1 texto*/
	document.getElementById("p1").innerHTML = object.question[0].title;
	respuestasCorrectas[0]=object.question[0].answer;

/*pregunta2 texto*/
	document.getElementById("p2").innerHTML = object.question[1].title;
	respuestasCorrectas[1]=object.question[1].answer;

/*pregunta 3 select*/
	document.getElementById("p3").innerHTML = object.question[2].title;
	respuestasCorrectas[2]=object.question[2].answer;
	var numOpciones=object.question[2].option.length;
	var select = document.getElementsByTagName("select")[0];
	for (var j = 0;j<numOpciones;j++){
		var option = document.createElement("option");
		option.text =  object.question[2].option[j];
		option.value=j+1;
		select.options.add(option);
	}
/*pregunta 4 select*/
	document.getElementById("p4").innerHTML = object.question[3].title;
	respuestasCorrectas[3]=object.question[3].answer;
	var numOpciones=object.question[3].option.length;
	var select = document.getElementsByTagName("select")[1];
	for (var j = 0;j<numOpciones;j++){
		var option = document.createElement("option");
		option.text =  object.question[3].option[j];
		option.value=j+1;
		select.options.add(option);
	}
/*pregunta 5 multiple*/
	document.getElementById("p5").innerHTML = object.question[4].title;
	respuestasCorrectas[4]=object.question[4].answer;
	var numOpciones=object.question[4].option.length;
	var select = document.getElementsByTagName("select")[2];
	for (var j = 0;j<numOpciones;j++){
		var option = document.createElement("option");
		option.text =  object.question[4].option[j];
		option.value=j+1;
		select.options.add(option);
	}
/*pregunta 6 multiple*/
	document.getElementById("p6").innerHTML = object.question[5].title;
	respuestasCorrectas[5]=object.question[5].answer;
	var numOpciones=object.question[5].option.length;
	var select = document.getElementsByTagName("select")[3];
	for (var j = 0;j<numOpciones;j++){
		var option = document.createElement("option");
		option.text =  object.question[5].option[j];
		option.value=j+1;
		select.options.add(option);
	}
/*pregunta 7 checkbox*/
	document.getElementById("p7").innerHTML = object.question[6].title;
	respuestasCorrectas[6]=object.question[6].answer;
	var numOpciones=object.question[6].option.length;
	var cajacontenedor = document.getElementsByClassName ("checkbox")[0];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = " "+object.question[6].option[j];
		label.setAttribute("for","r7."+j);
		input.type ="checkbox";
		input.name="respuesta7";
		input.id="r7."+j;
		cajacontenedor.appendChild(input);
		cajacontenedor.appendChild(label);
		cajacontenedor.appendChild(document.createElement("br"));
	}
/*pregunta 8 checkbox*/
	document.getElementById("p8").innerHTML = object.question[7].title;
	respuestasCorrectas[7]=object.question[7].answer;
	var numOpciones=object.question[7].option.length;
	var cajacontenedor1 = document.getElementsByClassName("checkbox")[1];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = " "+object.question[7].option[j];
		label.setAttribute("for","r8."+j);
		input.type ="checkbox";
		input.name="respuesta8";
		input.id="r8."+j;
		cajacontenedor1.appendChild(input);
		cajacontenedor1.appendChild(label);
		cajacontenedor1.appendChild(document.createElement("br"));
	}
/*pregunta 9 radio*/
	document.getElementById("p9").innerHTML = object.question[8].title;
	respuestasCorrectas[8]=object.question[8].answer;
	var numOpciones=object.question[8].option.length;
	var cajacontenedor1 = document.getElementsByClassName("radio")[0];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = " "+object.question[8].option[j];
		label.setAttribute("for","r9."+j);
		input.type ="radio";
		input.name="respuesta9";
		input.id="r9."+j;
		cajacontenedor1.appendChild(input);
		cajacontenedor1.appendChild(label);
		cajacontenedor1.appendChild(document.createElement("br"));
	}
/*pregunta 10 radio*/
	document.getElementById("p10").innerHTML = object.question[9].title;
	respuestasCorrectas[9]=object.question[9].answer;
	var numOpciones=object.question[9].option.length;
	var cajacontenedor1 = document.getElementsByClassName("radio")[1];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = " "+object.question[9].option[j];
		label.setAttribute("for","r100."+j);
		input.type ="radio";
		input.name="respuesta10";
		input.id="r100."+j;
		cajacontenedor1.appendChild(input);
		cajacontenedor1.appendChild(label);
		cajacontenedor1.appendChild(document.createElement("br"));
	}

}
	
	
	
/* /*Funcion para comprobar como se almacenan los datos en la lista para poder corregir.*/
/*function darResultados(){
	var cajaresultado=document.getElementById("titulo");
	for (var i=0;i<respuestasCorrectas.length;i++){
		var p =document.createElement("p");
		p.innerHTML=respuestasCorrectas[i];
		cajaresultado.appendChild(p);	
	}
}
*/

/* ****************************************************************************************************/
											/* Corrección */

/* ******************************************************************************************************/
/* Corregir texto*/
function corregirTexto(posicion){
	var s=document.getElementsByClassName("inputSel")[posicion].value;    
	if (s==respuestasCorrectas[posicion]) {
		darRespuestaHtml("P"+(posicion+1)+": Exacto!");
		nota +=1;
	}else if (s!=respuestasCorrectas[posicion]){
		darRespuestaHtml("P"+(posicion+1)+": Incorrecto");
	}
}

/* Corregir preguntas tipo select*/ 
function corregirSelect(posicion){
	var sel = document.getElementsByClassName("inputSel")[posicion];  
	if (sel.selectedIndex-1==respuestasCorrectas[posicion]) { /*-1 porque en el jason empiezan los valores desde 0 y en el html empiezan desde 1.*/
		darRespuestaHtml("P"+(posicion+1)+": Correcto");
		nota +=1;
	}else darRespuestaHtml("P"+(posicion+1)+": Incorrecto");
}

/* Corregir select multiple*/ 
function corregirMultiple(posicion){
	var sel = document.getElementsByClassName("inputSel"); 
	var escorrecta = [];
	for (i = 0; i < sel[posicion].length; i++) {  /* Posicion, es el lugar que ocupa en la lista de inputsel*/
		if (sel[posicion][i].selected) {
			escorrecta[i]=false;     
			for (j = 0; j < respuestasCorrectas[posicion].length; j++) {
				if ((i-1)==respuestasCorrectas[posicion][j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				nota +=1.0/respuestasCorrectas[posicion].length;  //dividido por el número de respuestas correctas   
				darRespuestaHtml("P"+(posicion+1)+": "+i+" correcta");    
			} else {
				nota -=1.0/respuestasCorrectas[posicion].length;  //dividido por el número de respuestas correctas   
				darRespuestaHtml("P"+(posicion+1)+": "+i+" incorrecta");
			}   
		} 
	}
}
/* Corregir  checkbox*/

function corregirCheckbox(posicion){
  /* Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]*/
  var f=document.getElementById("form1");
  var escorrecta = [];
  if(posicion==0){/* Si le paso la posicion 0 corrige la pregunta 7 */
	for (i = 0; i < f.respuesta7.length; i++) {  /* "respuesta7" es el nombre asignado a todos los checkbox de esta pregunta*/
		if (f.respuesta7[i].checked) {
			escorrecta[i]=false;     
			for (j = 0; j < respuestasCorrectas[6].length; j++) {
				if ((i-1)==respuestasCorrectas[6][j]) escorrecta[i]=true;
			}
			/*sumamos o restamos y ponemos mensaje.*/
			if (escorrecta[i]) {
				nota +=1.0/respuestasCorrectas[6].length;  /* dividido por el número de respuestas correctas  */ 
				darRespuestaHtml("P7: "+i+" correcta");    
			}else {
				nota -=1.0/respuestasCorrectas[6].length;  /* dividido por el número de respuestas correctas   */
				darRespuestaHtml("P7: "+i+" incorrecta");
			}   
		} 
	}
  }else if(posicion==1){/* Si le paso la posicion 1 corrige la pregunta 8 */
	for (i = 0; i < f.respuesta8.length; i++) {  /* "respuesta8" es el nombre asignado a todos los checkbox de esta pregunta*/
		if (f.respuesta8[i].checked) {
			escorrecta[i]=false;     
			for (j = 0; j < respuestasCorrectas[7].length; j++) {
				if ((i-1)==respuestasCorrectas[7][j]) escorrecta[i]=true;
			}
			/*sumamos o restamos y ponemos mensaje.*/
			if (escorrecta[i]) {
				nota +=1.0/respuestasCorrectas[7].length;  /* dividido por el número de respuestas correctas  */ 
				darRespuestaHtml("P8: "+i+" correcta");    
			}else {
				nota -=1.0/respuestasCorrectas[7].length; /* dividido por el número de respuestas correctas  */ 
				darRespuestaHtml("P8: "+i+" incorrecta");
			}   
		}   
	}
  }
}

/* Corregir radio*/
function corregirRadio(posicion){
  var f=document.getElementById("form1");
  var radioSeleccionado ;
  var correcta;
  if(posicion ==8){
	for (i = 0; i < f.respuesta9.length; i++) {  /* "respuesta9" es el nombre asignado a todos los checkbox de esta pregunta*/
		if (f.respuesta9[i].checked){
			correcta=false;
			if( (i-1)==respuestasCorrectas[posicion]) {
				correcta=true;
			}
			if(correcta){
				nota +=1.0;    
				darRespuestaHtml("P"+(posicion+1)+": "+i+" correcta");    
			} else {
				nota -=1.0;   
				darRespuestaHtml("P"+(posicion+1)+": "+i+" incorrecta");
			}   
		}
	}
  }else if(posicion==9){
	 for (i = 0; i < f.respuesta10.length; i++) {  /* "respuesta10" es el nombre asignado a todos los checkbox de esta pregunta*/
		if (f.respuesta10[i].checked){
			correcta=false;
			if( (i-1)==respuestasCorrectas[posicion]) {
				correcta=true;
			}
			/* Si has elegido la respuesta "centro" te sale un mensaje de aviso,jaja , detallito de un foraste */
			if(i==2){alert("LLevas demasiado tiempo conduciendo por Mallorca por eso piensas que se conduce por el centro.")}
			if(correcta){
				nota +=1.0;    
				darRespuestaHtml("P"+(posicion+1)+": "+i+" correcta");    
			} else {
				nota -=1.0;   
				darRespuestaHtml("P"+(posicion+1)+": "+i+" incorrecta");
			}   
		}
	}
  }   
} 
  

/* *************************************************************************************************** */
			/* Funciones para el control y presentación de respuestas durante la corrección*/

/* *************************************************************************************************** */

function darRespuestaHtml(r){
	var p = document.createElement("p");
	var node = document.createTextNode(r);
	p.appendChild(node);
	document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
}

function inicializar(){
	document.getElementById('resultadosDiv').innerHTML = "";/* Vacio el campo de los resultados*/
	var titulo3 = document.createElement("h3");	/* Añado el titulo h3 que avisa que es la zona con las respuestas al corregir*/
	var node = document.createTextNode("Resultados de la correccion del examen:");
	titulo3.appendChild(node);
	document.getElementById('resultadosDiv').appendChild(titulo3);
	nota=0.0;
}

/* Comprobar que se han introducido datos en el formulario*/
function comprobar(){
	
	var pregunta=document.getElementsByClassName("inputSel");
	var pre=document.getElementById("form1");
	var f=formElement;
	
	/* Compruebo si la respuesta 7 -checkbox tiene alguna respuesta seleccionada */
	var checked7=false;
	for (i = 0; i < pre.respuesta7.length; i++) {  
		if (pre.respuesta7[i].checked) checked7=true;
	}
	/* Compruebo si la respuesta 8-checkbox tiene alguna respuesta seleccionada */
	var checked8=false;
	for (i = 0; i < pre.respuesta8.length; i++) {  
		if (pre.respuesta8[i].checked) checked8=true;
	}
	/* Compruebo si la respuesta 9-checkbox tiene alguna respuesta seleccionada */
	var checked9=false;
	for (i = 0; i < pre.respuesta9.length; i++) {  
		if (pre.respuesta9[i].checked) checked9=true;
	}
	/* Compruebo si la respuesta 10-checkbox tiene alguna respuesta seleccionada */
	var checked10=false;
	for (i = 0; i < pre.respuesta10.length; i++) {  
		if (pre.respuesta10[i].checked) checked10=true;
	}
	if (pregunta[0].value=="") {
		pregunta[0].focus();
		alert("Pregunta 1 sin contestar");
		return false;
	} else if (pregunta[1].value=="") {
		pregunta[1].focus();
		alert("Pregunta 2 sin contestar");
		return false;
	}else if (pregunta[2].selectedIndex==0) {
		pre.elements[2].focus();
		alert("Selecciona una opción de la pregunta 3.");
		return false;
	}else if (pregunta[3].selectedIndex==0) {
		pre.elements[3].focus();
		alert("Selecciona una opción de la pregunta 4.");
		return false;
	}else if (pregunta[4].selectedIndex==0) {
		pre.elements[4].focus();
		alert("Selecciona al menos una opción de la pregunta 5.");
		return false;
	}else if (pregunta[5].selectedIndex==0) {
		pre.elements[5].focus();
		alert("Selecciona al menos una opción de la pregunta 6.");
		return false;
	}else if (!checked7) {    
		pre.elements[6].focus();
		alert("Selecciona una opción de la pregunta 7.");
		return false;
	}else if (!checked8) {    
		pre.elements[7].focus();
		alert("Selecciona una opción de la pregunta 8.");
		return false;
	}else if (!checked9) {    
		pre.elements[8].focus();
		alert("Selecciona una opción de la pregunta 9.");
		return false;
	}else if (!checked10) {    
		pre.elements[9].focus();
		alert("Selecciona una opción de la pregunta 10.");
		return false;
	}else{
		return true;
	}
}


/* **********************/
/* Función para dejar los campos a 0 y poder hacer de nuevo un examen sin volver a cargar la página*/

function reestablecer(){
	var pregunta=document.getElementsByClassName("inputSel");
	var pre=document.getElementById("form1");
	pregunta[0].value="";
	pregunta[1].value="";
	pregunta[2].selectedIndex=0;
	pregunta[3].selectedIndex=0;
	pregunta[4].selectedIndex=0;
	pregunta[5].selectedIndex=0;
/* Cambio todas las respuesta 7 a des-selecionadas y selecciono la respuesta 0,"Seleccione una respuesta" */
	for (i = 0; i < pre.respuesta7.length; i++) {  
		if (pre.respuesta7[i].checked) pre.respuesta7[i].checked=false;
	}
	pre.respuesta7[0].checked=true;
/* Cambio todas las respuesta 7 a des-selecionadas y selecciono la respuesta 0,"Seleccione una respuesta" */
	for (i = 0; i < pre.respuesta8.length; i++) {  
		if (pre.respuesta8[i].checked) pre.respuesta8[i].checked=false;
	}
	pre.respuesta8[0].checked=true;
/* Cambio todas las respuesta 7 a des-selecionadas y selecciono la respuesta 0,"Seleccione una respuesta" */
	for (i = 0; i < pre.respuesta9.length; i++) {  
		if (pre.respuesta9[i].checked) pre.respuesta9[i].checked=false;;
	}
	pre.respuesta9[0].checked=true;
/* Cambio todas las respuesta 7 a des-selecionadas y selecciono la respuesta 0,"Seleccione una respuesta" */
	for (i = 0; i < pre.respuesta10.length; i++) {  
		if (pre.respuesta10[i].checked) pre.respuesta10[i].checked=false;;
	}
	pre.respuesta10[0].checked=true;
	inicializar();
}
	
	
  
  
  
  
  
  




