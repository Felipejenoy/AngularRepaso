function addNumbers(a:number, b:number){
 return a+b;
}

const result:number =addNumbers(12,2);

console.log({result});

interface Character{
    name :string,
    hp :number,
    showHp :()=>void;
}

const healCharacter = (character :Character, amount: number) =>{
    character.hp += amount;
}

export{};