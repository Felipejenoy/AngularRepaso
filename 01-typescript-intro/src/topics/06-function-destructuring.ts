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
    options.products.forEach(({price}) =>{
        total +=price;
    })
    return [total, total * options.tax]
}


const shopinCart = [phone, tablet];
const tax =0.15;


const [total, taxTotal] = taxCalculation({
    products :shopinCart,
    tax:tax
});

console.log('total',total);
console.log('tax', taxTotal);
console.log()
export{};  