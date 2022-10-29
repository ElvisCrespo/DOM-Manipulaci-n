Traduce a código javascript las variables
-
let nombre = 'Elvis';
let apellido = 'Crespo';
let username = 'csElvis';
let edad = '22';
let mail = 'csCrespo@gmail.com';
let esMayorDeEdad = 'true';
let dineroAhorrado = 1000;
let deudas = 100;

## Function
Las funciones nos permiten encapsular(guardar) bloques de código para
reutilizarlos y ejecutarlos en el futuro 

¿Cuánfo me sirve usar una función en mi código?
Nos sirve cuando tenemos variables de codigo muy parecidos para reutilizar codigo

¿Cuál es la diferencia entre parámetro y argumentos de una función?
Parametro = name, lastName en una funcion ___ Argumentos = Elvis, Crespo

# Condicionales
¿Qué es un condicional?
Son la forma en que ejecutamos un bloque de código u otro dependiente de alguna
condición o validación

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if{else y else if}, switch

¿Puedo combinar funciones y condicionales?
Si, las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales

# Ciclos
¿Qué es un ciclo?
LA forma de ejecutar un bloque de código hasta que se cumpla cierto condicon

¿Qué tipos de ciclos existen en JavaScript?
While, do while y for

¿Qué es un ciclo infinito y por qué es un problema?
Es cuando la validacion de nuestros condicionales nunca se cumple y termina dañanado la 
aplicacion

¿Puedo mezclar ciclos y condicionales?
Sí, aunque los ciclos son condicionales, nada nos permite agg más condicionales

!!IMPORTANTE
Puedes usar prompt em javaScript


let respuesta;

while(respuesta !='4'){
    let pregunta = prompt('2+2=');
    respuesta = pregunta;
}

# Array
¿Qué es un array?
Es una lista de elementos

```
    Const array = [1, "hola", true, {
    nombre: 'elvis',
    edad:3;
    comidaFavoritas: ['Pollo frito', 'Vegetales']
}]
```

¿Qué es un objeto?PERO cada elemento tiene un nombre clave
Es una lista de elementos 

```
const obj = {
    nombre: 'elvis',
    edad:3;
    comidaFavoritas: ['Pollo frito', 'Vegetales']
}
```

¿Cuándo es mejor usar objetos o arrays?
Arrays cuando lo que haremos en un elemento es lo mismo que todos los demás.
(la regla se puede incumplir). Mientras que un objeto cuando los nombre
de cada elemento son importantes para nuestro algoritmo

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si, los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre
sus propiedades
