//let a = prompt("Ingrese su nombre");
let numero1 = 50;
let numero2 = 21;

let variable = numero1 === numero2;
document.write(variable);

if(variable){
    document.write(`<div>Son iguales</div>`);
}else{
    document.write(`<div>Son diferentes</div>`);
}

/*document.write(`
<div class='container'> 
    <h1>` + a + `</h1> 
    <h2>` + frase + `</h2> 
</div>`);


/*-------------------------Primer ejercicio practico------------------------- */

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if(edad>18){
        if(time>=2 && time<7 && free == false ){
            alert("Podes pasar gratis porque sos la primer persona despues de las 2 AM");
            free = true;
        }else{
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar`);
        }
    }else if(edad==0){
        document.write(`<h1>Programa detenido u.u</h1>`)
        throw new Error("Error para terminar el codigo. No es un error real");
    }
    else{
        alert("Sos menor de edad, no podes pasar");
    }
}

validarCliente(2);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(2);


/*-------------------------Segundo ejercicio practico------------------------- */

let cantidad = parseInt(prompt("Cuantos alumnos son?: "));
let alumnosTotales = [];

for (i=0; i< cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno: " + (i+1)), 0];
}

const tomarAsistencia = (nombre, p)=>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][i]++;
    }
}

for (i = 0; i < 4; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    _____________Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    _____________Ausentes: <b> ${4 - alumnosTotales[alumno][1]} </b>
    `;
    document.write(resultado)
    if(4 - alumnosTotales[alumno][1] >= 2){
        document.write("Desaprobado");
    }
    
}


/*------------------ Tercer Ejercio Practico ------------------*/
/*------------- Clases -------------*/

class animal{
    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info=`
        
        Soy un ${this.especie}, tengo ${this.edad} años y
        soy de color ${this.color}
        <br>
        `;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

const perrox = new animal("perro", "5", "negro");
const gatox = new animal("gato", "2", "blanco");
const hamsterx = new animal("perro", "5", "azul");

perrox.verInfo();
gatox.verInfo();
hamsterx.verInfo();

/* -------------clases extend-------------*/


class Animal{
    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info=`
        
        Soy un ${this.especie}, tengo ${this.edad} años y
        soy de color ${this.color}
        <br>
        `;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert("Guau!");
    }
}

// const perro = new Perro("perro", "5", "negro"); //En vez de poner la clase Animal, se coloca la subclase Perro
// const gato = new Animal("gato", "2", "blanco");
// const hamster = new Animal("perro", "5", "azul");

perro.ladrar();
gato.verInfo();
hamster.verInfo();

/* -------------clases setters (Para modificar un parametro de la clase)-------------*/


class Animal{
    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info=`
        
        Soy un ${this.especie}, tengo ${this.edad} años y
        soy de color ${this.color}
        <br>
        `;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie,edad,color);
        this.raza = null;
    }
    ladrar(){
        alert("Guau!");
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }

}

const perro = new Perro("perro", "5", "negro"); //En vez de poner la clase Animal, se coloca la subclase Perro
const gato = new Animal("gato", "2", "blanco");
const hamster = new Animal("perro", "5", "azul");

perro.setRaza = "Pastor Aleman";
document.write(perro.getRaza);


/* -------------Cuarto Problema practico-------------*/


class Celulares{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    botonEncendido(){
        if(this.encendido == false){
            alert("Celular prendido");
            this.encendido=true;
        }else{
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("el celular esta apagado, no se puede reiniciar");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}
        `);
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Tamaño: <b>${this.resolucionDePantalla}</b> <br>
        Resolucion de Camara: <b>${this.resolucionDeCamara}</b> <br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `
    }
}

//Celulares de alta gama

