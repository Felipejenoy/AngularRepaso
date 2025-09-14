import type { Product } from './06-function-destructuring';
import {taxCalculation} from './06-function-destructuring';

const shoppingCart :Product[]=[
    {
        description :'nokia',
        price: 23
    },
    {
        description : 'ipad',
        price:222
    }
];

const [total, taxTotal]=taxCalculation({
    products:shoppingCart,
    tax: 0.2
});

console.log('total',total);
console.log('Tax total',taxTotal);