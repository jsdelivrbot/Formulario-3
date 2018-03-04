/* https://cdn.rawgit.com/davidgm17/Formulario/81a0e08f/json/formulario.json */


/* variables del documento ejemplo*/
var formElement=null;
var numeroSecreto=null;
var respuestaSelect=null;
var respuestasCheckbox = [];
var nota = 0;  //nota de la prueba sobre 3 puntos (hay 3 preguntas)

/* variables utilizadas*/
var respuestasCorrectas =[];/* lista con las respuestas descargadas del jason*/

/* ********************************************************************* */
window.onload = function(){
	
//CORREGIR al apretar el botón
 formElement=document.getElementById('corregir');
 formElement.onclick=function(){
	 darResultados();
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
    presentarNota();
   }
   return false;
 }

// fichero json que está en el servidor rawgit
var url="https://cdn.rawgit.com/davidgm17/Formulario/81a0e08f/json/formulario.json";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  // función personalizada que gestiona la respuesta a la petición de fichero
  gestionarJson(this.responseText); 
 }
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();
}

/* ***************************************************************************** */
// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarJson(dadesJson){
  var object = JSON.parse(dadesJson);
  var numPreguntas =object.question.length;
	
	
	/*pregunta1 texto*/
	document.getElementById("p1").innerHTML = object.question[0].title;
	respuestasCorrectas[0]=object.question[0].answer;
	/*document.getElementById("t1").innerHTML = object.question[0].type;
	document.getElementById("r1").innerHTML = object.question[0].answer;*/
	
	
	/*pregunta2 texto*/
	document.getElementById("p2").innerHTML = object.question[1].title;
	respuestasCorrectas[1]=object.question[1].answer;
	/*document.getElementById("t3").innerHTML = object.question[1].type;
	document.getElementById("r3").innerHTML = object.question[1].answer;*/
	
	/*pregunta 3 select*/
	document.getElementById("p3").innerHTML = object.question[2].title;
	respuestasCorrectas[2]=object.question[2].answer;
	/*document.getElementById("t2").innerHTML = object.question[2].type;
	document.getElementById("r2").innerHTML = object.question[2].answer;*/
	
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;
	document.getElementById("r4").innerHTML = object.question[3].answer;*/
	
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;
	document.getElementById("r5").innerHTML = object.question[4].answer;*/
	
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;
	document.getElementById("r6").innerHTML = object.question[5].answer;*/
	
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;
	document.getElementById("r7").innerHTML = object.question[6].answer;*/
	
	
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;
	document.getElementById("r8").innerHTML = object.question[7].answer;*/
	
	
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;
	document.getElementById("r9").innerHTML = object.question[8].answer;*/
	
	
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;
	document.getElementById("r10").innerHTML = object.question[9].answer;*/
	
	
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
	/*Funcion para comprobar como se almacenan los datos en la lista para poder corregir.*/
	
	}
function darResultados(){
	var cajaresultado=document.getElementById("titulo");
	for (var i=0;i<respuestasCorrectas.length;i++){
		var p =document.createElement("p");
		p.innerHTML=respuestasCorrectas[i];
		cajaresultado.appendChild(p);
		
	}
	
 
	
	
}

/******/
/** Copiado y modificado */

/* ****************************************************************************************************/
/* Corrección */
/* Corregir texto*/
function corregirTexto(posicion){
  //Vosotros debéis comparar el texto escrito con el texto que hay en el xml
  //en este ejemplo hace una comparación de números enteros
  var s=document.getElementsByClassName("inputSel")[posicion].value;    
  if (s==respuestasCorrectas[posicion]) {
   darRespuestaHtml("P"+(posicion+1)+": Exacto!");
   nota +=1;
  }
  else if (s!=respuestasCorrectas[posicion]){
	  darRespuestaHtml("P"+(posicion+1)+": Incorrecto");
  }
}

/* Corregir preguntas tipo select*/ 
function corregirSelect(posicion){
  //Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
  //para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
  //luego comparar ese value con el value guardado en answer
  var sel = document.getElementsByClassName("inputSel")[posicion];  
  if (sel.selectedIndex-1==respuestasCorrectas[posicion]) { //-1 porque en el jason empiezan los valores desde 0 y en el html empiezan desde 1.
   darRespuestaHtml("P"+(posicion+1)+": Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P"+(posicion+1)+": Incorrecto");
}

/* Corregir select multiple*/ 
function corregirMultiple(posicion){

var sel = document.getElementsByClassName("inputSel"); 
var escorrecta = [];

for (i = 0; i < sel[posicion].length; i++) {  /*"en el multiple hay una lista de option*/
   if (sel[posicion][i].selected) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCorrectas[posicion].length; j++) {
     if (i==respuestasCorrectas[posicion][j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/sel[posicion].length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P"+(posicion+1)+": "+i+" correcta");    
    } else {
     nota -=1.0/sel[posicion].length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P"+(posicion+1)+": "+i+" incorrecta");
    }   
   } 
  }
}
/* Corregir  checkbox*/

//Si necesitáis ayuda para hacer un corregirRadio() decirlo, lo ideal es que a podáis construirla modificando corregirCheckbox
function corregirCheckbox(posicion){
  //Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=document.getElementById("form1");
  var escorrecta = [];
  if(posicion==0){/* Si le paso la posicion 0 corrige la pregunta 7 */
  for (i = 0; i < f.respuesta7.length; i++) {  /*"respuesta7" es el valor asignado a "name" en el checkbox*/
   if (f.respuesta7[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCorrectas[6].length; j++) {
     if (i==respuestasCorrectas[6][j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/f.respuesta7.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P7: "+i+" correcta");    
    } else {
     nota -=1.0/f.respuesta7.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P7: "+i+" incorrecta");
    }   
   } 
  }
  }else if(posicion==1){/* Si le paso la posicion 1 corrige la pregunta 8 */
	  for (i = 0; i < f.respuesta8.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.respuesta8[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCorrectas[7].length; j++) {
     if (i==respuestasCorrectas[7][j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/f.respuesta8.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P8: "+i+" correcta");    
    } else {
     nota -=1.0/f.respuesta8.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P8: "+i+" incorrecta");
    }   
   } 
	  
  }
}}





/* *************************************************************************************************** */
//Gestionar la presentación de las respuestas
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
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}

//Comprobar que se han introducido datos en el formulario
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
   } 
   else if (pregunta[2].selectedIndex==0) {
    pre.elements[2].focus();
    alert("Selecciona una opción de la pregunta 3.");
   return false;
   }
   else if (pregunta[3].selectedIndex==0) {
    pre.elements[3].focus();
    alert("Selecciona una opción de la pregunta 4.");
   return false;
   }
   else if (pregunta[4].selectedIndex==0) {
    pre.elements[4].focus();
    alert("Selecciona al menos una opción de la pregunta 5.");
   return false;
   }
   else if (pregunta[5].selectedIndex==0) {
    pre.elements[5].focus();
    alert("Selecciona al menos una opción de la pregunta 6.");
   return false;
   }
   else if (!checked7) {    
    pre.elements[6].focus();
    alert("Selecciona una opción de la pregunta 7.");
    return false;
   }
	else if (!checked8) {    
	 pre.elements[7].focus();
	 alert("Selecciona una opción de la pregunta 8.");
	 return false;
	} else if (!checked9) {    
	pre.elements[8].focus();
	 alert("Selecciona una opción de la pregunta 9.");
	 return false;
	} else if (!checked10) {    
	pre.elements[9].focus();
	 alert("Selecciona una opción de la pregunta 10.");
	 return false;
	}else{
	return true;
	}
}






	
	
  
  
  
  
  
  




