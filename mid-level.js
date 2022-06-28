/*-------------Capitulo 7: Elemento Window-------------*/
let youtubeURL="https://youtube.com";
let ventana = window.open(youtubeURL); //Ventana emergente
ventana.close();        //Cerrar una ventana
ventata.closed();       //retorna true o false si la ventana esta cerrada o no
window.stop();          //para la carga de una pw
print();         //Abre un archivo para imprimir
let respuesta = confirm("¿salir?");
// console.log(respuesta);

/*------screen y scroll------*/

const screen = window.screen;   //Objeto screen
const screenLeft = window.screenLeft;   //dice distancia entre el borde izquierdo y el borde izquierdo de la pantalla de la pc
const screenTop = window.screenTop;

document.write(`Left: <b>${screenLeft}</b><br>
                Top: <b>${screenTop}</b>

`)

const scrolly = window.scrollY;
alert(scrolly);
window.scrollByPages    //Este podria ser util

ventana = window.open(youtubeURL);
ventana.resizeBy(100,200);      //Cambia el tamaño de la ventana

/*------Locations------*/

console.log(window.location.href);      //url de la pagina actual
console.log(window.location.hostname);  //nombre del dominio del servidor web
console.log(window.location.pathname);  //la ruta y el nombre de archivo d la pagina actual
console.log(window.location.protocol);  //protocolo web utilizado (http: o https:)
console.log(window.location.assign("https://youtube.com"));  //carga un nuevo documento

/*-------------Problema del capitulo 7-------------*/

