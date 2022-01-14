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
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === criteria.artist & collection[i].yearPublished === criteria.year){
      result.push(collection[i]);
    }
  }
  if(criteria === undefined || Object.keys(criteria) === 0 ){
    return collection;
  }
  return result;
}

console.log('Search for an album by Ray Charles published in 1957', search(criteria));

criteria.artist = 'Nirvana';
criteria.year = 1991;

console.log('Search for an album by Nirvana published in 1991',search(criteria));

criteria.artist = "Coldplay";
criteria.year = 2021;

console.log('Search for an album by Coldplay published in 2021',search(criteria));

// let tracks = [];
// function addToTracks(name, duration){
//   let track = {};
//   track.name = name;
//   track.duration = duration;
//   tracks.push(track);
// }
//
// addToTracks('Smells Like Teen Spirit', '5:01');
// addToTracks('In Bloom', '4:15');
// addToTracks('Come As You Are', '3:38');
// console.log('Track information of the album is', tracks);
// console.log(`The title of the first track is ${tracks[0].name}`);


let collectionWithTracks = [];

function addToCollectionUpdated(title, artist, yearPublished, name, duration){
  const album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  let tracks = [];
  const track ={};
  track.name = name;
  track.duration = duration;
  tracks.push(track);
  album.tracks = tracks;
  collectionWithTracks.push(album);
  return album;
}

addToCollectionUpdated('Nevermind', 'Nirvana', 1991, 'Smells Like Teen Spirit', '5:01');
addToCollectionUpdated('Nevermind', 'Nirvana', 1991, 'In Bloom', '4:15');


console.log('The collection of albums with their track info:', collectionWithTracks);

// criteria.artist = 'Nirvana';
// criteria.year = 1991;
// criteria.trackName = 'Smells Like Teen Spririt';
//
// function searchUpdated(criteria){
//   let result = [];
//   for(let i = 0; i < collectionWithTracks.length; i++){
//     for(let j = 0; j < tracks.length; j++){
//       if(collectionWithTracks[i].artist === criteria.artist && collectionWithTracks[i].yearPublished === criteria.year && tracks[j].name === criteria.trackName){
//         result.push(collectionWithTracks)
//       }
//     }
//   }
//   if(criteria === undefined || Object.keys(criteria) === 0 ){
//     return collectionWithTracks;
//   }
//   return result;
// }
//
// console.log(searchUpdated(criteria));
