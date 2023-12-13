function enviarRespuesta() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    // Asignar los valores a los campos correspondientes
    document.getElementById("nombreInput").value = nombre;
    document.getElementById("apellidosInput").value = apellidos;
    document.getElementById("edadInput").value = edad;

    // Obtener valores de linaje y cualidades
    let linaje = document.getElementById("opcioneslinaje").value;
    let cualidades = document.getElementById("opcionesCualidades").value;

    // Actualizar valores en los campos linajeInput y cualidadesInput
    respuestalinaje(linaje);
    listacualidades(cualidades);
}


function respuestalinaje(linaje) {
    let respuestaInput = document.getElementById('linajeInput');
    
    switch (linaje) {
        case "1":
            respuestaInput.value = "mestizo";
            break;
        case "2":
            respuestaInput.value = "muggle";
            break;
        case "3":
            respuestaInput.value = "sangre pura";
            break;
        default:
            console.log("Opción no válida");
    }
}

function listacualidades(cualidades) {
    let respuestaCualidades1 = document.getElementById('cualidadesInput');

    switch (cualidades) {
        case "1":
            respuestaCualidades1.value = "Valor,fuerza,audacia";
            break;
        case "2":
            respuestaCualidades1.value = "Justicia,Lealtad,Paciencia";
            break;
        case "3":
            respuestaCualidades1.value = "Creatividad,Erudición,Inteligencia";
            break;
        case "4":
            respuestaCualidades1.value = "Ambición,Determinación,Astucia";
            break;
        default:
            console.log("Opción no válida");
    }
}


function obtenercasa(){
    let casa = document.getElementById('casa');
    let cualidadEstudiante = document.getElementById('cualidadesInput');
    let linajeEstudiante = document.getElementById('linajeInput');

    if (
        (cualidadEstudiante.value === "Valor,fuerza,audacia" && 
        (linajeEstudiante.value === "mestizo" || 
        linajeEstudiante.value === "muggle" || 
        linajeEstudiante.value === "sangre pura"))
    ) {
        casa.value = casas.casa1;
    } else if (
        cualidadEstudiante.value === "Justicia,Lealtad,Paciencia" && 
        (linajeEstudiante.value === "mestizo" || linajeEstudiante.value === "muggle")
    ) {
        casa.value = casas.casa2;
    } else if (
        cualidadEstudiante.value === "Creatividad,Erudición,Inteligencia" && 
        (linajeEstudiante.value === "mestizo" || 
        linajeEstudiante.value === "muggle" || 
        linajeEstudiante.value === "sangre pura")
    ) {
        casa.value = casas.casa3;
    } else if (
        cualidadEstudiante.value === "Ambición,Determinación,Astucia" && 
        linajeEstudiante.value === "sangre pura"
    ) {
        casa.value = casas.casa4;
    } else {
        console.log("La casa y el linaje no son válidos");
    }
}




const clases ={
    trasnformaciones:'kevin slughorn',
    herbologia:'maria umbridge',
    pociones:'liliana mcgonagall',
    encantamientos:'jackie',
    defensaArtesOscuras:'robinson snape',
    animalesMagicos:'david filch',
    historiaMagia:'ronald sprout'
}

const casas ={
    casa1:'griffindor',
    casa2:'hufflepuff',
    casa3:'ravenclaw',
    casa4:'slytherin'
}
