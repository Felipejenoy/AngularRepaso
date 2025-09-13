interface Product{
    description : string;
    price: number;
}

const phone: Product={
    description :'Nokia',
    price:123
}
const tablet: Product={
    description :'Nokia',
    price:456
}

interface TaxCalculationOptions{
    tax :number,
    products: Product[];
}
function taxCalculation(options:TaxCalculationOptions):number[]{
    let total =0;
    options.products.forEach(product =>{
        total += product.price;
    })
    return [total, total * options.tax]
}


const shopinCart = [phone, tablet];
const tax =0.15;


const result = taxCalculation({
    products :shopinCart,
    tax:tax
});

console.log('total', result[0]);
console.log('tax', result[1]);
console.log()
export{};  