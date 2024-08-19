console.log('???');

// Template String 
// Concatenar string, variables dentro de strings....
const nombre = 'Gabriel'
const apellido = 'Ramos'
const fullName = `${nombre} ${apellido}`;

console.log(fullName);

function getSaludo(nombre) {
    return `Hola ${nombre}!`;
}

console.log(`Este es un texto: ${getSaludo('Gabriel')}`);
