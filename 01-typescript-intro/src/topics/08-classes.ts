export class Person{
    constructor(
         public firstName:string,
         public lastName:string,
         public address:string)
         { }
}
// const ironMan =new Person("Felipe","ordoñez","Colombia");
// console.log(ironMan);

// //Forma corta
// export class Animal{
//     constructor(public tipo:string,
//          public nombre:string
//         ){}
// };
// const mascota = new Animal("Perro","Mailo");
// console.log(mascota);

// export class superHero extends Persona{
//     constructor(
//         public alterHego:string,
//         public age:number,
//         public realName:string,
//     ){
//         super(realName, "colombia ");
//     }
// }
// const heroe = new superHero("Mr increible", 23,"bob");
// console.log(heroe);


export class hero{
    constructor(
        public alterHego:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
        
    }
}
const bob = new Person("bob","sjd","Colombia");
const mrIncreible = new hero("mr. Increible",23,"bob",bob);

console.log(mrIncreible);