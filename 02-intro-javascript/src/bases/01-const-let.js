// console.log('Hola mundo');

// const -> Variables que no van a cambiar | no se van a renombrar
const nombre = 'Gabriel';
const apellido = 'Ramos';

let valorDado = 5; //let -> En caso de que el valor pueda cambiar
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Var -> No se debe usar -> conlleva problemas colaterales.

// variables en scope
if (true) {
    const nombre = 'Francisco';

    console.log(nombre);
}
console.log(valorDado);