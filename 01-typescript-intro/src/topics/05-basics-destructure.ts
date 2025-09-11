interface AudioPlayer {
    audioNumber: number, 
    songDuration: number, 
    song :string, 
    details:Details
};
interface Details{
    name: string,
    year: number;
}

const audioPlayer:AudioPlayer ={
    audioNumber: 23,
    songDuration: 3,
    song: "Mess",
    details:{name: 'felipe',
        year: 2023
    } 
}