class CelularAltaGama extends Celulares{
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLente(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: <b>${this.resolucionDeCamaraExtra}</b>` ;
    }
}


const celular1 = new Celulares("rojo", "150 gr", "5'", "hd", "1 gb");
const celular2 = new Celulares("Blanco", "155 gr", "5.4'", "full hd", "2 gb");
const celular3 = new Celulares("Negro", "154 gr", "5.9'", "full hd", "2 gb");


celular1.botonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.botonEncendido();

celular1 = new CelularAltaGama("rojo", "130g", "5.2'","4k", "3gb", "FUL HD");
celular2 = new CelularAltaGama("negro", "133g", "6'","4k", "4gb", "FUL HD");


document.write(
    `${celular1.infoAltaGama()} <br> <br>
    ${celular2.infoAltaGama()} <br>
   
    `
)


/* -------------Quinto Problema practico-------------*/

class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar(){
        if(this.instalada==false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada==true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }

    abrir(){
        if(this.iniciada == false && this.instalada==true){
            this.iniciada = true;
            alert("App abierta");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada==true){
            this.iniciada = false;
            alert("App cerrada");

        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
    }
   
}


const app1 = new App("16.000", "5 estrellas", "900mb");
const app2 = new App("12.000", "2 estrellas", "100mb");
const app3 = new App("11.000", "4 estrellas", "400mb");
const app4 = new App("14.000", "3 estrellas", "200mb");
const app5 = new App("15.000", "5 estrellas", "500mb");
const app6 = new App("17.000", "2 estrellas", "400mb");
const app7 = new App("300", "1 estrellas", "3gb");

document.write(`

${app1.appInfo()} <br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>

`);


app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();


//---------------------Strings------------------------

let cadena = "hola, como, estas";
let cadena2 = " de ";

//metodos de cadenas

resultado = cadena.startsWith(cadena2);
resultado2 = cadena.endsWith(cadena2);
resultado3 = cadena.includes(cadena2);
resultado4 = cadena.indexOf(cadena2);
resultado5 = cadena.lastIndexOf(cadena2);
resultado6 = cadena.padStart(10,"pain");
resultado6 = cadena.repeat(2);


//segunda seccion de cadenas

let cadenaX = "    Hello Cruel World    ";
let numerosX = 123;

let resultadoX = cadena.split(",");
let resultado2X = cadena.substring(0,2);
let resultado3X = cadena.toUpperCase(); //Tambien existe el toUpperCase
let resultado4 = numeros.toString();
let resultado5 = cadena.trim(); //Tambien estan trimEnd y trimStart

document.write(resultado5);

//Ejemplo de programa que dice la edad 

let cadenaC = prompt("Ingrese la fecha de nacimiento");
let fechaActual="26-04-2022";
let resultadoC = cadena.split("-");
//let resultado2 = fechaActual.split("-")

anos=resultado2[2]-resultado[2];

if(resultado[1]>resultado2[1]){
    anos=anos-1;
   
}else if(resultado[1]==resultado2[1] && resultado[0]>resultado2[0]){
    anos=anos-1;
   
}
document.write(`Usted Tiene ${anos} Años de Edad`);



/*----------------------- Metodos de Array -----------------------*/
//Metodos transformadores
let nombres=["pedro", "maria","jorge"];
let numeros=[1,2,3,4,5];
//document.write(nombres + "<br>");

let resultado = nombres.pop(); //elimina el ultimo, .shift elimina el primer elemento
let resultado2 = nombres.push("juan", "hernesto");
let resultado3 = nombres.reverse();
nombres.unshift("iron","camilo");
nombres.sort();
//document.write(nombres + "<br>");
nombres.splice(1,2, "diana", "sandra");

//document.write(nombres);

//metodos accesores

let nuevoArray = nombres.join("<br>Elemento: ");
//document.write("Elemento: " + nuevoArray + "<br><br>");

let nuevoArray2 = nombres.slice(0,2);
//document.write(nuevoArray2);


//Metodos de repeticion

nombres.forEach((nombres)=> document.write(nombres + "<br>"));
numeros.filter(numero => document.write(numero + "<br>"));
nombres.filter((nombre) => nombre.length >5);


//---------------Calculadora con clases
      
class Calculadora{
    constructor(){
    }
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num1, exp){
        return parseInt(num1)**parseInt(exp);
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2: Resta, 3: División, 4: Multiplicacion, 5: Potenciación, 6: Raiz Cuadrada, 7: Raiz Cubica");

if (operacion == 1){
    let numero1 = prompt("Primer numero para sumar: ");
    let numero2 = prompt("Segundo numero para sumas: ");
    let resultado = calculadora.sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("Primer numero para restar: ");
    let numero2 = prompt("Segudo numero para restar: ");
    let resultado = calculadora.restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 3){
    let numero1 = prompt("Primer numero para dividir: ");
    let numero2 = prompt("Segudo numero para dividir: ");
    let resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 4){
    let numero1 = prompt("Primer numero para multiplicar: ");
    let numero2 = prompt("Segudo numero para multiplicar: ");
    let resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 5){
    let numero1 = prompt("Primer numero a potenciar: ");
    let numero2 = prompt("Exponente: ");
    let resultado = calculadora.potenciar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 6){
    let numero1 = prompt("Conocer la raiz cuadrada de: ");
    let resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if(operacion == 7){
    let numero1 = prompt("Conocer la raiz cubica de: ");
    let resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else{
    alert("No se ha encontrado la operacion");
}



//              Sistema para obtener informacion de las materias

const obtenerInformacion = (materia)=>{
    let materias = {
        fisica: ["Perez","Pedro","Mario", "Sofia"],
        programacion: ["Rodriguez","Pedro", "Camila"],
        logica: ["Hernandez","Pedro", "Camila", "Mario", "Sofia"],
        quimica: ["Martinez","Pedro", "Camila", "Mario", "Sofia"]

    }
    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    }else{
        return materias;
    }
}


const mostrarInformacion = (materia)=>{
    let info = obtenerInformacion(materia);

    if(info !== false){
        let profesor = info[0][0];
        let alumnos = info[0];
        alumnos.shift();
        document.write(`El profesor de <b>${info[1]}</b> es: <b style='color: red'>${profesor}</b><br>
        Los alumnos son: <b style='color: blue'>${alumnos}</b><br><br>`);
    }
}

const cantidaDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    let clasesPresentes = [];
    for (info in informacion){
        //document.write(info);
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style="color: blue;"'> ${alumno} </b> esta en <b>${cantidadTotal} clases: </b><b style="color:green;">${clasesPresentes}</b><br><br>
    `;
    
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidaDeClases("Pedro"));
document.write(cantidaDeClases("Sofia"));


//              Inscribirse en una materia
/*
let materias = {
    fisica: ["Perez","Pedro","Mario", "Sofia"],
    programacion: ["Rodriguez","Pedro", "Camila"],
    logica: ["Hernandez","Pedro", "Camila", "Mario", "Sofia"],
    quimica: ["Martinez","Pedro", "Camila", "Mario", "Sofia"]
}

const inscribir = (alumno, materia)=>{
    personas = materias[materia];
    alumnos = personas;
    if(alumnos.length>=4){
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas`)
    }else{
        alumnos.push(alumno);
        if(materia == "programacion"){
            materias = {
                fisica: materias["fisica"],
                programacion: alumnos,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        } else if(materia == "fisica"){
            materias = {
                fisica: alumnos,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        } else if(materia == "logica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: alumnos,
                quimica: materias["quimica"]
            }
        }else if(materia == "quimica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: alumnos
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscripto a ${materia} correctamente`);
    }
}

document.write(materias["programacion"] + "<br>");
inscribir("Mariano", "programacion");
document.write("<br>" + materias["programacion"] + "<br>");
inscribir("Iron", "programacion");
document.write("<br>" + materias["programacion"] + "<br>");
*/

//Problema practico 5

const materias = {
    fisica: [90,6,3,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

const asistencia = ()=>{
    for (materia in materias){

    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    console.log(materias[materia][3]);

    if(asistencias >= 90){
            console.log(`%c   Asistencias en Orden`, "color:green;");
        }else{
            console.log(`%c   Falta de Asistencias`, "color:red;");
        }

    if(promedio>=7){
            console.log("%c   Promedio en Orden", "color:green;");
        }else{
            console.log("%c   Promedio Desaprobado", "color:red;");
        }

    if(trabajos >=3){
        console.log("%c   Trabajos Practicos en Orden", "color:green;")
    }else{
        console.log("%c   Faltan Trabajos Practicos", "color:red;")
    }
    }
}

asistencia();


//      Problema practico 5.2

let trabajo = "240 minutos de trabajo";
let tp = "100 minutos de hacer trabajos practicos";
let estudio = "100 minutos de estudio";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");


for (let i = 0; i<14; i++){
    if(i==0){
        console.group("Semana 1")
    }
    console.groupCollapsed("Dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if(i==7){
        
        console.groupEnd();
        console.groupCollapsed("Semana 2");
        
    }
}

console.groupEnd();
console.groupEnd();


//-------------------------Metodos con documents-------------------------

const rangoEtario = document.querySelector(".rangoEtario");

document.write("<br><br>" + rangoEtario);

document.write("<br><br>" + rangoEtario.getAttribute("type"));

rangoEtario.setAttribute("type", "date");  //Para cambiar el atributo de un input, primero va el atributo que queremos cambiar, y despues el valor que tendra ese atributo

document.write("<br><br>" + rangoEtario.getAttribute("type"));  //Para obtener el atributo

rangoEtario.setAttribute();  //Para eliminar el atributo


const input = document.querySelector(".input-normal");

document.write("<br><br>" + input.className);
document.write("<br>" + input.value);
document.write("<br>" + input.type);

const titulo = document.querySelector(".titulo");
titulo.style.backgroundColor = "#32b";   //CAMBIAR LOS ESTILOS
titulo.classList.add("");
titulo.classList.remove("");
let valor = titulo.classList.item(0);
document.write("<br>" + valor);
titulo.classList.toggle("u_u");     //Si existe lo quita, si no existe lo crea u u
titulo.classList.replace("grande", "chico");


// let resultado = titulo.textContent;
// alert(resultado);
// resultado = titulo.innerHTML;
// alert("2 " + resultado);
// resultado = titulo.outerHTML;
// alert(resultado);

//-----------------CREACION DE ELEMENTOS

const contenedor1 = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for(i = 0; i < 20; i++){
    const item = document.createElement("LI");
    const textoDelItem = document.createTextNode("este es un item de la lista");
    item.appendChild(textoDelItem);
    fragmento.appendChild(item);
}

contenedor1.appendChild(fragmento);


const contenedor2 = document.querySelector(".contenedor");

const primerHijo = contenedor2.firstElementChild;
const ultimoHijo = contenedor2.lastElementChild;
const hijos = contenedor2.childNodes;

hijos.forEach(hijo => console.log(hijo));

const elementosHijos = contenedor2.children;
for(hijo of hijos){
    console.log(hijo)

}


const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P");
parrafo.innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2")
h2_nuevo.innerHTML = "Titulo";
let h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo, h2_antiguo);
//contenedor.removeChild(h2_antiguo);

let respuesta = contenedor.hasChildNodes();

if(respuesta){
    document.write("El elemento tiene hijos");
}else{
    document.write("El elemento NO tiene hijos");
}



/*---------------------------Ultimo Trabajo Practico---------------------------*/

const contenedorT = document.querySelector(".flex-container");

const button = document.querySelector(".send-button");
let valorAntiguo = button.value;
button.value=valorAntiguo.toUpperCase();

function crearLlave(nombre, modelo, precio){
    img = " <img class='llave-img' src='llave.png'> ";
    nombre=`<h2>${nombre}</h2>`;
    modelo=`<h3>${modelo}</h3>`;
    precio=`<p>Precio: $<b>${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const changeHidden = (modeloRandom)=>{
    document.querySelector(".key-data").value = modeloRandom;
}

let documentFragment = document.createDocumentFragment();

for(let i=1;i<=20;i++){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`, `Modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{changeHidden(modeloRandom)});
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML=llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedorT.appendChild(documentFragment);