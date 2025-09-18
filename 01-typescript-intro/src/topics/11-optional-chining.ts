

export interface Passenger {
    name:string;
    children?:string[];
}

const passenger1:Passenger={
    name: 'Felipe',
}
const passenger2:Passenger={
    name: 'Ana',
    children :['feleipe','stiven']
}

const printChildren=(passsenger: Passenger)=>{
 const howManyChildren = passsenger.children?.length;
 console.log(passsenger.name, howManyChildren);
}
printChildren(passenger2);