console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  const album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return album;
}

let album1 = addToCollection('Nevermind', 'Nirvana', 1991);
console.log('The first album is', album1);

let album2 = addToCollection('Renegades', 'RATM', 2000);
console.log('The second album is', album2);

let album3 = addToCollection('Absolution', 'Muse', 2003);
console.log('The third album is', album3);

let album4 = addToCollection('Bleach', 'Nirvana', 1989);
console.log('The fourth album is', album4);

let album5 = addToCollection('Parachutes', 'Coldplay', 2000);
console.log('The fifth album is', album5);

let album6 = addToCollection('Coming Up', 'Suede', 1996);
console.log('The sixth album is', album6);

console.log(collection);

function showCollection(array){
  console.log(array.length);
   for(let i = 0; i < array.length; i++){
    console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished);
  }
}

showCollection(collection);


function findByArtist(artist){
  let result = [];
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === artist){
      result.push(collection[i]);
    }
  }
  return result;
}

console.log('The albums by Nirvana are',findByArtist('Nirvana'));
console.log('The albnum by RATM is', findByArtist('RATM'));
console.log('The albums by Pearl Jam are', findByArtist('Pearl Jam'));

const criteria = {
  artist: 'Ray Charles',
  year: 1957
};


function search(criteria){
  let result = [];
  if(Object.keys(criteria).length === 0){
    return collection;
  }
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === criteria.artist & collection[i].yearPublished === criteria.year){
      result.push(collection[i]);
    }
  }
  return result;
}

console.log('Search for an album by Ray Charles published in 1957, (should return an empty array)', search(criteria));

criteria.artist = 'Nirvana';
criteria.year = 1991;

console.log('Search for an album by Nirvana published in 1991',search(criteria));

criteria.artist = "Coldplay";
criteria.year = 2021;

console.log('Search for an album by Coldplay published in 2021, (should return an empty array)',search(criteria));


delete criteria.artist;
delete criteria.year;


console.log('Search for an empty object, (should return all albums in the collection)', search(criteria));


let tracks1 = [];
function addToTracks1(name, duration){
  let track = {};
  track.name = name;
  track.duration = duration;
  tracks1.push(track);
}

addToTracks1('Smells Like Teen Spirit', '5:01');
addToTracks1('In Bloom', '4:15');
addToTracks1('Come As You Are', '3:38');
addToTracks1('Breed', '3:04');
addToTracks1('Lithium', '4:17');
addToTracks1('Polly', '2:57');
console.log('Track information of the first album is', tracks1);
console.log(`The title of the first track is ${tracks1[0].name}`);

let tracks2 = [];
function addToTracks2(name, duration){
  let track = {};
  track.name = name;
  track.duration = duration;
  tracks2.push(track);
}

addToTracks2('Microphone Fiend', '5:01');
addToTracks2('Pistol Grip Pump', '3:16');
addToTracks2('Kick Out the Jams', '3:10');
addToTracks2('Renegades of Funk', '4:34');
addToTracks2('Beautiful World', '2:34');
addToTracks2('I\'m Housing', '2:57');
console.log('Track information of the second album is', tracks2);
console.log(`The title of the first track is ${tracks2[0].name}`);

let tracks3 = [];
function addToTracks3(name, duration){
  let track = {};
  track.name = name;
  track.duration = duration;
  tracks3.push(track);
}

addToTracks3('Intro', '0:24');
addToTracks3('Apocalypse Please', '4:13');
addToTracks3('Time is Running Out', '3:56');
addToTracks3('Sing for Absolution', '4:55');
addToTracks3('Stockholm Syndrome', '4:58');
addToTracks3('Falling Away With You', '4:41');
console.log('Track information of the third album is', tracks3);
console.log(`The title of the first track is ${tracks3[0].name}`);

let tracks4 = [];
function addToTracks4(name, duration){
  let track = {};
  track.name = name;
  track.duration = duration;
  tracks4.push(track);
}

