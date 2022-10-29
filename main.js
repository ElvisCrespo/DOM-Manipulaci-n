console.log("ELvis");

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pa = document.querySelector('.pa');
const i = document.querySelector('#i');
const input = document.querySelector('input');
console.log(h1);
//console.log(input.value="1234");
console.log({
    h1, p, pa, i, input
});

h1.innerHTML = 'Título Elvis - Manipulación del DOM básica <br> SubTítulo Crespo';
h1.innerText = 'Título Elvis - Manipulación del DOM básica <br> SubTítulo Crespo';
console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));//Mostrar el valor de class en h1
h1.setAttribute('class', 'azul');//modificar el atributo class
h1.classList.add('blue');//para añadir un atributo a la class
h1.classList.add('green');//para añadir un atributo a la class
h1.classList.remove('blue');//para eliminar attributo en la class
h1.classList.toggle('azul');
h1.classList.toggle('azul');//Para add and remove
//h1.classList.contains('azul');

//input.value = "CSelvis";Añadir un value

//crear una etiqueta
//console.log(document.createElement('span'));
const img = document.createElement('img');
img.setAttribute('src', 'https://media.revistavanityfair.es/photos/60e84512e3e0ae04802ddc0d/master/w_1600%2Cc_limit/147986.jpg');
img.setAttribute('src', 'https://www.elfinanciero.com.mx/resizer/w6x_mNReFF2odTMdYZQFfw7mSGo=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/7QXVHUB7QNA2LPSLLGNG5NGW3E.jpg');
console.log(img);

i.append(img);//Las dos sirven para añadir
i.innerHTML = "";//Borrar una etiqueta
i.appendChild(img);//
//i.innerHTML = img;//Me elimina la img, investigar

//------------------------------------
//Escuchando eventos desde JS
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');

/*form.addEventListener('submit', sumarImputs //click, btnOnClick);//btnOnClick no va el parentesis como en el html

function sumarImputs(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = (Number)(input1.value) + (Number)(input2.value);
    resultado.innerText = "Resultado de la suma es: "+sumaInputs;
    console.log('Escuchando el evento onClick');
}*/
btn.addEventListener('click', sumarImputs);//btnOnClick no va el parentesis como en el html

function sumarImputs(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = (Number)(input1.value) + (Number)(input2.value);
    resultado.innerText = "Resultado de la suma es: "+sumaInputs;
    console.log('Escuchando el evento onClick');
}





