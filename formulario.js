function mostrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const sexo = document.getElementById('sexo').value;
    const edad = parseInt(document.getElementById('edad').value);
    const tipoSangre = document.querySelector('input[name="tipoSangre"]:checked').value;//seleccionamos el radio que este marcado 

    // Determinar la categoría de edad
    let categoriaEdad = '';
    if (edad <= 1) {
        categoriaEdad = 'Bebé';
    } else if (edad <= 12) {
        categoriaEdad = 'Niño';
    } else if (edad <= 18) {
        categoriaEdad = 'Adolescente';
    } else if (edad <= 30) {
        categoriaEdad = 'Joven';
    } else if (edad <= 60) {
        categoriaEdad = 'Adulto';
    } else {
        categoriaEdad = 'Anciano';
    }

    // Crear tabla si aún no existe
    let tabla = document.getElementById('tablaDatos');
    if (!tabla) {//niega la existencia de la tabla y luego la crea
        tabla = document.createElement('table');//crea la tabla
        tabla.id = 'tablaDatos';//le asigna un Id  a la variable tabla
        //lo agrega al cuerpo del html
        document.body.appendChild(tabla);

        // Encabezados de la tabla
        const encabezados = ['Nombre', 'Apellido', 'Sexo', 'Edad', 'Tipo de Sangre', 'Categoría de Edad'];//solo texto para el encabezado de la tabla
        const encabezadosRow = tabla.insertRow();
        encabezados.forEach(encabezado => {
            const th = document.createElement('th');
            th.textContent = encabezado;
            encabezadosRow.appendChild(th);
        });
    }

    // Insertar fila con los datos del formulario
    const newRow = tabla.insertRow();
    const data = [nombre, apellido, sexo, edad, tipoSangre, categoriaEdad];
    data.forEach(dato => {
        const cell = newRow.insertCell();
        cell.textContent = dato;
    });
}