addToTracks4('Blew', '2:54');
addToTracks4('Floyd the Barber', '2:18');
addToTracks4('About a Girl', '2:48');
addToTracks4('School', '2:42');
addToTracks4('Love Buzz', '3:35');
addToTracks4('Paper Cuts', '4:06');
console.log('Track information of the fourth album is', tracks4);
console.log(`The title of the first track is ${tracks4[0].name}`);

let tracks5 = [];
function addToTracks5(name, duration){
  let track = {};
  track.name = name;
  track.duration = duration;
  tracks5.push(track);
}

addToTracks5('Don\'t Panic', '2:17');
addToTracks5('Shiver', '4:59');
addToTracks5('Spies', '5:18');
addToTracks5('Sparks', '3:47');
addToTracks5('Yellow', '4:29');
addToTracks5('Trouble', '4:30');
console.log('Track information of the fifth album is', tracks5);
console.log(`The title of the first track is ${tracks5[0].name}`);

let tracks6 = [];
function addToTracks6(name, duration){
  let track = {};
  track.name = name;
  track.duration = duration;
  tracks6.push(track);
}

addToTracks6('Trash', '4:05');
addToTracks6('Filmstar', '3:25');
addToTracks6('Lazy', '3:17');
addToTracks6('By the Sea', '4:17');
addToTracks6('She', '3:38');
addToTracks6('Beautiful Ones', '3:50');
console.log('Track information of the sixth album is', tracks6);
console.log(`The title of the first track is ${tracks6[0].name}`);



let collectionWithTracks = [];

function addToCollectionUpdated(title, artist, yearPublished, tracks){
  const album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  album.tracks = tracks;
  collectionWithTracks.push(album);
  return album;
}

let album1WithTracks = addToCollectionUpdated('Nevermind', 'Nirvana', 1991, tracks1);
let album2WithTracks = addToCollectionUpdated('Renegades', 'RATM', 2000, tracks2);
let album3WithTracks = addToCollectionUpdated('Absolution', 'Muse', 2003, tracks3);
let album4WithTracks = addToCollectionUpdated('Bleach', 'Nirvana', 1989, tracks4);
let album5WithTracks = addToCollectionUpdated('Parachutes', 'Coldplay', 2000, tracks5);
let album6WithTracks = addToCollectionUpdated('Coming Up', 'Suede', 1996, tracks6);

console.log('The first album is', album1WithTracks);
console.log('The second album is', album2WithTracks);
console.log('The third album is', album3WithTracks);
console.log('The fourth album is', album4WithTracks);
console.log('The fifth album is', album5WithTracks);
console.log('The sixth album is', album6WithTracks);

console.log('The collection of albums with their track info:', collectionWithTracks);

console.log(collectionWithTracks[2]);
console.log(collectionWithTracks[2].tracks);
console.log(collectionWithTracks[2].tracks[1]);

console.log(collectionWithTracks[2].tracks.length);

console.log(collectionWithTracks[4].tracks[2].name);


function showCollectionUpdated(array){
  console.log(array.length);
  for(let i = 0; i < array.length; i++){
    console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished + ': ');
      for(let j = 0; j < array[i].tracks.length; j++){
        let name = array[i].tracks[j].name;
        let duration = array[i].tracks[j].duration;
        console.log(name + ': ' + duration);
      }
    } 
}

showCollectionUpdated(collectionWithTracks);

// criteria.artist = 'Nirvana';
// criteria.year = 1991;
// criteria.trackName = 'Smells Like Teen Spririt';
//
// function searchUpdated(criteria){
//   let result = [];
//   if(Object.keys(criteria).length === 0){
//     return collectionWithTracks;
//   }
//   for(let i = 0; i < collectionWithTracks.length; i++){
//     for(let j = 0; j < collectionWithTracks[i].tracks.length; j++){
//       if(collectionWithTracks[i].tracks[j].name === criteria.trackName){
//         result.push(collectionWithTracks[i]);
//       }
    //   if(collectionWithTracks[i].artist === criteria.artist & collectionWithTracks[i].yearPublished === criteria.year && collectionWithTracks[i].tracks[j].name === criteria.trackName){
    //   result.push(collectionWithTracks[i]);
    // }
  // return result;
//   }
// }
// }

//console.log(searchUpdated(criteria));