let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}`);

if(comprar){
    alert("Compra realizada");
}else{
    alert("Compra cancelada");
}

let href = window.location.href;
let pathname=window.location.pathname;
let hostname=window.location.hostname;
let protocol=window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `URL Completa: <b>${href}</b><br>`;

document.write(html);


/*-------------Capitulo 9: EVENTOOOOOS!!!!-------------*/

const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
const contenedor1 = document.querySelector(".container");
const contenedor2 = document.querySelector(".contenedor-2");
button.addEventListener("click",saludar);
button2.addEventListener("click",(e)=>{
    alert("Hola 2 u u");

});

//los eventos se ejecutan mediante las funciones normales asi. O las funciones flecha
function saludar(){
    alert("Hola 1");
    button.removeEventListener("click",saludar);
}

//,true para ejecutar primero en orden
//utilizar e.stopPropagation() dentro de una funcion para que no ejecute a los contenedores padres

//  Doble clic
button.addEventListener("dblclick",(e)=>{
    alert("Doble click");
})

// Mouse Over
contenedor1.addEventListener("mouseover",(e)=>{
    // alert("El mouse esta sobre el contenedor");
    button.classList.remove("btn-danger");

})

//  Mouse Out
contenedor1.addEventListener("mouseout",(e)=>{
    // alert("El mouse esta saliendo del contenedor");
    button.classList.add("btn-danger");
})

//  Context Menu
contenedor2.addEventListener("contextmenu",(e)=>{
    alert("Context menu activated");
    e.preventDefault(); //Para prevenir que aparezca el context menu
})

// Mouse Move.  Aparentemente funciona igual que el over
contenedor2.addEventListener("mousemove",(e)=>{
    // alert("Mouse move");
    button.classList.remove("btn-danger");
    button.classList.add("btn-secondary");

})

//Mouse Leave
contenedor2.addEventListener("mouseleave",(e)=>{
    alert("Mouse leave");
})

//Muouse Down
contenedor2.addEventListener("mousedown",(e)=>{
    alert("Mouse down");
})
contenedor1.addEventListener("mouseup",(e)=>{
    alert("Mouse up");
})

//          Eventos del teclado

const input = document.querySelector(".input-prueba");

//  keydown
input.addEventListener("keydown",(e)=>{
    console.log("Una tecla fue presionada");
})

//  Keypress
input.addEventListener("keypress",(e)=>{
    console.log("Un usuario presiono una tecla y la soltó");
})

//  Keyup
input.addEventListener("keyup",(e)=>{
    let valorTecla=e.code;
    // console.log(valorTecla);
    let valor = input.value;
    if(valorTecla=="Enter"){
        console.log(valor);
        
    }
})

//          Eventos de la interfaz
const img=document.querySelector(".img-prueba");
// img.classList.add("d-none");

//  Error
img.addEventListener("error",()=>{
    console.log("Ha sucedido un error");
})

//  Load. No se pone el window
addEventListener("load",()=>{
    console.log("Ha cargado el sitio");
})

//  UnLoad. No se pone el window
addEventListener("unload",()=>{
    console.log("Te estas por ir del sitio u u");
})

 resize
addEventListener("resize",()=>{
    console.log("Se ha actualizado la resolucion u.u ");
})

//  scroll
addEventListener("scroll",()=>{
    console.log("Se ha escrolleado la pagina");
})

//  select

const contenedorTexto = document.querySelector(".seleccionado");

input.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedorTexto.textContent = textoCompleto.substring(start,end);    
})


//----------Timers----------

const temporizador = setTimeout(()=>{
    alert("Hola");
},2000)

clearTimeout(temporizador);         //Para cancelar la ejecucion del temporizador


const intervalo = setInterval(()=>{
    console.log("Hola");
},2000);

setTimeout(()=>{                //Para detener un temporizador con otro temporizador
    clearInterval(intervalo);   //Para cancelar un intervalo
    console.log("Intervalo detenido u u");
},7000);


/*----------------------------------- Primer problema practico -----------------------------------*/

//--------Problema A--------
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML=error[1];
        resultado.classList.add("text-danger");
    }else{
        resultado.innerHTML="Solicitud enviada correctamente";
        resultado.classList.remove("text-danger");
        resultado.classList.add("text-success");
    }

})

const validarCampos = ()=>{
    // const nombreValor = nombre.value;
    let error = [];
    if(nombre.value.length<5 || nombre.value.length>40){
        error[0]=true;
        error[1]="El nombre es invalido";
        return error;
    
    }else if(email.value.length<5 || 
            email.value.length>40 || 
            email.value.indexOf("@")==-1 ||
            email.value.indexOf(".")==-1){
        error[0]=true;
        error[1]="El email es invalido";
        return error;
    }else if(materia.value.length<5 || materia.value.length>40){
        error[0]=true;
        error[1]="La materia no existe";
    }
    console.log(materia.value.length);
    error[0]=false;
    return error;
}



// //--------Problema B--------

let alumnos=[{
    nombre:"Dolor Suffering",
    email: "dolor@pain.com",
    materia:"Fisica 3"
},{
    nombre:"Karina Guerrera",
    email: "kar@pain.com",
    materia:"Literatura"
},{
    nombre:"Jorge Ramirez",
    email: "the_george@pain.com",
    materia:"Matematica"
},{
    nombre:"Facundo Roberto",
    email: "facu@pain.com",
    materia:"Sexologia 2"
},{
    nombre:"Iron u u",
    email: "hierro@pain.com",
    materia:"Educacion fisica"
}];

const botonConfirmar = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container")

let htmlCode="";

for (alumno in alumnos){
    // console.log(alumnos[alumno]);
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;

}
contenedor.innerHTML=htmlCode;


botonConfirmar.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");

    if(confirmar){
        document.body.removeChild(botonConfirmar);          //Para eliminar un elemento del body 
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for(elemento in elementos){
        semana=elementos[elemento];
        semana.innerHTML=semanasElegidas[elemento].value;
    }
    }
})



//-----------------------------------Capitulo 10-----------------------------------

//  Sentencia Switch

let expr = "bkbjk";

switch(expr){
    case "Banana":
        console.log("Esta fruta es amarilla");
        break;
    case "Pera":
        console.log("Esta fruta es tiene forma de guitarra");
        break;
    case "Manzana":
        console.log("Los primeros humanos pecaron comiendola");
        break; 
    default:
        console.log("No es ninguna");
}

if(expr=="Banana")  console.log("Esta fruta es amarilla");

else if(expr=="Pera")   console.log("Esta fruta es tiene forma de guitarra");

else console.log("Los primeros humanos pecaron comiendola");


//       Control de flujo y manejo de errores

//----sentencias de manejo de excepciones

//-Catch condicional

try{
    console.log("Todo anda bien uwu");
    asdasdasd
}
catch(error){
    console.log(error);
    console.log(typeof error);
    console.log("Lo siento, ocurrió un error de referencia");
}

//-Catch incondicional

//Lo mismo pero con condiciones adentro del catch

try{
    asdasdasd
}
catch(error){
    if(3>5){
        console.log("Ha ocurrido un error");
    }else{
        console.log("No sé, algo (?")
    }
}

// -Catch con finally
try{
    asdasdasd
}
catch(error){
    if(3>5){
        console.log("Ha ocurrido un error");
    }else{
        console.log("No sé, algo (?")
    }
}finally{
    console.log("Me muestro pase lo que pase ù_ú");
};


// -Throw. Para tirar un error

try{
    throw{
        error:"Error con throw",
        info:"Un error creado por el desarrollador"
    }
}catch(e){
    console.log(e);
}

/*--------------------------Problema A C10--------------------------*/ 

const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if(isNaN(prevRes)){
            throw "Gracioso";
        }
        resultado = verificarAprobacion(8,5,prevRes);
        mensaje =definirMensaje(prevRes);
    }catch(e){
        resultado = "¿SOS GRASIOSO?";
        mensaje="He descubrierto que intentaste hackear el sitio";
    }
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "No podes ser tan HDP";
        break;
        case 2: resultado = "Sos malisimo para mi materia ò_ó";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien, pero puede mejorar";
        break;
        case 8: resultado = "¡Muy bien!";
        break;
        case 9: resultado = "¡Excelente!";
        break;
        case 10: resultado = "¡Insuperable hdlrcdll!";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes)=>{
    promedio = (nota1 + nota2 + prevRes)/3;
    if(promedio>=7){
        return "<span class='text-success'>APROBADO</span>";
    }
    return "<span class='text-danger'>DESAPROBADO</span>";
}

const abrirModal = (res, msg)=>{
    document.querySelector(".resultado").innerHTML=res;
    document.querySelector(".mensaje").innerHTML= "Tu prueba: " + msg;
    let modal = document.querySelector(".Propio-modal-background");
    modal.style.display="flex";
    modal.style.animation = "aparecer 1s forwards";
}


//-----------------------------------Capitulo 12-----------------------------------

//Callbacks: una funcion que llama a otra funcion

        //  Callback v1
function prueba(callback){
    callback("Pedro");
}


function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre);

        //  Callback v2

function prueba2(callback){
    callback("Roberto");
}

prueba2(function (nombre){
    console.log(nombre);
})


//          Promises

let nombreP = "Jorge unu";

const promesa = new Promise((resolve,reject)=>{
    if(nombreP !== "Jorge") reject("Lo siento el nombre no es Jorge u u");
    else resolve(nombreP);
})

console.log(promesa);
promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
});


// -----Ejemplo Practico con Callbacks y Promises-----

class Persona{
    constructor(nombre,instagram){
        this.nombre=nombre;
        this.instagram=instagram;
    }
}

// console.log(new Persona("Galeano Santiago","@Alias"));

const data=[
    ["Galeano Santiago", "@alias"],
    ["Roberto", "@robertinho"],
    ["Iron uwu", "@ironbbvm_uwu"],
    ["Hernesto"]
];

const personas=[];

for(let i=0; i<data.length;i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
}
// console.log(personas);

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id] == undefined)reject("No se ha encontrado la persona");
        else {resolve(personas[id])}
    });
}

const obtenerInstagram= (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id].instagram == undefined)reject("No se ha encontrado el instagram");
        else {resolve(personas[id].instagram)}
    });
}

let id=2;

obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
    console.log(instagram);
}).catch((e)=>{             //Catch para manejar el error
    console.log(e);
})


//          Await & Async

const objeto = {
    propiedad1:"valor 1",
    propiedad2:"valor 2",
    propiedad3:"valor 3"
};

const obtenerInformacion = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(objeto)},3000);
    })
}

//Primera forma sin async
// obtenerInformacion().then(resultado=>console.log(resultado));

//Segunda forma con async y await

const mostrarResultado = async ()=>{
    resultado2 = await obtenerInformacion();
    console.log(resultado2);
}

mostrarResultado();

//  Ejemplo Practico util con await y async

const obtenerInformacion2 = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200);
    })
}

const mostrarData = async ()=>{
    data1 = await obtenerInformacion2("1: Primero");
    data2 = await obtenerInformacion2("2: Segundo");
    data3 = await obtenerInformacion2("3: Tercero");
    console.log(data1);
    console.log(data2);
    console.log(data3);

}

mostrarData();

/*--------------------------Problema A C12--------------------------*/ 

// const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 4",
        nota: 7   
    },{
        nombre: "Calculo 3",
        nota: 8
    },{
        nombre: "Base de Datos 3",
        nota: 9
    },{
        nombre: "Matemáticas Discretas 2",
        nota: 7
    },{
        nombre: "Programación",
        nota: 8
    }
]

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
    })
}

obtenerMateria(1).then(res=>console.log(res));

const devolverMaterias = async ()=>{
    let materia = [];
    for(let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria(i);
        // materia[i].then(mat=>console.log(mat));
        // console.log(materia[i]);
        let newHTMLCode = `
        <div class="materias">
                <div class="materia">
                    <div class="nombre">${materia[i].nombre}</div>
                    <div class="nota">${materia[i].nota}</div>
                </div>
            </div>  `;
            materiasHTML.innerHTML+=newHTMLCode;

    }
}

devolverMaterias();

//-----------------------------------Capitulo 13-----------------------------------

//Formato JSON. Siempre debe ir serializado

const deserializado = {"variable1" : "PEDRO", "variable2":"JORGE"};

const serializado = JSON.stringify(deserializado);
console.log(serializado);

const deserealizadoAgain = JSON.parse(serializado);
console.log(deserealizadoAgain);


//------------------------------Capitulo 13------------------------------

//Peticiones HTTP

let peticion;
if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");


//Para realizar una peticion GET
peticion.addEventListener("load", ()=>{
    let respuesta;

    console.log(peticion.readyState);
    
    if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    
    console.log(JSON.parse(respuesta));
})

//Para metodo GET
peticion.open("GET","informacion.txt");
peticion.send();


//Para metodo POST
peticion.open("POST","https://reqres.in/api/users");
peticion.setRequestHeader("Content-type","application/json;charset=UTF8");
peticion.send(JSON.stringify({
    "nombre":"morfeo",
    "trabajo": "lider"
}));

/*------------------Peticiones con el metodo fetch. Funciona para el GET------------------*/

    /*
Para este metodo existen tres conversores:

.text() : Convierte el resultado de la promesa fetch a string 
.json() : Convierte el resultado de la promesa fetch a formato json
.blob() : Convierte 
    */
//----------Fetch para GET---------

fetch("https://reqres.in/api/unknown/2")
    .then(res=>res.json())
    // .then(res=>console.log(res));

//----------Fetch para post---------

fetch("https://reqres.in/api/users",{
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Santiago",
        "apellido" : "Galeano"
    }),
    headers:{"Content-type" : "application/json"}
})
    .then(res=>res.json())
    // .then(res=>console.log(res));

//----------.blob() en Fetch. Para crear un enlace temporal para archivos multimedia---------

const imagen = document.querySelector(".imagen");

fetch("img.jpg")
    .then(res=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img));


//----------------Libreria AXIOS---------
//axios.get()
//axios.post()
axios("informacion.txt")
    // .then(res=>console.log(res.data));

axios.post("https://reqres.in/api/users",{
    "nombre" : "santiago",
    "apellido" : "galeano"
})
    // .then(res=>console.log(res));



//----------------Fetch y Axios con Async & Await. La forma optima de utilizar estos metodos---------

const getName = async ()=>{
    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.textContent = resultado.nombre;
    document.body.appendChild(div);
    console.log(resultado)

}

const getEdad = async ()=>{
    let resultado = await axios("informacion.txt");
    // let resultado = await peticion.json();
    let div = document.createElement("DIV");
    div.classList.add("edad");
    div.textContent = resultado.data.edad;
    document.body.appendChild(div);
    console.log(resultado)

}

document.getElementById("getName").addEventListener("click",getName);

document.getElementById("getEdad").addEventListener("click",getEdad);

// Edad: ${resultado.edad}
