
//------------------------------ FORMULA 1 MRU --------------------------------------

//capturo los datos de entrada del usuario con document.getElementById.value que dentro del documento captura el valor del elemento
   
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario por su ID
    const form1 = document.getElementById('Formulario1-mru');
        
    // Añade un evento al enviar el formulario
    form1.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        const velocidad = parseFloat(document.getElementById('velocidad1').value);//capturo el dato y de una vez lo convierto a float
        const tiempo = parseFloat(document.getElementById('tiempo1').value);
        const resul1 = document.getElementById('resu-distan-mru1');//llamo el campo donde voy a poner el resultado en el html
        
        const distanciaform1 = velocidad * tiempo;

                
        resul1.className = 'resultadosform'; // llamo la clase para mostrar la respuesta de la operacion
        resul1.style.display = 'block'; // se pone el estilo aqui para que sea visible
        resul1.textContent = `La distancia es ${distanciaform1} metros.`; // Mostrar el resultado
              
    });

    // Agrega el evento para limpiar los inputs
    document.getElementById('limpiar1').addEventListener('click', function() {
        document.getElementById('velocidad1').value = ''; // Limpia el input de velocidad
        document.getElementById('tiempo1').value = ''; // Limpia el input de tiempo
        const resul1 = document.getElementById('resu-distan-mru1');
        resul1.style.display = 'none'; // Oculta el resultado
        });
});


//------------------------------ FORMULA 2 MRU --------------------------------------

//capturo los datos de entrada del usuario con document.getElementById.value que dentro del documento captura el valor del elemento
    
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario por su id
    const form2 = document.getElementById('Formulario2-mru');//llamo el campo donde voy a poner el resultado en el html
        
    // Añade un evento al enviar el formulario que es una accion que queremos que suceda cuando interactua el usuario con la aplicacion
    form2.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        const distancia = parseFloat(document.getElementById('distancia1').value);//capturo el dato y de una vez lo convierto a float
        const tiempo = parseFloat(document.getElementById('tiempo2').value);
        const resul2 = document.getElementById('resu-velo-mru');
        
        const velocidadform2 = distancia / tiempo;

                
        resul2.className = 'resultadosform'; // llamo la clase para mostrar la respuesta de la operacion
        resul2.style.display = 'block'; // se pone el estilo aqui para que sea visible
        resul2.textContent = `La distancia es ${velocidadform2} m/s.`; // Mostrar el resultado
              
    });

    // Agrega el evento para limpiar los inputs
    document.getElementById('limpiar2').addEventListener('click', function() {
        document.getElementById('distancia1').value = ''; // Limpia el input de distancia
        document.getElementById('tiempo2').value = ''; // Limpia el input de tiempo
        const resul2 = document.getElementById('resu-velo-mru');
        resul2.style.display = 'none'; // Oculta el resultado
        });
});

//------------------------------FORMULA 3 MRU--------------------------------------

//capturo los datos de entrada del usuario con document.getElementById.value que dentro del documento captura el valor del elemento
    
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario por su id
    const form3 = document.getElementById('Formulario3-mru');//llamo el campo donde voy a poner el resultado en el html
        
    // Añade un evento al enviar el formulario que es una accion que queremos que suceda cuando interactua el usuario con la aplicacion
    form3.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        const distancia = parseFloat(document.getElementById('distancia2').value);//capturo el dato y de una vez lo convierto a float
        const velocidad = parseFloat(document.getElementById('velocidad2').value);
        const resul3 = document.getElementById('resu-tiempo-mru');
        
        const tiempoform3 = distancia / velocidad;

                
        resul3.className = 'resultadosform'; // llamo la clase para mostrar la respuesta de la operacion
        resul3.style.display = 'block'; // se pone el estilo aqui para que sea visible
        resul3.textContent = `el tiempo que tarda es de  ${tiempoform3} segundos.`; // Mostrar el resultado
              
    });

    // Agrega el evento para limpiar los inputs
    document.getElementById('limpiar3').addEventListener('click', function() {
        document.getElementById('distancia2').value = ''; // Limpia el input de distancia
        document.getElementById('velocidad2').value = ''; // Limpia el input de tiempo
        const resul3 = document.getElementById('resu-tiempo-mru');
        resul3.style.display = 'none'; // Oculta el resultado
        });
});

