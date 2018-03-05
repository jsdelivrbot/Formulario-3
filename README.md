# Formulario
Práctica final segunda evaluación. Formulario. Integrando HTML + CCS + JS + JSON + metadatos

# Estructura del proyecto:

	- Página principal con las intrucciones del Formulario "formulario.html".
	- Página de Examen "examen.html".
	- Página con la información sobre el desarrollador "desarrollador.html".
	- Carpeta "/img".
		- Imagenes del proyecto.
	- Carpeta "/css".
		- Contiene los archivos ".css" de las páginas del proyecto.
		- "formulariod" : archivo css para pg. formulario versión escritorio. Más de 426  px de ancho de pantalla.
		- "instruccionesd" : archivo css para pg. instrucciones y desarrollador versión escritorio.Más de 426  px de ancho.
	    - "movil" : archivo css para todas las páqinas versión movil.
    		- "formulario".
    		- "examen".
    		- "desarrollador".
			- "Supercell-magic-webfont" : Utilizada para dar el formato desado al título de la página.
  	- Carpeta "/js".
   		- "formulario"  : archivo js que contiene todas las funciones del formulario(están explicadas las funciones con comentarios sobre ellas).

# Aspectos que se han tenido en cuenta a lo largo del desarrollo de este proyecto:
	
	- El titulo de la página web es menor a 8 palabras. <title>
	- La descripción de la página web es menor a 32 palabras. <meta name="descripción"...>
	- Optimizar todas las imágenes, a parte de darles retocar el tamaño inicial , todas han sido comprimidas mediante la página web : "www.tinypng.com".
	- Para elegir la combinación de colores.
        http://www.colores.org.es/ocre-dorado.php
    - Para seleccionar la fuente para las preguntas.
        https://fonts.google.com/?selection.family=Roboto+Mono:300,700
	- Se ha ido desarrollando un README durante la evolución de esta práctica.
	- El tamaño de la imagen del fondo es : 56 Kb.
	- En el formato movil, el menú superior y el fondo se adaptan a la anchura total de la pantalla, paratener mejor resolución y aprovechamiento de la pantalla.
	~~~~
     ##Páginas utilizadas para validar.##
          Validador de html utilizado:
              https://validator.w3.org/#validate_by_input
          Para comprobar si la sintaxis de javaScript tiene errores, validador js:
              http://esprima.org/demo/validate.html
          Validador de css utilizado:
              https://jigsaw.w3.org/css-validator/#validate_by_input
          Para reducir el tamaño de las fotos:
              https://tinypng.com/
     ~~~~
	- Una vez terminado el proyecto, y siendo este operativo, se ha realizado una rama "minimificada", donde se ha realizado el proceso de minimificación de cada uno de los archivos html y css. En el caso del documento javascript, después de varias pruebas y problemas de carga con rawgit, se ha dejado indentado pero eliminando la mayor parte de comentarios, con la única finalidad de intentar hacer funcionar el proyecto en su versión minimificada.

# Observaciones del proyecto Formulario:
  	- Se ha utilizado la herramienta "GITHUB" para ir evolucionando de forma segura a lo largo del proyecto , creando las ramas necesarias.

	- La imagen que sirve de logotipo del proyectos tienen fondo blanco rodeando la imagen.
		Se decide:
			Retocar la imagen para eliminar el fondo.
      		Para ello se ha utilizado la siguiente herramienta online:
     			 https://burner.bonanza.com/background_burns/23984591/load
	
	- Se ha utilizado un solo .css para las tres páginas en su versión movil,reduciendo el número de archivos totales y su peso.
			
	- Se ha utilizado una fuente de texto cargada en la carpeta /css , utilizada en el titulo de las páginas, y se ha utilizado otra para el resto de los ficheros, desde google-fonts.
 	
    - Otro requisito, obligatorio, usado ha sido la función ":hover", en cada botón de acción se cambia de color del fondo y color del borde del botón. De esta forma se llamará la atención al usuario para que vea que hay una acción.
  
    - También he utilizado la propiedad ":cursor" en los botones de las tres páginas para:
        1. Sugerir que tienen una acción cuando te situas sobre ellos.
		2. Para que todos los botones muestren el mismo cursor, ya que algunos son hipervínculos y otros tienen una acción dada desde el javascript, lo que les daba aspectos diferentes.
	- Al verificar la página "examen.html" salen 10 avisos, de que los campos de titulos de las preguntas están vacios. NO GENERAN ERRORES, solo muestra aviso.
	
	## Propuesta personal ##
	- El botón de nuevo examen, de la página "Examen.html" no es un enlace a la misma página.  
	   Llama a una función que he creado, para vaciar todos los campos del examen, borrar las correcciones y nota.
	- En la pregunta 10 si te equivocas,seleccionando "Centro" te sale un alert con un mensaje especial.

	

~~~~
#Resultado final del proyecto 4 de Lenguaje de marcas.#
- versión indentada:
    https://cdn.rawgit.com/davidgm17/Formulario/63894679/formulario.html
- versión minimificada:
    https://cdn.rawgit.com/davidgm17/Formulario/minimificada/formulario.html
~~~~