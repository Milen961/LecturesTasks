function solve(input){
 class Song{
     constructor (type, name, time){
         this.type = type;
         this.name = name;
         this.time = time; 


     }

 }
 let songs = [];
 let numberOfSongs = input.shift();
 let typeSong = input.pop();

 for (let index = 0; index < numberOfSongs; index++) {
    
    let [type, name , time] = input[index].split('_');
    let song = new Song(type, name, time);
    songs.push(song)
 }
   if(typeSong === 'all'){
       songs.forEach((index) => console.log(index.name));
   }else {
       let filtered = songs.filter((index) => index.type === typeSong);
       filtered.forEach((index) => console.log(index.name));
   }

}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])