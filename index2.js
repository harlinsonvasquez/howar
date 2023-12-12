


function enviarRespuesta(){
    let strNombre=document.getElementById("nombre");
    let strApellidos=document.getElementById("apellidos")
    let edad=document.getElementById("edad")
    console.log(strNombre.value)//con .value accedemos al contenido del elemento 
    console.log(strApellidos.value)
  }




/*const estudiante={
    nombre:undefined,
    edad: undefined,
    familia:undefined,
    linaje:undefined,
    casa:undefined,
    animal:undefined,
    cualidades:undefined
}*/
function respuesta() {
    let respuesta = document.getElementById('opcioneslinaje');
    let linaje = respuesta.value;
   
    
    respuestalinaje(linaje)
    let respuestaInput = document.getElementById('respuestaInput');
    console.log(respuestaInput.value)
}

function respuestalinaje(linaje) {
    let respuestaInput = document.getElementById('respuestaInput');
   

    switch(linaje){
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
            console.log("opción no válida");
            return respuestaInput;
    }
   
}


function respuestaCualidades() {
    let respuestaCualidades = document.getElementById('opcionesCualidades');
    let cualidades = respuestaCualidades.value;
  
    listacualidades(cualidades);
    let respuestaCualidades1 = document.getElementById('respuestaCualidades1');
    console.log(respuestaCualidades1.value)
}



function listacualidades(cualidades){

    let respuestaCualidades1 = document.getElementById('respuestaCualidades1');

    switch(cualidades){
        case "1":
            respuestaCualidades1.value="Valor,fuerza,audacia";
            break;
        case "2":
            respuestaCualidades1.value="justicia,Lealtad,Paciencia";
            break;
        case "3":
            respuestaCualidades1.value="Creatividad,Erudición,Inteligencia"
            break;
        case "4":
            respuestaCualidades1.value="Ambición,Determinación,Astucia"
            break;
        default:
            console.log("opcion no valida")

            return respuestaCualidades1
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

/*if ((cualidadEstudiante.value== "valor,fuerza,audacia" && linajeEstudiante.value== "mestizo" || linajeEstudiante.value== "muggle" || linajeEstudiante.value== "sangre pura")) {
    let casa = casas.casa1;
    console.log(casa)
}else if(cualidadEstudiante.value=="justicia,lealtad,paciencia" && respuestalinaje=="mestizo"||respuestalinaje=="muggle"){
    let casa=casas.casa2
    console.log(casa)
    
}else if(cualidadEstudiante.value=="creatividad,erudicion,inteligencia" && linajeEstudiante.value=="mestizo"|| linajeEstudiante.value=="muggle"||linajeEstudiante.value=="sangre pura"){
    let casa=casas.casa3
    console.log(casa)
    
}else if(cualidadEstudiante.value=="ambicion,determinacion,astucia" && linajeEstudiante.value=="sangre pura"){
    let casa=casas.casa4
    console.log(casa)}
else{
    console.log("la casa y el linaje no son validos")
}*/


const claseTransformaciones = {
    materia: 'transformaciones',
    profe: 'kevin slughorn',
    horario: '9:30 am',
    boggarts: 'abejas',
    antiboggarts:'cachorros de perritos',
    
    realizarTransformacionRiddikulus: function() {
      if (this.boggarts !== undefined) {
        this.boggarts = this.antiboggarts;
        console.log(this.boggarts);
      }else{
        console.log("no hay boggart con propiedades")
      }
    },

    enfrentarBoggart:function(boggarts){
        console.log(`se enfrentan el boggarts ${this.boggarts} contra el antiboggarts ${this.antiboggarts}`)

    }
  };
  
  // Llamando al método del objeto claseTransformaciones
  claseTransformaciones.enfrentarBoggart();
  claseTransformaciones.realizarTransformacionRiddikulus();

  const boggartEjemplo ={

    boggarts:'leon'
   

  }/*
  boggartEjemplo.boggarts=claseTransformaciones.realizarTransformacionRiddikulus;

  boggartEjemplo.boggarts();
  console.log(boggartEjemplo.boggarts)*/
  /*claseTransformaciones.enfrentarBoggart(boggartEjemplo.boggarts)

  let efensaContraLasArtesOscuras ={
    animal1:'ciervo',
    animal2:'lobo',
    animal3:'raton',
    animal4:'perro'
  }
  let indiceAleatorio=Math.floor(Math.random()*4)+1;
  let propiedadAleatoria = "animal" + indiceAleatorio;

  estudiante.animal=efensaContraLasArtesOscuras[propiedadAleatoria];
  console.log(estudiante.animal)
  //estudiante.animal=undefined;

  function dementor(){
    if(estudiante.animal!==undefined){
        console.log(`su animal patronus ${estudiante.animal} vencio el dementor`)
    }else{
        console.log("el estudiante no tenia animal patronus fue absorbido y llevado a enfermeria")
    }

  }
  dementor();
  console.table(estudiante)*/