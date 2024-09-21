//------------------------------ FORMULA 1 MRUV --------------------------------------

//capturo los datos de entrada del usuario con document.getElementById.value que dentro del documento captura el valor del elemento
   
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario por su ID
    const form4 = document.getElementById('Formulario1-mruv');
        
    // Añade un evento al enviar el formulario
    form4.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        const velInicial = parseFloat(document.getElementById('velocidadInicial1').value);//capturo el dato y de una vez lo convierto a float
        const aceleracion = parseFloat(document.getElementById('aceleracion1').value);
        const tiempoform4 = parseFloat(document.getElementById('tiempo3').value);
        const resul4 = document.getElementById('resu-velfinal-mruv1');//llamo el campo donde voy a poner el resultado en el html
        
        const velFinalForm4 = velInicial +(aceleracion*tiempoform4);

                
        resul4.className = 'resultadosform'; // llamo la clase para mostrar la respuesta de la operacion
        resul4.style.display = 'block'; // se pone el estilo aqui para que sea visible
        resul4.textContent = `La velocidad final es de ${velFinalForm4} m/s.`; // Mostrar el resultado
              
    });

    // Agrega el evento para limpiar los inputs
    document.getElementById('limpiar4').addEventListener('click', function() {
        document.getElementById('velocidadInicial1').value = ''; // Limpia el input de velocidad
        document.getElementById('aceleracion1').value = ''; // Limpia el input de tiempo
        document.getElementById('tiempo3').value = ''; // Limpia el input de tiempo
        const resul4 = document.getElementById('resu-velfinal-mruv1');
        resul4.style.display = 'none'; // Oculta el resultado
        });
});


//------------------------------ FORMULA 2 MRUV --------------------------------------

//capturo los datos de entrada del usuario con document.getElementById.value que dentro del documento captura el valor del elemento
   
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario por su ID
    const form5 = document.getElementById('Formulario2-mruv');
        
    // Añade un evento al enviar el formulario
    form5.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        const velInicialdis = parseFloat(document.getElementById('velocidadInicial2').value);//capturo el dato y de una vez lo convierto a float
        const velFinaldis = parseFloat(document.getElementById('velocidadFinal2').value);
        const tiempoform5 = parseFloat(document.getElementById('tiempo4').value);
        const resul5 = document.getElementById('resu-distan-mruv2');//llamo el campo donde voy a poner el resultado en el html
        
        const distanciaForm5 = ((velInicialdis+velFinaldis)/2)*tiempoform5;

                
        resul5.className = 'resultadosform'; // llamo la clase para mostrar la respuesta de la operacion
        resul5.style.display = 'block'; // se pone el estilo aqui para que sea visible
        resul5.textContent = `La velocidad final es de ${distanciaForm5} metros.`; // Mostrar el resultado
              
    });

    // Agrega el evento para limpiar los inputs
    document.getElementById('limpiar5').addEventListener('click', function() {
        document.getElementById('velocidadInicial2').value = ''; // Limpia el input de velocidad
        document.getElementById('velocidadFinal2').value = ''; // Limpia el input de tiempo
        document.getElementById('tiempo4').value = ''; // Limpia el input de tiempo
        const resul5 = document.getElementById('resu-distan-mruv2');
        resul5.style.display = 'none'; // Oculta el resultado
        });
});


//------------------------------ FORMULA 3 MRUV --------------------------------------

//capturo los datos de entrada del usuario con document.getElementById.value que dentro del documento captura el valor del elemento
   
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario por su ID
    const form6 = document.getElementById('Formulario3-mruv');
        
    // Añade un evento al enviar el formulario
    form6.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        const velInicialdis3 = parseFloat(document.getElementById('velocidadInicial3').value);//capturo el dato y de una vez lo convierto a float
        const tiempoform6 = parseFloat(document.getElementById('tiempo5').value);
        const acelform6 = parseFloat(document.getElementById('aceleracion3').value);
        const resul6 = document.getElementById('resu-distan-mruv3');//llamo el campo donde voy a poner el resultado en el html
        
        const distanciaForm6 = (velInicialdis3*tiempoform6)+((acelform6*(tiempoform6**2))*0.5);//como es dividido entre 2, se puede multiplicar por 0.5

                
        resul6.className = 'resultadosform'; // llamo la clase para mostrar la respuesta de la operacion
        resul6.style.display = 'block'; // se pone el estilo aqui para que sea visible
        resul6.textContent = `La distancia es de ${distanciaForm6} metros.`; // Mostrar el resultado
              
    });

    // Agrega el evento para limpiar los inputs
    document.getElementById('limpiar6').addEventListener('click', function() {
        document.getElementById('velocidadInicial3').value = ''; // Limpia el input de velocidad
        document.getElementById('tiempo5').value = ''; // Limpia el input de tiempo
        document.getElementById('aceleracion3').value = ''; // Limpia el input de tiempo
        const resul6 = document.getElementById('resu-distan-mruv3');
        resul6.style.display = 'none'; // Oculta el resultado
        });
});

