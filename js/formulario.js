/* https://cdn.rawgit.com/davidgm17/Formulario/81a0e08f/json/formulario.json */




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

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarJson(dadesJson){
  var object = JSON.parse(dadesJson);
  var numPreguntas =object.question.length;
	
	
	/*pregunta1 texto*/
	document.getElementById("p1").innerHTML = object.question[0].title;
	/*document.getElementById("t1").innerHTML = object.question[0].type;
	document.getElementById("r1").innerHTML = object.question[0].answer;*/
	
	/*pregunta2 texto*/
	document.getElementById("p2").innerHTML = object.question[1].title;
	/*document.getElementById("t3").innerHTML = object.question[1].type;
	document.getElementById("r3").innerHTML = object.question[1].answer;*/
	
	/*pregunta 3 select*/
	document.getElementById("p3").innerHTML = object.question[2].title;
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;*/
	document.getElementById("r7").innerHTML = object.question[6].answer;
	
	
	var numOpciones=object.question[6].option.length;
	var cajacontenedor = document.getElementsByClassName ("checkbox")[0];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = object.question[6].option[j];
		label.setAttribute("for","r"+j);
		input.type ="checkbox";
		input.name="respuesta7";
		input.id="r"+j;
		cajacontenedor.appendChild(input);
		cajacontenedor.appendChild(label);
		 cajacontenedor.appendChild(document.createElement("br"));
	}
	
	/*pregunta 8 checkbox*/
	document.getElementById("p8").innerHTML = object.question[7].title;
	/*document.getElementById("t2").innerHTML = object.question[2].type;*/
	document.getElementById("r8").innerHTML = object.question[7].answer;
	
	
	var numOpciones=object.question[7].option.length;
	var cajacontenedor1 = document.getElementsByClassName("checkbox")[1];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = object.question[7].option[j];
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;*/
	document.getElementById("r9").innerHTML = object.question[8].answer;
	
	
	var numOpciones=object.question[8].option.length;
	var cajacontenedor1 = document.getElementsByClassName("radio")[0];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = object.question[8].option[j];
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
	/*document.getElementById("t2").innerHTML = object.question[2].type;*/
	document.getElementById("r10").innerHTML = object.question[9].answer;
	
	
	var numOpciones=object.question[9].option.length;
	var cajacontenedor1 = document.getElementsByClassName("radio")[1];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = object.question[9].option[j];
		label.setAttribute("for","r100."+j);
		input.type ="radio";
		input.name="respuesta10";
		input.id="r100."+j;
		cajacontenedor1.appendChild(input);
		cajacontenedor1.appendChild(label);
		 cajacontenedor1.appendChild(document.createElement("br"));
	}
	
	}
	/*funciona*/
	
	
  
  
  
  
  
  




