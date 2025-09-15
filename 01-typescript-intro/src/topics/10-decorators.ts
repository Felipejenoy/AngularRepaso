function classDecorator(
    constructor:any
){
    return class extends constructor{
        
    }
}

@classDecorator
export class SuperClass{
    public Propiety:string="hola";
    print(){
        console.log("hola mundo")
    };
};
console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);