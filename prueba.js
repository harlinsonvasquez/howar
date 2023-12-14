function enviarFormulario1() {
    // Aquí procesas los datos del primer formulario

    // Luego, ocultas el primer formulario y muestras el segundo
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'block';
}

function enviarFormulario2() {
    // Aquí procesas los datos del segundo formulario
    
    // Puedes hacer algo adicional aquí si es necesario
    
    // Por ejemplo, puedes mostrar un mensaje de confirmación
    alert('Segundo formulario enviado correctamente');
}



/**<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabla de Empleados</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>

  <script src="script.js"></script>

</body>
</html>

// css 

table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  


//js

// Datos de empleados
const empleados = [
    { nombre: "Juan", salario: 50000 },
    { nombre: "María", salario: 60000 },
    { nombre: "Carlos", salario: 70000 },
  ];
  
  // Función para calcular prestaciones
  function calcularPrestaciones(salario) {
    // Aquí puedes agregar la lógica para calcular las prestaciones según tus criterios
    prestaciones = salario * 0.1
    return prestaciones; // Por ejemplo, el 10% del salario
  }
  
  // Crear tabla y agregar encabezados
  const tabla = document.createElement("table");
  const encabezados = ["Nombre", "Salario", "Prestaciones"];
  const encabezadoRow = document.createElement("tr");
  
  encabezados.forEach(encabezado => {
    const th = document.createElement("th");
    th.textContent = encabezado;
    encabezadoRow.appendChild(th);
  });
  
  tabla.appendChild(encabezadoRow);
  
  // Agregar filas con datos de empleados
  empleados.forEach(empleado => {
    const fila = document.createElement("tr");
  
    const nombreCell = document.createElement("td");
    nombreCell.textContent = empleado.nombre;
    fila.appendChild(nombreCell);
  
    const salarioCell = document.createElement("td");
    salarioCell.textContent = `$${empleado.salario}`;
    fila.appendChild(salarioCell);
  
    const prestacionesCell = document.createElement("td");
    prestacionesCell.textContent = `$${calcularPrestaciones(empleado.salario)}`;
    fila.appendChild(prestacionesCell);
  
    tabla.appendChild(fila);
  });
  
  // Agregar la tabla al cuerpo del documento
  
  
  
  function clasificarEdad(edad){
    let clasificacion = "";

    if(edad <= 13){
        clasificacion = "Niñ@"
    }else if(edad >= 14 && edad <=17){
        clasificacion = "Adolecente";
    }else if(edad >= 18 && edad <35){
        clasificacion = "Adulto Joven";
    }else if(edad >= 35 && edad <50){
        clasificacion = "Adulto"
    }else{
        clasificacion = "Adulto Mayor";
    }

    return clasificacion;
}
  document.body.appendChild(tabla);
   */