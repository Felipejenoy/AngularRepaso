export function WhatsMyType<T>(argument:T):T{
    return argument;
};

const IamString = WhatsMyType<string>("hola soy una cadena");
const IamNumber = WhatsMyType<number>(123);
const IamArrayNumber = WhatsMyType<number[]>([2,3,4,5]);

console.log(IamString.split(''));
console.log(IamNumber.toFixed());
console.log(IamArrayNumber.join('-'));

