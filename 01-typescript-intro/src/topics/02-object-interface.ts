 let skills: string[] = ['bash','counter', 'healing'];
  
 interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown? :string
 }

 const stridder: Character ={
     name: 'Strider',
     hp: 100,
     skills: ['bash', 'counter'],
     
 };

 stridder.hometown= 'rivendell'

console.table(stridder);


export{};