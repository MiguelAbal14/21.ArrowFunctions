const sumar= (a,b)=> a+b; //2 parametros
const recibido = a => console.log(`Se recibio ${a}`); // 1 parametro se eliminan parentesis

console.log(sumar(4,5));
recibido('Melina');

const array = [1,2,3,4,5];

array.forEach((elemento,index) => console.log(`${elemento} está en la posición ${index}`));