interface AudioPlayer {
    audioNumber: number, 
    songDuration: number, 
    song :string, 
    details:Details
};
interface Details{
    author: string,
    year: number;
}

const audioPlayer:AudioPlayer ={
    audioNumber: 23,
    songDuration: 3,
    song: "Mess",
    details:{
        author: 'Ed sheeran',
        year: 2023
    } 
}

// const {song, songDuration, audioNumber, detailsA, detailsY}= audioPlayer;

// const {author} =detailsA;
// const {year}= detailsY;

// console.log('song', song);
// console.log('Duration',songDuration);
// console.log('Number', audioNumber);
// console.log('Author',author );
// console.log('Year',year )

const [,,Guerrero3]:string[]= ['goku', 'Vegetta', 'Gohan']
console.log('el guerrero es: ',Guerrero3);
{}