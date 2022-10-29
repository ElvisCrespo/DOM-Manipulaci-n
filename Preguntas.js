let nombre = 'Elvis';
let apellido = 'Crespo';
let username = 'csElvis';
let edad = '22';
let mail = 'csCrespo@gmail.com';
let esMayorDeEdad = 'true';
let dineroAhorrado = 1000;
let deudas = 100;

/*--let nombreCompleto = nombre +' '+ apellido;
console.log(nombreCompleto);--*/
console.log(`Mi nombre es ${nombre} ${apellido}`);
console.log(`Debe sesr una resta ${dineroAhorrado-deudas}`);

function nombreCompleto(name, lastName) {
    return name + ' ' + lastName;
}
console.log(nombreCompleto('alexander', 'crespo'));
console.log(nombreCompleto('crespo', 'elvis'));

function hello(name1, lastName1, nickName) {
    return console.log(`Hola soy ${name1} ${lastName1}, pero prefiero que me digas ${nickName}`)
}
console.log(hello('elvis', 'crespo', 'csElvis'));
console.log(hello('Crespo', 'Elvis', 'csAlex'));

//Condicionales if else else if
const tipoDeSuscripcion = "ExpertDuo";
if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");    
}else if(tipoDeSuscripcion == 'Basic'){
    console.log("Solo puedes tomar casi todos los cursos de platzi durante un mes");    
}else if(tipoDeSuscripcion == 'Expert'){
    console.log("Solo puedes tomar casi todos los cursos de platzi durante un año");    
}else if(tipoDeSuscripcion == 'ExpertDuo'){
    console.log("Usted y su amigo pueden tomar todos los cursos de platzi durante un año");    
}    

//Ciclos
for(let i=1 ; i<=5 ; i++){
    console.log("Valor de i: "+i);
}
console.log("\n");
let i=0;
while (i<=4) {
    console.log("Valor de i: "+i);   
    i++; 
}
console.log("\n");
for(let i=10 ; i>=3 ; i--){
    console.log("Valor de i: "+i);   
}
console.log("\n");
let g=20;
while(g>=2){
    console.log("Valor de i: "+g);     
    g-=2;
}

//Ejercicio en un ciclo calcular una operacion
//En while para que se cumpla la condicion debe ser diferente al valor deseado
/*let respuesta;

while(respuesta !='4'){
    let pregunta = prompt('2+2=');
    respuesta = pregunta;
}*/

//Crear una función que pueda recibir cualquier array como párametro e imprima su primer elemento
console.log("");
function printArray(arr) {
    console.log(arr[0]);
}
printArray(['Elvis', 'Alex', 'Crespo', 'Suarez']);

//Crea una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos uno por uno
//(No se vale imprimir el array completo)
console.log("");
for(let i=0 ; i<=4 ; i++){
    function printArray1(arr1) {
        console.log(arr1[i]);
    }
    printArray1(['cs' ,'Elvis', 'Alex', 'Crespo', 'Suarez']);
}
console.log("");
function printArray2(arr2) {
    for(let i=0 ; i<arr2.length ; i++){
        console.log(arr2[i]);
    }
}
printArray2(['CX', 'CV', 'CB', 'CS']);


//Crea una funcion que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno

const obj = {
    nombre: 'elvis',
    edad:3,
    comidaFavoritas: ['Pollo frito', 'Vegetales']
}
console.log("");
function printArraobj(obj) {
    let convertArray = Object.values(obj);
    for(let i=0 ; i<convertArray.length ; i++){
        console.log(convertArray[i]);
    }
}
console.log(printArraobj(obj));
//Object.values(obj);




let alumnosConCalificaciones = {
	"Luis": 100,
	"Pedro": 90,
	"María José": 100,
	"John Galt": 99
};

// Object.entries convierte tanto clave y valor. Cada
// par es convertido a un arreglo. Al final tenemos un array de arrays
let arregloDeClavesYValores = Object.entries(alumnosConCalificaciones);
console.log("Claves y valores: ", arregloDeClavesYValores);

console.log("");


function conseguirTipoSuscripcion(suscripcion) {  
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");    
        return;
    }if(suscripcion == 'Basic'){
        console.log("Solo puedes tomar casi todos los cursos de platzi durante un mes");    
        return;
    }if(suscripcion == 'Expert'){
        console.log("Solo puedes tomar casi todos los cursos de platzi durante un año");    
        return;
    } if(suscripcion == 'ExpertDuo'){
        console.log("Usted y su amigo pueden tomar todos los cursos de platzi durante un año");    
        return;
    }   
    console.warn('Ese tipo de suscripción no existe');
}
console.log(conseguirTipoSuscripcion('Basic'));


console.log("");

const tiposDeSuscripciones = {
    free:"Solo puedes tomar los cursos gratis",
    basic:"Solo puedes tomar los cursos gratis",
    expert:"Solo puedes tomar casi todos los cursos de platzi durante un año",
    expertduo:"Usted y su amigo pueden tomar todos los cursos de platzi durante un año"
}
/*console.log(tiposDeSuscripciones.free);
console.log(tiposDeSuscripciones['expertduo']);

const ejemploSuscripcion = 'expert'
console.log(tiposDeSuscripciones[ejemploSuscripcion]);*/

console.log("");

function conse(suscripcion) {
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Ese tipo no existe');
}

console.log(conse('expertduo'));





